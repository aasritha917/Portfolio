import { Download, Github, Linkedin, Mail } from "lucide-react"
import { GradientButton } from "./ui/gradient-button"
import heroBg from "@/assets/hero-bg.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent">
              Aasritha Kaluvala
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 font-medium">
              Coding with Creativity | Aspiring Full Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-primary-foreground/80">
              Java, Web Development & Emerging Tech Enthusiast
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
           Passionate about turning ideas into innovative solutions, solving challenges with creativity and code, 
           and constantly exploring the endless possibilities of technology to build impactful, meaningful, 
           and future-ready digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="./public/K_Aasritha_Resume.pdf" Download>
            <GradientButton variant="hero" size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </GradientButton>
            </a>
            
            <div className="flex gap-4">
              <a href="https://github.com/aasritha917" target="_blank" rel="noopener noreferrer">
              <GradientButton variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </GradientButton>
              </a>
              <a href="https://www.linkedin.com/in/kaluvala-aasritha/" target="_blank" rel="noopener noreferrer">
              <GradientButton variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </GradientButton>
              </a>
              <a href="mailto:aasrithaaishu@gmail.com">
              <GradientButton variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </GradientButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero