import { Code, Brain, Zap } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate Computer Science Engineering graduate with a strong foundation in 
              software development and an insatiable curiosity for emerging technologies. My journey 
              in tech has been driven by the excitement of solving complex problems and creating 
              meaningful solutions.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Specializing in Java and web development, I'm particularly fascinated by the potential 
              of Quantum Machine Learning applications in healthcare. I believe in the power of 
              technology to make a positive impact on people's lives.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
              projects, or sharing knowledge through workshops and community engagement.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border hover:shadow-glow-secondary transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Full-Stack Development</h3>
                <p className="text-foreground/80">
                  Proficient in Java, JavaScript, React.js, and modern web technologies
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border hover:shadow-glow-secondary transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Problem Solving</h3>
                <p className="text-foreground/80">
                  Strong analytical skills with expertise in DSA and algorithmic thinking
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border hover:shadow-glow-secondary transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Emerging Tech</h3>
                <p className="text-foreground/80">
                  Exploring Quantum ML applications and their potential in healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About