import React from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Verification({navigation}){
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}> 
                <Ionicons 
                name='ios-arrow-back'
                size={26} 
                onPress={()=>{
                    navigation.navigate('Cover')}}
                />
                <Text style={{padding: 5,}}>Change Phone</Text>
            </View>
            <View style={styles.verifyView}>
                <Text style={{fontWeight:"bold", marginBottom:20}}>Verification PIN</Text>
                <Text style={{textAlign:"center"}}>{"Enter the verification code \n we just sent on \n "}</Text>
                <TextInput placeholder='Code'/>
            </View>

            <TouchableOpacity style={{alignItems:'center', justifyContent:"center"}} onPress={()=>{
               navigation.navigate('General Information')}}>
                <View style={styles.submitCode} >
                    <Text style={{color: "#fff"}} >Submit code</Text>
                </View>
            </TouchableOpacity>
            <View >
                <Text style={{textAlign:'center'}}>Have you not received your code?</Text>
                <Text style={{textAlign:'center', paddingTop:15}}>Resend Code</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal:15,
      paddingVertical:35,
    },
    verifyView:{
        alignItems:"center",
        justifyContent:'center',
        marginTop: "55%"
    },
    submitCode:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 55, 
        width: 225,
        backgroundColor: "#000000", 
        marginVertical: 20,
        
    },
  });