import { useState } from 'react'
import './App.css'

// Project data
const projects = [
  {
    id: 1,
    title: 'penPal', // actual title (revealed when unlocked)
    lockedTitle: 'Secret Project', // what shows when locked
    image: './assets/penpal/text_removed_head.png', // locked version
    unlockedImage: './assets/penpal/text_removed_head.png', // unlocked version
    description: 'Tendon-driven handheld sketching robot with an independently mobile tip, facilitating a new axis of creative control.',
    creators: [
      'Tucker Rae-Grant',
      'Luke Jimenez',
      'Lea Albaugh',
      'Ken Nakagaki'
    ],
    contributions: [
      'Integrated motor control algorithms and a custom GUI into a complete software pipeline.',
      'Designed and implemented a kinematic model to simulate tendon-driven actuation, enabiling accurate end-effector positioning; facilitated real-time textural input via an intuitive user interface.',
      'Successful deployment in a user study with 10 participants; co-authored research published at CHI ’26.'
    ],
    images: [
      './assets/penpal/Artboard 4@2x.png',
      './assets/penpal/hardware.png',
      './assets/penpal/workspace_labeled.png'
    ],
    video: 'https://www.youtube.com/embed/zUBWr1zBPM8',
    publication: {
      title: 'CHI 2026 Publication',
      url: 'https://dl.acm.org/doi/10.1145/3772318.3790391'
    },
    credits: ['Video produced by Tucker Rae-Grant, uploaded by me only for temporary use in this portfolio.']
  },
  {
    id: 2,
    title: "Shape 'n Swarm",
    image: './assets/shape n swarm/Application Space.png',
    description:
      'Swarm robotics platform; a physical manifestation of conversational interaction with ChatGPT.',
    creators: [
      'Matthew Jeung',
      'Anup Sathya',
      'Michael Qian',
      'Steven Arellano',
      'Luke Jimenez',
      'Ken Nakagaki'
    ],
    contributions: [
      'Implemented collision-free pathfinding algorithm handling dozens of unique origin/destination pairs; prototyped GUI in Processing and integrated OpenAI API.',
      'Conducted user studies and refined algorithms to improve usability; co-authored research accepted to UIST ’25.'
    ],
    images: [
      './assets/shape n swarm/SnS-Header.png',
      './assets/shape n swarm/User Study - Object Manipulation Task.png',
      './assets/shape n swarm/Front-end Display.png'
    ],
    video: 'https://www.youtube.com/embed/5u0M9yL7tyY',
    publication: {
      title: 'UIST 2025 Publication',
      url: 'https://dl.acm.org/doi/10.1145/3746059.3747781'
    },
    axlab: {
      title: 'AxLab Project Page',
      url: 'https://www.axlab.cs.uchicago.edu/projects/shape-n\'\-swarm'
    }
  },
  {
    id: 3,
    title: 'STONEs',
    image: './assets/stones/stones1.jpg',
    description: 'Interactive kinetic “stones” with embedded flywheel mechanisms, reframing the relationship between nature, technology, and the self.',
    creators: [
      'Yifan Zou', 
      'Luke Jimenez',
      'Ken Nakagaki'
    ],
    dates: 'May 2024-September 2024',
    tools: ['Arduino IDE', 'Fusion 360', 'Dynamixel', 'Gyroscope sensors'],
    contributions: [
      'Implemented gyroscopic sensors and feedback loops coded in Arduino IDE to create responsive, intuitive user interactions.',
      'Designed lightweight shells and CAD models in Fusion 360.',
      'Exhibited system to 112,000+ visitors at Ars Electronica ’24, ensuring robust hardware and code stability during continuous multi-day operation.'
    ],
    publication: {
      title: 'Ars Electronica 2024 Exhibition Page',
      url: 'https://ars.electronica.art/hope/en/self-matter/'
    },
    axlab: {
      title: 'AxLab Exhibit Page',
      url: 'https://www.axlab.cs.uchicago.edu/exhibition/self-matter'
    },
    images: [
      './assets/stones/stonesglass.jpg',
      './assets/stones/Hardware.png',
      './assets/stones/me_and_bro.jpg'
    ],
    video: 'https://www.youtube.com/embed/OyGkRxP59OI',
    credits: ['Video produced and uploaded by Yifan Zou; photos taken by Nora Ryan.']
  },
  {
    id: 4,
    title: 'Threading Space',
    image: './assets/threading space (c&c)/_ (2) copy.jpg',
    description: 'Kinetic sculpture exploring spatial interaction via threads in motion.',
    creators: ['Ramarko Bhattacharyå', 'You Li', 'Emilie Faracci', 'Harrison Dong', 'Ken Nakagaki'],
    exhibitionCollaborators: ['Luke Jimenez', 'Harrison Dong', 'Ken Nakagaki'],
    
    contributions: [
      'Resolved performance bottlenecks in wireless communication and playback, increasing system uptime and reliability under heavy use.',
      'Deployed interactive exhibit at C&C ’24 and the Museum of Science and Industry, successfully running 7+ hours/day over a 5-month exhibit period.'
    ],
    images: [
      './assets/threading space (c&c)/_ (2) copy.jpg',
      './assets/threading space (c&c)/pic2.jpg',
      './assets/threading space (c&c)/pic3.jpg'
    ],
    publication: {
      title: 'ACM C&C 2024 Publication',
      url: 'https://dl.acm.org/doi/10.1145/3635636.3660498'
    },
    axlab: {
      title: 'AxLab Exhibition Page',
      url: 'https://www.axlab.cs.uchicago.edu/exhibition/threading-space-exhibit'
    },
    video: 'https://www.youtube.com/embed/UlYjKOweVAc',
    credits: ['Photos taken by Ken Nakagaki.']
  },

  {
    id: 5,
    title: 'Go (game)',
    image: './assets/Go board.png',
    description: 'An interactive Go game using pygame, the final project from CMSC 14200',
    creators: [
      'Luke Jimenez',
      'Maya Mustata',
      'Maddie Tavel',
      'Nehal Lodha'
    ],
    contributions: [
      'Developed GUI and game logic.'
    ],
    publication: {
      title: 'Github Project Link',
      url: 'https://github.com/uchicago-cmsc14200-win-2024/project-lukejimenez-mmustata-lodhanehal-tavelm'
    },
  },
  {
    id: 6,
    title: 'Stroke Risk ML Model',
    image: './assets/Stroke Risk ML Model/decision_tree.png',
    description: 'A model to predict stroke risk, made for an ML course at Yonsei University in Seoul.',
    creator:
      'Luke Jimenez',
    contributions: [
      'Built the model using sklearn and pandas in Python.',
      'Cleaned and preprocessed the data to ensure accuracy, accounting for hypertension, heart disease, marital status.',
      'Evaluated the model\'s performance using various metrics such as accuracy, precision, recall, and F1-score.'
    ],
    publication: {
      title: 'Colab Link',
      url: 'https://colab.research.google.com/drive/1fBlfX8Y_5SSb0SbyUp25zJW6NwIFcfEZ?usp=sharing'
    },
  }
  ]

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const correctPassword = 'mySecret123'

  const handleProjectClick = (project) => {
    if (project.id === 1 && !isAuthorized) {
      setShowPasswordPrompt(true)
    } else {
      setSelectedProject(project)
    }
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (passwordInput === correctPassword) {
      setIsAuthorized(true)
      setShowPasswordPrompt(false)
      setSelectedProject(projects[0])
      setPasswordInput('')
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password. Please try again.')
    }
  }

  const handleClosePasswordPrompt = () => {
    setShowPasswordPrompt(false)
    setPasswordInput('')
    setPasswordError('')
  }

  const handleBack = () => {
    setSelectedProject(null)
  }

  return (
    <div className="App">
      {!selectedProject ? (
        <>
          <header>
            <h1 className="site-title">Luke Jimenez</h1>
            <p className="subtitle">Designer • Developer • Researcher</p>
          </header>
          <section className="projects-grid">
            {projects.map((project) => {
              const isLocked = project.id === 1 && !isAuthorized
              const imageToShow =
                project.id === 1 && isAuthorized
                  ? project.unlockedImage
                  : project.image
              const titleToShow =
                project.id === 1 && !isAuthorized
                  ? project.lockedTitle
                  : project.title

              return (
                <div
                  key={project.id}
                  className={`project-card ${isLocked ? 'locked' : ''}`}
                  onClick={() => handleProjectClick(project)}
                >
                  <img src={imageToShow} alt={project.title} />
                  {isLocked && <div className="lock-overlay">🔒</div>}
                  <h2>{titleToShow}</h2>
                </div>
              )
            })}
          </section>
        </>
      ) : (
        <section className="project-detail">
          <button className="back-btn" onClick={() => setSelectedProject(null)}>
            ← Back
          </button>
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>

          {selectedProject.video ? (
            // 🎥 show video if present
            <div className="video-wrapper">
              <iframe
                src={selectedProject.video}
                title={`${selectedProject.title} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : selectedProject.image ? (
            // 🖼️ show static image instead
            <div className="image-wrapper">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} preview`}
              />
            </div>
          ) : (
            // ❌ optional fallback (only if neither exists)
            <div className="video-embed">
              <img
                src="./assets/fallback-image.jpg"
                alt="Project preview not available"
              />
            </div>
          )}

          {selectedProject.creator && (
            <p><strong>Creator:</strong> {selectedProject.creator}</p>
          )}

          {selectedProject.creators && (
            <p><strong>Creators:</strong> {selectedProject.creators.join(', ')}</p>
          )}

          {selectedProject.exhibitionCollaborators && (
            <p><strong>Exhibition Collaborators:</strong> {selectedProject.exhibitionCollaborators.join(', ')}</p>
          )}

          {selectedProject.dates && (
            <p><strong>Dates:</strong> {selectedProject.dates}</p>
          )}

          {selectedProject.tools && (
            <p><strong>Tools Used:</strong> {selectedProject.tools.join(', ')}</p>
          )}

          <div className="contributions">
            <h4><strong>Contributions:</strong></h4>
            <ul>
              {selectedProject.contributions.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>

          {selectedProject.publication && (
            <div className="project-link">
              <a
                href={selectedProject.publication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.publication.title}
              </a>
            </div>
          )}

          {selectedProject.axlab && (
            <div className="axlab-link">
              <a
                href={selectedProject.axlab.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.axlab.title}
              </a>
            </div>
          )}

          {selectedProject.images && selectedProject.images.length > 0 && (
            <div className="gallery">
              {/* <h4><strong>Gallery:</strong></h4> */}
              <div className="image-gallery">
                {selectedProject.images.map((img, i) => (
                  <img key={i} src={img} alt={`${selectedProject.title} ${i}`} />
                ))}
              </div>
            </div>
          )}

          {selectedProject.credits && (
            <p className="credits">{selectedProject.credits}</p>
          )}

        </section>
      )}

      {/* Password Prompt Modal */}
      {showPasswordPrompt && (
        <div className="password-modal">
          <form onSubmit={handlePasswordSubmit} className="password-form">
            <h2>Enter portfolio password:</h2>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value)
                setPasswordError('')
              }}
              placeholder="Password"
              className={passwordError ? 'input-error' : ''}
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
            <div className="password-buttons">
              <button type="button" onClick={handleClosePasswordPrompt}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default App
