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
import {inject,observer} from 'mobx-react'
import { NavigationActions } from 'react-navigation';
@inject(["mbx"])
@observer // 监听当前组件
class Shouhu extends Component{
    static navigationOptions = {
        // title: 'relese',
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

   componentWillMount (){
       AsyncStorage.getItem('ok')
       .then(res=>{
           console.log('res',res);      
        if(res!==null){
         this.props.mbx.change_login(true)  
        }
       })
       .catch(err=>{
        
       })
    }

  now_login=()=>{
      Alert.alert('Tips','Please login',[{'text':'cancel',},{'text':'ok',onPress:()=>{
     this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0) 
      }}])
  }  
    render(){
        console.log('q122',this.props.mbx.login);
        const login=this.props.mbx.login
        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
                <Image source={require('../images/park.png')} 
                    style={{width:100,height:100,marginTop:pk.h*.1}} 
                 />

                 <TouchableOpacity style={styles.a} onPress={()=>{
                     login?
                     this.props.navigation.navigate('Wenti')
                     :
                     this.now_login()
                 }}>
                  <Text style={{fontSize:18,color:'white'}}>I want to report for repairs.</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.a} onPress={()=>{
                     login?
                     this.props.navigation.navigate('Record')
                     :
                     this.now_login()
                 }}>
                 <Text style={{fontSize:18,color:'white'}}>
                 Record of repair
                     </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.a} 
                  onPress={()=>{
                    this.props.navigation.navigate('My')
                  }}
                 >
                 <Text style={{fontSize:18,color:'white'}}>
                 Personal Center  
                  </Text>
                 </TouchableOpacity>
        </SafeAreaView>
        )
    }
}

export default Shouhu

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})