import React from 'react'
import ContactForm from './ContactForm'
import nl2br from 'react-nl2br'

const Contact = props => {
  return (
    <div className="hero is-fullheight" id="fourth-step">
      <div className="hero-body">
        <div className="container uk-child-width-1-2@m uk-child-width-1-1@s" uk-grid="true">
          <div className="">
            <h3>Appelez le service client</h3>
            <p className="">
            {  nl2br(`Nous faisons de notre mieux pour répondreà tout le monde.
              De ce fait, si votre question n est pas pertinente, nous vous prions de
              continuer vos recherches sur la foire à question.
              Merci !! :)`)}
            </p>
            <p className="form-control has-text-centered">+33 9 70 75 23 10</p>
          </div>
          <div className="">
            <h3>Envoyez un email</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
