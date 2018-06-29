import React from 'react'

export default class Video extends React.Component {
  constructor(props){
    super(props)
    this.state = { visible: false }
  }
  handleLinkDisplay = () => {
    let visible = this.state.visible
    visible = !visible
    this.setState({ visible })
  }
  render(){
    return (
      <div className="hero is-fullheight is-fullwidth is-success" id="second-step">
        <div className="hero-body">
          <div className="container">

            <h2 className="title">{this.props.question}</h2>

            <div className="uk-margin">
              <iframe width="720" height="400"
              src="https://www.youtube.com/embed/mGVVT3-SE7Y" frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen></iframe>
            </div>

            <a href="#third-step" className="button is-info" onClick={ e => {
              this.props.onShowArticle()
              this.handleLinkDisplay()
            }}>Je souhaiterais lire le texte</a>
          </div>
        </div>
      </div>
    )
  }
}
