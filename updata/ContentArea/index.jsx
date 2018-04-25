import React, {Component} from "react";

import {BrowserRouter as Router,Route,Link,NavLink } from 'react-router-dom';
import $ from 'jquery';

import { Button,BackTop } from 'antd';
import WeiXinType from './WeiXinType';

import "./contentarea.css";



class ContentArea extends Component{
 constructor(props){
   super(props);
   this.state={
     weixintypeTitle:this.props.weixintypeTitle || ["微信商家", "生活购物", "互粉交友", "互动玩乐", "微信交流", "其他社区"],
     weixintype:this.props.weixintype,
     content:this.props.content,
     upperCase:this.props.upperCase,
   };
   // console.log(this.state.upperCase)
 }

  componentDidMount(){

//获取微信类型Title
  $.ajax({
      url:"http://172.16.24.30:8088/api/config?key=GROUP_TRADE",
      type:"GET",
      data:{},
      dataType:"json",
      success:function (obj) {
          var sArr=[];

          obj.content.map((v,i)=>{
              sArr.push(v.conf_val);
          })

          this.setState({
            weixintypeTitle:sArr
          })
      }.bind(this),
      error:function(){
          alert("网络请求故障");
      }
  });


//获取微信类型二级名单
    $.ajax({
        url:"http://172.16.24.30:8088/api/service",
        type:"GET",
        data:{},
        dataType:"json",
        success:function (obj) {
            // console.log(obj);

            // console.log(this.state.weixintype);
            var sArr=[],
                fatherId='',
                allArr=[];

            obj.content.map((v,i)=>{
              // console.log(v)
              if(v.father_id !== fatherId && sArr.length > 0){
                allArr.push(sArr);
                sArr=[];
              }
              else{
                sArr.push(v);
              }
              fatherId=v.father_id;
            })
            // console.log(allArr);
            this.setState({
              weixintype:allArr
            })
        }.bind(this),
        error:function(){
            alert("网络请求故障");
        }
    });

//获取二级地名数据
    $.ajax({
        url:"http://172.16.24.30:8088/api/region",
        type:"GET",
        data:{},
        dataType:"json",
        success:function (obj) {
            // console.log(obj);

            var sArr=[],
                pinyin='',
                allArr=[],
                pinyinArr=[];

            obj.content.map((v,i)=>{
              // console.log(v)
              if(v.pinyin !== pinyin && sArr.length > 0){
                allArr.push(sArr);
                pinyinArr.push(pinyin);
                sArr=[];
              }
              else{
                sArr.push(v);
              }
              pinyin=v.pinyin;
            })
            // console.log(pinyinArr);
            // console.log(allArr);


            this.setState({
              upperCase:pinyinArr,
              content:allArr
            })
            // this.setState({
            //   content:obj.content
            // })
            // console.log(this.state.content)
        }.bind(this),
        error:function(){
            alert("网络请求故障");
        }
    });


    // fetch("http://172.16.24.30:8088/api/region").then((res)=>{
    //   console.log("11111111111111111111111111111111111111")
    //         if(res.ok){
    //           console.log(res)
    //             res.text().then((data)=>{
    //                 console.log(data);
    //             })
    //         }
    // }).catch((res)=>{
    //     console.log(res.status);
    // });

  }

GetWeiXinType(obj,obj2){
  // console.log(JSON.stringify(obj))  data2={obj2[i]}
  var sArr = [];

  obj.map((v,i)=>{
    // console.log(typeof obj2)
    if(obj2){

      obj2.map((d,k)=>{
          // console.log(d)
        })
        sArr.push(<WeiXinType data={v} title={obj2[i]} key={i} />)
    }
  })
  return sArr;
}

upperCaseBox(obj){
  // console.log(obj)
  let sArr=[];
  obj.map((v,i)=>{
    // sArr.push(<a href={"#" + v} key={i} ><Button type="ghost" key={i}>{v}</Button></a>)
    sArr.push(<NavLink to="/ContentArea" key={i} ><Button type="ghost" key={i}>{v}</Button></NavLink>)
  })
  return sArr;
}

  render(){
    return (
      <div className="area-outbox clearfix">

        <div className="weixin-typebox fl">
          <h2>选择行业类别</h2>
          {this.GetWeiXinType(this.state.weixintype,this.state.weixintypeTitle)}
        </div>
        <div className="area-name-box fr">
          <div className="upper-letter">
            按字母选择：
            {
              this.upperCaseBox(this.state.upperCase)
            }
          </div>
          <div className="city-name-box">
              <AreaList content={this.state.content} />

                <BackTop>
                  <div className="ant-back-top-inner">UP</div>
                </BackTop>
          </div>
        </div>
      </div>
    )
  }
}


class AreaList extends Component {
  constructor(props){
    super(props);
  }

  getAreaHtml(obj){
    // console.log(obj)
    let letter='',
    sArrAll={},
    sArr=[];

    obj.content.map((v,i)=>{
      // console.log(v.pinyin);

          if(v.pinyin!=letter){
            sArr.push(<div className="upperCase">{v.pinyin}</div>);
          }

          sArr.push(<NavLink to="/WeChatGroup" ><Button type="ghost">{v.name}(<span style={{color: "#98CE1E"}}>{parseInt(10000*Math.random())}</span>)</Button></NavLink>);
          letter=v.pinyin;
          if(v.pinyin!=letter && letter){
            sArrAll[letter]=sArr;
            sArr=[];
          }
    })
    // console.log(sArrAll)
    return <div>{sArr}</div>;
  }


componentDidUpdate(){
  // console.log(JSON.stringify(this.props))
  // this.setState({
  //   state:this.props
  // })
}

  getAreaHtml2(obj){
    // console.log(obj)
    let letter='',
    sArrAll={},
    sArr=[];

    if(obj){
      obj.content.map((v,i)=>{
        // console.log(v)
        // console.log(obj.upperCase[i])
        sArr.push(<AreaBox content={v} key={i} >{obj.upperCase[i]}</AreaBox>);
      })
    }
    // console.log(sArr)

    return <div>{sArr}</div>;
  }

  render(){
    return (
      <div className="city-name-item">

        {this.getAreaHtml2(this.props)}
      </div>
    )
  }
}

class AreaBox extends Component{
  constructor(props){
    super(props);
    // console.log(this.props)
  }

  getHtml(){
     let sArr=[];
    // console.log(this.props)
    sArr.push(<div className="upperCase" id={this.props.children} key={this.props.children}>{this.props.children}</div>);
    this.props.content.map((v,i)=>{
      sArr.push(<NavLink to="/WeChatGroup" ><Button type="ghost" key={i} >{v.name}(<span style={{color: "#98CE1E"}}>{parseInt(10000*Math.random())}</span>)</Button></NavLink>)
    })
    return (<div>{sArr}</div>)
  }

  render(){
    return(
      <div className="city-name-box-row">{this.getHtml(this.props)}</div>
    )
  }
}


