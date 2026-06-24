import { useState, useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    id: 1,
    icon: '🧪',
    title: 'Research Lab Internship',
    cardDescription: 'Biomedical Research | 6 months | Department of Pharmaceuticals',
    modalDescription: 'Conducted biomedical research focusing on drug delivery systems and formulation science. Collaborated with a team of 5 researchers on developing innovative solutions for protein bioavailability. Gained hands-on experience with advanced laboratory techniques and contributed to 2 published research papers.',
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
