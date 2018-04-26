import React, { Component } from 'react';
import { Button, Tabs} from 'antd';
import {BrowserRouter as Router,Route,Link,NavLink } from 'react-router-dom';

import './content.css';
import 'antd/dist/antd.css';



class ItemBox extends Component{
  constructor(props){
    super(props);
    this.state=this.props.data
  }

    componentWillReceiveProps(nextProps){
      // console.log(nextProps)
        this.setState=({
            state:nextProps.data
        })
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

  render(){
    let sUrl = this.props.data.imgSrc;
    // console.log(this.props.data.g_id)
    return(
      <div className="item-img">
        {/*<a href={this.props.data.href}>*/}
          <NavLink to={{
              pathname: `/Detail`,
              query:this.props.data.g_id,
          }} >
            <div style={{ width:"230px" }} >
              <div className="custom-image" style={{width:"100%", border:"none",marginTop:"30px"}} >
                <img alt="example" style={{width:"180px", height:"180px"}}  src={sUrl} />
              </div>
              <div className="custom-card">
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.creatTime}更新 &nbsp;&nbsp;<Button type="ghost">{this.props.data.cityName}</Button></p>
                <p><span className="visited-number">查看</span>{this.props.data.visitedNum}
                <span className="zan-number">点赞</span>{this.props.data.zanNum}次</p>
              </div>
            </div>
          </NavLink>
        {/*</a>*/}
      </div>
    )
  }
}


export default ItemBox
