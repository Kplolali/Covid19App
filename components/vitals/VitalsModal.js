import React, { useContext, useState } from 'react';
import { View, Text , Modal, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import LogSymptoms from './logSymtoms';
import { GlobalContext } from '../../states/states';

const VitalsModal = ({openModal, closeModal}) => {
    const [load, setLoad] = useState(false);
    const [active,setActive] = useState(null)
    const [fever, setFever] = useState({});
    const [aches, setAches] = useState({});
    const [breath, setBreath] = useState({});
    const [throat, setThroat] = useState({});
    const [cough, setCough] = useState({});
    const [headache, setHeadache] = useState({});
    const { symptoms, submitSymptom } = useContext(GlobalContext);
    function submit() {
        setLoad(true)
        setTimeout(() => {
          const newSymptoms = { 
            fever,
            aches,
            breath,
            throat,
            cough,
            headache,
          };
          submitSymptom(newSymptoms);
        },2000)
      }
    
    return (
        <Modal visible={openModal} presentationStyle='pageSheet' animationType='slide'>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View  style={styles.container}>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.headerTitle}>Log Symptoms</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Ionicons name='ios-close' size={40} />
                        </TouchableOpacity>
                    </View>
                    <View>
                     <LogSymptoms /> 
                    </View>    
                </View>
              
            </View>   
            </ScrollView>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight,
        paddingHorizontal:20
    },
    headerTitle:{
        fontSize:30,
        fontWeight:'bold',
        fontFamily:"Georgia"
    },
    title:{
        fontWeight:"bold",
        paddingVertical:15
    },
    View:{
        flexDirection:"row", 
        flexWrap:"wrap"
    },
    Button:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 55, 
        width: 225,
        backgroundColor: "#000000", 
        marginVertical: 20,
        
    },
    button: {
        backgroundColor: '#738096',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
      },
      description: {
        letterSpacing: -0.4,
        color: 'grey',
      },


})

export default VitalsModal
