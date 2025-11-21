"use server"

import { Resend } from "resend"
import { headers } from "next/headers"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !subject || !message) {
    return { success: false, message: "Please fill in all fields." }
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "besufikadzenebe478@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (data.error) {
      return { success: false, message: "Failed to send email. Please try again." }
    }

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

export async function trackVisit() {
  try {
    const headersList = await headers()
    const userAgent = headersList.get("user-agent") || "Unknown"
    const ip = headersList.get("x-forwarded-for") || "Unknown"
    const referer = headersList.get("referer") || "Direct"

    const city = headersList.get("x-vercel-ip-city") || "Unknown City"
    const country = headersList.get("x-vercel-ip-country") || "Unknown Country"
    const region = headersList.get("x-vercel-ip-country-region") || "Unknown Region"

    await resend.emails.send({
      from: "Portfolio Tracker <onboarding@resend.dev>",
      to: "besufikadzenebe478@gmail.com",
      subject: `New Visitor from ${city}, ${country}!`,
      text: `Someone just visited your portfolio!\n\nTime: ${new Date().toLocaleString()}\nLocation: ${city}, ${region}, ${country}\nIP: ${ip}\nUser Agent: ${userAgent}\nReferer: ${referer}`,
      html: `
        <h1>New Portfolio Visitor!</h1>
        <p>Someone just visited your portfolio.</p>
        <ul>
          <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
          <li><strong>Location:</strong> ${city}, ${region}, ${country}</li>
          <li><strong>IP:</strong> ${ip}</li>
          <li><strong>User Agent:</strong> ${userAgent}</li>
          <li><strong>Referer:</strong> ${referer}</li>
        </ul>
        <p><em>Note: Visitor email addresses cannot be accessed automatically due to browser privacy security.</em></p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to track visit:", error)
    return { success: false }
  }
}
