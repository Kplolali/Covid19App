import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import getDirections from 'react-native-google-maps-directions';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';

export default function TestingCenters({closeModal, showModal}){

    const handleGetDirections = () => {
        const data = {
          
            destination:{
                latitude:6.673175,
                longitude:-1.565423
            },
            params: [
                {
                    key:'travelmode',
                    value:'driving'
                },
                {
                    key:'dir_action',
                    value:'navigate'
                }
            ],
            waypoints:[
                {
                    latitude:6.673175,
                    longitude:-1.565423
                },
                {
                    latitude:6.673175,
                    longitude:-1.565423
                },
                {
                    latitude:6.673175,
                    longitude:-1.565423
                }
            ]
        }

        getDirections(data)
    }
    return(
        <Modal visible={showModal} presentationStyle={'pageSheet'} animationType={'slide'} >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Testing Centers</Text>
                    <TouchableOpacity onPress={closeModal}>
                        <Ionicons  name="ios-close" size={40} />
                    </TouchableOpacity>
                </View>
               <View style={{borderBottomWidth:StyleSheet.hairlineWidth, borderColor:colors.borderColor}}>
                <View style={styles.venueContainer}>
                    <View>
                        <Text style={styles.medium}>University of Ghana Medical School</Text>
                        <Text style={{color:colors.grey, fontWeight:'600', paddingTop:6,fontFamily:"Georgia"}} >Accra, Ghana</Text>
                    </View>
                    <TouchableOpacity onPress={handleGetDirections}  >
                         <Text style={{color:colors.tomato, fontWeight:'500',fontFamily:"Georgia"}}>Get Directions</Text>
                    </TouchableOpacity>
                </View>
             </View> 
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop:Constants.statusBarHeight,
      paddingHorizontal:20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
      headerTitle: {
        letterSpacing: -0.2,
        fontSize: font_sizes.h1,
        fontFamily:"Georgia"
      },
      venueContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingVertical:20
      },
      medium: {
        letterSpacing: -0.3,
        fontSize: font_sizes.t3,
        fontFamily:"Georgia"
      },
})