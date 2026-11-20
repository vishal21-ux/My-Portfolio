// SVG Icons
import useInView from '../hooks/useInView'

const FolderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const projects = [
  {
    id: 'ngo-system',
    icon: <FolderIcon />,
    title: 'NGO Volunteering Management System',
    description:
      'A full-stack platform that connects volunteers with social initiatives and community service opportunities, designed to simplify coordination between NGOs and their volunteer base.',
    features: [
      'Volunteer registration and secure authentication flow',
      'Role-based access control and event management',
      'Participation tracking and responsive dashboards',
      'REST API integration using Spring Boot and MySQL',
    ],
    stack: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    github: 'https://github.com/vishal21-ux/-NGO-Volunteering-Platform',
    githubLabel: 'GitHub ↗',
  },
  {
    id: 'phishing-detector',
    icon: <FolderIcon />,
    title: 'Phishing Detector',
    description:
      'A cybersecurity tool that identifies phishing messages using an ensemble of machine learning models, combining NLP-based text analysis with heuristic risk scoring.',
    features: [
      'Naive Bayes, SVM, and Random Forest ensemble models',
      'TF-IDF vectorization for text feature extraction',
      'Suspicious URL and urgency pattern detection',
      'Dynamic risk scoring with majority voting system',
    ],
    stack: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF'],
    github: 'https://github.com/vishal21-ux/-phishing-detector',
    githubLabel: 'GitHub ↗',
  },
]

export default function Projects() {
  const [ref, inView] = useInView()
  return (
    <section id="projects" aria-labelledby="projects-heading" ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
      <div className="container--wide">
        <span className="section-label" aria-hidden="true">03 — Projects</span>
        <h2 id="projects-heading" className="section-title">Things I've built</h2>

        <div className="projects__grid">
          {projects.map(project => (
            <article key={project.id} className="project-card" aria-label={project.title}>
              <div className="project-card__header">
                <div className="project-card__icon" aria-hidden="true">
                  {project.icon}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                  id={`${project.id}-github`}
                  aria-label={`View ${project.title} on GitHub (update URL with actual link)`}
                >
                  <GithubIcon />
                  {project.githubLabel}
                </a>
              </div>

              <h3 className="project-card__title">{project.title}</h3>

              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__features" aria-label="Key features">
                {project.features.map((f, i) => (
                  <div key={i} className="project-card__feature">{f}</div>
                ))}
              </div>

              <div className="project-card__stack" aria-label="Technology stack">
                {project.stack.map(tech => (
                  <span key={tech} className="project-card__tech">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
