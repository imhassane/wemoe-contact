import React from 'react'
import { app } from '../../firebase'

export default class Video extends React.Component {
  constructor(props){
    super(props)
    this.state = { visible: false }
  }
  componentWillMount(){
    this.loadUrl()
  }
  
  loadUrl = () => {
    let lien = 'logoheader.png'

    if(this.props.url !== ''){
        lien = this.props.url
        this.setState({ video: true })
    }else{
        this.setState({ video: false })
    }

    const ref = app.storage().ref(lien)

    ref.getDownloadURL().then(url => {
      this.setState({ lien: url })
    })
    .catch(error => {
      this.setState({ error: true })
    })
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
              { this.state.lien && !this.state.video && <img src={this.state.lien} />}
              { this.state.video && <video src={this.state.lien} controls></video> }
      
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
