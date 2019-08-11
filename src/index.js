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

  render() {
    let caps = this.props.smallCaps;
    caps = true ? "uppercase" : "lowercase";
    const lists = Children.map(this.props.children, child => (
      
      <li className="horizontal_menu_item" style={{fontFamily:this.props.googleFont, textTransform:caps, fontSize:this.props.fontSize, paddingTop:(this.props.logo_height/this.props.seperator_index), color: this.props.fontColor}}>{child}</li>
    ));

   

    return (
      <div style={{backgroundColor:this.props.bgColor}}>
      <ul style={{listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden'}}>
     
        <img className="logo_menu_item" src={this.props.logo_link} style={{width:this.props.logo_width, height: this.props.logo_height}}/>{lists}
      </ul>
      </div>
    )
  }
}
