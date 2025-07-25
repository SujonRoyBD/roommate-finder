"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    photoURL: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#E8C4A0" }}>
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">SignUp Your Account</h1>
          <p className="text-gray-600">
            Have Account? <Link href="/login"><button className="text-gray-800 font-medium hover:underline">LogIn Here</button></Link>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Name */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-800 font-medium">
              User Name
            </Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="User Name"
              value={formData.username}
              onChange={handleInputChange}
              className="h-12 bg-white/80 border-0 rounded-lg placeholder:text-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-800 font-medium">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              className="h-12 bg-white/80 border-0 rounded-lg placeholder:text-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="space-y-2">
            <Label htmlFor="photoURL" className="text-gray-800 font-medium">
              photoURL
            </Label>
            <Input
              id="photoURL"
              name="photoURL"
              type="url"
              placeholder="photoURL"
              value={formData.photoURL}
              onChange={handleInputChange}
              className="h-12 bg-white/80 border-0 rounded-lg placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-800 font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="h-12 bg-white/80 border-0 rounded-lg placeholder:text-gray-400 text-gray-700 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-white font-medium rounded-lg mt-6"
            style={{ backgroundColor: "#D2691E" }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}
