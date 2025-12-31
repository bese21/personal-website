"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const QA_PAIRS: Record<string, string> = {
  "What are your main skills?":
    "My main skills include Full Stack Development (React, Next.js, Node.js), AI Integration, TypeScript, Python, and Machine Learning.",
  "What is your strongest programming language?":
    "TypeScript and JavaScript are my strongest, as I use them daily for full-stack development, but I'm also very proficient in Python for AI and data tasks.",
  "Tell me about your experience at Abyssinia Bank.":
    "I currently serve as an AI Trainer at Abyssinia Bank's AI Excellence Center, where I focus on AI-driven solutions and integrating modern technology into banking workflows.",
  "What projects have you worked on?":
    "I've worked on various projects including this personal portfolio, loan request management systems, and several AI-integrated web applications.",
  "How can I contact you?":
    "You can reach me via email at besufikadzenebe478@gmail.com or call me at +251 94 521 3881.",
  "Are you available for freelance work?":
    "Yes, I am open to freelance opportunities! Please contact me with your project details.",
  "What is your education background?":
    "I graduated with a degree in Software Engineering from Addis Ababa Science and Technology University (AASTU).",
  "Do you have any certifications?":
    "I have several certifications in Full Stack Development and AI/Machine Learning from platforms like Coursera and LinkedIn Learning.",
  "What databases do you work with?":
    "I regularly work with PostgreSQL, MongoDB, and Redis. I also have experience with vector databases like Pinecone and ChromaDB for AI projects.",
  "Do you know Docker or Kubernetes?":
    "Yes, I use Docker for containerizing my applications to ensure consistency across different environments.",
  "Do you speak English fluently?":
    "Yes, I am fluent in English, which allows me to collaborate effectively in international environments.",
  "Where are you located?": "I am based in Addis Ababa, Ethiopia.",
  "What is your GitHub profile?": "You can find my work on GitHub at github.com/bese21.",
}

const FAQs = Object.keys(QA_PAIRS)

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const getResponse = (query: string): string => {
    const normalizedQuery = query.toLowerCase().trim()

    // Exact match search
    for (const [question, answer] of Object.entries(QA_PAIRS)) {
      if (question.toLowerCase() === normalizedQuery) {
        return answer
      }
    }

    // Keyword search
    for (const [question, answer] of Object.entries(QA_PAIRS)) {
      const keywords = question.toLowerCase().replace(/[?]/g, "").split(" ")
      if (keywords.some((k) => k.length > 3 && normalizedQuery.includes(k))) {
        return answer
      }
    }

    return "I'm not sure about that one. Try clicking one of the suggested questions or contact Besufikad directly!"
  }

  const handleSend = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate small delay for natural feel
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getResponse(content),
      }
      setMessages((prev) => [...prev, response])
      setIsLoading(false)
    }, 500)
  }

  const handleFAQClick = (question: string) => {
    handleSend(question)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(input)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isOpen ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100",
        )}
        size="icon"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Open Chat</span>
      </Button>

      <div
        className={cn(
          "fixed bottom-4 right-4 z-50 flex flex-col transition-all duration-300 sm:bottom-8 sm:right-8",
          isOpen ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-10 scale-95 opacity-0",
        )}
      >
        <Card className="w-[350px] shadow-2xl sm:w-[400px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border-2 border-white/20">
                <AvatarImage src="/professional-developer-portrait.png" />
                <AvatarFallback>BZ</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">Besufikad's Assistant</CardTitle>
                <p className="text-xs text-primary-foreground/80">I can answer common questions!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] p-4" ref={scrollRef}>
              {messages.length === 0 && (
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8 border border-border">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-muted p-3 text-sm">
                      <p>Hello! I can answer your questions about Besufikad. Feel free to ask or use the suggestions below.</p>
                    </div>
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div key={m.id} className={cn("mb-4 flex gap-3", m.role === "user" ? "flex-row-reverse" : "flex-row")}>
                  <Avatar className="h-8 w-8 border border-border">
                    {m.role === "user" ? <AvatarFallback>You</AvatarFallback> : <AvatarFallback>AI</AvatarFallback>}
                  </Avatar>
                  <div
                    className={cn(
                      "rounded-lg p-3 text-sm",
                      m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 border border-border">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center rounded-lg bg-muted p-3">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}

              {/* Suggestions */}
              <div className={cn("grid gap-2", messages.length > 0 && "mt-4 pt-4 border-t border-border")}>
                <p className="text-xs font-medium text-muted-foreground">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {FAQs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleFAQClick(faq)}
                      disabled={isLoading}
                      className="text-left rounded-lg border border-border bg-background p-2 text-xs transition-colors hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {faq}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input?.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
