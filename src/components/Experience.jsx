import { useState, useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    id: 1,
    icon: '🧪',
    title: 'Research Lab Internship',
    cardDescription: 'Biomedical Research | 6 months | Department of Pharmaceuticals',
    modalDescription: `
    <h1>Industrial Internship at Reltsen Health Care</h1>

   <p className="intro">
      During my industrial internship at Reltsen Health Care, Thirubuvanai,
      Puducherry, I gained exposure to the complete pharmaceutical manufacturing
      workflow, from raw material handling to the release of finished products.
      The experience provided valuable insight into how various departments work
      together to ensure quality, compliance, and operational efficiency.
    </p>

    <h2>Store Department</h2>

    <p>
     The Store Department was the starting point of the manufacturing process.
     Raw materials were received, sampled, tested, approved, and stored in
     dedicated areas such as Receiving, Under Test, Quarantine, Approved,
     Rejection, Cold Storage, Dispensing, and Daylight Stores.
    </p>

    <p>
    Materials were transferred between sections using dynamic pass boxes,
    minimizing contamination risks and ensuring a controlled flow of materials.
    I also observed the inventory management system used to track APIs,
    excipients, capsules, packaging materials, and other consumables.
    </p>

    <h2>Production Department</h2>

    <p>
    In the Production Department, I observed the complete manufacturing process
    for tablets and capsules. The workflow included granulation, blending,
    compression, coating, capsule filling, and intermediate storage stages.
    </p>

    <p>
    I gained an understanding of how raw materials are transformed into finished
    dosage forms while maintaining strict process controls. The department also
    housed In-Process Quality Assurance (IPQA), which monitored critical
    parameters throughout manufacturing.
    </p>

    <h2>Packaging Department</h2>

    <p>
    The Packaging Department handled both primary and secondary packaging
    operations. The facility utilized blister, strip, and Alu-Alu packaging
    systems depending on product requirements.
    </p>

    <p>
    I observed how printed packaging materials containing batch information,
    manufacturing details, and regulatory information were incorporated into the
    packaging process before final distribution.
    </p>

    <h2>Quality Control (QC)</h2>

    <p>
    The Quality Control laboratory consisted of sample storage areas, wet
    chemistry laboratories, and instrumental analysis sections. Samples were
    collected at multiple stages of manufacturing to verify product quality.
    </p>

    <p>
    I was introduced to analytical instruments including HPLC, UV-Visible
    Spectrophotometers, Dissolution Testers, and Disintegration Testers. The
    laboratory performed evaluations such as hardness, friability,
    disintegration, dissolution, and assay testing according to pharmacopeial
    standards.
    </p>

    <h2>Quality Assurance (QA)</h2>

    <p>
    The Quality Assurance Department focused on documentation, compliance, and
    record management. QA personnel reviewed and compiled records from various
    departments to ensure adherence to Good Manufacturing Practices (GMP) and
    regulatory requirements.
    </p>

    <h2>Key Takeaways</h2>

    <p>
    This internship provided me with a comprehensive understanding of
    pharmaceutical manufacturing operations, quality systems, documentation
    practices, and cross-functional coordination.
    </p>

    <p>
    Observing the journey of a product from raw material receipt to finished
    packaging gave me valuable industry exposure and strengthened my practical
    understanding of pharmaceutical production and quality management.
    </p>
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
