import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavigation = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light uk-margin-bottom">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><Link className="nav-link" to="/">#wemoe</Link></li>
        <li className="nav-item"><a className="nav-link" href="">Nouvelle question ?</a></li>
        <li className="nav-item"><a className="nav-link" href="">Messages reçus</a></li>
      </ul>
    </nav>
  )
}

export default AdminNavigation
