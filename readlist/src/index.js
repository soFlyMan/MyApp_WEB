import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import App from './App'
import './css/index.css'
import sofly from '../images/soFly.jpg'


import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

import ReadList from './components/readlist/ReadList.js'
import MyBlog from './components/blog/MyBlog.js'
import Introduce from './components/introduce/Introduce.js'
import Editor from './components/editor/Editor.js'

injectTapEventPlugin()
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {open: true}
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  handleOpen = () => this.setState({open: true})
  render() {
    return (
      <MuiThemeProvider>
        <div>
            <Route exact path="/" component={MyBlog} />
            <Route path="/introduce" component={Introduce} />
            <Route path="/readlist" component={ReadList} />
            <Route path="/editor" component={Editor} />
            <Drawer open={this.state.open}>
              <Link to="/introduce">
                <MenuItem>
                  <Avatar src={sofly} size={80} style={{marginTop: 12, marginLeft: 70}}/>
                  <div style={{marginTop: 0, marginLeft: 70, color: "#b5b3b3", fontStyle: "italic"}}>Dead End!</div>
                </MenuItem>
                </Link>
              <Link to="/"><MenuItem>My Blog</MenuItem></Link>
              <Divider />
              <Link to="/readlist/"><MenuItem>Read List</MenuItem></Link>
              <Divider />
              <MenuItem>Chat Room</MenuItem>
              <Divider />
              <Link to="/editor"><MenuItem>Editor</MenuItem></Link>
            </Drawer>
          </div>
      </MuiThemeProvider>
    )
  }

}

ReactDOM.render(
  (<Router>
    <App />
  </Router>),
  document.getElementById('root')
)
