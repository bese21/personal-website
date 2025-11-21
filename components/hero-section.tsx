import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Welcome to my portfolio
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-primary">Besufikad Zenebe</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
            I craft exceptional digital experiences with clean code and modern design. Currently working as an AI
            Trainer at Abyssinia Bank's AI Excellence Center, specializing in AI integration and full-stack development.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable code that follows best practices and modern standards.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Modern Design</h3>
              <p className="text-muted-foreground">
                Creating beautiful, intuitive interfaces that users love to interact with.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Fast Performance</h3>
              <p className="text-muted-foreground">
                Optimizing every detail to deliver lightning-fast experiences across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
