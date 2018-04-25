import React, { Component } from 'react';
import $ from 'jquery';
import './EatApple.css';



/*  吃苹果父组件  */
class EatAppleComponent extends Component {
    constructor(props,context) {
      super(props);

      this.state={
        data:this.props.data
      }
    };

componentWillMount(){
  console.log(this.props.data.newAppleId)
}

/*吃苹果事件*/
  onEatAppleBtn(obj){
      let apples=this.state.data.apples;

      apples.map((v,i)=>{
          if(v.id===obj.id){
              v.isEaten=true;
          }
      });

      this.setState({
          data:{
              "apples":apples
          }
      });
  };

/*循环吃苹果子组件*/
  EatBoxFn(obj){
    var apples= this.state.data.apples,
        sArr=[];

    apples.map((v,i)=>{
        if(!v.isEaten){
            sArr.push(<EatApple content={v} key={i} EatAppleBtn = {this.onEatAppleBtn.bind(this)} />)
        }
    });

    if(sArr.length<=0){
        sArr=<div className="EatApple-box"><div className="Apple-null">没有苹果。</div></div>
    }

    return sArr;
  };


/* 摘苹果方法*/
getApples(e){
    let nApple=this.state.data.apples,
        newApple='',
        id= 0,
        that=this;

    $.ajax({
        url:"./apples.json",
        type:"get",
        data:{},
        dataType:"json",
        success:function (obj) {
            console.log(obj);
            obj.map((v,i)=> {
                id=that.state.data.apples.length;
                v.id=++id;
                newApple=nApple.push(v);
            });
            console.log(newApple);
            that.setState({
                state:{
                    data:{
                        "apples":newApple
                    }
                }
            });
        },
        error:function(){
            alert("网络请求故障");
        }
    });

};



/*苹果父组件*/
render() {
    var data= this.state.data.apples,
        apple= 0,
        appleWeight= 0,
        eatApple=0,
        eatAppleWeight=0,
        sArr=[];

    data.map((v,i)=>{
        if(!v.isEaten){
            apple+=1;
            appleWeight+=v.weight;
        }else{
            eatApple+=1;
            eatAppleWeight+=v.weight;
        }
    });


    return (
      <div className="Apple-box">
          <header>
                <div className="Apple-title">苹果篮子</div>
          </header>
          <main>
                <div className="main-top">
                    <div className="main-top-left">
                        <div className="Basket-box">
                            <div className="title">
                                当前
                            </div>
                            <div className="content">
                                {apple}个苹果，{appleWeight}克
                            </div>
                        </div>
                    </div>
                  <div className="main-top-right">
                          <div className="Basket-box">
                              <div className="title">
                                  吃掉
                              </div>
                              <div className="content">
                                  {eatApple}个苹果，{eatAppleWeight}克
                              </div>
                          </div>
                  </div>
                </div>
              <div className="main-foot">
                {this.EatBoxFn(data)}
              </div>
          </main>
          <footer className="footer-box">
                <span className="foot-btn" onClick={this.getApples.bind(this)} >
                    摘苹果
                </span>
          </footer>
          <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
            Hello world!
          </FancyCheckbox>
    </div>
  );
  }
}


class FancyCheckbox  extends Component{
  render() {
    var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
    return (
      <div className={fancyClass} onClick={this.props.onClick}>
        {this.props.children }
      </div>
    );
  }
}


EatAppleComponent.defaultProps={
  data:{
        "isPicking" : false,
        "newAppleId": 4,
        "apples": [
            {
                "id": 1,
                "weight": 235,
                "isEaten": false,
                "name":"红苹果-1号"
            },
            {
                "id": 2,
                "weight": 256,
                "isEaten": false,
                "name":"红苹果-1号"
            },
            {
                "id": 3,
                "weight": 320,
                "isEaten": false,
                "name":"黑苹果-1号"
            },
            {
                "id": 4,
                "weight": 200,
                "isEaten": false,
                "name":"黑苹果-9号"
            }
        ]
    }
};


/*苹果篮子子组件*/
class BaskeyBox extends Component {
    constructor(props){
        super(props);
        this.state={
            data: this.props
        }
    }

    render() {
        return (
            <div className="Basket-box">
                <div className="title">
                    {this.props.name}
                </div>
                <div className="content">
                    {this.props.content}个苹果，{this.props.weight}克
                </div>
            </div>
    );
    }
}

/*吃苹果子组件*/
class EatApple extends Component {
    constructor(props){
        super(props);
        this.state={
            data: this.props
        }
    }

    EatAppleBtnBox(e){
        this.props.EatAppleBtn(this.props.content);
    }

    render() {
        return (
            <div className="EatApple-box">
                <div className="">
                    <img src={require("./apple.jpg")} className="Apple" alt="logo" />
                    <span>
                        {this.props.content.weight}克
                    </span>
                    <span className="Eat-apple-btn" onClick={this.EatAppleBtnBox.bind(this)}>
                        吃苹果
                    </span>
                </div>
            </div>
    );
    }
}


/* 对外提供接口 */
export default EatAppleComponent
