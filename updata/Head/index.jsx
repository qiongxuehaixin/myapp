import React, { Component } from 'react';
import { Button, Alert,Calendar,Icon,Tabs,Pagination,Card } from 'antd';
import $ from 'jquery';
import './head.css';
const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;


/* head 头部导航栏，搜索栏 logo图标*/
class Header extends Component {
    constructor(props){
        super(props);
        this.state= {
              "title" : false,
              "num": 4,
              "data": [
                  {
                      "id": 1,
                      "name":"微信群"
                  },
                  {
                      "id": 2,
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      "name":"微信号"
                  },
                  {
                      "id": 1,
                      "name":"微信群"
                  },
                  {
                      "id": 2,
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      "name":"微信号"
                  },
                  {
                      "id": 1,
                      "name":"微信群"
                  },
                  {
                      "id": 2,
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      "name":"微信号"
                  }
              ]
        }

        // console.log(this.state.data)
    }

        btnGroups(obj){
          // console.log(obj)
          let arr=[];

          (obj.data).map((v,i)=>{
            if(v.href){
              arr.push(<a href={v.href}><Button type="ghost" key={i}  style={{}} size="small">{v.name}</Button></a>);
            }else{
              arr.push(<Button type="ghost" key={i}  style={{}} size="small">{v.name}</Button>);
            }
          })
          return arr;
        }


  render() {
    return (
      <div>
        <header className="head-tip">
          <div className="head-box">
            <div style={{float:"left"}}>
                {this.btnGroups(this.state)}
            </div>
              <div className="head-box-r" style={{float:"right"}}>
                <span>
                  8小时签到
                </span>
                <span style={{color:"#FF3265"}}>
                  手机端入口
                </span>
              </div>
          </div>
        </header>
        <div className="search-box">
          <div className="imgsbox">
            <a href="http://www.baidu.com"><img src="./imgs/logo.png" className="Apple" alt="logo" /></a>
            <img src="./imgs/slogan_03.png" className="Apple" alt="logo" />
          </div>

            <div className="imgsbox" style={{marginLeft:"115px", width:"450px"}}>
              <input placeholder="请输入搜索关键词" style={{width:"350px",height:"30px",border:"1px solid #ddd",padding:"0 5px",marginRight:"20px"}} /><Button>搜索</Button>
            </div>

              <div className="imgsbox fr">
                <ButtonGroup size="large">
                  <Button type="ghost">登录</Button>
                  <Button type="ghost">注册</Button>
                </ButtonGroup>
              </div>
        </div>
      </div>
    );
  }
}


/* 对外提供接口 */
export default Header
