# rn-progress-loader

[![npm version](https://badge.fury.io/js/rn-progress-loader.svg)](https://badge.fury.io/js/rn-progress-loader)
[![MIT License][license-image]][license-url]

The React Native Native iOS and Android progress indicator (spinner) which acts like an overlay. 
For those who have issues in iPhoneX while using both Modal and ActivityIndicator, you can use normal View with some options.

See index.js for example usage

## Demo

![rn-progress-loader-android][1]
![rn-progress-loader-ios][2]
![rn-progress-loader-android-nohud][3]
![rn-progress-loader-ios-nohud][4]



## Install
```bash
npm install --save rn-progress-loader
```

## How to use

This shows the default properties.

| Property      | Type           |   Default  | Required | Description  |
|---------------|----------------|------------|----------|---------------|
| visible       |   boolean      |  false     |    YES      | To change the visibility of loader|
| isModal       |   boolean      |  false     |    YES      | Choose if you want Modal View or normal view|
| color         |   string       |  #FFFFFF   |     NO       | Color of the loading indicator|
| isHUD         |   bool         |  false   |NO| MBProgressHUD like style. Only available if isModal=true|
| hudColor      |   string       |  #FFFFFF   | NO |Color of rounded rectangle container. Only available if isModal=true |
| barHeight     |   number       | 64 | NO| This is an exceptional property if you are not using Modal (ie, isModal=false), This will adjust the indicator position based on app's actionbar height|

```js

import React, { View } from 'react-native';
import ProgressLoader from 'rn-progress-loader';

class ComponentClass extends React.Component {

    constructor(props) {
        super();
        this.state = {
            visible: false
   
  };
    }

    componentDidMount() {
        var self = this;
        setInterval(() => {
            self.setState({
                visible: !this.state.visible
            });
        }, 5000);
    }


    render() {
        return (
            <View
                style={{backgroundColor: "#06566e", justifyContent: 'center', alignItems: 'center', flex: 1}}>

                <ProgressLoader
                visible={this.state.visible}
                isModal={true} isHUD={true}
                hudColor={"#000000"}
                color={"#FFFFFF"} />
            </View>
        )
    }
}
```



## Contributors

* Anooj Krishnan G <anooj1483@gmail.com>


License
----
MIT

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[npm-image]: http://img.shields.io/npm/v/rn-progess-loader.svg?style=flat
[npm-url]: https://img.shields.io/badge/npm-v1.0-green.svg
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-downloads]: http://img.shields.io/npm/anooj1483/rn-progess-loader.svg?style=flat
[1]: https://github.com/anooj1483/rn-progress-loader/blob/master/demo/iphone_hud.GIF?raw=true
[2]: https://github.com/anooj1483/rn-progress-loader/blob/master/demo/android_hud.GIF?raw=true
[3]: https://github.com/anooj1483/rn-progress-loader/blob/master/demo/iphone_nohud.GIF?raw=true
[4]: https://github.com/anooj1483/rn-progress-loader/blob/master/demo/android_nohud.GIF?raw=true
