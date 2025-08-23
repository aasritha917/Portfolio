import { ExternalLink, Github, Code, Star } from "lucide-react"
import { GradientButton } from "./ui/gradient-button"
import socialMediaProject from "@/assets/social-media-project.jpg"
import quantumMlProject from "@/assets/quantum-ml-project.jpg"
import travelPlannerProject from "@/assets/travel-planner-project.jpg"
import matchMeProject from "@/assets/match-me-project.jpg"
import recipePlatformProject from "@/assets/recipe-platform-project.jpg"
import memeHubProject from "@/assets/meme-Hub-project.jpg"
const Projects = () => {
  const projects = [
    {
      title: "Travel Itinerary Planner",
      description: "A travel companion app that helps users plan trips, organize itineraries, discover destinations, and track budgets with an interactive and user-friendly interface.",
      image: travelPlannerProject,
      techStack: ["React.js", "Google Maps API", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/aasritha917/TravelPlan",
      demoLink: "https://travel-plan-theta-one.vercel.app",
      featured: false
    },
    {
      title: "MemesHub",
      description: "A fun meme-sharing hub that fetches trending memes, lets users explore categories, and provides a seamless browsing experience with modern UI features.",
      image: memeHubProject,
      techStack: ["JavaScript","html5","tailwindcss"],
      githubLink: "https://github.com/aasritha917/MemeHub",
      demoLink: "https://meme-hub-seven.vercel.app",
      featured: false
    },
    
    {
      title: "Match Me",
      description: "A modern matchmaking/dating platform where users can create profiles, match with others based on preferences, and engage through a clean and responsive UI.",
      image: matchMeProject,
      techStack: ["React.js", "AI-matching-algo", "WebSocket", "MongoDB","Node.js"],
      githubLink: "https://github.com/aasritha917/matchme-frontend",
      demoLink: "https://matchme-seven.vercel.app",
      featured: false
    },
    {
      title: "College Social Media",
      description: "A campus-focused social media platform built with Kotlin and Firebase, enabling students to connect, share updates, and engage through user profiles, real-time news feed, and in-app messaging. Designed to foster student collaboration and campus community engagement with a simple and modern UI.",
      image: socialMediaProject,
      techStack: ["Mobile-APP","Kotlin","firebase","figma"],
      githubLink: "https://github.com/aasritha917/CollageSocialMedia",
      demoLink: "#",
      featured: false
    },
    // {
    //   title: "Recipe Sharing Platform",
    //   description: "Community-driven recipe sharing platform where users can discover, share, and explore culinary creations with rating systems and ingredient-based search.",
    //   image: recipePlatformProject,
    //   techStack: ["React.js", "Express.js", "MySQL", "Cloudinary"],
    //   githubLink: "#",
    //   demoLink: "#",
    //   featured: false
    // }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-foreground/80 mt-6 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, 
            machine learning, and innovative problem-solving approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-glow-secondary transition-all duration-500 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-primary text-white text-sm font-medium">
                      <Star className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-medium border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                    <GradientButton variant="hero" className="group/btn text-xs px-3 py-2">
                      <Github className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </GradientButton>
                    <GradientButton variant="outline" className="text-xs px-3 py-2">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </GradientButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects */}
        <div className="text-center mt-16">
          <GradientButton variant="outline" size="lg">
            <Code className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </GradientButton>
        </div>
      </div>
    </section>
  )
}

export default Projects