import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI Banking Chatbot",
    description:
      "Intelligent chatbot for customer service automation in banking, providing instant responses to customer queries and handling routine transactions.",
    image: "/ai-chatbot-banking-interface.jpg",
    tags: ["AI/ML", "Python", "NLP", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Financial Dashboard",
    description:
      "Real-time analytics dashboard for banking operations with data visualization, transaction monitoring, and performance metrics.",
    image: "/financial-analytics-dashboard.png",
    tags: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Loan Prediction System",
    description:
      "Machine learning model for predicting loan approval probability based on customer data, helping streamline the loan application process.",
    image: "/loan-prediction-ml-dashboard.jpg",
    tags: ["Python", "Scikit-learn", "React", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with payment integration, inventory management, and real-time analytics for seamless online shopping.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team collaboration features, and project tracking capabilities.",
    image: "/task-management-interface.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website Builder",
    description:
      "SaaS tool that helps developers and professionals create and customize their portfolio websites with ease and modern design.",
    image: "/portfolio-website-builder.png",
    tags: ["Next.js", "TailwindCSS", "Vercel", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">My Projects</h2>
          <p className="text-lg text-muted-foreground text-balance">A showcase of my recent work and side projects</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
