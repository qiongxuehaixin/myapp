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
            content: ''
        };
    }
        componentWillMount() {

            fetch(" http://172.16.24.30:8088/api/group")
                .then(response => response.json())
                .then(json => this.setState(
                    {content: json.content
                    }

                ));
        }

        render(){
            const data=this.state;
            console.log(data.content)

        if(!data.content){
            return null;
        }
        return(
            <div>
                 <BrowserRouter>
                     <SourceList/>
                </BrowserRouter>
                <div className="source_content_dv image_text">
                 {
                
                   data.content.map((Item,index) => {

                        return  <dl className="dl">
                                <dt> <img src={"http://172.16.24.30:8088/images/"+Item.group_image} alt=""/></dt>
                                <dd >
                                    <p className="dd">货源名称：{Item.g_synopsis}</p>
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