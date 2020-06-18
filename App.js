import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import store from './src/redux/redux-store'
import {Provider} from "react-redux";
import ListScreenContainer from "./src/components/ListScreenContainer";
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import ImageScreen from "./src/components/ImageScreen";

const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StatusBar hidden={true} />
                <View style={styles.container}>
                    <NavigationContainer >
                        <Stack.Navigator screenOptions={{
                            headerShown:false
                        }} >
                            <Stack.Screen name = 'List' component ={ListScreenContainer} />
                            <Stack.Screen name = 'Image' component ={ImageScreen} />
                            </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default App;
