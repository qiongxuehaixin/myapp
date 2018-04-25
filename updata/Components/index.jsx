import React, { Component } from 'react';

import './example.css';

import EatApple from "./../EatApple";
import MyComponent from "./MyComponents";
import MyComponent2 from "./InPutFocus2";
import Info from "./aotoString";

import 'antd/dist/antd.css';

import { Anchor,BackTop,Divider  } from 'antd';
const { Link } = Anchor;


class Example extends Component {
  constructor(props){
    super(props);
    this.state = props
  }

  render(){
    return (
      <div>

        <div className="w1200">
        <Anchor>
          <Link href="#API" title="吃苹果" />
          <Link href="#API2" title="案例二" />
        </Anchor>
        </div>
<Divider />
        <div className="w1200">
          {this.state.data}
        </div>
<Divider />

        <div className="w1200">
        <a id="API" className="anchor">#</a>
          <EatApple />
        </div>
<Divider />

        <div className="w1200">
        <a id="API2" className="anchor">#</a>
          <MyComponent />
        </div>
<Divider />

        <div className="w1200">
          <MyComponent2 />
        </div>
<Divider />

        <div className="w1200">
          <Info name="zhang wei" />
        </div>
<Divider />

        <div className="w1200">
          <div>
            <BackTop>
              <div className="ant-back-top-inner">UP</div>
            </BackTop>
            Scroll down to see the bottom-right
            <strong style={{ color: '#1088e9' }}> blue </strong>
            button.
          </div>
        </div>
<Divider />


      </div>
    )
  }
}

Example.defaultProps={
  data:"案例展示"
}

export default Example
