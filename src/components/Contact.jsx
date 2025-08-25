import { useState } from "react"
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react"
import { GradientButton } from "./ui/gradient-button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-foreground/80 mt-6 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply chat about technology and innovation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-foreground/80 leading-relaxed">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div 
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-glow-secondary transition-all duration-300 cursor-pointer"
                onClick={() => window.open('mailto:aasrithaaishu@gmail.com', '_blank')}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-foreground/80">aasritha.kaluvala@example.com</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-glow-secondary transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://www.linkedin.com/in/kaluvala-aasritha/', '_blank')}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">LinkedIn</h4>
                  <p className="text-foreground/80">linkedin.com/in/aasritha-kaluvala</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-glow-secondary transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://github.com/aasritha917', '_blank')}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">GitHub</h4>
                  <p className="text-foreground/80">github.com/aasritha-kaluvala</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-glow-secondary transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-foreground/80">Open to remote opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  required
                />
              </div>
              
              <GradientButton type="submit" variant="hero" size="lg" className="w-full group">
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </GradientButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact