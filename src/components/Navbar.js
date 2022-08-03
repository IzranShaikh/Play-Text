import React from 'react'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <a className="navbar-brand mx-4" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only"></span></a>
        </div>
      </div>
      <div className="form-check form-switch mx-5">
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="darkModeSwitch" />
        <label className={`form-check-label text-${(props.mode === "dark")?"light":"dark"}`} htmlFor="darkModeSwitch">DARK MODE</label>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: "PLAY-TEXT"
}