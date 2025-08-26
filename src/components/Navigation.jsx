import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { GradientButton } from "./ui/gradient-button"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#hero" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            K.Aasritha
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </button>
            ))}
            
            <GradientButton 
              variant="hero" 
              size="sm"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/K_Aasritha_Resume.pdf'
                link.download = 'Aasritha_Kaluvala_Resume.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                window.open('/K_Aasritha_Resume.pdf', '_blank')
              }}
            >
              Resume
            </GradientButton>
            
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <GradientButton
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </GradientButton>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <GradientButton 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/Aasritha_Kaluvala_Resume.pdf'
                    link.download = 'Aasritha_Kaluvala_Resume.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    window.open('/K_Aasritha_Resume.pdf', '_blank')
                  }}
                >
                  Resume
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation