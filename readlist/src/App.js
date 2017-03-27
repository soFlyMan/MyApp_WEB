import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, Route } from 'react-router-dom'
import { Icon } from 'antd'

import MyList from './components/MyList.js'



const App = () => {
    return (
      <div>
        <nav className="nav"></nav>
        <div className="container">
          <div className="options border_shadow">
            <ul>
              <li>
                <div className="option"><Link to="/mylist"><span><Icon type="copy" />我的书单</span></Link></div>
                <div className="br border_shadow"></div>
              </li>
              <li>
                <div className="option"><Link to="/"><span><Icon type="file-text" />正在阅读</span></Link></div>
                <div className="br border_shadow"></div>
              </li>
              <li>
                <div className="option"><Link to="/"><span><Icon type="star" />已经读过</span></Link></div>
                <div className="br border_shadow"></div>
              </li>
              <li>
                <div className="option"><Link to="/"><span><Icon type="book" />书籍推荐</span></Link></div>
                <div className="br border_shadow"></div>
              </li>
            </ul>
          </div>
          <div className="content border_shadow">
            <Route path="/mylist" component={MyList}/>
          </div>
        </div>
      </div>
    );
}

export default App
