import React,{Component} from 'react'
import $ from 'jquery'
import {Icon,Button,Tabs} from 'antd';
import { Link, Route,Switch,BrowserRouter,IndexRoute} from 'react-router-dom';
import { Pagination } from 'antd';
import './article.css';
const TabPane = Tabs.TabPane;

class Article extends Component{
    constructor() { //构造器
        super();
        this.state = {
            cont: ['全部分类','微商杂谈','养生之道','八卦娱乐','搞笑段子','情感男女','辣妈学院','潮人搭配','人气美食','旅游美景','星座运势','美容护肤','励志名言','情感男女','辣妈学院','潮人搭配',,'辣妈学院','潮人搭配','人气美食']
            ,flag:0,
            sHtml:<ArticleContent oncloickSon={this.oChangesHtml} />
        };

    }

    oChangesHtml=(data)=>{
        // data
        if(data===0){
            this.setState({sHtml:<ArticleContent oncloickSon={this.oChangesHtml}/>});
        }else{
            this.setState({sHtml:<ArticleSecondLevel data={data}  oncloickSon={this.oChangesHtml} />});
        }
    }
    render()
        {
            let sHtml = this.state.sHtml;
            const datas=this.state;
            return (
                <div>
                     <div className='weixin_tab_article'>{

                        datas.cont.map((item, index) => {
                            return  <Link to="./content"  key={index} className={"article_nav"+index+" "+"article_nav"}>{item}</Link>

                        })
                    }
                    </div>
                    {sHtml}
                </div>


            )
        }
}
class ArticleSecondLevel extends Component{
    constructor(){
        super();
        this.content={
            cont:""
        }
    }

    componentDidMount(){
        const ids=this.props.data;
        console.log(ids)
        const obj='{"id":ids}';
        fetch(" http://172.16.24.30:8088/api/group?g_id=" + ids)
            .then(response => response.json())
            .then(json => this.setState(
                {cont: json.content
                }

            ));
        console.log(" http://172.16.24.30:8088/api/group?param=" + encodeURI(obj))
    }
    onChangeHtml=(data)=>{
        this.props.oncloickSon(0);
    }
    render()
    {
        const datas=this.state;
        console.log(datas)
        if(!datas){
            return null;
        }
        return (
            <div className='article_content_dv'>
               {
               datas.cont.map((item, index) => {
                    return   <ul>
                        <li><img src={"http://172.16.24.30:8088/images/"+item.group_image}/></li>
                        <li>
                            <h3 className="ellipsis">{item.g_synopsis}</h3>
                            <p>{item.create_time} <Link to="./item"></Link></p>
                        </li>
                    </ul>

                })
            }
            </div>

        )
    }
}
export class ArticleContent extends Component{
    constructor() {
        super();
        this.state = {
            cont: "",
            id:""
        };
    }
        componentWillMount() {

            fetch(" http://172.16.24.30:8088/api/group")
                .then(response => response.json())
                .then(json => this.setState(
                    {cont: json.content
                    }

                ));
        }

    render()
    {
        let g_ids =null;
        const data=this.state;


        if(!data.cont){
            return null;
        }
        return (
            <div className='article_content_dv'>{

                data.cont.map((item, index) => {
                    return (<List oncloickSon={this.props.oncloickSon} item={item} key={index+"item"}></List>)

                })
            }
            </div>

        )
    }
}
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.item.g_id
        }
    }
    addEvetn(e){
        e.stopPropagation();
        /*this.setState({
         id:this.refs.g_id.getAttribute("data-id")
         });*/
        this.props.oncloickSon(this.state.id);
        console.log(this.state.id);

    }
    render(){
        let item = this.props.item;
        return (
            <dl onClick={this.addEvetn.bind(this)}>
                <dt><img src={"http://172.16.24.30:8088/images/"+item.group_image}/></dt>
                <dd>
                    <h3 className="ellipsis">{item.g_synopsis}</h3>
                    <p>{item.create_time} <Link to="./item"></Link></p>
                    <div><span className="reader_article">阅读{item.classify}</span><span className="release_time">发布时间：{item.update_time}</span><span>朋友圈</span></div>
                </dd>
            </dl>
        )
    }
}


export default Article;
