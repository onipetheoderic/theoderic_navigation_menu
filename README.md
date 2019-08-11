# theoderic_navigation_menu

> responsive navigation menu 

[![NPM](https://img.shields.io/npm/v/theoderic_navigation_menu.svg)](https://www.npmjs.com/package/theoderic_navigation_menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save theoderic_navigation_menu
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'theoderic_navigation_menu'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```
## Flexible Usage 
```jsx
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

```

## Properties
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



## License

MIT © [onipetheoderic](https://github.com/onipetheoderic)
