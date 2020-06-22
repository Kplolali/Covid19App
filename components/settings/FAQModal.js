import React from 'react'
import { View, Text,Modal , StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

import FAQComponent from './faq'

const FAQModal = ({showModal, closeModal}) => {
    return (
        <Modal visible={showModal} presentationStyle='pageSheet' animationType='fade' >
           <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:34, fontWeight:'bold'}}>FAQs</Text>
                <TouchableOpacity onPress={closeModal}>
                    <Ionicons name='ios-close' size={28} />
                </TouchableOpacity>
            </View>
         </View>
         <FAQComponent />
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        paddingHorizontal:10
    }
})

export default FAQModal
