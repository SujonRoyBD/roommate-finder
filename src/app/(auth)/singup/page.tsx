"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import toast from "react-hot-toast"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [photoFile, setPhotoFile] = useState<File | null>(null)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhotoFile(file)
      setImagePreview(URL.createObjectURL(file)) // ✅ লোকাল preview দেখানোর জন্য
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { username, email, password } = formData
    if (!username || !email || !password || !photoFile) {
      toast.error("❌ Please fill in all fields and select a photo!")
      return
    }

    // ✅ শুধু ফ্রন্টএন্ড preview - backend থাকলে FormData পাঠাতে হয়
    toast.success("✅ Successfully Signed Up!")
    console.log("Form Data:", formData)
    console.log("Uploaded Image File:", photoFile)
  }

  return (
    <div className="flex items-center justify-center p-4" style={{ backgroundColor: "[#FED16A]" }}>
      <div className="w-full max-w-md space-y-6 bg-[#FFD6BA] px-5 py-4 rounded-xl">
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
            <Label htmlFor="username">User Name</Label>
            <Input className=" border-2"
              id="username"
              name="username"
              type="text"
              placeholder="User Name"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input className=" border-2"
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input className=" border-2"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
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

          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="photo">Upload Photo</Label>
            <Input className=" border-2"
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-full mt-2 border mx-auto"
              />
            )}
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full h-12 text-white font-medium mt-4" style={{ backgroundColor: "#D2691E" }}>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}
