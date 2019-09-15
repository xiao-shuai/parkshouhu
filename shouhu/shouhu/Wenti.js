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
import {pk} from '../config/sty'
import {Input,Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Wenti extends Component{
    static navigationOptions = {
        title: 'Submission problem',
        // header:null,
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
        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
            <KeyboardAwareScrollView >
             
            <Input label='name' containerStyle={{
                marginTop:20
            }} 
            placeholder='Your name'
            selectionColor={'white'}
            placeholderTextColor='red'
             inputStyle={{color:'white'}}
             labelStyle={{color:'white'}}
            />
             <Input label='phone' containerStyle={{
                marginTop:20
            }} 
            placeholder='Contact information'
            selectionColor={'white'}
            placeholderTextColor='red'
             inputStyle={{color:'white'}}
             labelStyle={{color:'white'}}
            /> 
            <Input label='address' containerStyle={{
                marginTop:20
            }} 
            placeholder='Enter the address to be maintained'
            selectionColor={'white'}
            placeholderTextColor='red'
             inputStyle={{color:'white'}}
             labelStyle={{color:'white'}}
            />
            <Input label='Title' containerStyle={{
                marginTop:20
            }} 
            selectionColor={'white'}
             placeholder='Please enter the title of the question.'
             placeholderTextColor='red'
             inputStyle={{color:'white'}}
             labelStyle={{color:'white'}}
            />

            <View style={{width:pk.w*.9,
            height:pk.h*.2,
            marginTop:20,
            borderRadius:8,
            borderWidth:1,
            borderColor:'white',
            padding:10
            }}>
                <TextInput style={{
                    height:'100%',
                    
                    color:'white'
                }}
                 multiline={true}
                 selectionColor={'white'}
                 placeholder='Problem description'
                 placeholderTextColor={'red'}
                 
                />

            </View> 
         <Button buttonStyle={{backgroundColor:'#48C9B0',marginTop:25}} title='Release'/>
            </KeyboardAwareScrollView>
        </SafeAreaView>
        )
    }
}

export default Wenti

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})