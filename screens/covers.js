import React,{useState} from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput,TouchableOpacity, ActivityIndicator } from 'react-native';


export default function covers({navigation}) {

    const [phone, setPhone] = useState('');
    const [loading, setloading] = useState(false);

    function handleButton(){
        setloading(true);
        setTimeout(() => {
            navigation.navigate('Verification')
            setloading(false)
        },1500)
    }

    return(
        <ImageBackground 
        source={require('../assets/bg.jpg')} 
        resizeMode="cover" 
        style={{flex: 1,width:undefined, height:undefined}}>
            <View style={styles.container}>
                <Text style={styles.cover}>
                    COVERS
                </Text>
                <Text style={styles.text}>{"(COVID-19 EMERGENCY RESPONSE SOLUTION)\n Join the effort by well-meaning Africans using technology to slow \n down and eventually halt the spread of COVID-19"}</Text>
                
                <View style={{margin:35}}>

                    <View style={styles.textInputView}>
                        <View>
                            <TextInput
                            style={styles.inputText}
                            keyboardType="number-pad"
                            value={phone}
                            onChangeText={(phone) => setPhone(phone)}
                            />
                        </View>
                        <View style={styles.phoneView}>
                            <Text>Phone Number</Text>
                        </View>
                    </View>
                    {phone.length < 10 ? (
                        <View style={styles.getStartedInactive}>
                             <Text style={{color: "#fff"}} >Get Started</Text>
                        </View>   
                    ):(
                        <TouchableOpacity style={styles.getStartedActive}  onPress={handleButton}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ):(
                                <Text style={{color: "#fff"}} >Get Started</Text>
                            )}
                           
                      </TouchableOpacity>
                    )}
                 

                </View>
            </View>
            
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
    },
    text:{
        color:"white", 
        textAlign:'center',

    },
    cover:{
        color:"white",
        fontSize:60,
        fontWeight:"bold"
    },
    getStartedInactive:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 50, 
        width: 345,
        backgroundColor: "#9f9f99", 
        marginVertical: 20,
    },

    getStartedActive:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 50, 
        width: 345,
        backgroundColor: "#22b266", 
        marginVertical: 20,
    },
    phoneView:{
        display: "flex",
         alignItems: "center", 
         justifyContent: "center", 
         padding: 10
    },
    inputText:{
        backgroundColor: "#fff", 
        height: 50, 
        width: 220, 
        padding: 10
    },
    textInputView:{
        display: "flex", 
        flexDirection: "row", 
        height: 50, 
        backgroundColor: "#fff"
    }
    
  });