AreaList.defaultProps ={
  upperCase:["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y"],
  content:[
	[{
		"id": 820000,
		"name": "澳门特别行政区",
		"pid": 820000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 152900,
		"name": "阿拉善盟",
		"pid": 150000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 210300,
		"name": "鞍山市",
		"pid": 210000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 340800,
		"name": "安庆市",
		"pid": 340000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 410500,
		"name": "安阳市",
		"pid": 410000,
		"pinyin": "A",
		"level": 2,
		"group_count": 7
	}, {
		"id": 513200,
		"name": "阿坝藏族羌族自治州",
		"pid": 510000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 520400,
		"name": "安顺市",
		"pid": 520000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 542500,
		"name": "阿里地区",
		"pid": 540000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 610900,
		"name": "安康市",
		"pid": 610000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 652900,
		"name": "阿克苏地区",
		"pid": 650000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}, {
		"id": 654300,
		"name": "阿勒泰地区",
		"pid": 650000,
		"pinyin": "A",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 130600,
		"name": "保定市",
		"pid": 130000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 150200,
		"name": "包头市",
		"pid": 150000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 150800,
		"name": "巴彦淖尔市",
		"pid": 150000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 210500,
		"name": "本溪市",
		"pid": 210000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 220600,
		"name": "白山市",
		"pid": 220000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 220800,
		"name": "白城市",
		"pid": 220000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 340300,
		"name": "蚌埠市",
		"pid": 340000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 341600,
		"name": "亳州市",
		"pid": 340000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 371600,
		"name": "滨州市",
		"pid": 370000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 450500,
		"name": "北海市",
		"pid": 450000,
		"pinyin": "B",
		"level": 2,
		"group_count": 1
	}, {
		"id": 451000,
		"name": "百色市",
		"pid": 450000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 511900,
		"name": "巴中市",
		"pid": 510000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 520500,
		"name": "毕节市",
		"pid": 520000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 530500,
		"name": "保山市",
		"pid": 530000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 610300,
		"name": "宝鸡市",
		"pid": 610000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 620400,
		"name": "白银市",
		"pid": 620000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 652700,
		"name": "博尔塔拉蒙古自治州",
		"pid": 650000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}, {
		"id": 652800,
		"name": "巴音郭楞蒙古自治州",
		"pid": 650000,
		"pinyin": "B",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 130900,
		"name": "沧州市",
		"pid": 130000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 150400,
		"name": "赤峰市",
		"pid": 150000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 211300,
		"name": "朝阳市",
		"pid": 210000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 320400,
		"name": "常州市",
		"pid": 320000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 341100,
		"name": "滁州市",
		"pid": 340000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 341700,
		"name": "池州市",
		"pid": 340000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 430700,
		"name": "常德市",
		"pid": 430000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 431000,
		"name": "郴州市",
		"pid": 430000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 445100,
		"name": "潮州市",
		"pid": 440000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 451400,
		"name": "崇左市",
		"pid": 450000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 510100,
		"name": "成都市",
		"pid": 510000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 532300,
		"name": "楚雄彝族自治州",
		"pid": 530000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 542100,
		"name": "昌都地区",
		"pid": 540000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}, {
		"id": 652300,
		"name": "昌吉回族自治州",
		"pid": 650000,
		"pinyin": "C",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 210200,
		"name": "大连市",
		"pid": 210000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 210600,
		"name": "丹东市",
		"pid": 210000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 230600,
		"name": "大庆市",
		"pid": 230000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 232700,
		"name": "大兴安岭地区",
		"pid": 230000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 370500,
		"name": "东营市",
		"pid": 370000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 371400,
		"name": "德州市",
		"pid": 370000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 510600,
		"name": "德阳市",
		"pid": 510000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 511700,
		"name": "达州市",
		"pid": 510000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 532900,
		"name": "大理白族自治州",
		"pid": 530000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 533100,
		"name": "德宏傣族景颇族自治州",
		"pid": 530000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 533400,
		"name": "迪庆藏族自治州",
		"pid": 530000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}, {
		"id": 621100,
		"name": "定西市",
		"pid": 620000,
		"pinyin": "D",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 420700,
		"name": "鄂州市",
		"pid": 420000,
		"pinyin": "E",
		"level": 2,
		"group_count": null
	}, {
		"id": 422800,
		"name": "恩施土家族苗族自治州",
		"pid": 420000,
		"pinyin": "E",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 210900,
		"name": "阜新市",
		"pid": 210000,
		"pinyin": "F",
		"level": 2,
		"group_count": null
	}, {
		"id": 341200,
		"name": "阜阳市",
		"pid": 340000,
		"pinyin": "F",
		"level": 2,
		"group_count": null
	}, {
		"id": 350100,
		"name": "福州市",
		"pid": 350000,
		"pinyin": "F",
		"level": 2,
		"group_count": null
	}, {
		"id": 361000,
		"name": "抚州市",
		"pid": 360000,
		"pinyin": "F",
		"level": 2,
		"group_count": null
	}, {
		"id": 440600,
		"name": "佛山市",
		"pid": 440000,
		"pinyin": "F",
		"level": 2,
		"group_count": null
	}, {
		"id": 450600,
		"name": "防城港市",
		"pid": 450000,
		"pinyin": "F",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 440100,
		"name": "广州市",
		"pid": 440000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 450300,
		"name": "桂林市",
		"pid": 450000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 450800,
		"name": "贵港市",
		"pid": 450000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 510800,
		"name": "广元市",
		"pid": 510000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 511600,
		"name": "广安市",
		"pid": 510000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 513300,
		"name": "甘孜藏族自治州",
		"pid": 510000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 520100,
		"name": "贵阳市",
		"pid": 520000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 623000,
		"name": "甘南藏族自治州",
		"pid": 620000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 632600,
		"name": "果洛藏族自治州",
		"pid": 630000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}, {
		"id": 640400,
		"name": "固原市",
		"pid": 640000,
		"pinyin": "G",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 131100,
		"name": "衡水市",
		"pid": 130000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 150100,
		"name": "呼和浩特市",
		"pid": 150000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 150700,
		"name": "呼伦贝尔市",
		"pid": 150000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 211400,
		"name": "葫芦岛市",
		"pid": 210000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 230100,
		"name": "哈尔滨市",
		"pid": 230000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 230400,
		"name": "鹤岗市",
		"pid": 230000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 231100,
		"name": "黑河市",
		"pid": 230000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 320800,
		"name": "淮安市",
		"pid": 320000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 330100,
		"name": "杭州市",
		"pid": 330000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 330500,
		"name": "湖州市",
		"pid": 330000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 340100,
		"name": "合肥市",
		"pid": 340000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 340400,
		"name": "淮南市",
		"pid": 340000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 340600,
		"name": "淮北市",
		"pid": 340000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 341000,
		"name": "黄山市",
		"pid": 340000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 371700,
		"name": "菏泽市",
		"pid": 370000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 410600,
		"name": "鹤壁市",
		"pid": 410000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 420200,
		"name": "黄石市",
		"pid": 420000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 421100,
		"name": "黄冈市",
		"pid": 420000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 430400,
		"name": "衡阳市",
		"pid": 430000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 431200,
		"name": "怀化市",
		"pid": 430000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 441300,
		"name": "惠州市",
		"pid": 440000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 441600,
		"name": "河源市",
		"pid": 440000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 451100,
		"name": "贺州市",
		"pid": 450000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 451200,
		"name": "河池市",
		"pid": 450000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 460100,
		"name": "海口市",
		"pid": 460000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 532500,
		"name": "红河哈尼族彝族自治州",
		"pid": 530000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 610700,
		"name": "汉中市",
		"pid": 610000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 630200,
		"name": "海东市",
		"pid": 630000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 632200,
		"name": "海北藏族自治州",
		"pid": 630000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 632300,
		"name": "黄南藏族自治州",
		"pid": 630000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 632500,
		"name": "海南藏族自治州",
		"pid": 630000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 632800,
		"name": "海西蒙古族藏族自治州",
		"pid": 630000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 652200,
		"name": "哈密地区",
		"pid": 650000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}, {
		"id": 653200,
		"name": "和田地区",
		"pid": 650000,
		"pinyin": "H",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 140700,
		"name": "晋中市",
		"pid": 140000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 210700,
		"name": "锦州市",
		"pid": 210000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 220200,
		"name": "吉林市",
		"pid": 220000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 230300,
		"name": "鸡西市",
		"pid": 230000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 230800,
		"name": "佳木斯市",
		"pid": 230000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 330400,
		"name": "嘉兴市",
		"pid": 330000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 330700,
		"name": "金华市",
		"pid": 330000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 360200,
		"name": "景德镇市",
		"pid": 360000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 360400,
		"name": "九江市",
		"pid": 360000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 360800,
		"name": "吉安市",
		"pid": 360000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 370100,
		"name": "济南市",
		"pid": 370000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 370800,
		"name": "济宁市",
		"pid": 370000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 410800,
		"name": "焦作市",
		"pid": 410000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 420800,
		"name": "荆门市",
		"pid": 420000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 421000,
		"name": "荆州市",
		"pid": 420000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 440700,
		"name": "江门市",
		"pid": 440000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 445200,
		"name": "揭阳市",
		"pid": 440000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 620200,
		"name": "嘉峪关市",
		"pid": 620000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 620300,
		"name": "金昌市",
		"pid": 620000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}, {
		"id": 620900,
		"name": "酒泉市",
		"pid": 620000,
		"pinyin": "J",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 530100,
		"name": "昆明市",
		"pid": 530000,
		"pinyin": "K",
		"level": 2,
		"group_count": null
	}, {
		"id": 650200,
		"name": "克拉玛依市",
		"pid": 650000,
		"pinyin": "K",
		"level": 2,
		"group_count": null
	}, {
		"id": 653000,
		"name": "克孜勒苏柯尔克孜自治州",
		"pid": 650000,
		"pinyin": "K",
		"level": 2,
		"group_count": null
	}, {
		"id": 653100,
		"name": "喀什地区",
		"pid": 650000,
		"pinyin": "K",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 141000,
		"name": "临汾市",
		"pid": 140000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 141100,
		"name": "吕梁市",
		"pid": 140000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 211000,
		"name": "辽阳市",
		"pid": 210000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 220400,
		"name": "辽源市",
		"pid": 220000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 320700,
		"name": "连云港市",
		"pid": 320000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 331100,
		"name": "丽水市",
		"pid": 330000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 341500,
		"name": "六安市",
		"pid": 340000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 350800,
		"name": "龙岩市",
		"pid": 350000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 371200,
		"name": "莱芜市",
		"pid": 370000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 371300,
		"name": "临沂市",
		"pid": 370000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 371500,
		"name": "聊城市",
		"pid": 370000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 410300,
		"name": "洛阳市",
		"pid": 410000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 411100,
		"name": "漯河市",
		"pid": 410000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 431300,
		"name": "娄底市",
		"pid": 430000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 450200,
		"name": "柳州市",
		"pid": 450000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 451300,
		"name": "来宾市",
		"pid": 450000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 510500,
		"name": "泸州市",
		"pid": 510000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 511100,
		"name": "乐山市",
		"pid": 510000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 513400,
		"name": "凉山彝族自治州",
		"pid": 510000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 520200,
		"name": "六盘水市",
		"pid": 520000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 530700,
		"name": "丽江市",
		"pid": 530000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 530900,
		"name": "临沧市",
		"pid": 530000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 540100,
		"name": "拉萨市",
		"pid": 540000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 542600,
		"name": "林芝地区",
		"pid": 540000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 620100,
		"name": "兰州市",
		"pid": 620000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 621200,
		"name": "陇南市",
		"pid": 620000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}, {
		"id": 622900,
		"name": "临夏回族自治州",
		"pid": 620000,
		"pinyin": "L",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 340500,
		"name": "马鞍山市",
		"pid": 340000,
		"pinyin": "M",
		"level": 2,
		"group_count": null
	}, {
		"id": 440900,
		"name": "茂名市",
		"pid": 440000,
		"pinyin": "M",
		"level": 2,
		"group_count": null
	}, {
		"id": 441400,
		"name": "梅州市",
		"pid": 440000,
		"pinyin": "M",
		"level": 2,
		"group_count": null
	}, {
		"id": 510700,
		"name": "绵阳市",
		"pid": 510000,
		"pinyin": "M",
		"level": 2,
		"group_count": null
	}, {
		"id": 511400,
		"name": "眉山市",
		"pid": 510000,
		"pinyin": "M",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 320600,
		"name": "南通市",
		"pid": 320000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 330200,
		"name": "宁波市",
		"pid": 330000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 350700,
		"name": "南平市",
		"pid": 350000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 350900,
		"name": "宁德市",
		"pid": 350000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 360100,
		"name": "南昌市",
		"pid": 360000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 411300,
		"name": "南阳市",
		"pid": 410000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 450100,
		"name": "南宁市",
		"pid": 450000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 511000,
		"name": "内江市",
		"pid": 510000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 511300,
		"name": "南充市",
		"pid": 510000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 533300,
		"name": "怒江傈僳族自治州",
		"pid": 530000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}, {
		"id": 542400,
		"name": "那曲地区",
		"pid": 540000,
		"pinyin": "N",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 350300,
		"name": "莆田市",
		"pid": 350000,
		"pinyin": "P",
		"level": 2,
		"group_count": null
	}, {
		"id": 360300,
		"name": "萍乡市",
		"pid": 360000,
		"pinyin": "P",
		"level": 2,
		"group_count": null
	}, {
		"id": 410400,
		"name": "平顶山市",
		"pid": 410000,
		"pinyin": "P",
		"level": 2,
		"group_count": null
	}, {
		"id": 410900,
		"name": "濮阳市",
		"pid": 410000,
		"pinyin": "P",
		"level": 2,
		"group_count": null
	}, {
		"id": 510400,
		"name": "攀枝花市",
		"pid": 510000,
		"pinyin": "P",
		"level": 2,
		"group_count": null
	}, {
		"id": 530800,
		"name": "普洱市",
		"pid": 530000,
		"pinyin": "P",
		"level": 2,
		"group_count": null
	}, {
		"id": 620800,
		"name": "平凉市",
		"pid": 620000,
		"pinyin": "P",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 230200,
		"name": "齐齐哈尔市",
		"pid": 230000,
		"pinyin": "Q",
		"level": 2,
		"group_count": 5
	}, {
		"id": 230900,
		"name": "七台河市",
		"pid": 230000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 330800,
		"name": "衢州市",
		"pid": 330000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 350500,
		"name": "泉州市",
		"pid": 350000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 370200,
		"name": "青岛市",
		"pid": 370000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 441800,
		"name": "清远市",
		"pid": 440000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 450700,
		"name": "钦州市",
		"pid": 450000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 522300,
		"name": "黔西南布依族苗族自治州",
		"pid": 520000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 522600,
		"name": "黔东南苗族侗族自治州",
		"pid": 520000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 522700,
		"name": "黔南布依族苗族自治州",
		"pid": 520000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 530300,
		"name": "曲靖市",
		"pid": 530000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}, {
		"id": 621000,
		"name": "庆阳市",
		"pid": 620000,
		"pinyin": "Q",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 542300,
		"name": "日喀则地区",
		"pid": 540000,
		"pinyin": "R",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 130100,
		"name": "石家庄市",
		"pid": 130000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 140600,
		"name": "朔州市",
		"pid": 140000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 210100,
		"name": "沈阳市",
		"pid": 210000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 220300,
		"name": "四平市",
		"pid": 220000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 220700,
		"name": "松原市",
		"pid": 220000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 230500,
		"name": "双鸭山市",
		"pid": 230000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 231200,
		"name": "绥化市",
		"pid": 230000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 320500,
		"name": "苏州市",
		"pid": 320000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 321300,
		"name": "宿迁市",
		"pid": 320000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 330600,
		"name": "绍兴市",
		"pid": 330000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 341300,
		"name": "宿州市",
		"pid": 340000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 350200,
		"name": "厦门市",
		"pid": 350000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 350400,
		"name": "三明市",
		"pid": 350000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 361100,
		"name": "上饶市",
		"pid": 360000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 411200,
		"name": "三门峡市",
		"pid": 410000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 411400,
		"name": "商丘市",
		"pid": 410000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 419000,
		"name": "省直辖县级行政区划",
		"pid": 410000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 420300,
		"name": "十堰市",
		"pid": 420000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 421300,
		"name": "随州市",
		"pid": 420000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 429000,
		"name": "省直辖县级行政区划",
		"pid": 420000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 430500,
		"name": "邵阳市",
		"pid": 430000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 440200,
		"name": "韶关市",
		"pid": 440000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 440300,
		"name": "深圳市",
		"pid": 440000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 440500,
		"name": "汕头市",
		"pid": 440000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 441500,
		"name": "汕尾市",
		"pid": 440000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 460200,
		"name": "三亚市",
		"pid": 460000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 460300,
		"name": "三沙市",
		"pid": 460000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 469000,
		"name": "省直辖县级行政区划",
		"pid": 460000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 510900,
		"name": "遂宁市",
		"pid": 510000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 542200,
		"name": "山南地区",
		"pid": 540000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 611000,
		"name": "商洛市",
		"pid": 610000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}, {
		"id": 640200,
		"name": "石嘴山市",
		"pid": 640000,
		"pinyin": "S",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 710000,
		"name": "台湾省",
		"pid": 710000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 130200,
		"name": "唐山市",
		"pid": 130000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 140100,
		"name": "太原市",
		"pid": 140000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 150500,
		"name": "通辽市",
		"pid": 150000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 211200,
		"name": "铁岭市",
		"pid": 210000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 220500,
		"name": "通化市",
		"pid": 220000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 321200,
		"name": "泰州市",
		"pid": 320000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 331000,
		"name": "台州市",
		"pid": 330000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 340700,
		"name": "铜陵市",
		"pid": 340000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 370900,
		"name": "泰安市",
		"pid": 370000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 520600,
		"name": "铜仁市",
		"pid": 520000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 610200,
		"name": "铜川市",
		"pid": 610000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 620500,
		"name": "天水市",
		"pid": 620000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 652100,
		"name": "吐鲁番地区",
		"pid": 650000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}, {
		"id": 654200,
		"name": "塔城地区",
		"pid": 650000,
		"pinyin": "T",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 150900,
		"name": "乌兰察布市",
		"pid": 150000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 320200,
		"name": "无锡市",
		"pid": 320000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 330300,
		"name": "温州市",
		"pid": 330000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 340200,
		"name": "芜湖市",
		"pid": 340000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 370700,
		"name": "潍坊市",
		"pid": 370000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 371000,
		"name": "威海市",
		"pid": 370000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 420100,
		"name": "武汉市",
		"pid": 420000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 450400,
		"name": "梧州市",
		"pid": 450000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 532600,
		"name": "文山壮族苗族自治州",
		"pid": 530000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 610500,
		"name": "渭南市",
		"pid": 610000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 620600,
		"name": "武威市",
		"pid": 620000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 640300,
		"name": "吴忠市",
		"pid": 640000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}, {
		"id": 650100,
		"name": "乌鲁木齐市",
		"pid": 650000,
		"pinyin": "W",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 130500,
		"name": "邢台市",
		"pid": 130000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 140900,
		"name": "忻州市",
		"pid": 140000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 152200,
		"name": "兴安盟",
		"pid": 150000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 152500,
		"name": "锡林郭勒盟",
		"pid": 150000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 320300,
		"name": "徐州市",
		"pid": 320000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 341800,
		"name": "宣城市",
		"pid": 340000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 360500,
		"name": "新余市",
		"pid": 360000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 410700,
		"name": "新乡市",
		"pid": 410000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 411000,
		"name": "许昌市",
		"pid": 410000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 411500,
		"name": "信阳市",
		"pid": 410000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 420600,
		"name": "襄阳市",
		"pid": 420000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 420900,
		"name": "孝感市",
		"pid": 420000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 421200,
		"name": "咸宁市",
		"pid": 420000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 430300,
		"name": "湘潭市",
		"pid": 430000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 433100,
		"name": "湘西土家族苗族自治州",
		"pid": 430000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 532800,
		"name": "西双版纳傣族自治州",
		"pid": 530000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 610100,
		"name": "西安市",
		"pid": 610000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 610400,
		"name": "咸阳市",
		"pid": 610000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}, {
		"id": 630100,
		"name": "西宁市",
		"pid": 630000,
		"pinyin": "X",
		"level": 2,
		"group_count": null
	}],
	[{
		"id": 140800,
		"name": "运城市",
		"pid": 140000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 210800,
		"name": "营口市",
		"pid": 210000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 222400,
		"name": "延边朝鲜族自治州",
		"pid": 220000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 230700,
		"name": "伊春市",
		"pid": 230000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 320900,
		"name": "盐城市",
		"pid": 320000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 321000,
		"name": "扬州市",
		"pid": 320000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 360600,
		"name": "鹰潭市",
		"pid": 360000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 360900,
		"name": "宜春市",
		"pid": 360000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 370600,
		"name": "烟台市",
		"pid": 370000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 420500,
		"name": "宜昌市",
		"pid": 420000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 430600,
		"name": "岳阳市",
		"pid": 430000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 430900,
		"name": "益阳市",
		"pid": 430000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 431100,
		"name": "永州市",
		"pid": 430000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 441700,
		"name": "阳江市",
		"pid": 440000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 445300,
		"name": "云浮市",
		"pid": 440000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 450900,
		"name": "玉林市",
		"pid": 450000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 511500,
		"name": "宜宾市",
		"pid": 510000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 511800,
		"name": "雅安市",
		"pid": 510000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 530400,
		"name": "玉溪市",
		"pid": 530000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 610600,
		"name": "延安市",
		"pid": 610000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 610800,
		"name": "榆林市",
		"pid": 610000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 632700,
		"name": "玉树藏族自治州",
		"pid": 630000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 640100,
		"name": "银川市",
		"pid": 640000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}, {
		"id": 654000,
		"name": "伊犁哈萨克自治州",
		"pid": 650000,
		"pinyin": "Y",
		"level": 2,
		"group_count": null
	}]
] ||
[
    {
      "id": 820000,
      "name": "澳门特别行政区zw",
      "pid": 820000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 152900,
      "name": "阿拉善盟",
      "pid": 150000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210300,
      "name": "鞍山市",
      "pid": 210000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 340800,
      "name": "安庆市",
      "pid": 340000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410500,
      "name": "安阳市",
      "pid": 410000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 513200,
      "name": "阿坝藏族羌族自治州",
      "pid": 510000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 520400,
      "name": "安顺市",
      "pid": 520000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 542500,
      "name": "阿里地区",
      "pid": 540000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610900,
      "name": "安康市",
      "pid": 610000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 652900,
      "name": "阿克苏地区",
      "pid": 650000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 654300,
      "name": "阿勒泰地区",
      "pid": 650000,
      "pinyin": "A",
      "level": 2,
      "group_count": null
    },
    {
      "id": 110000,
      "name": "北京市",
      "pid": 110000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130600,
      "name": "保定市",
      "pid": 130000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150200,
      "name": "包头市",
      "pid": 150000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150800,
      "name": "巴彦淖尔市",
      "pid": 150000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210500,
      "name": "本溪市",
      "pid": 210000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 220600,
      "name": "白山市",
      "pid": 220000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 220800,
      "name": "白城市",
      "pid": 220000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 340300,
      "name": "蚌埠市",
      "pid": 340000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 341600,
      "name": "亳州市",
      "pid": 340000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 371600,
      "name": "滨州市",
      "pid": 370000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450500,
      "name": "北海市",
      "pid": 450000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 451000,
      "name": "百色市",
      "pid": 450000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511900,
      "name": "巴中市",
      "pid": 510000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 520500,
      "name": "毕节市",
      "pid": 520000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 530500,
      "name": "保山市",
      "pid": 530000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610300,
      "name": "宝鸡市",
      "pid": 610000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620400,
      "name": "白银市",
      "pid": 620000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 652700,
      "name": "博尔塔拉蒙古自治州",
      "pid": 650000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 652800,
      "name": "巴音郭楞蒙古自治州",
      "pid": 650000,
      "pinyin": "B",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130800,
      "name": "承德市",
      "pid": 130000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130900,
      "name": "沧州市",
      "pid": 130000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150400,
      "name": "赤峰市",
      "pid": 150000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 211300,
      "name": "朝阳市",
      "pid": 210000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320400,
      "name": "常州市",
      "pid": 320000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 341100,
      "name": "滁州市",
      "pid": 340000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 341700,
      "name": "池州市",
      "pid": 340000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430700,
      "name": "常德市",
      "pid": 430000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 431000,
      "name": "郴州市",
      "pid": 430000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 445100,
      "name": "潮州市",
      "pid": 440000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 451400,
      "name": "崇左市",
      "pid": 450000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 510100,
      "name": "成都市",
      "pid": 510000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 532300,
      "name": "楚雄彝族自治州",
      "pid": 530000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 542100,
      "name": "昌都地区",
      "pid": 540000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 652300,
      "name": "昌吉回族自治州",
      "pid": 650000,
      "pinyin": "C",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140200,
      "name": "大同市",
      "pid": 140000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210200,
      "name": "大连市",
      "pid": 210000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210600,
      "name": "丹东市",
      "pid": 210000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230600,
      "name": "大庆市",
      "pid": 230000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 232700,
      "name": "大兴安岭地区",
      "pid": 230000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370500,
      "name": "东营市",
      "pid": 370000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 371400,
      "name": "德州市",
      "pid": 370000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 510600,
      "name": "德阳市",
      "pid": 510000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511700,
      "name": "达州市",
      "pid": 510000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 532900,
      "name": "大理白族自治州",
      "pid": 530000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 533100,
      "name": "德宏傣族景颇族自治州",
      "pid": 530000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 533400,
      "name": "迪庆藏族自治州",
      "pid": 530000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 621100,
      "name": "定西市",
      "pid": 620000,
      "pinyin": "D",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150600,
      "name": "鄂尔多斯市",
      "pid": 150000,
      "pinyin": "E",
      "level": 2,
      "group_count": null
    },
    {
      "id": 420700,
      "name": "鄂州市",
      "pid": 420000,
      "pinyin": "E",
      "level": 2,
      "group_count": null
    },
    {
      "id": 422800,
      "name": "恩施土家族苗族自治州",
      "pid": 420000,
      "pinyin": "E",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210400,
      "name": "抚顺市",
      "pid": 210000,
      "pinyin": "F",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210900,
      "name": "阜新市",
      "pid": 210000,
      "pinyin": "F",
      "level": 2,
      "group_count": null
    },
    {
      "id": 341200,
      "name": "阜阳市",
      "pid": 340000,
      "pinyin": "F",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350100,
      "name": "福州市",
      "pid": 350000,
      "pinyin": "F",
      "level": 2,
      "group_count": null
    },
    {
      "id": 361000,
      "name": "抚州市",
      "pid": 360000,
      "pinyin": "F",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440600,
      "name": "佛山市",
      "pid": 440000,
      "pinyin": "F",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450600,
      "name": "防城港市",
      "pid": 450000,
      "pinyin": "F",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360700,
      "name": "赣州市",
      "pid": 360000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440100,
      "name": "广州市",
      "pid": 440000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450300,
      "name": "桂林市",
      "pid": 450000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450800,
      "name": "贵港市",
      "pid": 450000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 510800,
      "name": "广元市",
      "pid": 510000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511600,
      "name": "广安市",
      "pid": 510000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 513300,
      "name": "甘孜藏族自治州",
      "pid": 510000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 520100,
      "name": "贵阳市",
      "pid": 520000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 623000,
      "name": "甘南藏族自治州",
      "pid": 620000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 632600,
      "name": "果洛藏族自治州",
      "pid": 630000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 640400,
      "name": "固原市",
      "pid": 640000,
      "pinyin": "G",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130400,
      "name": "邯郸市",
      "pid": 130000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 131100,
      "name": "衡水市",
      "pid": 130000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150100,
      "name": "呼和浩特市",
      "pid": 150000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150700,
      "name": "呼伦贝尔市",
      "pid": 150000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 211400,
      "name": "葫芦岛市",
      "pid": 210000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230100,
      "name": "哈尔滨市",
      "pid": 230000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230400,
      "name": "鹤岗市",
      "pid": 230000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 231100,
      "name": "黑河市",
      "pid": 230000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320800,
      "name": "淮安市",
      "pid": 320000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330100,
      "name": "杭州市",
      "pid": 330000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330500,
      "name": "湖州市",
      "pid": 330000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 340100,
      "name": "合肥市",
      "pid": 340000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 340400,
      "name": "淮南市",
      "pid": 340000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 340600,
      "name": "淮北市",
      "pid": 340000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 341000,
      "name": "黄山市",
      "pid": 340000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 371700,
      "name": "菏泽市",
      "pid": 370000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410600,
      "name": "鹤壁市",
      "pid": 410000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 420200,
      "name": "黄石市",
      "pid": 420000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 421100,
      "name": "黄冈市",
      "pid": 420000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430400,
      "name": "衡阳市",
      "pid": 430000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 431200,
      "name": "怀化市",
      "pid": 430000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 441300,
      "name": "惠州市",
      "pid": 440000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 441600,
      "name": "河源市",
      "pid": 440000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 451100,
      "name": "贺州市",
      "pid": 450000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 451200,
      "name": "河池市",
      "pid": 450000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 460100,
      "name": "海口市",
      "pid": 460000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 532500,
      "name": "红河哈尼族彝族自治州",
      "pid": 530000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610700,
      "name": "汉中市",
      "pid": 610000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 630200,
      "name": "海东市",
      "pid": 630000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 632200,
      "name": "海北藏族自治州",
      "pid": 630000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 632300,
      "name": "黄南藏族自治州",
      "pid": 630000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 632500,
      "name": "海南藏族自治州",
      "pid": 630000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 632800,
      "name": "海西蒙古族藏族自治州",
      "pid": 630000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 652200,
      "name": "哈密地区",
      "pid": 650000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 653200,
      "name": "和田地区",
      "pid": 650000,
      "pinyin": "H",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140500,
      "name": "晋城市",
      "pid": 140000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140700,
      "name": "晋中市",
      "pid": 140000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210700,
      "name": "锦州市",
      "pid": 210000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 220200,
      "name": "吉林市",
      "pid": 220000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230300,
      "name": "鸡西市",
      "pid": 230000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230800,
      "name": "佳木斯市",
      "pid": 230000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330400,
      "name": "嘉兴市",
      "pid": 330000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330700,
      "name": "金华市",
      "pid": 330000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360200,
      "name": "景德镇市",
      "pid": 360000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360400,
      "name": "九江市",
      "pid": 360000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360800,
      "name": "吉安市",
      "pid": 360000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370100,
      "name": "济南市",
      "pid": 370000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370800,
      "name": "济宁市",
      "pid": 370000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410800,
      "name": "焦作市",
      "pid": 410000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 420800,
      "name": "荆门市",
      "pid": 420000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 421000,
      "name": "荆州市",
      "pid": 420000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440700,
      "name": "江门市",
      "pid": 440000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 445200,
      "name": "揭阳市",
      "pid": 440000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620200,
      "name": "嘉峪关市",
      "pid": 620000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620300,
      "name": "金昌市",
      "pid": 620000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620900,
      "name": "酒泉市",
      "pid": 620000,
      "pinyin": "J",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410200,
      "name": "开封市",
      "pid": 410000,
      "pinyin": "K",
      "level": 2,
      "group_count": null
    },
    {
      "id": 530100,
      "name": "昆明市",
      "pid": 530000,
      "pinyin": "K",
      "level": 2,
      "group_count": null
    },
    {
      "id": 650200,
      "name": "克拉玛依市",
      "pid": 650000,
      "pinyin": "K",
      "level": 2,
      "group_count": null
    },
    {
      "id": 653000,
      "name": "克孜勒苏柯尔克孜自治州",
      "pid": 650000,
      "pinyin": "K",
      "level": 2,
      "group_count": null
    },
    {
      "id": 653100,
      "name": "喀什地区",
      "pid": 650000,
      "pinyin": "K",
      "level": 2,
      "group_count": null
    },
    {
      "id": 131000,
      "name": "廊坊市",
      "pid": 130000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 141000,
      "name": "临汾市",
      "pid": 140000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 141100,
      "name": "吕梁市",
      "pid": 140000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 211000,
      "name": "辽阳市",
      "pid": 210000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 220400,
      "name": "辽源市",
      "pid": 220000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320700,
      "name": "连云港市",
      "pid": 320000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 331100,
      "name": "丽水市",
      "pid": 330000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 341500,
      "name": "六安市",
      "pid": 340000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350800,
      "name": "龙岩市",
      "pid": 350000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 371200,
      "name": "莱芜市",
      "pid": 370000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 371300,
      "name": "临沂市",
      "pid": 370000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 371500,
      "name": "聊城市",
      "pid": 370000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410300,
      "name": "洛阳市",
      "pid": 410000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 411100,
      "name": "漯河市",
      "pid": 410000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 431300,
      "name": "娄底市",
      "pid": 430000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450200,
      "name": "柳州市",
      "pid": 450000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 451300,
      "name": "来宾市",
      "pid": 450000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 510500,
      "name": "泸州市",
      "pid": 510000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511100,
      "name": "乐山市",
      "pid": 510000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 513400,
      "name": "凉山彝族自治州",
      "pid": 510000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 520200,
      "name": "六盘水市",
      "pid": 520000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 530700,
      "name": "丽江市",
      "pid": 530000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 530900,
      "name": "临沧市",
      "pid": 530000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 540100,
      "name": "拉萨市",
      "pid": 540000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 542600,
      "name": "林芝地区",
      "pid": 540000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620100,
      "name": "兰州市",
      "pid": 620000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 621200,
      "name": "陇南市",
      "pid": 620000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 622900,
      "name": "临夏回族自治州",
      "pid": 620000,
      "pinyin": "L",
      "level": 2,
      "group_count": null
    },
    {
      "id": 231000,
      "name": "牡丹江市",
      "pid": 230000,
      "pinyin": "M",
      "level": 2,
      "group_count": null
    },
    {
      "id": 340500,
      "name": "马鞍山市",
      "pid": 340000,
      "pinyin": "M",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440900,
      "name": "茂名市",
      "pid": 440000,
      "pinyin": "M",
      "level": 2,
      "group_count": null
    },
    {
      "id": 441400,
      "name": "梅州市",
      "pid": 440000,
      "pinyin": "M",
      "level": 2,
      "group_count": null
    },
    {
      "id": 510700,
      "name": "绵阳市",
      "pid": 510000,
      "pinyin": "M",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511400,
      "name": "眉山市",
      "pid": 510000,
      "pinyin": "M",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320100,
      "name": "南京市",
      "pid": 320000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320600,
      "name": "南通市",
      "pid": 320000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330200,
      "name": "宁波市",
      "pid": 330000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350700,
      "name": "南平市",
      "pid": 350000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350900,
      "name": "宁德市",
      "pid": 350000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360100,
      "name": "南昌市",
      "pid": 360000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 411300,
      "name": "南阳市",
      "pid": 410000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450100,
      "name": "南宁市",
      "pid": 450000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511000,
      "name": "内江市",
      "pid": 510000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511300,
      "name": "南充市",
      "pid": 510000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 533300,
      "name": "怒江傈僳族自治州",
      "pid": 530000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 542400,
      "name": "那曲地区",
      "pid": 540000,
      "pinyin": "N",
      "level": 2,
      "group_count": null
    },
    {
      "id": 211100,
      "name": "盘锦市",
      "pid": 210000,
      "pinyin": "P",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350300,
      "name": "莆田市",
      "pid": 350000,
      "pinyin": "P",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360300,
      "name": "萍乡市",
      "pid": 360000,
      "pinyin": "P",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410400,
      "name": "平顶山市",
      "pid": 410000,
      "pinyin": "P",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410900,
      "name": "濮阳市",
      "pid": 410000,
      "pinyin": "P",
      "level": 2,
      "group_count": null
    },
    {
      "id": 510400,
      "name": "攀枝花市",
      "pid": 510000,
      "pinyin": "P",
      "level": 2,
      "group_count": null
    },
    {
      "id": 530800,
      "name": "普洱市",
      "pid": 530000,
      "pinyin": "P",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620800,
      "name": "平凉市",
      "pid": 620000,
      "pinyin": "P",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130300,
      "name": "秦皇岛市",
      "pid": 130000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230200,
      "name": "齐齐哈尔市",
      "pid": 230000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230900,
      "name": "七台河市",
      "pid": 230000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330800,
      "name": "衢州市",
      "pid": 330000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350500,
      "name": "泉州市",
      "pid": 350000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370200,
      "name": "青岛市",
      "pid": 370000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 441800,
      "name": "清远市",
      "pid": 440000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450700,
      "name": "钦州市",
      "pid": 450000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 522300,
      "name": "黔西南布依族苗族自治州",
      "pid": 520000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 522600,
      "name": "黔东南苗族侗族自治州",
      "pid": 520000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 522700,
      "name": "黔南布依族苗族自治州",
      "pid": 520000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 530300,
      "name": "曲靖市",
      "pid": 530000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 621000,
      "name": "庆阳市",
      "pid": 620000,
      "pinyin": "Q",
      "level": 2,
      "group_count": null
    },
    {
      "id": 371100,
      "name": "日照市",
      "pid": 370000,
      "pinyin": "R",
      "level": 2,
      "group_count": null
    },
    {
      "id": 542300,
      "name": "日喀则地区",
      "pid": 540000,
      "pinyin": "R",
      "level": 2,
      "group_count": null
    },
    {
      "id": 310000,
      "name": "上海市",
      "pid": 310000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130100,
      "name": "石家庄市",
      "pid": 130000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140600,
      "name": "朔州市",
      "pid": 140000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210100,
      "name": "沈阳市",
      "pid": 210000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 220300,
      "name": "四平市",
      "pid": 220000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 220700,
      "name": "松原市",
      "pid": 220000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230500,
      "name": "双鸭山市",
      "pid": 230000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 231200,
      "name": "绥化市",
      "pid": 230000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320500,
      "name": "苏州市",
      "pid": 320000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 321300,
      "name": "宿迁市",
      "pid": 320000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330600,
      "name": "绍兴市",
      "pid": 330000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 341300,
      "name": "宿州市",
      "pid": 340000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350200,
      "name": "厦门市",
      "pid": 350000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350400,
      "name": "三明市",
      "pid": 350000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 361100,
      "name": "上饶市",
      "pid": 360000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 411200,
      "name": "三门峡市",
      "pid": 410000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 411400,
      "name": "商丘市",
      "pid": 410000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 419000,
      "name": "省直辖县级行政区划",
      "pid": 410000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 420300,
      "name": "十堰市",
      "pid": 420000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 421300,
      "name": "随州市",
      "pid": 420000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 429000,
      "name": "省直辖县级行政区划",
      "pid": 420000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430500,
      "name": "邵阳市",
      "pid": 430000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440200,
      "name": "韶关市",
      "pid": 440000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440300,
      "name": "深圳市",
      "pid": 440000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440500,
      "name": "汕头市",
      "pid": 440000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 441500,
      "name": "汕尾市",
      "pid": 440000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 460200,
      "name": "三亚市",
      "pid": 460000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 460300,
      "name": "三沙市",
      "pid": 460000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 469000,
      "name": "省直辖县级行政区划",
      "pid": 460000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 510900,
      "name": "遂宁市",
      "pid": 510000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 542200,
      "name": "山南地区",
      "pid": 540000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 611000,
      "name": "商洛市",
      "pid": 610000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 640200,
      "name": "石嘴山市",
      "pid": 640000,
      "pinyin": "S",
      "level": 2,
      "group_count": null
    },
    {
      "id": 120000,
      "name": "天津市",
      "pid": 120000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 710000,
      "name": "台湾省",
      "pid": 710000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130200,
      "name": "唐山市",
      "pid": 130000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140100,
      "name": "太原市",
      "pid": 140000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150500,
      "name": "通辽市",
      "pid": 150000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 211200,
      "name": "铁岭市",
      "pid": 210000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 220500,
      "name": "通化市",
      "pid": 220000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 321200,
      "name": "泰州市",
      "pid": 320000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 331000,
      "name": "台州市",
      "pid": 330000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 340700,
      "name": "铜陵市",
      "pid": 340000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370900,
      "name": "泰安市",
      "pid": 370000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 520600,
      "name": "铜仁市",
      "pid": 520000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610200,
      "name": "铜川市",
      "pid": 610000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620500,
      "name": "天水市",
      "pid": 620000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 652100,
      "name": "吐鲁番地区",
      "pid": 650000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 654200,
      "name": "塔城地区",
      "pid": 650000,
      "pinyin": "T",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150300,
      "name": "乌海市",
      "pid": 150000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 150900,
      "name": "乌兰察布市",
      "pid": 150000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320200,
      "name": "无锡市",
      "pid": 320000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330300,
      "name": "温州市",
      "pid": 330000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 340200,
      "name": "芜湖市",
      "pid": 340000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370700,
      "name": "潍坊市",
      "pid": 370000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 371000,
      "name": "威海市",
      "pid": 370000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 420100,
      "name": "武汉市",
      "pid": 420000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450400,
      "name": "梧州市",
      "pid": 450000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 532600,
      "name": "文山壮族苗族自治州",
      "pid": 530000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610500,
      "name": "渭南市",
      "pid": 610000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620600,
      "name": "武威市",
      "pid": 620000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 640300,
      "name": "吴忠市",
      "pid": 640000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 650100,
      "name": "乌鲁木齐市",
      "pid": 650000,
      "pinyin": "W",
      "level": 2,
      "group_count": null
    },
    {
      "id": 810000,
      "name": "香港特别行政区",
      "pid": 810000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130500,
      "name": "邢台市",
      "pid": 130000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140900,
      "name": "忻州市",
      "pid": 140000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 152200,
      "name": "兴安盟",
      "pid": 150000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 152500,
      "name": "锡林郭勒盟",
      "pid": 150000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320300,
      "name": "徐州市",
      "pid": 320000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 341800,
      "name": "宣城市",
      "pid": 340000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360500,
      "name": "新余市",
      "pid": 360000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410700,
      "name": "新乡市",
      "pid": 410000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 411000,
      "name": "许昌市",
      "pid": 410000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 411500,
      "name": "信阳市",
      "pid": 410000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 420600,
      "name": "襄阳市",
      "pid": 420000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 420900,
      "name": "孝感市",
      "pid": 420000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 421200,
      "name": "咸宁市",
      "pid": 420000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430300,
      "name": "湘潭市",
      "pid": 430000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 433100,
      "name": "湘西土家族苗族自治州",
      "pid": 430000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 532800,
      "name": "西双版纳傣族自治州",
      "pid": 530000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610100,
      "name": "西安市",
      "pid": 610000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610400,
      "name": "咸阳市",
      "pid": 610000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 630100,
      "name": "西宁市",
      "pid": 630000,
      "pinyin": "X",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140300,
      "name": "阳泉市",
      "pid": 140000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140800,
      "name": "运城市",
      "pid": 140000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 210800,
      "name": "营口市",
      "pid": 210000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 222400,
      "name": "延边朝鲜族自治州",
      "pid": 220000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 230700,
      "name": "伊春市",
      "pid": 230000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 320900,
      "name": "盐城市",
      "pid": 320000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 321000,
      "name": "扬州市",
      "pid": 320000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360600,
      "name": "鹰潭市",
      "pid": 360000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 360900,
      "name": "宜春市",
      "pid": 360000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370600,
      "name": "烟台市",
      "pid": 370000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 420500,
      "name": "宜昌市",
      "pid": 420000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430600,
      "name": "岳阳市",
      "pid": 430000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430900,
      "name": "益阳市",
      "pid": 430000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 431100,
      "name": "永州市",
      "pid": 430000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 441700,
      "name": "阳江市",
      "pid": 440000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 445300,
      "name": "云浮市",
      "pid": 440000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 450900,
      "name": "玉林市",
      "pid": 450000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511500,
      "name": "宜宾市",
      "pid": 510000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 511800,
      "name": "雅安市",
      "pid": 510000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 530400,
      "name": "玉溪市",
      "pid": 530000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610600,
      "name": "延安市",
      "pid": 610000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 610800,
      "name": "榆林市",
      "pid": 610000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 632700,
      "name": "玉树藏族自治州",
      "pid": 630000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 640100,
      "name": "银川市",
      "pid": 640000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 654000,
      "name": "伊犁哈萨克自治州",
      "pid": 650000,
      "pinyin": "Y",
      "level": 2,
      "group_count": null
    },
    {
      "id": 500000,
      "name": "重庆市",
      "pid": 500000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 130700,
      "name": "张家口市",
      "pid": 130000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 140400,
      "name": "长治市",
      "pid": 140000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 220100,
      "name": "长春市",
      "pid": 220000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 321100,
      "name": "镇江市",
      "pid": 320000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 330900,
      "name": "舟山市",
      "pid": 330000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 350600,
      "name": "漳州市",
      "pid": 350000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370300,
      "name": "淄博市",
      "pid": 370000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 370400,
      "name": "枣庄市",
      "pid": 370000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 410100,
      "name": "郑州市",
      "pid": 410000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 411600,
      "name": "周口市",
      "pid": 410000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 411700,
      "name": "驻马店市",
      "pid": 410000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430100,
      "name": "长沙市",
      "pid": 430000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430200,
      "name": "株洲市",
      "pid": 430000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 430800,
      "name": "张家界市",
      "pid": 430000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440400,
      "name": "珠海市",
      "pid": 440000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 440800,
      "name": "湛江市",
      "pid": 440000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 441200,
      "name": "肇庆市",
      "pid": 440000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 510300,
      "name": "自贡市",
      "pid": 510000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 512000,
      "name": "资阳市",
      "pid": 510000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 520300,
      "name": "遵义市",
      "pid": 520000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 530600,
      "name": "昭通市",
      "pid": 530000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 620700,
      "name": "张掖市",
      "pid": 620000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 640500,
      "name": "中卫市",
      "pid": 640000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    },
    {
      "id": 659000,
      "name": "自治区直辖县级行政区划",
      "pid": 650000,
      "pinyin": "Z",
      "level": 2,
      "group_count": null
    }
  ]

}


