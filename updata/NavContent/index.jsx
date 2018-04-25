import React,{Component} from 'react'
import $ from 'jquery'
import {Icon,Button,Tabs} from 'antd';
import { Link, Route,Switch,BrowserRouter,IndexRoute} from 'react-router-dom';
import { Pagination } from 'antd';
import './App.css';
const TabPane = Tabs.TabPane;

//一级导航
const Wei=['微信群','个人微信','公众号'];
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
                <div className='weixin_tab_two'>
                    <Tabs  onChange={callback} type="card" >
                        <TabPane tab={Wei[0]} key="1">
                        
                                <div className="text_content">
                                    <BrowserRouter>
                                        <div>
                                            <CityContnet/>
                                            <div>
                                                    <Switch>
                                                        <Route path="/" component={UserListComtent}>

                                                            <Route  exact  path="/city0" component={UserListComtent}></Route>
                                                            <Route path="/city1" component={UserListComtent}></Route>
                                                            <Route path="/city2" component={UserListComtent}></Route>
                                                            <Route path="/city3" component={UserListComtent}></Route>
                                                            <Route path="/city4" component={UserListComtent}></Route>
                                                            <Route path="/city5" component={UserListComtent}></Route>
                                                            <Route path="/city6" component={UserListComtent}></Route>
                                                            <Route path="/city7" component={UserListComtent}></Route>
                                                            <Route path="/city8" component={UserListComtent}></Route>
                                                            <Route path="/city9" component={UserListComtent}></Route>
                                                            <Route path="/city10" component={UserListComtent}></Route>
                                                            <Route path="/city11" component={UserListComtent}></Route>
                                                            <Route path="/city12" component={UserListComtent}></Route>
                                                            <Route path="/city13" component={UserListComtent}></Route>
                                                            <Route path="/city14" component={UserListComtent}></Route>
                                                            <Route path="/city15" component={UserListComtent}></Route>
                                                            <Route path="/city16" component={UserListComtent}></Route>
                                                        </Route>
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
                                            <CityContnet/>
                                            <div>
                                                    <Switch>
                                                        <Route path="/" component={UserListComtent}>

                                                            <Route  exact  path="/city0" component={UserListComtent}></Route>
                                                            <Route path="/city1" component={UserListComtent}></Route>
                                                            <Route path="/city2" component={UserListComtent}></Route>
                                                            <Route path="/city3" component={UserListComtent}></Route>
                                                            <Route path="/city4" component={UserListComtent}></Route>
                                                            <Route path="/city5" component={UserListComtent}></Route>
                                                            <Route path="/city6" component={UserListComtent}></Route>
                                                            <Route path="/city7" component={UserListComtent}></Route>
                                                            <Route path="/city8" component={UserListComtent}></Route>
                                                            <Route path="/city9" component={UserListComtent}></Route>
                                                            <Route path="/city10" component={UserListComtent}></Route>
                                                            <Route path="/city11" component={UserListComtent}></Route>
                                                            <Route path="/city12" component={UserListComtent}></Route>
                                                            <Route path="/city13" component={UserListComtent}></Route>
                                                            <Route path="/city14" component={UserListComtent}></Route>
                                                            <Route path="/city15" component={UserListComtent}></Route>
                                                            <Route path="/city16" component={UserListComtent}></Route>
                                                        </Route>
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
//地区渲染
class CityContnet extends Component{
    constructor() { //构造器
        super();
        this.state = {
            cont: ''
        };
    }
    componentWillMount() {
        fetch("http://172.16.24.30:8088/api/region?leve")
            .then(response => response.json())
            .then(json => this.setState(
                {cont: json.content.splice(8,17)}
            ));
    }
    render(){
        const datas= this.state;
        return(
            <div className="bg_content_city">
                <div className="map_list">
                    <div className="display_inline font_bold">地区：</div>
                    <ul className="city_list_area city_style">
                        {
                            (datas.cont instanceof Array) ? datas.cont.map((Item, index) => (

                                <li key={index}>
                                  <Link to={ "/city"+index}> {Item.name} </Link>
                                </li>
                            )):null
                        }
                        <li>更多</li>
                    </ul>
                </div>
            </div>

        )
    }
}

//类型渲染
class TypeContent extends Component{
    constructor() { //构造器
        super();
        this.state = {
            cont: ''
        };
    }

    componentWillMount() {

        fetch(" http://172.16.24.30:8088/api/service")
            .then(response => response.json())
            .then(json => this.setState(
                {cont: json.content
                }
            ));
    }
    render(){
        const datas= this.state;
       // console.log(datas)
        return(
            <div className="bg_content_city">
                <div className="map_list">
                    <div className="display_inline font_bold">类型：</div>
                    <ul className="city_list city_style">
                        {
                            (datas.cont instanceof Array) ? datas.cont.map((Item, index) => (
                               < li key={index}>
                                   <Link to={ "/type"+index}> {Item.service} </Link>

                                </li>
                            )):null
                    }

                        <li>更多</li>
                    </ul>
                </div>
                <Statistics/>
            </div>

        )
    }
}
class Statistics extends Component{
    constructor(props) {
        super(props)

    }
    render(){
        return(
            <div className="top_bottom_num">
                <div className="stat_left"><span className="color_pink">200</span>个</div>
                <div className="stat_right">
                    <div className="default_sort sort_dv_style active_bg_gray"><Icon type="arrow-down"></Icon>默认排序</div>
                    <div className="annex_index sort_dv_style"><Icon type="arrow-up"></Icon>按人气指数</div>
                    <div className="thumbs-up sort_dv_style border_right_only"><Icon type="arrow-down"></Icon>按点赞数</div>
                    <div className="picture_list">
                        <div className="big_picture color_orange"><Icon type="appstore-o"></Icon>大图</div>
                        <div className="list_pic color_orange"><Icon type="appstore-o"></Icon>列表</div>
                    </div>
                </div>
            </div>
            )

    }
}
//图文内容
class UserListComtent extends Component {
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
                    "g_synopsis": "微信大群，交友，聊天，男女粉；宝妈群，文玩群，无广告；无微商，无死粉，质量群等",
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
            const data = this.state;
            const len=data.content.length;
            return (

                        <div>
                            <BrowserRouter>
                            <TypeContent/>


                            </BrowserRouter>
                            {
                                data.content.map((list, index) => {
                                    return <div className="display_inline image_text border5" key={index}>
                                                <div className="dl">
                                                    <div className="dt">
                                                        <img src={list.group_image} alt=""/>;
                                                    </div>
                                                    <div className="dd">{list.g_synopsis}</div>
                                                </div>
                                                <div className="small_color release_time">
                                                    <span className="updata">{list.classify}前更新</span>
                                                    <span className="pink_border">{list.city_name}</span>
                                                    <div className="share_dv">
                                                        <Icon type="eye-o"
                                                              className="icon_eye"></Icon><span>{list.tread_count}</span>
                                                        <Icon type="like-o" className="icon_weixin"></Icon>{list.praise_count}次
                                                    </div>
                                                </div>
                                            </div>

                                })
                            }
                            <Pagination showQuickJumper defaultCurrent={1} total={len} onChange={onChange} />,
                        </div>


                )
    }

}
function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}

export default Fetch;