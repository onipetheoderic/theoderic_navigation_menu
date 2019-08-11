import React, { Component } from 'react'

import ExampleComponent from 'theoderic_navigation_menu'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent googleFont="Baumans" logo_link="https://www.sportradar.com/wp-content/themes/company-themes/sr-main3/img/sportradar-logo.svg" smallCaps={false} fontSize={14} logo_width={250} logo_height={130} fontColor="black" bgColor="white" seperator_index={2.3}>
        <li>Home</li>
       <li>About Us</li>
       <li>Products</li>
       <li>Who we are</li>
		</ExampleComponent>        
      </div>
    )
  }
}
