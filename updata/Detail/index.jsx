import  React,{ Component,Fragment } from "react";

import "./detail.css";

class Detail extends Component {
    render(){
        return(
            <div className="area-outbox clearfix">
                <div className="main-box-weixin-l bg-gray">
                    <Fragment>
                        撒呼入中午测试
                    </Fragment>
                    "xiangqingye "
                </div>
                <div className="main-box-weixin-r">
                    右侧盒子中的内容
                </div>
            </div>
        )
    }
}

export default Detail;