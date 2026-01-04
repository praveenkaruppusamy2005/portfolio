import './projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Agentic Browser with Voice Automation",
      category: "Desktop",
      description: "A cross-platform agentic browser that enables voice-controlled web interaction. Converts natural language commands into DOM-level actions to navigate pages, search content, click elements, fill forms, and extract information.",
      tech: ["Electron", "JavaScript", "Voice API"],
      image: "https://www.dropbox.com/scl/fi/noo5arryumo17mhbd235c/Gemini_Generated_Image_k0w1r8k0w1r8k0w1-1.png?rlkey=3nzy71tcjdve0t7nvx4nwskqk&st=2n2b1dih&dl=1"
    },
    {
      id: 2,
      title: "Fitness Tracking Application",
      category: "Mobile",
      description: "A React Native fitness application integrated with Google Fit to display live activity metrics including steps, calories burned, and summaries. Features custom UI components and analytics dashboards.",
      tech: ["React Native", "Google Fit", "JavaScript"],
      image: "https://www.dropbox.com/scl/fi/jogwbb664xbmyt6xuw5fo/Gemini_Generated_Image_eiy8pmeiy8pmeiy8-1.png?rlkey=484ezi95yp2uxhm9bndg203t3&st=mwts9c8x&dl=1"
    },
    {
      id: 3,
      title: "QR-based Attendance System",
      category: "Web & Mobile",
      description: "A web-based attendance system using QR code scanning for real-time validation and logging. Includes REST-backed dashboards to track attendance records with daily and student-wise summaries.",
      tech: ["React", "Node.js", "QR Code"],
      image: "https://www.dropbox.com/scl/fi/zm0tqme7r78qev8zar4ws/Gemini_Generated_Image_3trt023trt023trt.png?rlkey=28aqb7zv9dxb994vzkjwgscxw&st=pu2h7dbe&dl=1"
    },
    {
      id: 4,
      title: "Document & Certificate Management UI",
      category: "Web",
      description: "A document management interface for uploading, previewing, and organizing academic certificates. Built using reusable React components and consistent layout structures.",
      tech: ["React", "JavaScript", "UI/UX"],
      image: "https://www.dropbox.com/scl/fi/vona2i7wnurdjvqrnxg3g/Gemini_Generated_Image_t68ga8t68ga8t68g.png?rlkey=nnqb193ni1a75y2me9600az9y&st=0j19ybyd&dl=1"
    },
    {
      id: 5,
      title: "AYUSH-ICD-11 Smart Mapping Platform",
      category: "Web",
      description: "A lightweight healthcare interoperability platform that maps AYUSH NAMASTE codes to ICD-11 for seamless clinical and insurance workflows. Enables description-based and multilingual search with smart semantic matching.",
      tech: ["React", "FHIR", "API Integration"],
      image: "https://www.dropbox.com/scl/fi/kx2domfhsksg8w2tbn9q8/Gemini_Generated_Image_sygodysygodysygo.png?rlkey=ekha1chy21vonwerk50gbto1l&st=z7trqpim&dl=1"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">Real-world applications I've built</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-inner">
                <div className="project-image-wrapper">
                  <div className="project-gradient-overlay"></div>
                  <img 
                    loading="lazy" 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <span className="project-category-badge">{project.category}</span>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
