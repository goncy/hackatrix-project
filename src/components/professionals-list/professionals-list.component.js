import React from "react"
import R from "ramda"

import { compose, withState, withProps } from "recompose"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { NavBar } from "../common/navbar"
import { Modal } from "../common/modal"
import { Filters } from "./filters"

import "./professionals-list.css"

const ProfessionalsList = ({
  showModal,
  setShowModal,
  professionals,
  hasProfessionals
}) => {
  return (
    <div>
      <NavBar>
        <a className="navbar-item" onClick={() => setShowModal(true)}>
          <span className="icon" style={{ color: "#333" }}>
            <i className="fa fa-lg fa-filter" />
          </span>
        </a>
      </NavBar>
      <div className="ProfessionalsList">
        <section>
          <div className="container">
            {!hasProfessionals && (
              <div className="notification is-warning">
                No se encontraron resultados para esta busqueda
              </div>
            )}
            {hasProfessionals &&
              professionals.map(professional => (
                <div className="card" key={professional.id}>
                  <header className="card-header">
                    <p className="card-header-title">{professional.name}</p>
                    <a
                      role="button"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i className="fa fa-star" aria-hidden="true" />
                        <span style={{ marginLeft: "0.2rem" }}>
                          {professional.ratings}
                        </span>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>{professional.bio}</p>
                          <div>
                            {professional.skills.map(skill => (
                              <div key={skill} className="tag is-primary">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <footer className="card-footer">
                    <Link
                      className="card-footer-item"
                      to={`/contacts/${professional.id}`}
                    >
                      Contactar
                    </Link>
                  </footer>
                </div>
              ))}
          </div>
        </section>

        {/* Filters modal */}
        {showModal && (
          <Modal onClose={() => setShowModal(false)} title="Filtros">
            <Filters />
          </Modal>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ users, filters }) => ({
  professionals: users.professionals,
  skillFilter: filters.skill,
  locationFilter: filters.location
})

const ProfessionalsListHOC = compose(
  connect(mapStateToProps),
  withState("showModal", "setShowModal", false),
  withProps(({ professionals, skillFilter, locationFilter }) => ({
    professionals: R.pipe(
      items => {
        if (skillFilter) {
          return items.filter(item => item.skills.includes(skillFilter))
        } else {
          return items
        }
      },
      items => {
        if (locationFilter) {
          return items.filter(item => item.location === locationFilter)
        } else {
          return items
        }
      }
    )(professionals)
  })),
  withProps(({ professionals }) => ({
    hasProfessionals: professionals.length > 0
  }))
)

export default ProfessionalsListHOC(ProfessionalsList)
