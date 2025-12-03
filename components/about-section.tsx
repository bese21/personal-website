import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">About Me</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Passionate developer dedicated to creating impactful digital solutions
          </p>
        </div>

        {/* Profile Image & Bio */}
        <div className="mb-16 flex flex-col items-center gap-8 md:flex-row">
          <div className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
            <img
              src="https://res.cloudinary.com/dbyxbkhsz/image/upload/v1764768577/photo_2025-12-03_05-25-19_lcampi.jpg"
              alt="Besufikad Zenebe"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Hello, I'm Besufikad Zenebe</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I'm a passionate full-stack developer currently working as an AI Trainer at Abyssinia Bank's AI Excellence
              Center. I graduated from Addis Ababa Science and Technology University with a degree in Software
              Engineering, where I developed a strong foundation in computer science principles and software development
              practices.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              At Abyssinia Bank, I focus on training AI models, integrating artificial intelligence solutions into
              banking systems, and developing innovative applications that enhance customer experience. I'm passionate
              about leveraging AI and modern web technologies to solve real-world problems and drive digital
              transformation in the financial sector.
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Current Role</h3>
              <p className="mb-2 text-3xl font-bold text-primary">AI Trainer</p>
              <p className="text-sm text-muted-foreground">Abyssinia Bank - AI Excellence Center</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Expertise</h3>
              <p className="mb-2 text-3xl font-bold text-primary">AI & Web</p>
              <p className="text-sm text-muted-foreground">AI Integration, Full-Stack Development, Banking Solutions</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Education</h3>
              <p className="mb-2 text-3xl font-bold text-primary">B.S. SE</p>
              <p className="text-sm text-muted-foreground">
                Software Engineering from Addis Ababa Science and Technology University
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold text-foreground">Career Timeline</h3>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div className="h-full w-px bg-border" />
              </div>
              <div className="pb-8">
                <div className="mb-1 text-sm text-muted-foreground">Present</div>
                <h4 className="mb-2 text-lg font-semibold text-foreground">AI Trainer - Abyssinia Bank</h4>
                <p className="text-muted-foreground">
                  Working at the AI Excellence Center, focusing on AI model training, integration of AI solutions into
                  banking systems, and developing innovative applications for digital transformation
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div className="h-full w-px bg-border" />
              </div>
              <div className="pb-8">
                <div className="mb-1 text-sm text-muted-foreground">University Years</div>
                <h4 className="mb-2 text-lg font-semibold text-foreground">Software Engineering Student</h4>
                <p className="text-muted-foreground">
                  Studied at Addis Ababa Science and Technology University, focusing on software development, artificial
                  intelligence, and engineering principles
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
              </div>
              <div>
                <div className="mb-1 text-sm text-muted-foreground">Beginning</div>
                <h4 className="mb-2 text-lg font-semibold text-foreground">Started Coding Journey</h4>
                <p className="text-muted-foreground">
                  Discovered passion for programming and began learning web development fundamentals and exploring
                  artificial intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
