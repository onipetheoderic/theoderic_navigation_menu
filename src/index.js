import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import WebFont from 'webfontloader';
import allFonts from './allfont'
/**/
WebFont.load({
  google: {
    families: allFonts,
  }
});


export default class ExampleComponent extends Component {
  constructor() {
    super();
      this.state = {
        normal:true,
        show: false
      };
}
  static propTypes = {
    logo_link: PropTypes.string,
    logo_width: PropTypes.number,
    logo_height: PropTypes.number,
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
    fontStyle: PropTypes.string,
    smallCaps: PropTypes.bool,
    googleFont: PropTypes.string,
    bgColor: PropTypes.string,
    aligner: PropTypes.number,
    seperator_index: PropTypes.number,
  }
handleOnClick =(condition) => {
  let presentCondition = condition;
  if(presentCondition=="on"){
    this.setState({normal:false, show:true})
  }
  else if(presentCondition=="off"){
    this.setState({normal:true, show: false})
  }
}




  render() {
    let caps = this.props.smallCaps;
    caps = true ? "uppercase" : "lowercase";
    const lists = Children.map(this.props.children, child => (
      
      <li className="horizontal_menu_item" style={{fontFamily:this.props.googleFont, textTransform:caps, fontSize:this.props.fontSize, paddingTop:(this.props.logo_height/this.props.seperator_index), color: this.props.fontColor}}>{child}</li>
    ));

    const mLister = Children.map(this.props.children, child => (
      
      <li className="innerDiv" style={{fontFamily:this.props.googleFont, textTransform:caps, fontSize:this.props.fontSize, color: 'white'}}>{child}</li>
    ));

   

    return (
      <div style={{backgroundColor:this.props.bgColor}}>
{this.state.show &&
<div class="mobile_menu_items">
  <ul style={{listStyleType: 'none', padding:0}}>
   {mLister}
  </ul>
</div>
}
<img className="logo_mobile" src={this.props.logo_link} style={{width:200, height: 50}}/>
{this.state.normal &&
<div class="container" onClick={()=>this.handleOnClick("on")}>
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
}
{!this.state.normal &&
<div class="container" onClick={()=>this.handleOnClick("off")}>
  <div class="bar1X"></div>
  <div class="bar2X"></div>
  <div class="bar3X"></div>
</div>
}
      <ul className="desktopView" style={{listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden'}}>
     
        <img className="logo_menu_item" src={this.props.logo_link} style={{width:this.props.logo_width, height: this.props.logo_height}}/>{lists}
      </ul>
      </div>
    )
  }
}
