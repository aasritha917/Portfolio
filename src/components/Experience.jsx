import { Users, Lightbulb, Cog } from "lucide-react"

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Volunteering & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow-secondary transition-all duration-300">
            <div className="flex items-start space-x-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  IoT & Robotics Workshop Facilitator
                </h3>
                
                <div className="space-y-4">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Conducted comprehensive IoT and Robotics workshops for students at 2 Government Schools, 
                    introducing them to the fascinating world of technology and its practical applications.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Lightbulb className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Educational Impact</h4>
                        <p className="text-foreground/80 text-sm">
                          Taught students about robotics fundamentals, sensor integration, 
                          and hands-on project development
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Cog className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Practical Learning</h4>
                        <p className="text-foreground/80 text-sm">
                          Assisted students in building interactive projects and 
                          understanding real-world technology applications
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground/90 font-medium mb-2">Key Achievements:</p>
                    <ul className="text-foreground/80 space-y-1 text-sm">
                      <li>• Successfully engaged 100+ students in hands-on technology learning</li>
                      <li>• Developed simplified curriculum for complex IoT and robotics concepts</li>
                      <li>• Fostered interest in STEM fields among young learners</li>
                      <li>• Created lasting educational partnerships with government institutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Experience Note */}
          <div className="mt-1 text-center">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-primary rounded-full text-white font-medium">
              <span>Passionate about knowledge sharing and community impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience