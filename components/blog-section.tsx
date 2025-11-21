import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI in Banking",
    excerpt:
      "How artificial intelligence is transforming the financial sector, from fraud detection to personalized customer experiences.",
    date: "Nov 15, 2025",
    category: "AI & Fintech",
    readTime: "5 min read",
  },
  {
    title: "Building Scalable Web Apps with Next.js",
    excerpt:
      "Best practices for creating high-performance, scalable web applications using Next.js and modern frontend tools.",
    date: "Oct 28, 2025",
    category: "Web Development",
    readTime: "8 min read",
  },
  {
    title: "Integrating LLMs into Enterprise Systems",
    excerpt: "Challenges and solutions when deploying Large Language Models in secure enterprise environments.",
    date: "Oct 10, 2025",
    category: "Machine Learning",
    readTime: "6 min read",
  },
]

const tweets = [
  {
    content:
      "Just deployed a new AI model for fraud detection! The accuracy improvements are insane. 🚀 #AI #Fintech #MachineLearning",
    date: "2 days ago",
  },
  {
    content:
      "Next.js 15 is a game changer for server components. Loving the new caching strategies. 💻 #WebDev #NextJS",
    date: "1 week ago",
  },
  {
    content:
      "Great session at the AI Excellence Center today. Teaching the next generation of AI engineers is so rewarding! 👨‍🏫 #AbyssiniaBank #AITraining",
    date: "2 weeks ago",
  },
]

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">Blog & Updates</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Thoughts on technology, AI, and my journey as a developer
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Latest Articles</h3>
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary cursor-pointer">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button variant="link" className="p-0 h-auto">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Twitter Feed Sidebar */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Twitter Feed</h3>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Twitter className="h-4 w-4" />
                Follow
              </Button>
            </div>
            <Card className="bg-card/50">
              <CardContent className="pt-6 space-y-6">
                {tweets.map((tweet, index) => (
                  <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                    <p className="text-sm mb-2">{tweet.content}</p>
                    <span className="text-xs text-muted-foreground">{tweet.date}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
