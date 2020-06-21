import React from 'react';
import { View, Text , Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const VitalsModal = ({openModal, closeModal}) => {
    return (
        <Modal visible={openModal} presentationStyle='pageSheet' animationType='slide'>
            <View>
                <View style={styles.container}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.headerTitle}>Log Symptoms</Text>
                    <TouchableOpacity onPress={closeModal}>
                        <Ionicons name='ios-close' size={28} />
                    </TouchableOpacity>
                    </View>
                </View>
                <View>

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
    headerTitle:{
        fontSize:30,
        fontWeight:'bold'
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


})

export default VitalsModal
