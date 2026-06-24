import { useState, useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    id: 1,
    icon: '🧪',
    title: 'Relsten Health Care',
    cardDescription: 'Manufacturing Plant | 15 days | Tablets | Capsules',
    modalDescription: `
    # Industrial Internship at Reltsen Health Care, Puducherry

    During my industrial internship at Reltsen Health Care, Thirubuvanai, Puducherry, I gained exposure to the complete pharmaceutical manufacturing workflow, from raw material handling to the release of finished products. The experience allowed me to observe how different departments collaborate to ensure product quality, regulatory compliance, and efficient manufacturing operations.

    ## Store Department

    My journey began in the Store Department, where I learned how raw materials are received, tested, approved, stored, and dispensed for production. The facility was organized into dedicated areas such as Receiving, Under Test, Quarantine, Sampling, Approved, Cold Storage, Rejection, Dispensing, and Daylight Stores. Materials moved between areas through dynamic pass boxes, minimizing contamination risks and ensuring controlled material flow.

    I also observed the inventory management system used to track APIs, excipients, capsules, packaging materials, and other manufacturing consumables. Before each batch was manufactured, the required quantities of raw materials were accurately dispensed and transferred to production.

    ## Production Department

    The Production Department provided insight into the manufacturing of tablets and capsules. I observed various stages including granulation, blending, compression, coating, capsule filling, and intermediate storage. The workflow demonstrated how raw materials are transformed into finished dosage forms while maintaining process consistency and quality standards.

    I also learned about the role of In-Process Quality Assurance (IPQA), which monitors critical parameters throughout manufacturing to ensure compliance with established specifications.

    ## Packaging Department

    In the Packaging Department, I observed both primary and secondary packaging operations. The company utilized blister, strip, and Alu-Alu packaging systems depending on product requirements. Printed packaging materials containing batch information, manufacturing details, and regulatory information were prepared and integrated into the packaging process before final dispatch.

    ## Quality Control (QC)

    One of the most interesting parts of the internship was understanding the Quality Control workflow. I observed how samples were collected at multiple stages of manufacturing and tested for various quality parameters.

    The QC laboratory was divided into sample storage areas, wet chemistry laboratories, and instrumental analysis sections. I was introduced to analytical instruments such as HPLC, UV-Visible Spectrophotometers, Dissolution Testers, and Disintegration Testers. The team performed evaluations including hardness, friability, dissolution, disintegration, and assay testing according to pharmacopeial standards.

    ## Quality Assurance (QA)

    The Quality Assurance Department highlighted the importance of documentation and compliance in pharmaceutical manufacturing. QA personnel reviewed records from different departments, compiled manufacturing documentation, and ensured adherence to Good Manufacturing Practices (GMP) and quality standards before product release.

    ## Key Takeaways

    This internship provided me with a comprehensive understanding of pharmaceutical manufacturing operations, quality systems, documentation practices, and cross-functional coordination. It strengthened my appreciation for the precision, discipline, and regulatory controls required to produce safe and effective pharmaceutical products.

    The experience not only enhanced my technical knowledge but also gave me practical insight into how a modern pharmaceutical manufacturing facility operates on a day-to-day basis.
    `,
    bannerImage: '/Assets/1 Banner.png',
    carouselImages: [
      '/Assets/1 1.png',
      '/Assets/1 2.png',
      '/Assets/1 3.png',
      '/Assets/1 4.png',
      '/Assets/1 5.png',
    ],
    tags: ['Quality Control', 'Formulation', 'Manufacturing Workflow'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const [selectedExperienceId, setSelectedExperienceId] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [editedDescriptions, setEditedDescriptions] = useState({})

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const selectedExperience = EXPERIENCES.find(e => e.id === selectedExperienceId)

  const handlePrevImage = () => {
    if (selectedExperience) {
      setCurrentImageIndex(prev =>
        prev === 0 ? selectedExperience.carouselImages.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (selectedExperience) {
      setCurrentImageIndex(prev =>
        prev === selectedExperience.carouselImages.length - 1 ? 0 : prev + 1
      )
    }
  }

  const openModal = (experienceId) => {
    setSelectedExperienceId(experienceId)
    setCurrentImageIndex(0)
    setIsEditing(false)
  }

  const closeModal = () => {
    setSelectedExperienceId(null)
    setCurrentImageIndex(0)
    setIsEditing(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const updateDescription = (id, field, value) => {
    setEditedDescriptions(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }))
  }

  const getCardDescription = (exp) => {
    return editedDescriptions[exp.id]?.cardDescription || exp.cardDescription
  }

  const getModalDescription = (exp) => {
    return editedDescriptions[exp.id]?.modalDescription || exp.modalDescription
  }

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <span className="section-tag reveal">Experience</span>
        <h2 className="section-title reveal reveal-delay-1">Professional Journey</h2>

        <div className="experience-grid">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.id}
              className={`experience-card glass-card reveal reveal-delay-${i + 1}`}
              onClick={() => openModal(exp.id)}
              style={{ cursor: 'pointer', overflow: 'hidden' }}
            >
              <img
                src={exp.bannerImage}
                alt={exp.title}
                className="experience-banner"
              />
              <div className="experience-card-content">
                <div className="experience-icon">{exp.icon}</div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-desc">{getCardDescription(exp)}</p>
                <div className="experience-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>✕</button>
            <button
              className="modal-edit-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? '✓ Done' : '✏ Edit'}
            </button>

            <div className="modal-carousel">
              <img
                src={selectedExperience.carouselImages[currentImageIndex]}
                alt={`Experience ${currentImageIndex + 1}`}
                className="carousel-image"
              />
              <button className="carousel-nav-btn carousel-prev" onClick={handlePrevImage}>
                ‹
              </button>
              <button className="carousel-nav-btn carousel-next" onClick={handleNextImage}>
                ›
              </button>
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{selectedExperience.title}</h2>

              {isEditing ? (
                <textarea
                  className="modal-edit-textarea"
                  value={getModalDescription(selectedExperience)}
                  onChange={(e) => updateDescription(selectedExperience.id, 'modalDescription', e.target.value)}
                  placeholder="Enter description..."
                />
              ) : (
                <p className="modal-description">{getModalDescription(selectedExperience)}</p>
              )}

              <div className="modal-tags">
                {selectedExperience.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
