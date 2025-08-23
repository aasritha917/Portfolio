import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { GradientButton } from "./ui/gradient-button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Aasritha Kaluvala
            </h3>
            <p className="text-foreground/80">
              Aspiring Full-Stack Developer
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/aasritha917" target="_blank" rel="noopener noreferrer">
              <GradientButton variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </GradientButton>
            </a>
            <a href="https://www.linkedin.com/in/kaluvala-aasritha/" target="_blank" rel="noopener noreferrer">
              <GradientButton variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </GradientButton>
            </a>
            <a href="mailto:aasrithaaishu@gmail.com">
              <GradientButton variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </GradientButton>
            </a>
          </div>

          {/* Right Section - Back to Top */}
          <div className="text-center md:text-right">
            <GradientButton
              variant="outline"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </GradientButton>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex justify-center items-center text-sm text-foreground/80">
            <p className="flex items-center">
              © 2025 Aasritha Kaluvala. All rights reserved. Built with
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer