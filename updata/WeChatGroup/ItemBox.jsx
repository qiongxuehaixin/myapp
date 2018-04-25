import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Alert,Calendar,Icon,Tabs,Pagination,Card } from 'antd';

import './content.css';
import 'antd/dist/antd.css';
const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;



class ItemBox extends Component{
  constructor(props){
    super(props);
    this.state=this.props.data
  }
  render(){
    return(
      <div className="item-img">
        <a href={this.state.href}>
        <div style={{ width:"230px" }} >
          <div className="custom-image" style={{width:"100%", border:"none",marginTop:"30px"}} >
            <img alt="example" style={{width:"180px", height:"180px"}}  src={this.state.imgSrc} />
          </div>
          <div className="custom-card">
            <h3>{this.state.title}</h3>
            <p>{this.state.creatTime}前更新 &nbsp;&nbsp;&nbsp;&nbsp;<Button type="ghost">{this.state.cityName}</Button></p>
            <p><span className="visited-number">查看</span>{this.state.visitedNum}
            <span className="zan-number">点赞</span>{this.state.zanNum}次</p>
          </div>
        </div>
        </a>
      </div>
    )
  }
}


export default ItemBox
