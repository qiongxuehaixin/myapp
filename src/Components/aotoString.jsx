import React,{Component} from "react"

class Info extends Component {
  constructor(props){
      super(props);
      this.state = props;
  }

 render() {
     var myAttr = {
         'title': 'myTitle',
         'age': 10,
         'data-age': 10,
         'onClick': function() {
             console.log('onClick');
         },
         'onMouseOver': function() {
             console.log('onMouseOver');
         }
     }
     return <p className="user" me="me" {...myAttr}>{this.props.name}</p>
 }
}
export default Info
