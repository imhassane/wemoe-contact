import React from 'react'
import { Link } from 'react-router-dom'

const Footer = props => {
  return (
    <footer className="row uk-background-secondary">
      <div className="uk-padding col-xs-12 col-md-4">
        <h2 className="title">#wemoe</h2>
      </div>
      <div className="uk-padding col-xs-12 col-md-4">
        <h3 className="title">Partenaires</h3>
      </div>
      <div className="uk-padding col-xs-12 col-md-4">
        <h3 className="title">Liens utiles</h3>
        <ul className="">
          <li><Link to="/dashboard">Administration du site</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
