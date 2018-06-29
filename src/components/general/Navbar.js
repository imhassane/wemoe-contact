import React from 'react'

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="" className="navbar-item">#wemoe</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
