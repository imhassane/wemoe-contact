import React from 'react'

class Choix extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div id="first-step" className="container hero is-large">
        <div className="hero-body">
          <h2>Avez-vous déjà entamé la démarche ?</h2>
          <select className="form-control">
            <option value="non">Non, je veux savoir comment elle se passe</option>
            <option value="oui">Oui, je suis dans la démarche</option>
          </select>
        </div>
      </div>
    )
  }
}
export default Choix
