import React from 'react';
import { View, Text,  StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { GeneralInfoData } from '../data/data';


export default function generalInformation({navigation}){
    return(
        <View style={styles.container}>
           <View style={{borderBottomWidth:StyleSheet.hairlineWidth}}>
                <View style={{paddingVertical:15,}}>
                    <Text style={{fontSize:34, fontWeight:'bold'}}>General Information</Text>
                </View>
           </View>
           <ScrollView>
           {GeneralInfoData.map(data => (
               <View key={data.id} style={{marginVertical:15}}>
                 <Text style={{fontSize:16, fontWeight:'bold', letterSpacing:-0.2}}>{data.title}</Text>
                 <Text>{data.info}</Text>
               </View>
           ))}
           </ScrollView>
            <TouchableOpacity style={{alignItems:'center', justifyContent:"center"}} onPress={()=>{
                navigation.navigate('Home')}}>
                    <View style={styles.submitCode} >
                        <Text style={{color: "#fff"}} >Let's Get started..</Text>
                    </View>
            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal:15,
      paddingTop:Constants.statusBarHeight
    },
    submitCode:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 55, 
        width: 225,
        backgroundColor: "#000000", 
        marginBottom:10
        
    },
  });