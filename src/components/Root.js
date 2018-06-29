import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import Proposition from './general/Proposition'
import Choix from './questions/Choix'
import Faq from './questions/Faq'
import Video from './video/Video'
import Article from './article/Article'
import Contact from './contact/Contact'
import Footer from './general/Footer'

import AdminNavigation from './admin/AdminNavigation'
import QuestionForm from './admin/QuestionForm'
import Message from './contact/Message'

import 'uikit/dist/css/uikit.min.css'
import 'bulma/css/bulma.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'uikit/dist/js/uikit.min.js'

class Root extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  getVideoAndText = (question, text, url, date) => {
    this.setState({
      showVideo: true,
      question: question,
      url: url,
      article: text,
      date
    })
  }

  showArticle = () => {
    this.setState({ showArticle: true })
  }

  showContact = () => {
    this.setState({ showContact: true })
  }

  render(){
    return (
      <Router>
        <div>
        <Route path='/' exact render={ () => {
          return (
            <div>

              <div className="container-fluid">

                <Proposition onShowContact={this.showContact} />

                <Faq onGetVideoAndText={this.getVideoAndText} onShowContact={this.showContact} />

                { this.state.showVideo && <Video question={this.state.question} video={this.state.url} onShowArticle={this.showArticle}/> }
                { this.state.showArticle && <Article question={this.state.question} article={this.state.article} date={this.state.date} onShowContact={this.showContact} /> }
                { this.state.showContact && <Contact /> }

              </div>

              <Footer />

            </div>
          )
          }} />

          <Route path='/dashboard' exact render={() => {
            return (
              <div className="container">
                <AdminNavigation />
                <QuestionForm />
                <Message />
              </div>
            )
          }} />
        </div>
      </Router>
    )
  }
}

export default Root
