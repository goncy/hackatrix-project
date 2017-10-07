import React from "react"

import "./navbar.style.css"

const NavBar = ({ children }) => (
  <nav className="NavBar navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="http://bulma.io">
        <img
          src="http://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>
    </div>

    <div className="container">{children}</div>
  </nav>
)

export default NavBar
