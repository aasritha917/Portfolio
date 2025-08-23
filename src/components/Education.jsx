import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
  const educationData = [
    {
      degree: "Full-Stack Development",
      // grade: "CGPA 7.3",
      period: "2025",
      institution: "Masai School",
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      grade: "CGPA 7.3",
      period: "2020 - 2024",
      institution: "JPNCE",
    },
    {
      degree: "Intermediate",
      grade: "85.6%",
      period: "2020",
      institution: "Sri Chaitanya Junior College",
    },
    {
      degree: "SSC",
      grade: "9.2 GPA",
      period: "2018",
      institution: "Secondary School",
    },
  ]

  return (
    <section id="education" className="py-10 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary" />
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-primary">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-glow-secondary transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-primary mt-2 sm:mt-0">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-foreground/80 mb-2 sm:mb-0">
                          {edu.institution}
                        </p>
                        {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-primary text-white font-semibold text-sm">
                          {edu.grade}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education