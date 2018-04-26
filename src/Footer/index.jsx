import React, { Component } from 'react';
import { Button, Alert,Calendar,Icon,Tabs,Pagination,Card } from 'antd';
import $ from 'jquery';
import './footer.css';
const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;




/*  微信群 footd 底部内容 */
class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
          data:{
              "title" : false,
              "num": 4,
              "data": [
                  {
                      "id": 1,
                      href:"javascript:;",
                      "name":"微的信群"
                  },
                  {
                      "id": 2,
                      href:"javascript:;",
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      href:"javascript:;",
                      "name":"创大幅度发业"
                  },
                  {
                      "id": 4,
                      href:"javascript:;",
                      "name":"微信号"
                  },{
                      "id": 1,
                      href:"javascript:;",
                      "name":"微地方信群"
                  },
                  {
                      "id": 2,
                      href:"javascript:;",
                      "name":"交友侧群"
                  },
                  {
                      "id": 3,
                      href:"javascript:;",
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      href:"javascript:;",
                      "name":"微信号"
                  },
                  {
                      "id": 1,
                      href:"javascript:;",
                      "name":"微信群"
                  },
                  {
                      "id": 2,
                      href:"javascript:;",
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      href:"javascript:;",
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      href:"javascript:;",
                      "name":"微信号"
                  },{
                      "id": 1,
                      href:"javascript:;",
                      "name":"微信群"
                  },
                  {
                      "id": 2,
                      href:"javascript:;",
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      href:"javascript:;",
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      href:"javascript:;",
                      "name":"微信号"
                  },
                  {
                      "id": 1,
                      href:"javascript:;",
                      "name":"微信群"
                  },
                  {
                      "id": 2,
                      href:"javascript:;",
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      href:"javascript:;",
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      href:"javascript:;",
                      "name":"微信号"
                  },
                  {
                      "id": 1,
                      href:"javascript:;",
                      "name":"微信群"
                  },
                  {
                      "id": 2,
                      href:"javascript:;",
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      href:"javascript:;",
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      href:"javascript:;",
                      "name":"微信号"
                  },
                  {
                      "id": 1,
                      href:"javascript:;",
                      "name":"微信群"
                  },
                  {
                      "id": 2,
                      href:"javascript:;",
                      "name":"交友群"
                  },
                  {
                      "id": 3,
                      href:"javascript:;",
                      "name":"创业"
                  },
                  {
                      "id": 4,
                      href:"javascript:;",
                      "name":"微信号"
                  },
              ]
          }
        }
    }

    btnGroups(obj){
      let arr=[];

      (obj.data).map((v,i)=>{
        if(v.href){
          arr.push(<a href={v.href} key={i} ><Button type="ghost" key={i}  style={{}} size="small">{v.name}</Button></a>);
        }else{
          arr.push(<Button type="ghost" key={i} size="small">{v.name}</Button>);
        }
      })
      return arr;
    }

  render() {
    return (
      <div className="foot-box" style={{width:"100%",borderTop:"1px solid #1D1D1D"}} >
        <div className="frend-link frend-link2">
          <div className="frend-link-content frend-link-content2">
          {this.btnGroups(this.state.data)}
          </div>
          <div className="footer-bottom-box clearfix">
              <div className="fl">
                 <img src="./imgs/code.jpg" style={{display:"inline-block"}} alt="下载失败" width="112" height="112" title="二维码图片" />
                 <div className="complain fr">
                    <b>扫描二维码</b>
                    <div>进微信群手机站</div>
                    <b>更多帮助信息</b>
                    <a href="javascript:;">骗子投诉</a>
                 </div>
              </div>
              <div className="fl">
                 <div className="complain fr">
                    <b>关于</b>
                    <a>微信群是什么?</a>
                    <a>用户须知</a>
                    <a href="javascript:;">网站导航</a>
                 </div>
              </div>
              <div className="fl">
                 <div className="complain fr">
                    <b>合作</b>
                    <a>市场合作</a>
                    <a>合作优势</a>
                    <a href="javascript:;">免责声明</a>
                 </div>
              </div>
              <div className="fl">
                 <div className="complain fr">
                    <b>声明</b>
                    <a>版权声明</a>
                    <a>隐私保护</a>
                    <a href="javascript:;">用户协议</a>
                 </div>
              </div>
              <div className="fl">
                 <div className="complain fr">
                    <b>更多</b>
                    <a>在线客服</a>
                    <a>品牌推广</a>
                    <a href="javascript:;">帮助中心</a>
                 </div>
              </div>
              <div className="copyrightbox fr">
                <div>
                  Copyright © 2003-2018 <br /> www.weixinqun.com
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


/* 对外提供接口 */
export default Footer
