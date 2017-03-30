import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import App from './App'
import './index.css'
import sofly from '../images/soFly.jpg'

import ReadList from './components/ReadList.js'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {open: true}
  }

  handleToggle = () => this.setState({open: !this.state.open})
  render() {
    return (
      <MuiThemeProvider>
        <div>
            <div>
              <Route path="/readlist" component={ReadList} />
            </div>
            <Drawer open={this.state.open}>
              <Link to="/"><MenuItem><Avatar src={sofly} size={80} style={{marginTop: 12, marginLeft: 70}}/></MenuItem></Link>
              <Link to="/readlist/"><MenuItem>Read List</MenuItem></Link>
              <Divider />
              <MenuItem>Menu Item 2</MenuItem>
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
