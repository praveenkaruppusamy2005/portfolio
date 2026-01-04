import React, { useState, useEffect } from 'react'
import './skills.css'

const SKILLS_TILES = [
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'React Native', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'JavaScript', img: 'https://images.icon-icons.com/2108/PNG/512/javascript_icon_130900.png' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Electron', img: 'https://images.icon-icons.com/2389/PNG/512/electron_logo_icon_145314.png' },
]

const TOOLS = [
  { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Postman', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Android Studio', img: 'https://img.icons8.com/color/96/android-studio--v3.png' },
  { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Vite', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
]

const BRAND_BG = {
  React: '#E3F8FF',
  'React Native': '#E3F8FF',
  'Node.js': '#E6F4EA',
  'Express.js': '#F0F2F5',
  JavaScript: '#FFF6B0',
  Python: '#DDEBFF',
  Java: '#FFE4E1',
  Electron: '#E6F3F7',
  MongoDB: '#EAF8EA',
  PostgreSQL: '#E7F0FF',
  'VS Code': '#E6F3FF',
  Git: '#FFE7E0',
  GitHub: '#F2F4F7',
  Postman: '#FFE8D6',
  Docker: '#E3F2FD',
  Vite: '#F3E5FF',
  Firebase: '#FFF8E1',
  Figma: '#FFECEC',
  'Android Studio': '#E7FBEF',
}

export default function Skills() {
  const [mode, setMode] = useState(1)
  const [sizes, setSizes] = useState([])

  const items = mode === 1 ? SKILLS_TILES : TOOLS

  useEffect(() => {
    const s = items.map(() => 45 + Math.random() * 35)
    setSizes(s)
  }, [mode, items])

  return (
    <section className="skills">
      <header className="skills-header">
        <h2>Skills & Tools</h2>
        <p>Technologies I use to build real products</p>
      </header>

      <div className="toggle">
        <button className={mode === 1 ? 'active' : ''} onClick={() => setMode(1)}>
          SKILLS
        </button>
        <button className={mode === 2 ? 'active' : ''} onClick={() => setMode(2)}>
          TOOLS
        </button>
      </div>

      <div className="skills-grid">
        {items.map((item, i) => (
          <div
            key={item.name}
            className="skill-item"
            style={{ '--delay': `${i * 0.05}s` }}
          >
            <div className="orb" style={{ '--bg': BRAND_BG[item.name] || '#f3f4f6' }}>
              <img
                src={item.img}
                alt={item.name}
                draggable={false}
                style={{ width: `${sizes[i] || 60}%`, height: `${sizes[i] || 60}%` }}
              />
            </div>
            <span className="skill-name">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
