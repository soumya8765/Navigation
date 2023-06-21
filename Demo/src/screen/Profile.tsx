
import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerScreenProps} from '@react-navigation/drawer';
import { DrawerTabParamlist } from '../../App';



type Props = DrawerScreenProps<DrawerTabParamlist, 'UProfile'>;


const UProfile = ({route,navigation}: Props) => {
  return (
    <SafeAreaView>
        <View>
        <ImageBackground
          source={require('../picture/background.jpg')}
          style={{padding: 20,height:150}}/>
          <Image
            source={require('../picture/profile.jpg')}
            style={{height: 100, width: 100, borderRadius: 40, marginBottom: 10,marginHorizontal:130,}}
          />
          <Text style={{fontWeight:'bold',fontSize: 18,marginHorizontal:135}}>Soumyashree</Text>



        </View>
        <ScrollView>
        <Text style={{fontWeight:'bold',fontSize:15}}>Account Settings</Text>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="mail" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>arpitasoumyashree@gmail.com</Text>

            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="phone" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>9861235674</Text>

            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="lock" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>****************</Text>

            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="adjust" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>Select Language</Text>

            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="bedtime" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>Dark Mode</Text>

            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="edit" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>Edit Profile</Text>

            </View>
            <Text style={{fontWeight:'bold',fontSize:15}}>My Activity</Text>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="create" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>My Reviews</Text>

            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="add" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>Plus Membership</Text>

            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="camera" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>Studio</Text>

            </View>
            <Text style={{fontWeight:'bold',fontSize:15}}>Feedback & Information</Text>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="list" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>Terms, Policies and Licenses</Text>

            </View>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5,}}>
                <Icon name="help" size={25}/>
            
            <Text style={{marginLeft:5,fontSize:12,}}>Browse FAQs</Text>

            </View>
            </ScrollView>

       





    </SafeAreaView>
  )
}

export default   UProfile;