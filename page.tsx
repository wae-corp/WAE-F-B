"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (!result.success) throw new Error(result.error || "Submission failed")

      setSuccess("Form submitted successfully!")
      setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tea%20Brewing%20Launching%20Creative%202.2-2l7QELjrT6Vi8j7tLg2gKFAaZsvx6C.png"
        alt="Coffee shop interior"
        fill
        className="object-cover fixed"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-transparent fixed" />

      {/* Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col">
          <nav className="p-6">
            <div className="text-white">
              <Image
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/34843184-1524-47cf-c856-423bf2b69700/public"
                alt="Company Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
          </nav>

          <div className="flex-grow flex items-end pb-8">
            <div className="w-full text-center space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-[#f5e6d3]">STILL BREWING</h1>
              <h2 className="text-4xl md:text-6xl font-bold tracking-wider text-[#f5e6d3]">SERVING SOON...</h2>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-transparent py-20">
          <div className="max-w-xl mx-auto w-full px-6">
            <h3 className="text-[#f5e6d3] text-3xl font-semibold text-center mb-8">Stay Tuned</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-gray-300 text-sm">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-gray-300 text-sm">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300 text-sm">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="marketing@waecop.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-gray-300 text-sm">
                  Company Name
                </label>
                <Input
                  id="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 text-sm">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full bg-[#517963] hover:bg-[#446856] text-white">
                {loading ? "Submitting..." : "Submit"}
              </Button>

              {error && <p className="text-red-500 text-center">{error}</p>}
              {success && <p className="text-green-500 text-center">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
