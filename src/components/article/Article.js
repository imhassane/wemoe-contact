import React from 'react'
import nl2br from 'react-nl2br'

export default class Article extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let date = new Date(this.props.date)
    date = date.toUTCString()
    return (
      <div className="hero is-fullheight" id="third-step">
        <div className="hero-body">
          <div className="container uk-card uk-card-hover uk-padding">

            <div className="uk-flex-middle uk-margin" uk-grid="true">
              <h2 className="uk-card-title">{this.props.question}</h2>
              <div className="uk-width-expand">
                <p className="uk-text-meta">{date}</p>
              </div>
            </div>

            <p className="uk-margin uk-text-middle">{nl2br(this.props.article)}</p>

            <a href="#fourth-step" className="button is-dark" onClick={e => this.props.onShowContact() }>Contacter wemoe</a>

          </div>
        </div>
      </div>
    )
  }
}
