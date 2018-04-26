import  React,{ Component,Fragment } from "react";

import "./detail.css";
import $ from "jquery";

class Detail extends Component {
    constructor(props){
        super(props);

        this.state={
            data:""
        }
        var sData=this.props.location.query;
        if(sData){
            console.log(sData);
            console.log(this.props.location.pathname);
        }
    }


    componentWillMount(){
        $.ajax({
            url:"http://172.16.24.30:8088/api/group?g_id=" + (this.props.location.query || 312),
            type:"GET",
            data:{},
            dataType:"json",
            success:function (obj) {
                console.log(JSON.stringify(obj,null,4))

                this.setState({
                    data:obj.content[0]
                })
                console.log(obj.content)
                console.log(this.state.data.admin_qrcode)
            }.bind(this),
            error:function(){
                alert("网络请求故障");
            }
        });

    }


    render(){
        let sSrc ="http://172.16.24.30:8088/images/" +this.state.data.group_qrcode;
        return(
           <Fragment>
               <div className="area-outbox clearfix">
                   <div className="main-box-weixin-l bg-gray">
                       <div className="img-box">
                           <img src={sSrc}  width="220" alt=""/>
                       </div>
                       <div className="content-box">
                           <h2>{this.state.data.city_name}{this.state.data.service}</h2>
                           <p>简介：</p>
                           <p>{this.state.data.g_synopsis}</p>

                           <ul>
                               <li>
                                   <dl>
                                       <dt>行业：</dt>
                                       <dd style={{color: "#ff3265"}}> {this.state.data.service}</dd>
                                   </dl>
                               </li> <li>
                                   <dl>
                                       <dt>地区：</dt>
                                       <dd style={{color: "#ff3265"}}>{this.state.data.city_name}</dd>
                                   </dl>
                               </li> <li>
                                   <dl>
                                       <dt>时间：</dt>
                                       <dd>{this.state.data.update_time}</dd>
                                   </dl>
                               </li> <li>
                                   <dl>
                                       <dt>标签：</dt>
                                       <dd>服务，热情，便捷{this.state.data.tag}</dd>
                                   </dl>
                               </li>
                           </ul>

                           <ul>
                               <li>
                                   <dl>
                                       <dt>公众号：</dt>
                                       <dd style={{color:" red"}}>{this.state.data.g_admin_number}</dd>
                                   </dl>
                               </li>
                               <li>
                                   <dl>
                                       <dt>热度：</dt>
                                       <dd style={{color: "#ff3265"}}>{this.state.data.praise_count}</dd>
                                   </dl>
                               </li>
                           </ul>


                       </div>
                   </div>
                   <div className="main-box-weixin-r">
                       右侧盒子中的内容
                   </div>
               </div>
           </Fragment>
        )
    }
}

export default Detail;