import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}
