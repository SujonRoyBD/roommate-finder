"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { FaGoogle } from "react-icons/fa";
import Link from "next/link"
export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login clicked")
  }

  return (
    <div className="flex items-center justify-center p-4 pb-2" style={{ backgroundColor: "[#FED16A]" }}>
      <div className="w-full max-w-md space-y-6 bg-[#FFD6BA]  px-5 py-4 rounded-xl">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-slate-800">Login to Your Account</h1>
          
        </div>

        {/* Google Login Button */}
        

        {/* OR Divider */}
        <div className="relative">
         
          
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-800 font-medium">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-8 bg-white border-slate-300 placeholder:text-slate-400 focus:border-slate-500 focus:ring-slate-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-800 font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-8 bg-white border-slate-300 placeholder:text-slate-400 focus:border-slate-500 focus:ring-slate-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-medium text-base mt-6"
          >
            Login
          </Button>
          <p className="text-slate-600 flex justify-between">
            {"Don't have Account? "}
            <Link href="/singup"><button className="text-slate-800 hover:underline font-medium">SignUp Here</button></Link>
          </p>

          <div className="relative flex justify-center text-sm gap-2">
           <hr className="border w-[200px] border-black mt-2"/> <span>OR</span> <hr className="border w-[200px]  border-black mt-2"/>
          </div>

          <Button
          onClick={handleGoogleLogin}
          
          className="w-full flex  bg-orange-600 h-12 border-2 text-white font-medium"
        >   
        <FaGoogle className="text-white"/>
          Login with Google
        </Button>
        </form>
      </div>
    </div>
  )
}
