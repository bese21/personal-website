import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Layout, Server, PenTool as Tool, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "AI Model Training",
      "Data Analysis",
      "Python for AI",
      "Computer Vision",
      "Deep Learning",
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Sass",
      "Redux",
      "React Query",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "Authentication",
      "JWT",
      "API Design",
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Prisma",
      "Supabase",
      "Firebase",
      "SQL",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Tool,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Jest",
      "Testing Library",
      "Webpack",
      "Vite",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "Other Skills",
    icon: Code2,
    skills: [
      "Agile/Scrum",
      "Git Workflow",
      "Code Review",
      "Performance Optimization",
      "Banking Systems",
      "Financial Technology",
      "AI Integration",
      "Technical Training",
    ],
  },
]

const proficiencyLevels = [
  {
    name: "Expert",
    description: "Deep understanding and extensive experience",
    skills: ["Python", "React", "TypeScript", "Node.js", "AI Model Training"],
    percentage: 90,
  },
  {
    name: "Advanced",
    description: "Strong skills with practical experience",
    skills: ["Next.js", "TensorFlow", "PostgreSQL", "Django", "Docker"],
    percentage: 75,
  },
  {
    name: "Intermediate",
    description: "Solid foundation and growing expertise",
    skills: ["PyTorch", "GraphQL", "AWS", "Computer Vision", "Redux"],
    percentage: 60,
  },
]

export default function SkillsSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Proficiency Levels Guide */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Proficiency Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {proficiencyLevels.map((level) => (
                <div key={level.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{level.name}</span>
                    <span className="text-sm text-muted-foreground">{level.percentage}%+</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full bg-primary transition-all" style={{ width: `${level.percentage}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{level.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {level.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-2xl bg-muted/50 p-8 text-center">
          <h3 className="mb-4 text-2xl font-semibold text-foreground">Always Learning</h3>
          <p className="mx-auto max-w-2xl text-muted-foreground text-balance">
            Technology evolves rapidly, and so do I. I'm constantly exploring new AI models, banking technologies, and
            best practices to stay at the forefront of innovation. Currently focusing on advanced AI integration in
            financial services, LLMs, and emerging fintech solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
