import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import App from './App'
import './index.css'

import ReadList from './ReadList.js'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <MuiThemeProvider>
        <div>
            <div>
              <Route path="/readlist" component={ReadList} />
            </div>
            <Drawer open={this.state.open}>
              <Link to="/"><MenuItem>soFly</MenuItem></Link>
              <Link to="/readlist/"><MenuItem>Read List</MenuItem></Link>
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
