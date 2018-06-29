import React from 'react'
import { database } from '../../firebase'

export default class Message extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  componentWillMount(){
    const ref = database.ref('message')

    ref.on('value', snap => {
      const datas = snap.val()
      this.setState({ datas })
    })
  }
  render(){
    if(!this.state.datas) return <p className="has-text-centered">Chargement des messages</p>

    const messages = Object.keys(this.state.datas).map(k => {
      const data = this.state.datas[k]
      const date = (new Date(data.date)).toUTCString()
      return (
        <tr key={k}>
              <td>{data.subject}</td>
              <td>{date}</td>
              <td><a className="button is-warning" href="#">Marquer comme lu</a></td>
        </tr>
      )
    })
    return (
      <div className="uk-margin">
        <h3>Messages reçus de la part de vos visiteurs</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Sujet</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { messages }
          </tbody>
        </table>
      </div>
    )
  }
}
