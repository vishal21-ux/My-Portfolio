import useInView from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()
  return (
    <section id="about" aria-labelledby="about-heading" ref={ref} className={`fade-in${inView ? ' visible' : ''}`}>
      <div className="container">
        <span className="section-label" aria-hidden="true">01 — About</span>
        <h2 id="about-heading" className="section-title">A bit about me</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a third-year B.E. Computer Science and Engineering student at
              Sri Krishna College of Engineering and Technology, Coimbatore. I find
              genuine interest in building software that solves real problems — not
              just for the sake of it.
            </p>
            <p>
              My focus centers on software engineering and problem solving with Data
              Structures and Algorithms (DSA), alongside full-stack development with
              React and Spring Boot. I'm drawn to projects where solid engineering logic,
              reliable backends, and responsive user experiences come together cleanly.
            </p>
            <p>
              Outside of coursework, I consistently practice problem solving, explore
              modern software architecture, and work on real-world projects to write
              cleaner, more maintainable code each day.
            </p>
          </div>

          <div className="about__meta">
            <div className="about__meta-item">
              <div className="about__meta-label">Currently studying at</div>
              <div className="about__meta-value">Sri Krishna College of Engineering and Technology</div>
              <div className="about__meta-sub">Coimbatore, Tamil Nadu</div>
            </div>

            <div className="about__meta-item">
              <div className="about__meta-label">Degree</div>
              <div className="about__meta-value">B.E. Computer Science & Engineering</div>
              <div className="about__meta-sub">2024 – 2028 &nbsp;·&nbsp; CGPA 7.7</div>
            </div>

            <div className="about__meta-item">
              <div className="about__meta-label">Interests</div>
              <div className="about__meta-value">Software Engineering</div>
              <div className="about__meta-sub">DSA & Problem Solving · Full-Stack Development · Machine Learning</div>
            </div>

            <div className="about__meta-item">
              <div className="about__meta-label">Based in</div>
              <div className="about__meta-value">Ooty, Tamil Nadu, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
