import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Besufikad Zenebe</h3>
            <p className="text-sm text-muted-foreground">
              Building exceptional digital experiences with modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Me
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Besufikad Zenebe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
