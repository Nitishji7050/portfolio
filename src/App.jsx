import './App.css';
import resumeImg from "./assets/resume.jpeg";
import StarsBackground from "./components/StarsBackground";
import musicAppImg from './assets/musicApp.png';
import videoCallingImg from './assets/videoCalling.png';
import groceryMartImg from './assets/groceryMart.png';
import CppImg from './assets/Cpp.jpeg';
import DjangoImg from './assets/Django.jpeg';
// import comptiaImg from './assets/comptia.jpeg';
// import powerBiImg from './assets/powerBi.jpeg';
import AgenticImg from './assets/AgenticAi.jpeg';
import DevopsImg from './assets/Devops.jpeg';
import jsImg from './assets/javaScript.jpeg';

// Importing react-icons for GitHub, LinkedIn, Twitter, and Gmail icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="hero-bg">
      <StarsBackground />
      <nav className="hero-nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects" onClick={e => {
            e.preventDefault();
            const target = document.getElementById('projects');
            if (!target) return;
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + window.scrollY;
            const duration = 1200;
            let start;
            function step(timestamp) {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              window.scrollTo(0, startY + (endY - startY) * easeInOutQuad(progress));
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            }
            function easeInOutQuad(t) {
              return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }
            window.requestAnimationFrame(step);
          }}>Projects</a></li>
          <li><a href="#certificates" onClick={e => {
            e.preventDefault();
            const target = document.getElementById('certificates');
            if (!target) return;
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + window.scrollY;
            const duration = 1200;
            let start;
            function step(timestamp) {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              window.scrollTo(0, startY + (endY - startY) * easeInOutQuad(progress));
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            }
            function easeInOutQuad(t) {
              return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }
            window.requestAnimationFrame(step);
          }}>Certificates</a></li>
          <li><a href="#contact" onClick={e => {
            e.preventDefault();
            const target = document.getElementById('contact');
            if (!target) return;
            const startY = window.scrollY;
            const endY = target.getBoundingClientRect().top + window.scrollY;
            const duration = 1200;
            let start;
            function step(timestamp) {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              window.scrollTo(0, startY + (endY - startY) * easeInOutQuad(progress));
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            }
            function easeInOutQuad(t) {
              return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }
            window.requestAnimationFrame(step);
          }}>Contact</a></li>
        </ul>
      </nav>
      <main className="hero-main" id="home">
        <div className="hero-card animate-fade-in">
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=person"
            alt="Profile"
            className="hero-avatar"
          />
          <h1 className="hero-title">
            <span className="sparkle-text">Hey, I'm <span className="gradient-text">Nitish Sharma</span></span>
            <br />A <span className="gradient-text">Website Developer</span>
          </h1>
          <p className="hero-desc">
            <b>A fullstack developer</b> with solid foundations in <b>design</b>.<br />
            Passionate about crafting seamless user experiences, I thrive at the intersection of creativity and functionality.
          </p>
          <div className="hero-actions">
            <button className="hero-btn" onClick={() => window.open(resumeImg, "_blank")}>View resume</button>
            <button className="hero-btn btn-secondary">Contact Me</button>
            <span className="hero-socials">
              <a href="https://github.com/Nitishji7050" title="GitHub" className="hero-icon" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/nitish-sharma-6366882a8" title="LinkedIn" className="hero-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://www.linkedin.com/in/nitish-sharma-6366882a8" title="Twitter" className="hero-icon" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nitishji7050@gmail.com"
                title="Gmail"
                className="hero-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} />
              </a>
            </span>
          </div>
        </div>
      </main>
      <section className="projects-section" id="projects">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {/* 1st project */}
          <div className="project-card">
            <div className="project-photo">
              <img src={musicAppImg} alt="Music App" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="project-info">
              <div className="project-desc">In this project, I built a music app using HTML, CSS, Js (in forntend) and used fastApi(python) and sqlite (in backend). It allows users to search for songs, chose language, and listen to music online. 
                and also subcribe to premium plan for downloading songs. User can also manage their profiles.
              </div>
              <a className="project-link" href="https://github.com/Nitishji7050/music-app" target="_blank" rel="noopener noreferrer">Project Link</a>
            </div>
          </div>
          {/* 2nd project */}
          <div className="project-card">
            <div className="project-photo">
              <img src={videoCallingImg} alt="Video Calling App" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="project-info">
              <div className="project-desc">In this project, I built a video calling app using Tech used- [HTML, CSS, Js (in frontend) and used nodeJs (in backend), Twilio, socket.io. It allows users to make video calls with other users online.] 
                user will connect with end user and can have group video call with each other.
              </div>
              <a className="project-link" href="https://github.com/Nitishji7050/video-calling" target="_blank" rel="noopener noreferrer">Project Link</a>
            </div>
          </div>
          {/* 3rd project */}
          <div className="project-card">
            <div className="project-photo">
              <img src={groceryMartImg} alt="Grocery Mart App" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="project-info">
              <div className="project-desc">This is a grocery mart app built using React and Firebase. It allows users to browse products, add items to cart, also have chatbot support system and manage their orders 
                tech used [HTML, CSS, JavaScrip].                     </div>
              <a className="project-link" href="https://github.com/Nitishji7050/Grocery-mart" target="_blank" rel="noopener noreferrer">Project Link</a>
            </div>
          </div>
          {/* for other project placeholders */}
          {[].map((_, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-photo">
                {/* Project image placeholder */}
                <span className="project-photo-placeholder">Photo</span>
              </div>
              <div className="project-info">
                <div className="project-desc">Project description goes here.</div>
                <a className="project-link" href="#" target="_blank" rel="noopener noreferrer">Project Link</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="certificates-section" id="certificates">
        <h2 className="certificates-title">Certificates</h2>
        <div className="certificates-list">
          {/* 1st certificate */}
          <div className="certificate-card">
            <div className="certificate-photo">
              <img src={CppImg} alt="C++ Certificate" style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onClick={() => window.open(CppImg, "_blank")} />
            </div>
            <p className="certificate-caption">C++</p>
          </div>
          {/* 2nd certificate */}
          <div className="certificate-card">
            <div className="certificate-photo">
              <img src={DevopsImg} alt="DevOps Certificate" style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              onClick={() => window.open(DevopsImgImg, "_blank")}/>
            </div>
            <p className="certificate-caption">DevOps</p>
          </div>
          {/* 3rd certificate */}
          <div className="certificate-card">
            <div className="certificate-photo">
              <img src={jsImg} alt="JavaScript Certificate" style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              onClick={() => window.open(jsImg, "_blank")}/>
            </div>
            <p className="certificate-caption">JavaScript</p>
          </div>
          {/* 4th certificate */}
          <div className="certificate-card">
            <div className="certificate-photo">
              <img src={DjangoImg} alt="Django Certificate" style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              onClick={() => window.open(DjangoImg, "_blank")}/>
            </div>
            <p className="certificate-caption">Django</p>
          </div>
          {/* 5th certificate */}
          <div className="certificate-card">
            <div className="certificate-photo">
              <img src={AgenticImg} alt="Agentic AI Certificate" style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              onClick={() => window.open(AgenticImg, "_blank")}/>
            </div>
            <p className="certificate-caption">Agentic AI</p>
          </div>
          {/* Other certificate placeholders */}
          {[].map((_, idx) => (
            <div className="certificate-card" key={idx}>
              <div className="certificate-photo">
                <span className="certificate-photo-placeholder">Image</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer-about" id="contact">
        <div className="about-section">
          <h3>About Me</h3>
          <p>
            Hi, I'm Nitish Sharma, a passionate website developer focused on building creative and functional web experiences. I enjoy learning new technologies and collaborating on exciting projects.
          </p>
          <div className="about-contact">
            <span>Email: </span>
            <a href="mailto:nitishji7050@gmail.com">nitishji7050@email.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
