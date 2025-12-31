"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useChat } from "@ai-sdk/react"

const FAQs = [
  "What are your main skills?",
  "What is your strongest programming language?",
  "Tell me about your experience at Abyssinia Bank.",
  "What projects have you worked on?",
  "How can I contact you?",
  "Are you available for freelance work?",
  "What is your education background?",
  "Do you have any certifications?",
  "What databases do you work with?",
  "Do you know Docker or Kubernetes?",
  "Do you speak English fluently?",
  "Where are you located?",
  "What is your GitHub profile?",
]

export function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat()
  const [isOpen, setIsOpen] = useState(false) // Changed to standard useState
  // Note: Using a simple state for isOpen instead of the tricky one above to avoid hydration issues
  // const [open, setOpen] = useRef(false).current ? [false, () => { }] : [false, (v: boolean) => { }] // Placeholder
  // Use proper state
  // const [isChatOpen, setIsChatOpen] = useRef(false).current ? [false, () => { }] : [false, (v: boolean) => { }] // Wait, let's just do it cleanly

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

  const handleFAQClick = async (question: string) => {
    append({
      role: 'user',
      content: question,
    })
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
                <CardTitle className="text-base">Besufikad's AI Assistant</CardTitle>
                <p className="text-xs text-primary-foreground/80">Ask me anything!</p>
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
                      <p>Tired of reading my CV? Don't worry, I trained my AI to answer your questions.</p>
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
                onChange={handleInputChange}
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
