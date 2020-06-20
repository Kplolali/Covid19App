import React from 'react'
import { View, Text, Modal, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileModal = ({openModal,closeModal}) => {
    return (
        <Modal visible={openModal} presentationStyle="pageSheet" animationType="slide" >
           <View style={styles.container}>
               <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={styles.headerTitle}>Profile</Text>
                    <TouchableOpacity onPress={closeModal} >
                      <Ionicons name='ios-close' size={28} />
                    </TouchableOpacity>   
                    <Button title='Close' onPress={closeModal} />
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
        fontSize:34,
        fontWeight:'bold'
    }
})

export default ProfileModal
