import React, { Component } from 'react';

export default class  MyComponent2 extends Component {
  constructor(props){
    super(props);
    this.state={
      userInput: ''
    }
  }

     handleChange(e) {
       this.setState({
         userInput: e.target.value
       });
     }

     clearAndFocusInput() {
        this.refs.theInput.focus();
      this.setState({userInput: ''});
     }

     render() {
       return (
         <div>
           <div onClick={this.clearAndFocusInput.bind(this)}>
             Click to Focus and Reset
           </div>
           <input
             ref="theInput"
             value={this.state.userInput}
             onChange={this.handleChange.bind(this)}
           />
         </div>
       );
     }
}
