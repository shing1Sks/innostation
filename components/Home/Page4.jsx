import React from 'react'
import Image from 'next/image'

const Page4 = () => {
  return (
    <div className='min-h-screen bg-backgroundWhite w-full'>
        <div className="text-2xl pl-10 pt-20 mb-6">Research.</div>
        <div className=" flex ml-10 mr-10 mb-10 bg-containerBlue h-[550px] rounded-2xl gap-96">
            <div className="p-7">
            <div className="bg-backgroundWhite ml-2 mb-[100px] rounded-xl h-12 w-80 text-center p-2 font-bold text-lg">Publish</div>
            <div className="bg-backgroundWhite ml-2 mb-[100px] rounded-xl h-12 w-80 text-center p-2 font-bold text-lg">Citations</div>
            <div className="bg-backgroundWhite ml-2 mb-[100px] rounded-xl h-12 w-80 text-center p-2 font-bold text-lg">collaboration</div>
            <div className="bg-backgroundWhite ml-2 mb-[100px] rounded-xl h-12 w-80 text-center p-2 font-bold text-lg">Grand Finder</div>
            </div>
            <div className='flex justify-center items-center pr-20'>
                <Image 
                className='flex '
                src="/image6.png"
                width={300}
                height={100}
                alt='img'
                />
            </div>
        </div>
    </div>
  )
}

export default Page4