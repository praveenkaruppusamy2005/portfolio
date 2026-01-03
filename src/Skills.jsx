import React, { useState } from 'react'
import './skills.css'
// removed BubbleMenu
// removed animation wrapper

const SKILLS_TILES = [
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', size: 'large' },
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
  { name: 'Visual Studio Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', size: 'large' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MongoDB Compass', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Android Studio', img: 'https://img.icons8.com/color/96/android-studio--v3.png' },
  { name: 'Electron Builder', img: 'https://images.icon-icons.com/2389/PNG/512/electron_logo_icon_145314.png' },
  { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
]

export default function Skills() {
  const [clicked, setClicked] = useState(1)

  const BRAND_BG = {
    'Node.js': '#E6F4EA',
    'Express.js': '#F0F2F5',
    'JavaScript': '#FFF6B0',
    'React': '#E3F8FF',
    'Python': '#DDEBFF',
    'Java': '#FFE4E1',
    'Electron': '#E6F3F7',
    'MongoDB': '#EAF8EA',
    'PostgreSQL': '#E7F0FF',
    'Visual Studio Code': '#E6F3FF',
    'Git': '#FFE7E0',
    'Android Studio': '#E7FBEF',
    'Figma': '#FFECEC',
    'MongoDB Compass': '#EAF8EA',
    'GitHub': '#F2F4F7',
    'Electron Builder': '#E6F3F7'
  }
  const circleBg = (name) => {
    if (BRAND_BG[name]) return BRAND_BG[name]
    if (/mongo/i.test(name)) return '#EAF8EA'
    if (/git/i.test(name)) return '#F2F4F7'
    return '#F3F4F6'
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <div className="skills-right">
          <div className="toggle">
            <button
              className={clicked === 1 ? 'active' : ''}
              onClick={() => setClicked(1)}
            >
              SKILLS
            </button>
            <button
              className={clicked === 2 ? 'active' : ''}
              onClick={() => setClicked(2)}
            >
              TOOLS
            </button>
          </div>
          <div className="collage">
            {(clicked === 1 ? SKILLS_TILES : TOOLS).map((item, i) => {
              const rev = (n, base) => {
                let r = 0
                let f = 1 / base
                while (n > 0) {
                  r += (n % base) * f
                  n = Math.floor(n / base)
                  f /= base
                }
                return r
              }
              const u = rev(i + 1, 2)
              const v = rev(i + 1, 3)
              const jx = (Math.sin((i + 1) * 12.9898) * 43758.5453) % 1
              const jy = (Math.sin((i + 1) * 78.233) * 12345.6789) % 1
              const lx = 8 + Math.abs(u + jx * 0.08) * 84
              const ty = 12 + Math.abs(v + jy * 0.08) * 76
              const pos = { left: `${lx}%`, top: `${ty}%` }
              const isPrimary =
                (clicked === 2 && item.name === 'Visual Studio Code') ||
                (clicked === 1 && item.name === 'React')
              const flip = lx > 50
              let amp = 20 + (i % 5) * 6
              if (item.size === 'large') amp = Math.round(amp * 1.3)
              const fx = ((Math.sin((i + 3) * 1.7) * amp) | 0)
              const fy = ((Math.cos((i + 5) * 1.9) * amp) | 0)
              const dur = 6 + ((i * 1.3) % 6)
              const delay = ((i * 0.37) % 1.5)
              return (
                <div
                  className={`float-tile ${item.size === 'large' ? 'large' : ''}`}
                  style={{ left: pos.left, top: pos.top, '--fx': `${fx}px`, '--fy': `${fy}px`, '--dur': `${dur}s`, '--delay': `${delay}s`, '--s': '1.02' }}
                  key={`${item.name}-${i}`}
                >
                  <div className={`tool-tile ${isPrimary ? 'primary' : ''} ${flip ? 'reverse' : ''}`}>
                    <span className="logo-circle" style={{ '--circle-bg': circleBg(item.name) }}>
                      <img src={item.img} alt={item.name} />
                    </span>
                    <span className="tile-label">{item.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
