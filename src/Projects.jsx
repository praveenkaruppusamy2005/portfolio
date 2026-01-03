
import { useState } from 'react';
import ScrollStack, { ScrollStackItem } from './component/ScrollStack';
import './projects.css';

export default function Projects() {

  const projects = [
  {
    id: 1,
    title: "Agentic Browser with Voice Automation",
    category: "desktop",
    description:
      "A cross-platform agentic browser that enables voice-controlled web interaction. Converts natural language commands into DOM-level actions to navigate pages, search content, click elements, fill forms, and extract information. Built a resilient speech-to-action pipeline with retries and structured error handling, achieving over 90% task success across repeated workflows such as login flows and filtered navigation.",
    color: "#ffffffff",
    image: "https://www.dropbox.com/scl/fi/noo5arryumo17mhbd235c/Gemini_Generated_Image_k0w1r8k0w1r8k0w1-1.png?rlkey=3nzy71tcjdve0t7nvx4nwskqk&st=2n2b1dih&dl=1"
  },
  {
    id: 2,
    title: "Fitness Tracking Application",
    category: "mobile",
    description:
      "A React Native fitness application integrated with Google Fit to display live activity metrics including steps, calories burned, and summaries. Features custom UI components such as activity timers, analytics dashboards, height and gender selectors, and a chatbot assistant, with emphasis on responsive design and modular architecture.",
    color: "#ffffffff",
    image: 'https://www.dropbox.com/scl/fi/jogwbb664xbmyt6xuw5fo/Gemini_Generated_Image_eiy8pmeiy8pmeiy8-1.png?rlkey=484ezi95yp2uxhm9bndg203t3&st=mwts9c8x&dl=1'
  },
  {
    id: 3,
    title: "QR-based Attendance System",
    category: "Mobile and Web",
    description:
      "A web-based attendance system using QR code scanning for real-time validation and logging. Includes REST-backed dashboards to track attendance records with daily and student-wise summaries, enabling efficient monitoring and accurate record management.",
    color: "#ffffffff",
    image: 'https://www.dropbox.com/scl/fi/zm0tqme7r78qev8zar4ws/Gemini_Generated_Image_3trt023trt023trt.png?rlkey=28aqb7zv9dxb994vzkjwgscxw&st=pu2h7dbe&dl=1'
  },
  {
    id: 4,
    title: "Document & Certificate Management UI",
    category: "web",
    description:
      "A document management interface for uploading, previewing, and organizing academic certificates. Built using reusable React components and consistent layout structures to ensure scalability, usability, and clean information hierarchy.",
    color: "#ffffffff",
    image: 'https://www.dropbox.com/scl/fi/vona2i7wnurdjvqrnxg3g/Gemini_Generated_Image_t68ga8t68ga8t68g.png?rlkey=nnqb193ni1a75y2me9600az9y&st=0j19ybyd&dl=1'
  },
  {
  id: 5,
  title: "AYUSH-ICD-11 Smart Mapping Platform",
  category: "web",
  description:
    "A lightweight healthcare interoperability platform that maps AYUSH NAMASTE codes to ICD-11 for seamless clinical and insurance workflows. Enables description-based and multilingual search with smart semantic matching to suggest accurate diagnostic codes in real time. Built FHIR-compliant APIs and plug-and-play integrations for EMR/EHR systems, improving diagnostic clarity, insurance eligibility, and nationwide health data interoperability.",
    color:'#ffffffff',
    image: 'https://www.dropbox.com/scl/fi/kx2domfhsksg8w2tbn9q8/Gemini_Generated_Image_sygodysygodysygo.png?rlkey=ekha1chy21vonwerk50gbto1l&st=z7trqpim&dl=1'
}

];

  const filteredProjects = projects;
  const [endVisible, setEndVisible] = useState(false);

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        
        <div className="scroll-stack-container">
            <ScrollStack
                itemDistance={100} // Standard distance
                itemScale={0} // No scaling, all cards same size
                itemStackDistance={0} // No offset, cards stack directly on top of each other
                stackPosition="10%"
                scaleEndPosition="5%"
                baseScale={1} // Full size
                scaleDuration={0.5}
                rotationAmount={0}
                blurAmount={0}
                useWindowScroll={false}
                className="my-scroll-stack"
                onStackComplete={(completed) => setEndVisible(completed)}
            >
                {filteredProjects.map((project) => (
                    <ScrollStackItem key={project.id} itemClassName="project-card">
                        <div style={{
                            width: '100%', 
                            height: '100%', 
                            background: project.color, 
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'row', 
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '3rem',
                            color: '#000',
                            overflow: 'hidden',
                            position: 'relative' // Ensure relative positioning for absolute children if any
                        }}>
                           <div style={{ flex: 1, paddingRight: '2rem', textAlign: 'left' }}>
                                <h3 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'DM Sans, sans-serif' }}>{project.title}</h3>
                                <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '2rem', fontFamily: 'DM Sans, sans-serif' }}>{project.description}</p>
                                <span className="category-tag" style={{ background: '#4CAF50', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>{project.category}</span>
                           </div>
                           <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={project.image} alt={project.title} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '15px', objectFit: 'cover'}} />
                           </div>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </div>
        {endVisible && (
          <div className="exit-hint">
            <svg className="exit-hint-arrow" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="#9ef01a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Scroll out to next sections</span>
          </div>
        )}
      </div>
    </section>
  );
}
