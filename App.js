import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link,NavLink } from 'react-router-dom';




import Header from './Head';
import Content from './Content';
import WeChatGroup from './WeChatGroup';
import WeChatPersonal from './WeChatPersonal';
import ContentArea from './ContentArea';
import Footer from './Footer';
import NavContent from './NavContent';
import SourceWeChat from './SourceWeChat/index.jsx';
import WechatArticle from './WechatArticle';
import Components from './Components';
import Detail from './Detail';
import './App.css';
import './Test.css';
import 'antd/dist/antd.css';
import './SourceWeChat/source.css';
import './WechatArticle/article.css';

class App extends Component {
  render() {

    var data = {id:1,name:"微信群",age:36},
        data2 = {id:2,name:"个人微信",age:36};

        data  = JSON.stringify(data);
        data2 = JSON.stringify(data2);
        console.log(data)

    return (
        <div className="App" key={1}>
          <Header />
          <Router>
            <div>
              <div className="nav-box">
                <div className="nav-box-c">
                  <ul>
                    <li><NavLink activeClassName="active" to="/" exact >首页</NavLink></li>
                    <li><NavLink activeClassName="active" to={{
                                  pathname: `/WeChatGroup`,
                                  query:data,
                                  }} >微信群</NavLink>
                    </li>
                    <li><NavLink to="/ContentArea" >地区微信</NavLink></li>
                    <li><NavLink to={{
                                  pathname: `/WeChatPersonal`,
                                  query:data2,
                                  }}  >个人微信</NavLink>
                    </li>
                    <li><NavLink to="/NavContent">微信公众号</NavLink></li>

                    <li><NavLink to="/SourceWeChat">微信货源</NavLink></li>
                    <li><NavLink to="/WechatArticle">微信文章</NavLink></li>
                    <li><NavLink to="/Components">案列</NavLink></li>
                  </ul>
                </div>
              </div>

              <Route path="/" exact component={Content} />
              <Route path="/WeChatGroup" component={WeChatGroup} />
              <Route path="/ContentArea" component={ContentArea} />
              <Route path="/WeChatPersonal" component={WeChatPersonal} />
              <Route path="/NavContent" component={NavContent} />
              <Route path="/SourceWeChat" component={SourceWeChat} />
              <Route path="/WechatArticle" component={WechatArticle} />
              <Route path="/Components" component={Components} />
              <Route path="/Detail" component={Detail} />
            </div>
          </Router>
          <Footer />
        </div>
  );
  }
}


/* 对外提供接口 */
export default App;
