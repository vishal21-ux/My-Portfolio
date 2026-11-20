import useInView from '../hooks/useInView'

const education = [
  {
    id: 'skcet',
    school: 'Sri Krishna College of Engineering and Technology',
    degree: 'B.E. Computer Science and Engineering',
    period: '2024 – 2028',
    grade: 'CGPA 7.7',
    location: 'Coimbatore, Tamil Nadu',
  },
  {
    id: 'unique',
    school: 'Unique Public Matriculation Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2024',
    grade: '78.9%',
    location: 'Ooty, Tamil Nadu',
  },
  {
    id: 'knm',
    school: 'SRI KNM Matriculation School',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2022',
    grade: '71.5%',
    location: 'Ooty, Tamil Nadu',
  },
]

const certifications = [
  {
    id: 'google-cybersecurity',
    name: 'Google Cybersecurity',
    issuer: 'Google',
  },
  {
    id: 'ms-genai',
    name: 'Generative AI for Data Analysis',
    issuer: 'Microsoft',
  },
  {
    id: 'google-analytics',
    name: 'Data Analytics',
    issuer: 'Google',
  },
]

export default function Education() {
  const [eduRef, eduInView] = useInView()
  const [certRef, certInView] = useInView()
  return (
    <>
      <section id="education" aria-labelledby="education-heading" ref={eduRef} className={`fade-in${eduInView ? ' visible' : ''}`}>
        <div className="container">
          <span className="section-label" aria-hidden="true">05 — Education</span>
          <h2 id="education-heading" className="section-title">Academic background</h2>

          <div className="education__list" role="list">
            {education.map(item => (
              <div key={item.id} className="education-item" role="listitem" aria-label={`${item.school} — ${item.degree}`}>
                <div>
                  <div className="education-item__school">{item.school}</div>
                  <div className="education-item__degree">{item.degree}</div>
                  <div className="education-item__location">{item.location}</div>
                </div>
                <div className="education-item__meta">
                  <div className="education-item__year">{item.period}</div>
                  <div className="education-item__grade">{item.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" aria-labelledby="cert-heading" ref={certRef} className={`fade-in${certInView ? ' visible' : ''}`}>
        <div className="container">
          <span className="section-label" aria-hidden="true">06 — Certifications</span>
          <h2 id="cert-heading" className="section-title">Certifications</h2>

          <div className="certifications__grid" role="list">
            {certifications.map(cert => (
              <div key={cert.id} className="cert-card" role="listitem" aria-label={`${cert.name} by ${cert.issuer}`}>
                <span className="cert-card__issuer-badge">{cert.issuer}</span>
                <div className="cert-card__name">{cert.name}</div>
                <div className="cert-card__issuer">Issued by {cert.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
