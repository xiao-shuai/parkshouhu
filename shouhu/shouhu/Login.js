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
import {ButtonGroup,Button,Input} from 'react-native-elements'
import {pk} from '../config/sty'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  AntDesign from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationActions } from 'react-navigation';
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
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }

  
    login=()=>{
       if(this.state.acc==undefined){
         Alert.alert('Tips','Please enter your account number.',[{'text':'ok'}])
       }else if(this.state.pwd==undefined){
        Alert.alert('Tips','Please enter your password.',[{'text':'ok'}])
       } else {
         this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Shouhu' })], 0)
         AsyncStorage.setItem('ok','en')  

         fetch('https://www.fastmock.site/mock/7b7807bc0b02343d47fe3a02771b9a11/shouhupark/Login',{method:'POST'})
         .then(res=>res.json())
         .then(res=>{})
         .catch(err=>{

         })

       }
    }  
    
  reg=()=>{

   if(this.state.reg==undefined){
      Alert.alert('Tips','Please enter your account number',[{'text':'ok'}])
   }else if(this.state.reg2==undefined){
      Alert.alert('Tips','Please enter your password.',[{'text':'ok'}])
   }else if(this.state.reg2!==this.state.reg3){
      Alert.alert('Tips','Inconsistent passwords',[{'text':'ok'}])
   }else {
    
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Shouhu' })], 0)
    AsyncStorage.setItem('ok','en')  

    fetch('https://www.fastmock.site/mock/7b7807bc0b02343d47fe3a02771b9a11/shouhupark/Login',{method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(err=>{

    })

   }

  }  
 render(){
    const buttons = ['Sign in', 'register',]
    const { selectedIndex } = this.state

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
           <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 50}}
      selectedButtonStyle={{backgroundColor:'#17A589'}}
    />
          {
              selectedIndex==0?
              <View style={{alignItems:'center'}}>
            <Input placeholder='Account number'
             placeholderTextColor='#A6ACAF' 
             containerStyle={{width:'100%',
             backgroundColor:'white',
             borderBottomWidth:0,
             marginTop:30
            }}
             inputContainerStyle={{width:pk.w*.9,borderBottomWidth:0}}
               onChangeText={(acc)=>{
             this.setState({acc})
               }}
            /> 
            <Input placeholder='Password'
             placeholderTextColor='#A6ACAF' 
             containerStyle={{width:'100%',
             backgroundColor:'white',
             borderBottomWidth:0,
             marginTop:30
            }}
             inputContainerStyle={{width:pk.w*.9,borderBottomWidth:0}}
             secureTextEntry={true}
             onChangeText={(pwd)=>{
             this.setState({pwd})   
            }}
            />
            <Button title='Sign in' buttonStyle={{
                width:pk.w*.95,marginTop:30,
                backgroundColor:'#17A589'
            }} onPress={()=>{
                this.login()
            }}/>
              </View>
              :
              <View style={{alignItems:'center'}}>
              <Input placeholder='Account number'
               placeholderTextColor='#A6ACAF' 
               containerStyle={{width:'100%',
               backgroundColor:'white',
               borderBottomWidth:0,
               marginTop:30
              }}
               inputContainerStyle={{width:pk.w*.9,borderBottomWidth:0}}
             onChangeText={(reg)=>{
             this.setState({reg})
             }}
              />
              <Input placeholder='Password'
               placeholderTextColor='#A6ACAF' 
               containerStyle={{width:'100%',
               backgroundColor:'white',
               borderBottomWidth:0,
               marginTop:30
              }}
               inputContainerStyle={{width:pk.w*.9,borderBottomWidth:0}}
               secureTextEntry={true}
               onChangeText={(reg2)=>{
                 this.setState({reg2})
             }}
              />
              <Input placeholder='Confirm password'
                secureTextEntry={true}
               placeholderTextColor='#A6ACAF' 
               containerStyle={{width:'100%',
               backgroundColor:'white',
               borderBottomWidth:0,
               marginTop:30
              }}
               inputContainerStyle={{width:pk.w*.9,borderBottomWidth:0}}
             onChangeText={(reg3)=>{
                 this.setState({reg3})
             }}
              />
              <Button title='register' buttonStyle={{
                  width:pk.w*.95,marginTop:30,
                  backgroundColor:'#17A589'
              }} 
                onPress={()=>{
                this.reg()
                }}
              />
                </View>
          }    
            <TouchableOpacity style={{marginTop:20,padding:20}} 
              onPress={()=>{
                  Linking.openURL('https://shimo.im/docs/rX3d8X9WqcVGx8yP')
              }}
            >
                <Text style={{color:'white'}}>The login representative reads and agrees to User Usage Agreement</Text>
            </TouchableOpacity>
            </KeyboardAwareScrollView>
         </SafeAreaView>
     )
 }

}

export default Login