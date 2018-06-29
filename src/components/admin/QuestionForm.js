import React from 'react'
import { database } from '../../firebase'

export default class QuestionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { success: false, error: false }
  }
  handleQuestion = e => {
    const question = e.target.value
    this.setState({ question })
  }
  handleUrl = e => {
    const url = e.target.value
    this.setState({ url })
  }
  handleArticle = e => {
    const article = e.target.value
    this.setState({ article })
  }
  handleSubmit = e => {
    e.preventDefault()

    let question = this.state.question
    let url = this.state.url
    let article = this.state.article
    let date = Date.now()

    if(!url) url = ''

    const ref = database.ref('faq')
    ref.push({ question, url, article, date })
    this.setState({ success: true })
  }
  render(){
    return (
      <div className="">
        { this.state.error && <p className="alert alert-danger">Remplissez correctement les champs</p>}
        { this.state.success && <p className="alert alert-success">Votre FAQ a été mise à jour</p>}
        <form method="post">
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Ajouter une nouvelle question à la FAQ</legend>

            <div className="form-group">
              <label htmlFor="question">A quelle question souhaiteriez vous répondre ?</label>
              <input type="text" className="form-control" onChange={ e => this.handleQuestion(e) } required placeholder="Ex: Le questionnaire de santé, c'est quoi ?"/>
            </div>

            <div className="form-group">
                <label htmlFor="url">URL de la vidéo</label>
                <input type="url" className="form-control" onChange={ e => this.handleUrl(e) } placeholder="Ex: https://abc.def.ghi/video.mp4" />
            </div>

            <div className="form-group">
              <label htmlFor="article">Réponse textuelle</label>
              <textarea className="form-control" onChange={ e => this.handleArticle(e) } required placeholder="Ex: Le questionnaire de santé est ..."></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="button is-link" onClick={ e => this.handleSubmit(e) }>Ajouter cette question</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
