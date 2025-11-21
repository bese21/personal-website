"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a UI-only form. In a real app, you would connect this to a backend or service
    console.log("Form submitted:", formData)
    alert("Thank you for your message! (This is a demo form)")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6 md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any channel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <a
                      href="mailto:besufikadzenebe478@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      besufikadzenebe478@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Phone</div>
                    <a
                      href="tel:+251945213881"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +251 94 521 3881
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Location</div>
                    <div className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24-48 hours during business days. For urgent matters, please mention it in
                  your message.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  Send Message <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Prefer a Quick Chat?</h2>
          <p className="mb-4 text-muted-foreground">Schedule a 30-minute call to discuss your project</p>
          <Button variant="outline" size="lg">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  )
}
