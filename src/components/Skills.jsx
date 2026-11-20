import useInView from '../hooks/useInView'

const skillGroups = [
  {
    label: 'Languages',
    tags: ['C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    label: 'Frameworks & Tools',
    tags: ['React.js', 'Spring Boot', 'MySQL', 'Git'],
  },
  {
    label: 'Technologies',
    tags: ['Machine Learning', 'Large Language Models'],
  },
  {
    label: 'Libraries',
    tags: ['NumPy', 'Pandas', 'Scikit-learn'],
  },
  {
    label: 'Operating Systems',
    tags: ['Windows', 'Linux'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()
  return (
    <section id="skills" aria-labelledby="skills-heading" ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
      <div className="container">
        <span className="section-label" aria-hidden="true">02 — Skills</span>
        <h2 id="skills-heading" className="section-title">Technical skills</h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <div className="skill-group__label">{group.label}</div>
              <div className="skill-group__tags">
                {group.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
