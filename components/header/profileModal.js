import React from 'react'
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const ProfileModal = ({openModal,closeModal}) => {
    //const [age, setAge] = useState("")
    return (
        <Modal visible={openModal} presentationStyle="pageSheet" animationType="slide" >
           <View style={styles.container}>
               <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={styles.headerTitle}>Profile</Text>
                    <TouchableOpacity onPress={closeModal} >
                      <Ionicons name='ios-close' size={28}/>
                    </TouchableOpacity>   
               </View>
               <View>
                   <Text style={styles.title}>Profile Details</Text>
                   <Text style={{paddingTop:20, paddingBottom:10}}>Enter Age</Text>
                   <TextInput 
                   style={{
                       borderWidth:StyleSheet.hairlineWidth, 
                       borderColor:"#e3e3e3",
                       padding:5,
                    }}/>
               </View>
               <View style={styles.View}>
                    <View style={{flexDirection:"row",  paddingRight:35}}>
                        <TouchableOpacity>
                            <Ionicons name="ios-checkmark-circle" size={21} />
                        </TouchableOpacity>
                        <Text style={{paddingLeft:5}}>Female</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity>
                            <Ionicons name="ios-checkmark-circle" size={21} />
                        </TouchableOpacity>
                        <Text style={{paddingLeft:5}}>Male</Text>
                    </View>
               </View>
               <View>
                    <Text style={styles.title}>Travel History</Text>
                    <Text>Select the last two countries you visited(If Applicable)</Text>
                    <View style={styles.View}>
                        <View style={styles.country}>
                            <Text>Country 1</Text>
                        </View>
                        <View style={styles.country}>
                            <Text>Country 2</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Medical Professional Information</Text>
                    <Text>Applicable if you are a health worker</Text>
                    <Text style={{paddingTop:20, paddingBottom:10}}>Health Licence Number</Text>
                   <TextInput 
                   style={{
                       borderWidth:StyleSheet.hairlineWidth, 
                       borderColor:"#e3e3e3",
                       padding:5,
                    }}/>
                </View>
                <TouchableOpacity>
                    <Text>Update Profile</Text>
                </TouchableOpacity>
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
    },
    title:{
        fontWeight:"bold",
        paddingTop:20
    },
    View:{
        flexDirection:"row", 
        paddingTop:20,
        flexWrap:"wrap"
    },
    country:{
        borderWidth:1,
    }
})

export default ProfileModal
