import React, { Component } from 'react';
import { Button, Tabs,BackTop } from 'antd';
import Content2 from './../Content2';

import './content.css';
const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;



/*  微信群 中间内容  */
class WeChatPersonal extends Component {
    constructor(props){
        super(props);

var sData=this.props.location.query;
      if(sData){
        console.log(JSON.parse(sData).name);
        console.log(this.props.location.pathname);
      }

        this.state={
          cityDate:{
                "title" : "cityname",
                "num": 4,
                "data": [
                      {
                          "id": 0,
                          href:"",
                          cla:"area-btn",
                          "name":"全部"
                      },
                      {
                          "id": 1,
                          href:"",
                          cla:"area-btn",
                          "name":"北京"
                      },
                      {
                          "id": 2,
                          href:"",
                          cla:"area-btn",
                          "name":"南京"
                      },
                      {
                          "id": 3,
                          href:"",
                          cla:"area-btn",
                          "name":"西安"
                      },
                      {
                          "id": 4,
                          href:"",
                          cla:"area-btn",
                          "name":"济南"
                      },
                      {
                          "id": 5,
                          href:"",
                          cla:"area-btn",
                          "name":"天津"
                      },
                      {
                          "id": 6,
                          href:"",
                          cla:"area-btn",
                          "name":"重庆"
                      },
                      {
                          "id": 7,
                          href:"",
                          cla:"area-btn",
                          "name":"上海"
                      },
                      {
                          "id": 8,
                          href:"",
                          cla:"area-btn",
                          "name":"深圳"
                      },
                      {
                          "id": 9,
                          href:"",
                          cla:"area-btn",
                          "name":"广州"
                      },
                  ]
              },
          typeDate:{
                "title" : "cityname",
                "num": 4,
                "data": [
                    {
                        "id": 0,
                        href:"",
                        cla:"area-btn",
                        "name":"全部"
                    },
                    {
                        "id": 1,
                        href:"",
                        cla:"area-btn",
                        "name":"微商"
                    },
                    {
                        "id": 2,
                        href:"",
                        cla:"area-btn",
                        "name":"代理"
                    },
                    {
                        "id": 3,
                        href:"",
                        cla:"area-btn",
                        "name":"互粉群"
                    },
                    {
                        "id": 4,
                        href:"",
                        cla:"area-btn",
                        "name":"公众号"
                    },
                    {
                        "id": 5,
                        href:"",
                        cla:"area-btn",
                        "name":"旅游"
                    },
                    {
                        "id": 6,
                        href:"",
                        cla:"area-btn",
                        "name":"摄影"
                    },
                    {
                        "id": 7,
                        href:"",
                        cla:"area-btn",
                        "name":"汽车"
                    },
                    {
                        "id": 8,
                        href:"",
                        cla:"area-btn",
                        "name":"美食"
                    },
                    {
                        "id": 9,
                        href:"",
                        cla:"area-btn",
                        "name":"购物"
                    },
                    {
                        "id": 0,
                        href:"",
                        cla:"area-btn",
                        "name":"全部"
                    },
                    {
                        "id": 1,
                        href:"",
                        cla:"area-btn",
                        "name":"微商"
                    },
                    {
                        "id": 2,
                        href:"",
                        cla:"area-btn",
                        "name":"代理"
                    },
                    {
                        "id": 3,
                        href:"",
                        cla:"area-btn",
                        "name":"互粉群"
                    },
                    {
                        "id": 4,
                        href:"",
                        cla:"area-btn",
                        "name":"公众号"
                    },
                    {
                        "id": 5,
                        href:"",
                        cla:"area-btn",
                        "name":"旅游"
                    },
                    {
                        "id": 6,
                        href:"",
                        cla:"area-btn",
                        "name":"摄影"
                    },
                    {
                        "id": 7,
                        href:"",
                        cla:"area-btn",
                        "name":"汽车"
                    },
                    {
                        "id": 8,
                        href:"",
                        cla:"area-btn",
                        "name":"美食"
                    },
                    {
                        "id": 9,
                        href:"",
                        cla:"area-btn",
                        "name":"购物"
                    },
                    {
                        "id": 0,
                        href:"",
                        cla:"area-btn",
                        "name":"全部"
                    },
                    {
                        "id": 1,
                        href:"",
                        cla:"area-btn",
                        "name":"微商"
                    },
                    {
                        "id": 2,
                        href:"",
                        cla:"area-btn",
                        "name":"代理"
                    },
                    {
                        "id": 3,
                        href:"",
                        cla:"area-btn",
                        "name":"互粉群"
                    },
                    {
                        "id": 4,
                        href:"",
                        cla:"area-btn",
                        "name":"公众号"
                    },
                    {
                        "id": 5,
                        href:"",
                        cla:"area-btn",
                        "name":"旅游"
                    },
                    {
                        "id": 6,
                        href:"",
                        cla:"area-btn",
                        "name":"摄影"
                    },
                    {
                        "id": 7,
                        href:"",
                        cla:"area-btn",
                        "name":"汽车"
                    },
                    {
                        "id": 8,
                        href:"",
                        cla:"area-btn",
                        "name":"美食"
                    },
                    {
                        "id": 9,
                        href:"",
                        cla:"area-btn",
                        "name":"购物"
                    },
                    {
                        "id": 0,
                        href:"",
                        cla:"area-btn",
                        "name":"全部"
                    },
                    {
                        "id": 1,
                        href:"",
                        cla:"area-btn",
                        "name":"微商"
                    },
                    {
                        "id": 2,
                        href:"",
                        cla:"area-btn",
                        "name":"代理"
                    },
                    {
                        "id": 3,
                        href:"",
                        cla:"area-btn",
                        "name":"互粉群"
                    },
                    {
                        "id": 4,
                        href:"",
                        cla:"area-btn",
                        "name":"公众号"
                    },
                    {
                        "id": 5,
                        href:"",
                        cla:"area-btn",
                        "name":"旅游"
                    },
                    {
                        "id": 6,
                        href:"",
                        cla:"area-btn",
                        "name":"摄影"
                    },
                    {
                        "id": 7,
                        href:"",
                        cla:"area-btn",
                        "name":"汽车"
                    },
                    {
                        "id": 8,
                        href:"",
                        cla:"area-btn",
                        "name":"美食"
                    },
                    {
                        "id": 9,
                        href:"",
                        cla:"area-btn",
                        "name":"购物"
                    },
                ]
          },
          defaultCurrent:1,
          total:200,
          contentData:[
            {
                id:"",
                href:"http://www.baidu.com",
                imgSrc:"./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"三亚市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1小时",
                cityName:"北京市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"广州",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入>>>",
                creatTime:"10分钟",
                cityName:"香港",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1分钟",
                cityName:"南京",
                visitedNum:"8186",
                zanNum:"6266"
            },
            {
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"三亚市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1小时",
                cityName:"北京市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"广州",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入>>>",
                creatTime:"10分钟",
                cityName:"香港",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1分钟",
                cityName:"南京",
                visitedNum:"8186",
                zanNum:"6266"
            },
            {
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"三亚市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1小时",
                cityName:"北京市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"广州",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入>>>",
                creatTime:"10分钟",
                cityName:"香港",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1分钟",
                cityName:"南京",
                visitedNum:"8186",
                zanNum:"6266"
            },
            {
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"三亚市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1小时",
                cityName:"北京市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"广州",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入>>>",
                creatTime:"10分钟",
                cityName:"香港",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1分钟",
                cityName:"南京",
                visitedNum:"8186",
                zanNum:"6266"
            },
            {
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"三亚市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1小时",
                cityName:"北京市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"广州",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入>>>",
                creatTime:"10分钟",
                cityName:"香港",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1分钟",
                cityName:"南京",
                visitedNum:"8186",
                zanNum:"6266"
            },
            {
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"三亚市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1小时",
                cityName:"北京市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"广州",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入>>>",
                creatTime:"10分钟",
                cityName:"香港",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1分钟",
                cityName:"南京",
                visitedNum:"8186",
                zanNum:"6266"
            },
            {
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"三亚市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1小时",
                cityName:"北京市",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"10分钟",
                cityName:"广州",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入>>>",
                creatTime:"10分钟",
                cityName:"香港",
                visitedNum:"886",
                zanNum:"666"
            },{
                id:"",
                href:"http://www.baidu.com",
                imgSrc:" ./imgs/single.png",
                title:"手机端进入可快速扫码>>>",
                creatTime:"1分钟",
                cityName:"南京",
                visitedNum:"8186",
                zanNum:"6266"
            },
          ]
        }
    }



  render() {
    return (
      <div>
        <Content2 data={this.state}/>

          <BackTop>
            <div className="ant-back-top-inner">UP</div>
          </BackTop>
      </div>
    );
  }
}


/* 对外提供接口 */
export default WeChatPersonal
