import React,{Component} from 'react'
import $ from 'jquery'
import {Icon,Button,Tabs} from 'antd';
import { Link, Route,Switch,BrowserRouter,IndexRoute} from 'react-router-dom';
import { Pagination } from 'antd';
import './articlecontent.css';
const TabPane = Tabs.TabPane;



class ArticleContent extends Component{
    constructor(){
        super();
        this.state={
            "content": [
                {

                    "g_synopsis": " 告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/904249b5c24312ba0d10d94487f6c818.jpeg',
                    "classify":325,
                },
                {

                    "g_synopsis": "告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/1f6e7202f5a891880e043eb935e97549.jpeg',
                    "classify":325,
                },
                {

                    "g_synopsis": "告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/e121750e1ed28f1269305505501b974e.jpeg',
                    "classify":325,
                },
                {

                    "g_synopsis": "告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/07198fbb7fdf9b097af3631dbb4aad32.jpeg',
                    "classify":325,
                },
                {

                    "g_synopsis": "告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/edc165b5b8e2a831c524b40f4c600d32.jpeg',
                    "classify":325,
                },
                {

                    "g_synopsis": "告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/1f6e7202f5a891880e043eb935e97549.jpeg',
                    "classify":325,
                },
                {

                    "g_synopsis": " 告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/4d74af11e1314d07b2337ff61b8998e1.jpeg',
                    "classify":325,
                },
                {
                    "g_synopsis": "告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/1f6e7202f5a891880e043eb935e97549.jpeg',
                    "classify":325,
                },
                {

                    "g_synopsis": "告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/70983bbc12dad4a97daf730f3ac10eee.jpeg',
                    "classify":325,
                },
                {

                    "g_synopsis": "告诉你：为什么一定要在春天走川藏线？",
                    "create_time": "告诉你，为什么一定要在春天走一次川藏线？是的，春天的川藏线 ，有你意想不到的美!就让我来带大家去旅行一次 吧！你准备好了吗？",
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180329/16/1f6e7202f5a891880e043eb935e97549.jpeg',
                    "classify":325,
                }
            ]
        }
    }
    render()
    {
        const datas=this.state;

        return (
            <div className='article_content_dv'>{

                datas.content.map((item, index) => {
                    return   <dl key={index}>
                                <dt><img src={item.group_image} alt=""/></dt>
                                <dd>
                                    <h3>{item.g_synopsis}</h3>
                                    <p>{item.create_time} <Link to="./item"></Link></p>
                                    <div><span className="reader_article">阅读{item.classify}</span><span className="release_time">发布时间：{item.update_time}</span><span>朋友圈</span></div>
                                </dd>
                             </dl>

                })
            }
            </div>

        )
    }
}
export default ArticleContent;
