import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className="flex">
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <div className="text-black">
        <h1 className="text-4xl font-semibold flex justify-center ">Welcome back!</h1>
        <p className="flex justify-center pt-3 text-sm">Don't have an account yet? <Link className="text-blue-600 hover:underline " href="/auth/signup"> Sign up now </Link></p>
        {/* Email */}
        <div className="pt-8">
        <div className="relative">
         <input 
           type="text"
           name="Email address" 
           id="Email" 
           placeholder=" " 
           className="border w-128 h-16 rounded-xl peer pt-2 pl-3hover:bg-violet-600 active:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500  pl-3"
         />
         <label 
          htmlFor="Email" 
           className="absolute left-3 top-4 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
         >
           Email address
         </label>
       </div>
      </div>
      {/* Password */}
      <div className="pt-4">
        <div className="relative">
         <input 
           type="text"
           name="Password " 
           id="Password" 
           placeholder=" " 
           className="border w-128 h-16 rounded-xl peer pt-2 pl-3hover:bg-violet-600 active:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3 "
         />
         <label 
          htmlFor="Password" 
           className="absolute left-3 top-4 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
         >
           Password 
         </label>
       </div>
      </div>
      <div className="pt-4 pl-5 flex justify-between">
        <div>
        <input 
        type="checkbox"
        name="Remember me" 
        id="Remember me" 
        className=" border rounded-2xl w-4 h-4"
        />
        <label htmlFor="Remember me" className="text-gray-600 text-sm" >  Remember me</label>
        </div>
        <Link href="/auth/login" className="text-blue-600 text-sm hover:underline">Forgot password?</Link>
      </div>
      <div className=" pt-8 flex justify-center">
        <button className="bg-buttonBlue hover:bg-blue-700 text-white w-32 h-12 rounded-full">Log in</button>
      </div>
      <div className="pt-4 flex justify-center" >
      <Separator className="my-3 mr-8 w-16" />  or  <Separator className="my-3 ml-8 w-16" />
      </div>
      <div className="pt-5 text-sm text-blue-600 hover:underline flex justify-center">
        <Link href="/auth/login">Log in with SSO</Link>
      </div>
    </div>
    </div>
{/*--------------------------------Image_Section---------------------------------------*/}
    <div className=" bg-paleGreen w-2/5  ">
    <div className=" pt-10 pl-12 ">
      <Image
      src="/loginPanel.jpg"
      alt="Login Image"
      width={300}
      height={300}
      />
    </div>
    <div className="  pt-10">
      <h1 className="  text-black text-2xl font-semibold flex justify-center">Simple, global payroll</h1>
      <div className="text-gray-700 text-sm text-center pt-6">
      <p>Consolidate your global payroll with Remote.</p>
      <p>Automate calculations, ensure compliance,</p>
      <p>streamline filing so you can enjoy effortless</p>
      <p>payroll management.</p>
      </div>
      <div className="flex justify-center pt-4 text-black">
        <Button className=" border border-green-700 rounded-full hover:bg-slate-100">Talk to us<ArrowUpRight /></Button>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default page