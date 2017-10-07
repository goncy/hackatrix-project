import React from "react"

import "./filters.style.css"

const Filters = () => (
  <div className="Filters">
    <div className="field">
      <label className="label">Especialidad</label>
      <div className="control">
        <div className="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>
    <div className="field">
      <label className="label">Zona</label>
      <div className="control">
        <div className="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>
  </div>
)

export default Filters
