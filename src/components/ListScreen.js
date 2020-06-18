import React, {Component} from 'react';
import {Text, View, Image,ScrollView,TouchableOpacity} from 'react-native';
import axios from 'axios'




class ListScreen extends Component {
    constructor() {
        super();
    }
    UNSAFE_componentWillMount(){
        axios.get('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0').then(
            response => {
                console.log(response.data)
                    this.props.setData(response.data)
            }
        )
    }

    render() {
        return (
            <ScrollView >
                    {this.props.data.map(data=><View key={data.id} style={{flexDirection:'column',marginTop:20,justifyContent: 'center',
                        alignItems: 'center'}}>
                        <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Image",{data})}} >
                            <Image style={{width:70, height:70,}} source={{uri:data.urls.small}}></Image>
                        </TouchableOpacity>
                        <Text style={{marginTop:20,textAlign:'center'}}>Desc: '{data.alt_description}'</Text>
                        <Text style={{textAlign:'center'}}>Name: {data.user.first_name}</Text>
                        <Text>────────────────────────</Text>
                    </View>)}
            </ScrollView>
        )
    }

}


export default ListScreen;
