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

// Import your Flaticon SVGs (downloaded and placed in src/assets/skills/)
import JavaIcon from "@/assets/skills/java.png"
import CIcon from "@/assets/skills/lc.png"
import JSIcon from "@/assets/skills/js.png"
import HTMLIcon from "@/assets/skills/html.png"
import CSSIcon from "@/assets/skills/css.png"
import ReactIcon from "@/assets/skills/react.png"
import NodeIcon from "@/assets/skills/nodejs.png"
import JDBCIcon from "@/assets/skills/jdbc.png"
import BootstrapIcon from "@/assets/skills/bootstrap.png"
import TailwindIcon from "@/assets/skills/tailwind.png"
import ReduxIcon from "@/assets/skills/redux.png"
import SQLIcon from "@/assets/skills/sql.png"
import MongoDBIcon from "@/assets/skills/mongodb.png"
import SalesforceIcon from "@/assets/skills/salesforce.png"
import VSCodeIcon from "@/assets/skills/vscode.png"
import JupyterIcon from "@/assets/skills/jupyter.png"
import GitHubIcon from "@/assets/skills/github.png"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", icon: JavaIcon },
        { name: "C", icon: CIcon },
        { name: "JavaScript", icon: JSIcon }
      ],
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML", icon: HTMLIcon },
        { name: "CSS", icon: CSSIcon },
        { name: "React.js", icon: ReactIcon },
        { name: "Node.js", icon: NodeIcon }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: [
        { name: "JDBC", icon: JDBCIcon },
        { name: "Bootstrap", icon: BootstrapIcon },
        { name: "Tailwind", icon: TailwindIcon },
        { name: "Redux", icon: ReduxIcon }
      ],
      color: "from-cyan-500 to-green-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", icon: SQLIcon },
        { name: "MongoDB", icon: MongoDBIcon }
      ],
      color: "from-green-500 to-yellow-500"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Salesforce", icon: SalesforceIcon },
        { name: "VS Code", icon: VSCodeIcon },
        { name: "Jupyter", icon: JupyterIcon },
        { name: "GitHub", icon: GitHubIcon }
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
                <div className="flex items-center mb-6">
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
                    // For Core Skills: white bg, black icon; others: muted bg
                    const isCoreSkills = category.title === "Core Skills"
                    const skillBg = isCoreSkills
                      ? "bg-white text-black"
                      : "bg-muted"
                    const iconClass = isCoreSkills
                      ? "h-5 w-5 text-black"
                      : "h-5 w-5 text-white"
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-200"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 ${skillBg}`}>
                          {/* Render PNG or Lucide icon */}
                          {typeof SkillIcon === "string" ? (
                            <img src={SkillIcon} alt={skill.name} className="h-6 w-6" />
                          ) : (
                            <SkillIcon className={iconClass} />
                          )}
                        </div>
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
        <div className="mt-16 text-center">
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