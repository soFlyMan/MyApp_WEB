import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'
import { Icon } from 'antd'

import MyList from './components/MyList.js'
import Test from './components/Test.js'



const ReadList = () => {
    return (
      <div>
        <nav className="nav"></nav>
        <div className="container">
          <div className="options border_shadow">
            <ul>
              <li>
                <Link to="/readlist/mylist"><div className="option"><span><Icon type="copy" />我的书单</span></div></Link>
                <div className="br border_shadow"></div>
              </li>
              <li>
                <Link to="/readlist/test"><div className="option"><span><Icon type="file-text" />正在阅读</span></div></Link>
                <div className="br border_shadow"></div>
              </li>
              <li>
                <Link to="/"><div className="option"><span><Icon type="star" />已经读过</span></div></Link>
                <div className="br border_shadow"></div>
              </li>
              <li>
                <Link to="/"><div className="option"><span><Icon type="book" />书籍推荐</span></div></Link>
                <div className="br border_shadow"></div>
              </li>
            </ul>
          </div>
          <div className="content border_shadow">
            <Switch>
              <Route path="/readlist/mylist" component={MyList} />
              <Route path="/readlist/test" component={Test} />
            </Switch>
          </div>
        </div>
      </div>
    );
}

export default ReadList