ContentArea.defaultProps={
  weixintype:[
    [{
     "id": 15,
     "service": "微商",
     "father_id": 1
    }, {
     "id": 16,
     "service": "互粉群",
     "father_id": 1
    }, {
     "id": 17,
     "service": "招代理商",
     "father_id": 1
    }, {
     "id": 18,
     "service": "免费赚钱",
     "father_id": 1
    }, {
     "id": 19,
     "service": "创业群",
     "father_id": 1
    }, {
     "id": 20,
     "service": "代理品牌",
     "father_id": 1
    }, {
     "id": 21,
     "service": "兼职群",
     "father_id": 1
    }, {
     "id": 22,
     "service": "公众号开发",
     "father_id": 1
    }, {
     "id": 23,
     "service": "微营销",
     "father_id": 1
    }],
    [{
     "id": 25,
     "service": "摄影群",
     "father_id": 2
    }, {
     "id": 26,
     "service": "旅游",
     "father_id": 2
    }, {
     "id": 27,
     "service": "运动",
     "father_id": 2
    }, {
     "id": 28,
     "service": "购物",
     "father_id": 2
    }, {
     "id": 29,
     "service": "母婴群",
     "father_id": 2
    }, {
     "id": 30,
     "service": "汽车",
     "father_id": 2
    }, {
     "id": 31,
     "service": "美食",
     "father_id": 2
    }, {
     "id": 32,
     "service": "宝妈群",
     "father_id": 2
    }, {
     "id": 33,
     "service": "淘宝优惠券",
     "father_id": 2
    }],
    [{
     "id": 35,
     "service": "时尚交友",
     "father_id": 3
    }, {
     "id": 36,
     "service": "美女模特",
     "father_id": 3
    }, {
     "id": 37,
     "service": "互赞群",
     "father_id": 3
    }, {
     "id": 38,
     "service": "驴友群",
     "father_id": 3
    }, {
     "id": 39,
     "service": "车友群",
     "father_id": 3
    }, {
     "id": 40,
     "service": "吃喝玩乐",
     "father_id": 3
    }, {
     "id": 41,
     "service": "交朋友",
     "father_id": 3
    }],
    [{
     "id": 43,
     "service": "爱音乐",
     "father_id": 4
    }, {
     "id": 44,
     "service": "动漫娱乐",
     "father_id": 4
    }, {
     "id": 45,
     "service": "吃鸡手游",
     "father_id": 4
    }, {
     "id": 46,
     "service": "全民K歌群",
     "father_id": 4
    }, {
     "id": 47,
     "service": "众筹",
     "father_id": 4
    }, {
     "id": 48,
     "service": "手游群",
     "father_id": 4
    }, {
     "id": 49,
     "service": "网游群",
     "father_id": 4
    }, {
     "id": 50,
     "service": "英雄联盟群",
     "father_id": 4
    }, {
     "id": 51,
     "service": "王者荣耀群",
     "father_id": 4
    }, {
     "id": 52,
     "service": "区块链",
     "father_id": 4
    }, {
     "id": 53,
     "service": "麻将群",
     "father_id": 4
    }],
    [{
     "id": 55,
     "service": "富婆群",
     "father_id": 5
    }, {
     "id": 56,
     "service": "土豪群",
     "father_id": 5
    }, {
     "id": 57,
     "service": "股票交流群",
     "father_id": 5
    }, {
     "id": 58,
     "service": "投资交流群",
     "father_id": 5
    }, {
     "id": 59,
     "service": "美女直播",
     "father_id": 5
    }, {
     "id": 60,
     "service": "闲聊群",
     "father_id": 5
    }]
  ],
    upperCase:["AA", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y"],
}

export default ContentArea
