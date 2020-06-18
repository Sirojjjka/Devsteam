import React, {Component} from 'react';
import {Text, View,Image,ScrollView,Button} from 'react-native';


class ImageScreen extends React.Component {


    render() {
        return (
            <View style={{flex:1}}>
                <Image style={{flex:1}} source={{uri:this.props.route.params.data.urls.full}}>
                </Image>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
                </View>
        )

    }
}

export default ImageScreen;
