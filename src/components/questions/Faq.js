import React from 'react'
import { app } from '../../firebase'

class Faq extends React.Component {
  constructor(props){
    super(props)
    this.state = { visible: false }
  }
  componentDidMount(){
    const ref = app.database().ref('faq')

    ref.on('value', snapshot => {
      const datas = snapshot.val()

      if(datas!==undefined)
        this.setState({ datas })
      else
        this.setState({ datas: [] })
    })
  }
  handleLinkDisplay = () => {
    let visible = this.state.visible
    visible = !visible
    this.setState({ visible })
  }
  handleSelect = e => {
    const key = e.target.value
    
    Object.keys(this.state.datas).map(k => {
      const data = this.state.datas[k]
      if(k === key){
        this.props.onGetVideoAndText(data.question, data.article, data.video, data.date)
        this.handleLinkDisplay()
      }
    }
  }
  render(){
    if(!this.state.datas) return <p>Chargement</p>

    const questions = Object.keys(this.state.datas).map(k => {
      const data = this.state.datas[k]
      return (
        <option value={data.question} key={data.question}>{data.question} </option>
      )
    })
    return (
      <div className="hero is-fullheight is-warning" id="first-step">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">En quoi pourrions-nous vous aider ?</h2>
            <div className="uk-margin">
              <select className="form-control" onChange={ e=> this.handleSelect(e) }>
                {questions}
              </select>
            </div>
             <a href="#second-step" className="button is-success">Etape suivante</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Faq
