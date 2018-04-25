import React,{Component} from 'react'
import $ from 'jquery'
import {Icon,Button,Tabs} from 'antd';
import { Link, Route,Switch,BrowserRouter,IndexRoute} from 'react-router-dom';
import { Pagination } from 'antd';
import './source.css';
const TabPane = Tabs.TabPane;
const Wei=['优质货源','微信货源'];
function callback(key) {
    console.log(key);
}
class Fetch extends Component{


    componentWillMount() {

        // fetch("http://172.16.24.30:8088/api/group?r_id=410500&s_id")
        //     .then(response => response.json())
        //     .then(json => this.setState(
        //         {
        //             content: json
        //         }
        //     ));

    }
    render()
        {
            const data1=this.state;
            return (
                <div className='weixin_tab_source'>
                    <Tabs  onChange={callback} type="card" >
                        <TabPane tab={Wei[0]} key="1">
                        
                                <div className="text_content">
                                    <BrowserRouter>
                                        <div>
                                       
                                            <div>
                                                    <Switch>
                                                  
                                                    <Route path="/" component={UserListComtent}></Route>
                                                         
                                                    </Switch>

                                            </div>
                                        </div>
                                    </BrowserRouter>

                                </div>
                       
                        </TabPane>
                        <TabPane tab={Wei[1]} key="2">
                        <div className="text_content">
                                    <BrowserRouter>
                                        <div>
                      
                                            <div>
                                                    <Switch>
                                                        <Route path="/" component={UserListComtent}></Route>
                                                    </Switch>

                                            </div>
                                        </div>
                                    </BrowserRouter>

                                </div>
                        </TabPane>

                    </Tabs>
                </div>

            )
        }
}
const source = ["所有","护肤彩妆","男装女装","鞋帽箱包","母婴用品","手机数码","美食天下","养生保健","运动户外","珠宝首饰","微分销兼职","其他货源"];
class SourceList extends Component{
    render(){
        return(
            <div className="title_source">
                <div className="title_source_left">
                    <h2>微商货源</h2>
                    <Link to={ "/release"} className="release_link">我要发布</Link>
                </div>
                <div className="title_source_right">
                    {
                        source.map((Item,index) => (

                            <Link to={ "/release"} key={index} className={"linke_nav"+index}>{Item}</Link>
                       
                        ))
                    }
                
                </div>
            
            
            </div>
        )
    }
}
class UserListComtent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            "code": 100,
            "counts": 11,
            "message": "成功",
            "content": [
                {
                    "g_id": 2,
                    "u_id": 1,
                    "r_id": 410500,
                    "s_id": 15,
                    "service": "微商",
                    "city_name": "安阳市",
                    "g_name": "微信群",
                    "g_synopsis": "微信大群交友聊天；",
                    "create_time": "",
                    "update_time": "2018-03-02 09:35:39",
                    "g_admin_number": "18148114525",
                    "group_image": 'http://img8.souweixin.com/20180322/498346/13fe8ffbe13dbcb57dc4bc9b331f9a37.jpeg?h=202&w=202',
                    "group_qrcode": "29_groupqr_369960.jpeg",
                    "admin_qrcode": "29_adminqr_369960.jpeg",
                    "tag": "tag123",
                    "linkman": "fan",
                    "linkman_qq": "123456",
                    "linkman_phone": "131121230000",
                    "classify": 12,
                    "tread_count": 13,
                    "praise_count": 14,
                    "browse_count": 15
                },
                {
                    "g_id": 3,
                    "u_id": 1,
                    "r_id": 410500,
                    "s_id": 15,
                    "service": "微商",
                    "city_name": "安阳市",
                    "g_name": "微信群",
                    "g_synopsis": "微信大群交友聊天男女粉；",
                    "create_time": "",
                    "update_time": "2018-03-02 09:35:39",
                    "g_admin_number": "18148114525",
                    "group_image": 'http://img8.souweixin.com/20180314/1129538/ce676f3f9deca29995b065b656178d99.jpeg?h=202&w=202',
                    "group_qrcode": "29_groupqr_369960.jpeg",
                    "admin_qrcode": "29_adminqr_369960.jpeg",
                    "tag": "tag123",
                    "linkman": "fan",
                    "linkman_qq": "123456",
                    "linkman_phone": "131121230000",
                    "classify": 12,
                    "tread_count": 13,
                    "praise_count": 14,
                    "browse_count": 15
                },
                {
                    "g_id": 4,
                    "u_id": 1,
                    "r_id": 410500,
                    "s_id": 15,
                    "service": "微商",
                    "city_name": "安阳市",
                    "g_name": "微信群",
                    "g_synopsis": "微信大群交友聊天；",
                    "create_time": "",
                    "update_time": "2018-03-02 09:35:39",
                    "g_admin_number": "18148114525",
                    "group_image": 'http://img8.souweixin.com/20180210/694315/abc1a504e84d75bf0883183b72e45cd7.jpeg?h=202&w=202',
                    "group_qrcode": "29_groupqr_369960.jpeg",
                    "admin_qrcode": "29_adminqr_369960.jpeg",
                    "tag": "tag123",
                    "linkman": "fan",
                    "linkman_qq": "123456",
                    "linkman_phone": "131121230000",
                    "classify": 12,
                    "tread_count": 13,
                    "praise_count": 14,
                    "browse_count": 15
                },
                {
                    "g_id": 5,
                    "u_id": 1,
                    "r_id": 410500,
                    "s_id": 15,
                    "service": "微商",
                    "city_name": "安阳市",
                    "g_name": "微信群",
                    "g_synopsis": "微信大群交友聊；",
                    "create_time": "",
                    "update_time": "2018-03-02 09:35:39",
                    "g_admin_number": "18148114525",
                    "group_image": 'http://img8.souweixin.com/20180321/1134614/616a04fd9aaf336cac679b5dda543ab6.jpeg?h=202&w=202',
                    "group_qrcode": "29_groupqr_369960.jpeg",
                    "admin_qrcode": "29_adminqr_369960.jpeg",
                    "tag": "tag123",
                    "linkman": "fan",
                    "linkman_qq": "123456",
                    "linkman_phone": "131121230000",
                    "classify": 12,
                    "tread_count": 13,
                    "praise_count": 14,
                    "browse_count": 15
                },
                {
                    "g_id": 6,
                    "u_id": 1,
                    "r_id": 410500,
                    "s_id": 15,
                    "service": "微商",
                    "city_name": "安阳市",
                    "g_name": "微信群",
                    "g_synopsis": "微信交友聊天男女粉",
                    "create_time": "",
                    "update_time": "2018-03-02 09:35:39",
                    "g_admin_number": "18148114525",
                    "group_image": 'http://img8.souweixin.com/20180225/1120310/1713f329663b191228060cc69fd051c5.jpeg?h=202&w=202',
                    "group_qrcode": "29_groupqr_369960.jpeg",
                    "admin_qrcode": "29_adminqr_369960.jpeg",
                    "tag": "tag123",
                    "linkman": "fan",
                    "linkman_qq": "123456",
                    "linkman_phone": "131121230000",
                    "classify": 12,
                    "tread_count": 13,
                    "praise_count": 14,
                    "browse_count": 15
                },
                {
                    "g_id": 7,
                    "u_id": 1,
                    "r_id": 410500,
                    "s_id": 15,
                    "service": "微商",
                    "city_name": "安阳市",
                    "g_name": "微信群",
                    "g_synopsis": "交友聊天男女粉",
                    "create_time": "",
                    "update_time": "2018-03-02 09:35:39",
                    "g_admin_number": "18148114525",
                    "group_image": 'http://img8.souweixin.com/20171228/1021519/806633b2dcc33498f2303239f20651bb.png?h=202&w=202',
                    "group_qrcode": "29_groupqr_369960.jpeg",
                    "admin_qrcode": "29_adminqr_369960.jpeg",
                    "tag": "tag123",
                    "linkman": "fan",
                    "linkman_qq": "123456",
                    "linkman_phone": "131121230000",
                    "classify": 12,
                    "tread_count": 13,
                    "praise_count": 14,
                    "browse_count": 15
                },
                {
                    "g_id": 9,
                    "u_id": 1,
                    "r_id": 410500,
                    "s_id": 15,
                    "service": "微商",
                    "city_name": "安阳市",
                    "g_name": "微信群",
                    "g_synopsis": "微信交友男女粉宝妈群",
                    "create_time": "",
                    "update_time": "2018-03-02 09:35:39",
                    "g_admin_number": "18148114525",
                    "group_image": "http://img8.souweixin.com/20171224/1004214/5b538ef41a4fe49e7366c59cf98882a8.jpeg?h=202&w=202",
                    "group_qrcode": "29_groupqr_369960.jpeg",
                    "admin_qrcode": "29_adminqr_369960.jpeg",
                    "tag": "tag123",
                    "linkman": "fan",
                    "linkman_qq": "123456",
                    "linkman_phone": "131121230000",
                    "classify": 12,
                    "tread_count": 13,
                    "praise_count": 14,
                    "browse_count": 15
                },
                {
                    "g_id": 299,
                    "u_id": 1,
                    "r_id": 1,
                    "s_id": 1,
                    "service": null,
                    "city_name": null,
                    "g_name": "1",
                    "g_synopsis": "微信大群交友聊天宝妈群",
                    "create_time": null,
                    "update_time": "2018-03-27 15:20:00",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180321/1000132/5df626c329164db5c47acfe0cb76cbf0.gif?h=202&w=202',
                    "group_qrcode": "1_gr_1522135200.png",
                    "admin_qrcode": "1_ar_1522135200.png",
                    "tag": "1",
                    "linkman": null,
                    "linkman_qq": null,
                    "linkman_phone": null,
                    "classify": 0,
                    "tread_count": 0,
                    "praise_count": 0,
                    "browse_count": 0
                },
                {
                    "g_id": 300,
                    "u_id": 1,
                    "r_id": 1,
                    "s_id": 1,
                    "service": null,
                    "city_name": null,
                    "g_name": "1",
                    "g_synopsis": "微信大群聊天男女粉宝妈群",
                    "create_time": null,
                    "update_time": "2018-03-27 15:20:46",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180320/785748/c392c4c89187e98f6d9e2c94b085d23d.jpeg?h=202&w=202',
                    "group_qrcode": "1_gr_1522135246.png",
                    "admin_qrcode": "1_ar_1522135246.png",
                    "tag": "1",
                    "linkman": null,
                    "linkman_qq": null,
                    "linkman_phone": null,
                    "classify": 0,
                    "tread_count": 0,
                    "praise_count": 0,
                    "browse_count": 0
                },
                {
                    "g_id": 301,
                    "u_id": 1,
                    "r_id": 1,
                    "s_id": 1,
                    "service": null,
                    "city_name": null,
                    "g_name": "11",
                    "g_synopsis": "微信大群男女粉",
                    "create_time": null,
                    "update_time": "2018-03-28 10:04:10",
                    "g_admin_number": "1",
                    "group_image": 'http://img8.souweixin.com/20180319/287779/c1ad36f3fe6d024e12492e35eff1f25c.png',
                    "group_qrcode": "wxgroup/1_gr_1522202650.jpg",
                    "admin_qrcode": "wxgroup/1_ar_1522202650.jpg",
                    "tag": "1",
                    "linkman": null,
                    "linkman_qq": null,
                    "linkman_phone": null,
                    "classify": 0,
                    "tread_count": 0,
                    "praise_count": 0,
                    "browse_count": 0
                }
            ]
        }
    }
    render(){
        const data=this.state;
        console.log(data.content)
        return(
            <div>
                 <BrowserRouter>
                     <SourceList/>
                </BrowserRouter>
                <div className="source_content_dv">
                 {
                
                   data.content.map((Item,index) => {

                        return  <dl>
                                <dt><img src={Item.group_image} alt=""/></dt>
                                <dd>
                                    <p>货源名称：{Item.g_synopsis}</p>
                                    <p>发布人微信：{Item.g_id}</p>
                                </dd>
                            </dl>
                    })
               
             }
            </div>
           </div>
        )
    }
   

}
export default Fetch;