"use client";
import React, { useState, useEffect } from "react";
import { Calendar, Flag, Bell, MoreHorizontal, Inbox, Tag } from "lucide-react";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const labels = ["important", "today", "tomorrow", "urgent"];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          text: noteText,
          description: noteDescription,
          label: selectedLabel,
        },
      ]);
      setNoteText("");
      setNoteDescription("");
      setSelectedLabel("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getLabelColor = (label) => {
    switch (label) {
      case "important":
        return "bg-yellow-100 text-yellow-800";
      case "today":
        return "bg-green-100 text-green-800";
      case "tomorrow":
        return "bg-blue-100 text-blue-800";
      case "urgent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!isMounted) return null;

  return (
    <div className="w-full bg-gray-100  ">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-4">
            <input
              type="text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="w-full p-3 text-lg font-semibold border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-white"
              placeholder="Title"
            />
            <input
              type="text"
              value={noteDescription}
              onChange={(e) => setNoteDescription(e.target.value)}
              className="w-full p-3 text-sm text-gray-500 focus:outline-none bg-white"
              placeholder="Description"
            />
          </div>
          <div className="flex space-x-2 mb-4">
            {labels.map((label) => (
              <button
                key={label}
                onClick={() => setSelectedLabel(label)}
                className={`flex items-center px-3 py-2 rounded-full text-sm font-medium ${
                  selectedLabel === label
                    ? getLabelColor(label)
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <Tag size={16} className="mr-1" />
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-gray-600">
              <Inbox size={20} className="mr-2" />
              <span>Inbox</span>
            </div>
            <div>
              <button
                onClick={addNote}
                className="px-4 py-2 bg-red-400 text-white rounded-md mr-2 hover:bg-red-500 transition duration-200"
              >
                Add task
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {notes.map((note) => (
            <li
              key={note.id}
              className="flex flex-col p-4 hover:bg-gray-50 transition duration-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{note.text}</span>
                <div className="flex items-center overflow-y-auto h-[50px]">
                  {note.label && (
                    <span
                      className={`mr-2 px-2 py-1 rounded-full text-xs font-medium ${getLabelColor(
                        note.label
                      )}`}
                    >
                      {note.label}
                    </span>
                  )}
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="text-red-500 hover:text-red-700 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
              {note.description && (
                <p className="text-sm text-gray-600">{note.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesApp;
