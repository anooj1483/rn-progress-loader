/**
 * Created by anooj on 23/03/18.
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    View,ActivityIndicator,
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
            color:this.props.color,
            barHeight:this.props.barHeight,
            isHUD:this.props.isHUD,
            hudColor:this.props.hudColor

        }
    }

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        isModal: PropTypes.bool.isRequired,
        barHeight: PropTypes.number,
        color:PropTypes.string,
        hudColor:PropTypes.string,
        isHUD:PropTypes.bool,
        size:PropTypes.number

    };

    static defaultProps = {
        visible: false,
        isModal:true,
        barHeight:64,
        color:"#FFFFFF",
        hudColor:'#FFFFFF',
        isHUD:false,
        size:60,
        radius:10
    };


    renderWithModal(){
        return (

            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.props.visible}
                onRequestClose={() => {console.log('close modal')}}>
                <View style={[styles.modalBackground]}>
                    <View style={[styles.activityIndicatorWrapper,{width:this.props.size,height:this.props.size},{backgroundColor:(this.props.isHUD?(this.props.hudColor):("transparent"))}]}>
                        {this.renderActivityIndicator()}
                    </View>
                </View>
            </Modal>
        )
    }

    renderActivityIndicator(){
        const loaderColor = this.props.color;
        return(
            this.props.isModal?(
                <ActivityIndicator
                    size="small"
                    color={loaderColor}
                    style={{zIndex:100}}
                    animating={this.props.visible} />
            ):(
                <ActivityIndicator
                    size="small"
                    color={loaderColor}
                    style={{zIndex:100,marginBottom:this.props.barHeight}}
                    animating={this.props.visible} />
            )
        )
    }

    renderWithView(){
        return(
            <View style={{height:(height-this.props.barHeight),width:width,position:'absolute',zIndex:5,
                justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'rgba(0,0,0,0.3)'}}
            >
                {this.renderActivityIndicator()}
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
        height: 60,
        width: 60,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
export default ProgressLoader;