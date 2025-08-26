import { Download, Github, Linkedin, Mail } from "lucide-react"
import { GradientButton } from "./ui/gradient-button"
import heroBg from "@/assets/hero-bg.jpg"
import profilePic from "@/assets/profile.jpg"

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
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center min-h-screen py-20">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent">
                Aasritha Kaluvala
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 font-medium">
                Aspiring Software Engineer
              </p>
              <p className="text-lg sm:text-xl text-primary-foreground/80">
                Java, Web Development & Emerging Tech Enthusiast
              </p>
            </div>
            
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative solutions through code, solving complex problems, 
              and exploring the exciting frontiers of technology and quantum computing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
           <a href="/K_Aasritha_Resume.pdf" Download>
              <GradientButton 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = 'K_Aasritha_Resume.pdf'
                  link.download = 'K_Aasritha_Resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                  window.open('/K_Aasritha_Resume.pdf', '_blank')
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </GradientButton>
              </a>
              <div className="flex gap-4">
                <GradientButton 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => window.open('https://github.com/aasritha917', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </GradientButton>
                <GradientButton 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => window.open('https://www.linkedin.com/in/kaluvala-aasritha/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </GradientButton>
                <GradientButton 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => window.open('mailto:aasritha.kaluvala@example.com', '_blank')}
                >
                  <Mail className="h-5 w-5" />
                </GradientButton>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <img 
                src={profilePic} 
                alt="Aasritha Kaluvala - Professional Profile" 
                className="w-50 h-50 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-75 xl:h-72 rounded-full object-cover border-4 border-primary shadow-glow-primary"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
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