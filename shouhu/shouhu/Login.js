import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,StatusBar,
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import {ButtonGroup,Button} from 'react-native-elements'
import {pk} from '../config/sty'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  AntDesign from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Login extends Component {
    static navigationOptions = {
        // title: 'My',
        header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        super(props)
        this.state={
     
        }
    }

 render(){
     return(
         <SafeAreaView style={{flex:1,backgroundColor:'#000000'}}>
            <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
            <View style={{width:pk.w,height:pk.h*.25,
                alignItems:'center',
                justifyContent:'center'
                }}>
           <Image source={require('../images/park.png')} 
            style={{width:100,height:100}} 
           />
           </View>
            </KeyboardAwareScrollView>
         </SafeAreaView>
     )
 }

}

export default Login