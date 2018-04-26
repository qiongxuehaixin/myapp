import React,{Component} from "react";

import { Button } from 'antd';

class WeiXinType extends Component{
    constructor(props){
      super(props);
      this.state=props;
      // console.log(props.data)
    }

    getHtml(obj){
      var sArr=[];
      obj.map((v,i)=>{
        sArr.push(<Button type="ghost" key={i}>{v.service}</Button>)
      })
      return sArr;
    }

    render(){
      return(
        <div>
          <h3>{this.props.title}</h3>
          {this.getHtml(this.props.data)}
        </div>
      )
    }
}

export default WeiXinType
