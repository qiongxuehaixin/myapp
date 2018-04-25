import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Alert,Calendar,Icon,Tabs,Pagination,Card,BackTop} from 'antd';
import WechatArticle from './../ArticleContent';

import './content.css';
import 'antd/dist/antd.css';
const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;


class Content extends Component {
  constructor(props) {
    super(props);
    this.state={
      //首页主体内容（微信二维码图片）
      imgsDate:{
            "title" : false,
            "num": 4,
            "data": [
                {
                    "id": 1,
                    "url":"./imgs/erwei01.jpeg",
                    href:"index0.html",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.jpeg",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
            ]
      },
      //微信群
      tabImgsDate1:{
            "title" : false,
            "num": 4,
            "data": [
                {
                    "id": 1,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei01.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                }
            ]
      },
      //公众号
      tabImgsDate2:{
            "title" : false,
            "num": 4,
            "data": [
                {
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },{
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                },
                {
                    "id": 4,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"imgbox",
                    "txt":"微信"
                }
            ]
      },
      //个人微信
      tabImgsDate3:{
          "title" : false,
          "num": 4,
          "data": [
              {
                  "id": 1,
                  "url":"./imgs/erwei02.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 2,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 3,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 2,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 3,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 4,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },{
                  "id": 1,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 2,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 3,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 4,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },{
                  "id": 1,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 2,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 3,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 4,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },{
                  "id": 1,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 2,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 3,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 4,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },{
                  "id": 1,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 2,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 3,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 4,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },{
                  "id": 1,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 2,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 3,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 4,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },{
                  "id": 1,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 2,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 3,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              },
              {
                  "id": 4,
                  "url":"./imgs/erwei03.gif",
                  href:"javascript:;",
                  cla:"imgbox",
                  "txt":"微信"
              }
          ]
      },
      //热词搜索
      hotword:{
          "title" : false,
          "num": 4,
          "color":['#02D1A7','#7D91F4','#E1B82C','#D97FF0','#3DD453','#7D91F4'],
          "data": [
              {
                  "id": 1,
                  href:"javascript:;",
                  "name":"微信群"
              },
              {
                  "id": 2,
                  href:"javascript:;",
                  "name":"交 友群"
              },
              {
                  "id": 3,
                  href:"javascript:;",
                  "name":"创业"
              },
              {
                  "id": 4,
                  href:"javascript:;",
                  "name":"微信恩恩号"
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
                  "name":"创大幅度发业"
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
                  "name":"创儿童业"
              },
              {
                  "id": 4,
                  href:"javascript:;",
                  "name":"微信号"
              },
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
      },
      // 阅读盒子推荐
      linkData:{
          "title" : false,
          "num": 4,
          "data": [
              {
                  "id": 1,
                  href:"",
                  "name":"阅读推荐"
              },
              {
                  "id": 2,
                  href:"",
                  "name":"微商杂谈"
              },
              {
                  "id": 3,
                  href:"",
                  "name":"养生之道"
              },
              {
                  "id": 4,
                  href:"",
                  "name":"八卦娱乐"
              },
              {
                  "id": 1,
                  href:"",
                  "name":"旅游美景"
              },
              {
                  "id": 2,
                  href:"",
                  "name":"搞笑段子"
              },
              {
                  "id": 3,
                  href:"",
                  "name":"情感男女"
              },
              {
                  "id": 4,
                  href:"",
                  "name":"辣妈学院"
              },{
                  "id": 1,
                  href:"",
                  "name":"潮人搭配"
              },
              {
                  "id": 2,
                  href:"",
                  "name":"人气美食"
              }
          ]
      },
      // 货源推荐
      loadsData:{
          "title" : false,
          "num": 4,
          "data": [
                {
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 3,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 1,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                },
                {
                    "id": 2,
                    "url":"./imgs/erwei02.gif",
                    href:"javascript:;",
                    cla:"loadbox",
                    "txt":"微信"
                }
          ]
      },
      //友情链接
      frendLink:{
          "title" : false,
          "num": 4,
          "data": [
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
                  "name":"创儿童业"
              },
              {
                  "id": 4,
                  href:"javascript:;",
                  "name":"微信号"
              },
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
      },
    }
  };

    btnGroups(obj){
      console.log(obj)
      let arr=[];

      (obj.data).map((v,i)=>{
        if(v.href){
          arr.push(<a href={v.href} key={i} ><Button type="ghost" key={i}  style={{}} size="small">{v.name}</Button></a>);
        }else{
          arr.push(<Button type="ghost" key={i}  style={{}} size="small">{v.name}</Button>);
        }
      })
      return arr;
    }


  mainBoxImgs(obj){
    console.log(obj)
    let arr=[];

    obj.map((v,i)=>{
      arr.push(<Card2  key={i} src={v} />);
    })
    return arr;
  }

  render() {

        const operations = <a href="javascript:;" style={{fontSize:"14px",color:"#000"}}>更多...</a>
    return (
      <div>
      <div style={{background:"#f8f8f8"}}>
        <div className="main-box-img clearfix">
          {this.mainBoxImgs(this.state.imgsDate.data)}
        </div>
      </div>
      <div className="main-box-weixin clearfix">
        {/*左侧盒子*/}
        <div className="main-box-weixin-l">
          <div className="card-container">
            <Tabs tabBarExtraContent={operations}  type="card">
              <TabPane tab="微信群" key="1">
                {this.mainBoxImgs(this.state.tabImgsDate1.data)}
              </TabPane>
              <TabPane tab="公众号" key="2">
                {this.mainBoxImgs(this.state.tabImgsDate2.data)}
              </TabPane>
              <TabPane tab="个人微信" key="3">
                {this.mainBoxImgs(this.state.tabImgsDate3.data)}
              </TabPane>
            </Tabs>
          </div>
        </div>
          {/*右侧盒子*/ }
        <div className="main-box-weixin-r">
          <div>
            <h3 style={{marginTop:"10px"}}>
              热词搜索
            </h3>
            {this.btnGroups(this.state.hotword)}
          </div>
          <div>
            <h3 style={{marginTop:"30px"}}>
              城市收录排行
              <a href="javascript:;" style={{float:"right",height:"30px",lineHeight:"30px",fontSize:"14px",color:"#000"}}>更多...</a>
            </h3>
          </div>
        </div>
      </div>
      {/*阅读推荐盒子*/}
      <div className="main-box-read clearfix">
        <div className="main-box-read-w clearfix">
          <div className="link-box">
            <ButtonGroup>
              {this.btnGroups(this.state.linkData)}
            </ButtonGroup>
          </div>
          <div className="link-box-content clearfix">
            <WechatArticle />
          </div>
        </div>
        {
          /*货源推荐*/
        }
        <div className="load-offer clearfix">
          <div className="load-offer-head  clearfix">
              <h3 style={{marginTop:"30px"}}>
                <a href="javascript:;"><Button type="ghost" size="small">货源推荐</Button></a>
                <a href="javascript:;" style={{float:"right",height:"30px",lineHeight:"30px",fontSize:"14px",color:"#000"}}>更多...</a>
              </h3>
          </div>
          <div className="load-offer-content clearfix">
            {this.mainBoxImgs(this.state.loadsData.data)}
          </div>
        </div>
        {
          /*  友情链接( qq:1819088888 ) */
        }
        <div className="frend-link">
          <div className="frend-link-head">
            友情链接( qq:1819088888 )
          </div>
          <div className="frend-link-content">
            {this.btnGroups(this.state.frendLink)}
          </div>
        </div>
      </div>

        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
      </div>
    );
  }
}



class Card2 extends Component {
  render() {
    return (
        <div className={this.props.src.cla} >
          <a href={this.props.src.href}>
            <div className="custom-image">
              <img alt="example" width="100%" src={this.props.src.url} />
            </div>
            <div className="custom-card">
              <h3 style={{textAlign:"center"}}>{this.props.src.txt}</h3>
            </div>
          </a>
        </div>
  );
  }
}


/* 对外提供接口 */
export default Content
