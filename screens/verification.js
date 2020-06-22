import React, { useState }from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Verification({navigation}){
    const [code, setCode] = useState("");
    const [load, setLoad] = useState(false);

    function submitCode() {
        setLoad(true);
        setTimeout(() => {
          setLoad(false);
          if (code == "12345") {
            navigation.navigate('General Information')
          }
          else {    
            Alert.alert('Wrong Code', 'Check the code or your number', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          }

        }, 2000);
      }

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
                <Text style={{fontWeight:"bold", marginBottom:20, fontSize:16}}>Verification PIN</Text>
                <Text style={{textAlign:"center"}}>{"Enter the verification code \n we just sent on \n "}</Text>
                <TextInput 
                value={code}
                onChangeText={code => setCode(code)}
                placeholder='Code'/>
            </View>

            <TouchableOpacity style={{alignItems:'center', justifyContent:"center"}} onPress={submitCode}>
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
        marginTop: 160,
        marginBottom: 200
    },
    submitCode:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 55, 
        width: 225,
        backgroundColor: "#000000", 
        marginTop: 150,
        marginVertical: 20,
        
    },
  });