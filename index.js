/**
 * Created by anooj on 28/03/18.
 */

import React, { View } from 'react-native';
import ProgressLoader from 'ProgressLoader'

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

                <ProgressLoader visible={this.state.visible} isModal={true} isHUD={true} hudColor={"#000000"}
                                color={"#FFFFFF"}/>
            </View>
        )
    }
}