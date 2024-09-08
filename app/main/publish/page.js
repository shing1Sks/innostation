"use client";
import React, { useState } from "react";
import Nav from "@/components/Main/Nav";
import { GoogleGenerativeAI } from "@google/generative-ai";

function formatResponse(aiText) {
  return aiText
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") // Bold for emphasis
    .replace(/\*\s/g, "") // Remove bullet point asterisks
    .replace(/\n\n/g, "<br><br>") // Add line breaks for paragraphs
    .replace(/\n/g, "<br>"); // Line break for new lines
}

function Chatbot() {
  const [mymsg, setMymsg] = useState(""); // Input message state
  const [res, setRes] = useState([]); // Store both user and AI messages

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSendMessage = async () => {
    if (!mymsg.trim()) return; // Prevent empty messages

    setRes((prev) => [...prev, { message: mymsg, sender: "user" }]);

    try {
      const result = await model.generateContent(mymsg);
      const aiMessage = await result.response.text(); // Extract the AI response
      const formattedResponse = formatResponse(aiMessage);

      setRes((prev) => [...prev, { message: formattedResponse, sender: "ai" }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }

    setMymsg("");
  };

  return (
    <div className="min-h-screen w-full p-3">
      <Nav />
      <div className="w-full pt-3 flex flex-row justify-between gap-3">
        <div className="w-[30%] border-2 border-black min-h-[80vh]">Note</div>
        <div className="w-full border-2 border-black min-h-[80vh] relative">
          <div className="p-2">Messages</div>
          <div className="overflow-y-auto h-[70vh] p-3">
            {res.map((message, index) => (
              <div
                key={index}
                className={`p-2 m-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-200 text-right"
                    : "bg-gray-200 text-left"
                }`}
                dangerouslySetInnerHTML={{ __html: message.message }}
              />
            ))}
          </div>
          <div className="flex items-center justify-center w-full absolute bottom-2 gap-3">
            <input
              className="w-[90%] rounded-lg bg-white border-2 border-black px-1"
              placeholder="Write out your plan!"
              value={mymsg}
              onChange={(e) => setMymsg(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="border-2 border-black rounded-lg px-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
