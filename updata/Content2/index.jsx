import React, { Component } from 'react';
import ItemBox from './ItemBox';
import { Button,Tabs,Pagination } from 'antd';

import './content.css';
import $ from "jquery";
const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;



/*  微信群 中间内容  */
class Content2 extends Component {
    constructor(props){
        super(props);

        // console.log(this.props.data);

        this.state=this.props.data
    }


    btnGroups(obj){
      // console.log(obj)
      let arr=[];

      (obj.data).map((v,i)=>{
        if(v.href){
          arr.push(<a href={v.href}><Button type="ghost" key={i}  style={{}} size="small">{v.name}</Button></a>);
        }else{
          arr.push(<Button type="ghost" key={i}  size="small">{v.name}</Button>);
        }
      })
      return arr;
    }

    componentDidMount(){
        $.ajax({
            url:"http://172.16.24.30:8088/api/group",
            type:"GET",
            data:{},
            dataType:"json",
            success:function (obj) {
                // console.log(JSON.stringify(obj,null,4))
                // console.log(obj.content.length)
                var sArr=[],
                    module={};

                obj.content.map((v,i)=>{
                    module={
                        id        :"",
                        href      :"http://www.baidu.com",
                        imgSrc     :"./imgs/erwei01.gif",
                        title      :"手机端进入可快速扫码>>>",
                        creatTime  :"10分钟",
                        cityName   :"上海2",
                        visitedNum  :"886",
                        zanNum       :"666"
                    };

                    module.id        =v.u_id;
                    module.href      ="http://172.16.24.30:8088/images/"+v.group_image;
                    module.imgSrc    ="http://172.16.24.30:8088/images/"+v.group_image;
                    module.title     =v.g_name;
                    module.creatTime =v.update_time.substr(5,11);
                    module.cityName  =v.city_name;
                    module.visitedNum=v.browse_count;
                    module.zanNum    =v.praise_count;
                    sArr.push(module);
                })
                this.setState({
                    total:obj.counts,
                    contentData:sArr
                })
            }.bind(this),
            error:function(){
                alert("网络请求故障");
            }
        });

    }


    onChange(pageNumber) {
        console.log('Page: ',pageNumber);
        let sUrl = "http://172.16.24.30:8088/api/group" ;
        if(pageNumber==1){

        }else{
           sUrl += "?from=" + --pageNumber*10 + "&size=10";
        }
console.log(sUrl)
        $.ajax({
            url:sUrl,
            type:"GET",
            data:{},
            dataType:"json",
            success:function (obj) {
                // console.log(JSON.stringify(obj,null,4))
                console.log(obj.content.length)
                console.log(obj.counts)
                var sArr=[],
                    module={};

                obj.content.map((v,i)=>{
                    module={
                        id        :"",
                        href      :"http://www.baidu.com",
                        imgSrc     :"./imgs/erwei01.gif",
                        title      :"手机端进入可快速扫码>>>",
                        creatTime  :"10分钟",
                        cityName   :"上海2",
                        visitedNum  :"886",
                        zanNum       :"666"
                    };

                    module.id        =v.u_id;
                    module.href      ="http://172.16.24.30:8088/images/"+v.group_image;
                    module.imgSrc    ="http://172.16.24.30:8088/images/"+v.group_image;
                    module.title     =v.g_name;
                    module.creatTime =v.update_time.substr(5,11);
                    module.cityName  =v.city_name;
                    module.visitedNum=v.browse_count;
                    module.zanNum    =v.praise_count;
                    sArr.push(module);
                })
                this.setState({
                    total:obj.counts,
                    contentData:sArr
                })
            }.bind(this),
            error:function(){
                alert("网络请求故障");
            }
        });
    }


  render() {
    {
      // 循环contentDAta数据获得HTML代码
    }
    this.contentHtml = this.state.contentData.map((elem,index)=> {
      return (
        <ItemBox data={elem} key={index} />
      );
    })



    return (
      <div className="contet2 w-100">
        <div className="area-type-box">
          <div className="area-city-box border-none">
            <b>地区：</b>{this.btnGroups(this.state.cityDate)}
          </div>
          <div className="area-city-box" style={{marginBottom:"10px"}}>
            <b>类型：</b>{this.btnGroups(this.props.data.typeDate)}
          </div>
        </div>
        <div className="main-img-box">
          <div className="m-imgs-box clearfix">
          {this.contentHtml}
          </div>
          <Pagination showQuickJumper defaultCurrent={this.state.defaultCurrent} total={this.state.total} onChange={this.onChange.bind(this)} onClick={this.onChange.bind(this)}  />
        </div>
      </div>
    );
  }
}


Content2.defaultProps={
  data:{
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
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"上海2",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1小时",
          cityName:"北京市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"广州",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入>>>",
          creatTime:"10分钟",
          cityName:"香港",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1分钟",
          cityName:"南京",
          visitedNum:"8186",
          zanNum:"6266"
      },
      {
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"三亚市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1小时",
          cityName:"北京市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"广州",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入>>>",
          creatTime:"10分钟",
          cityName:"香港",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1分钟",
          cityName:"南京",
          visitedNum:"8186",
          zanNum:"6266"
      },
      {
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"三亚市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1小时",
          cityName:"北京市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"广州",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入>>>",
          creatTime:"10分钟",
          cityName:"香港",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1分钟",
          cityName:"南京",
          visitedNum:"8186",
          zanNum:"6266"
      },
      {
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"三亚市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1小时",
          cityName:"北京市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"广州",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入>>>",
          creatTime:"10分钟",
          cityName:"香港",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1分钟",
          cityName:"南京",
          visitedNum:"8186",
          zanNum:"6266"
      },
      {
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"三亚市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1小时",
          cityName:"北京市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"广州",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入>>>",
          creatTime:"10分钟",
          cityName:"香港",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1分钟",
          cityName:"南京",
          visitedNum:"8186",
          zanNum:"6266"
      },
      {
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"三亚市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1小时",
          cityName:"北京市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"广州",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入>>>",
          creatTime:"10分钟",
          cityName:"香港",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1分钟",
          cityName:"南京",
          visitedNum:"8186",
          zanNum:"6266"
      },
      {
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"三亚市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1小时",
          cityName:"北京市",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"10分钟",
          cityName:"广州",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入>>>",
          creatTime:"10分钟",
          cityName:"香港",
          visitedNum:"886",
          zanNum:"666"
      },{
          id:"",
          href:"http://www.baidu.com",
          imgSrc:"./imgs/erwei01.gif",
          title:"手机端进入可快速扫码>>>",
          creatTime:"1分钟",
          cityName:"南京",
          visitedNum:"8186",
          zanNum:"6266"
      },
    ]
  }
}


/* 对外提供接口 */
export default Content2
