import React from 'react'
import { database } from '../../firebase'

export default class ContactForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { success: false }
  }
  handleSubmit = e => {
    e.preventDefault()
    const from = document.getElementById('email').value
    const to = 'imthassane@gmail.com'
    const subject = document.getElementById('subject').value
    const html = document.getElementById('html').value
    const date = Date.now()
    const read = false

    const mail = { from, to, subject, html, date, read }
    database.ref('message').push(mail)
  }
  render(){
    return (
      <div className="">
        {!this.state.error && <p className="">Veuillez saisir toutes les informations</p>}
        {this.state.success && <p className="">Votre message a été envoyé avec succès</p>}
        <form method="post">
          <div className="form-group">
            <label htmlFor="pseudo">Entrez votre adresse email</label>
            <input type="email" id="email" className="form-control" placeholder="Ex: abc@def.com" />
          </div>
          <div className="form-group">
            <label htmlFor="objet">Objet de votre email</label>
            <input type="text" id="subject" className="form-control" placeholder="Ex: Informations sur le compromis de vente" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Entrez votre message</label>
            <textarea type="text" id="html" className="form-control" placeholder="Ex: Je souhaiterai" cols="6"></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Envoyer le mail" onClick={ e => this.handleSubmit(e) }/>
          </div>
        </form>
      </div>
    )
  }
}
