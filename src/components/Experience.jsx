import useInView from '../hooks/useInView'

const experiences = [
  {
    id: 'codsoft-intern',
    title: 'Java Programming & Application Development Intern',
    company: 'CodSoft',
    period: '2026',
    type: 'Internship',
    points: [
      'Applied Core Java and Object-Oriented Programming concepts to build practical applications.',
      'Developed Java-based programs covering classes, objects, methods, arrays, and exception handling.',
      'Worked through structured assignments to deepen understanding of software development workflows.',
      'Improved debugging and problem-solving skills through hands-on coding tasks and code reviews.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()
  return (
    <section id="experience" aria-labelledby="experience-heading" ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
      <div className="container">
        <span className="section-label" aria-hidden="true">04 — Experience</span>
        <h2 id="experience-heading" className="section-title">Work experience</h2>

        <div className="experience__timeline" role="list">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-item" role="listitem" aria-label={`${exp.title} at ${exp.company}`}>
              <div className="experience-item__header">
                <h3 className="experience-item__title">{exp.title}</h3>
                <span className="experience-item__period">{exp.period}</span>
              </div>
              <div className="experience-item__company">{exp.company} &nbsp;·&nbsp; {exp.type}</div>
              <div className="experience-item__points" role="list" aria-label="Responsibilities">
                {exp.points.map((point, i) => (
                  <div key={i} className="experience-item__point" role="listitem">{point}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
