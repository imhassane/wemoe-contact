import React from 'react'

import Navbar from '../general/Navbar'

class Proposition extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="hero is-large container">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <p className="uk-text-lead">
            Spécialisé dans l assurance apprunteur pour les personnes présentant
            ou non un risque de santé, we moe vous garantit une information claire
            et simplifiée.
          </p>
          <p>
            <a href="#first-step" className="button is-danger">Je veux une information</a>
          </p>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li>
                    <a href="#fourth-step" onClick={e => this.props.onShowContact()}>Poser une question</a>
                  </li>
                  <li>
                    <a href="https://www.wemoe.fr" target="blank">Site web de wemoe</a>
                  </li>
                  <li>
                    <a href="#fourth-step" onClick={e => this.props.onShowContact()}>Envoyer un mail</a>
                  </li>
                  <li>
                    <a href="#fourth-step" onClick={e => this.props.onShowContact()}>Faire des suggestions</a>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
      </div>
    )
  }
}
export default Proposition
