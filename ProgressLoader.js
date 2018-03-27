/**
 * Created by anooj on 23/03/18.
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Modal,Text,TouchableHighlight,Dimensions
} from 'react-native';
import PropTypes from 'prop-types'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class ProgressLoader extends React.Component {

     constructor(props) {
         super(props);
         this.props = props;
         this.state = {
             visible: this.props.visible,
             isModal:this.props.isModal,
             barHeight:this.props.barHeight,

         }
     }

     static propTypes = {
         visible: PropTypes.bool.isRequired,
         isModal: PropTypes.bool.isRequired,
         barHeight: PropTypes.number

     };

     static defaultProps = {
         visible: false,
         isModal:true,
         barHeight:64
     };


    renderWithModal(){
        return (

            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.props.visible}
                onRequestClose={() => {console.log('close modal')}}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                            size="small"
                            color={"#9b9a99"}
                            style={{zIndex:100}}
                            animating={this.props.visible} />
                    </View>
                </View>
            </Modal>
        )
    }

    renderWithView(){
        return(
            <View style={{height:(height-this.props.barHeight),width:width,position:'absolute',zIndex:5,
                justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'rgba(0,0,0,0.3)'}}
            >
                <ActivityIndicator
                    size="small"
                    style={{zIndex:100,marginBottom:this.props.barHeight}}
                    animating={this.props.visible} />
            </View>
        )
    }

    goEmpty(){
        return(<View/>);
    }

    render(){

        return(
            this.props.isModal?(this.renderWithModal()):(this.props.visible?(this.renderWithView()):(this.goEmpty()))
        )
    }



}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: 'transparent',
        height: 75,
        width: 75,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
export default ProgressLoader;