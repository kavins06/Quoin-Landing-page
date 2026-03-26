function SectionBlock({ section }) {
  return (
    <section id={section.id} className="section-block section-panel">
      <div className="section-block__frame">
        <div className="section-block__meta content-reveal">
          <span className="section-block__index">{section.index}</span>
          <span className="section-block__eyebrow">{section.eyebrow}</span>
        </div>

        <div className="section-block__content">
          <h2 className="content-reveal">{section.title}</h2>
          <p className="section-block__body content-reveal">{section.body}</p>

          <div className="section-block__split">
            <ul className="section-list content-reveal">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="section-note content-reveal">
              <span className="section-note__label">{section.noteLabel}</span>
              <p>{section.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBlock
