"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { Mail, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

// 🔧 Replace these with your EmailJS credentials
const EMAILJS_SERVICE_ID = "service_9hs1die"
const EMAILJS_TEMPLATE_ID = "template_vjsmz2h"
const EMAILJS_PUBLIC_KEY = "up7Peaw4yhzp7_HRq"

const socialLinks = [
  { icon: Github, href: "https://github.com/aryansaraogi", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-saraogi83", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Aryan",
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error: any) {
  console.error("EmailJS status:", error?.status)
  console.error("EmailJS text:", error?.text)
  console.error("EmailJS full:", JSON.stringify(error))
  setStatus("error")
  setTimeout(() => setStatus("idle"), 5000)
}
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-0 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
          Contact
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              {"Let's work together"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {"I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open."}
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:aryansaraogi02@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>aryansaraogi02@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </Field>
            </FieldGroup>

            {status === "success" && (
              <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 dark:bg-green-950/30 dark:text-green-400 px-4 py-3 rounded-lg">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>{"Message sent! I'll get back to you soon."}</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 dark:bg-red-950/30 dark:text-red-400 px-4 py-3 rounded-lg">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{"Something went wrong. Please try again or email me directly."}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}