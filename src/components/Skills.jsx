import { 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  Brain,
  Coffee,
  Layers,
  Zap,
  FileCode,
  Terminal,
  Server,
  Monitor,
  GitBranch
} from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", icon: FileCode },
        { name: "C", icon: Terminal },
        { name: "JavaScript", icon: FileCode }
      ],
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML", icon: FileCode },
        { name: "CSS", icon: FileCode },
        { name: "React.js", icon: Globe },
        { name: "Node.js", icon: Server }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: [
        { name: "JDBC", icon: Database },
        { name: "Bootstrap", icon: Monitor },
        { name: "Tailwind", icon: Monitor },
        { name: "Redux", icon: Layers }
      ],
      color: "from-cyan-500 to-green-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", icon: Database },
        { name: "MongoDB", icon: Database }
      ],
      color: "from-green-500 to-yellow-500"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Salesforce", icon: Wrench },
        { name: "VS Code", icon: Terminal },
        { name: "Jupyter", icon: FileCode },
        { name: "GitHub", icon: GitBranch }
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Core Skills",
      icon: Brain,
      skills: [
        { name: "DSA", icon: Brain },
        { name: "OOPS", icon: Code2 },
        { name: "Problem Solving", icon: Brain },
        { name: "Analytical Skills", icon: Brain }
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-glow-secondary transition-all duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-center mb-2">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-center p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-200"
                      >
                        <SkillIcon className="h-4 w-4 text-primary mr-3" />
                        <span className="text-foreground font-medium">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Additional Skills Highlight */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-primary rounded-full text-white font-medium">
            <Zap className="h-5 w-5" />
            <span>Always learning and exploring new technologies</span>
            <Coffee className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills