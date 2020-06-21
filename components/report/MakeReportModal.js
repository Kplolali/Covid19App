import React, { useState, useContext} from 'react';
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import { GlobalContext } from '../../states/states';

const MakeReportModal = ({openModal, closeModal, navigation}) => {
    const [load, setLoad] = useState(false);
    const [reportFor, setReportFor] = useState({});
    const [address, setAddress] = useState('');
    const [landMark, setLandMark] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
  
    const { makeCaseReport } = useContext(GlobalContext);
    // Radio Button data
    //const rbData = [{ label: 'Self' }, { label: 'Other Individual' }];
  
    let date = new Date()
    
    function submitReport() {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        Alert.alert('Success', 'Case submitted', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
        const newReport = {
          id: Math.floor(Math.random() * 100000000),
          reportFor:'Self',
          landMark,
          contact,
          address,
          description,
          date : +date
        };
        makeCaseReport(newReport);
      }, 2000);
    }
    return (
        <Modal visible={openModal} presentationStyle='pageSheet' animationType='slide'>
            <View style={styles.container}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                   <Text style={styles.headerTitle}>Make Report</Text>
                   <TouchableOpacity onPress={closeModal}>
                       <Ionicons name='ios-close' size={28} />
                   </TouchableOpacity>
                </View>
                <View  style={{}}>
                   <Text style={styles.title}>Who are you reporting?</Text>
                   <View style={styles.View}>
                    <View style={{flexDirection:"row",  paddingRight:35}}>
                        <TouchableOpacity>
                            <Ionicons name="ios-checkmark-circle" size={21} />
                        </TouchableOpacity>
                        <Text style={{paddingLeft:5}}>Self</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity>
                            <Ionicons name="ios-checkmark-circle" size={21} />
                        </TouchableOpacity>
                        <Text style={{paddingLeft:5}}>Other Individual</Text>
                    </View>
                    {/* Location */}
               </View>
                   <Text style={styles.title}>Location or Digital Address</Text>
                   <TextInput 
                   value={address}
                   onChangeText={address => setAddress(address)}
                   placeholder="Location"
                   style={{
                       borderWidth:StyleSheet.hairlineWidth, 
                       borderColor:"#e3e3e3",
                       padding:5,
                    }}/>
                </View>
                {/* Landmark */}
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={styles.title}>Nearest Landmark</Text>
                    <Text style={styles.title}>Alternate Contact</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TextInput 
                    value={landMark}
                    onChangeText={landMark => setLandMark(landMark)}
                   placeholder="eg. Goil Fuel Station"
                   style={{
                       borderWidth:StyleSheet.hairlineWidth, 
                       borderColor:"#e3e3e3",
                       padding:10,
                    }}/>
                    {/* Alternate Contact */}
                    <TextInput 
                    value={contact}
                    onChangeText={contact => setContact(contact)}
                   placeholder="Contact Number"
                   style={{
                       borderWidth:StyleSheet.hairlineWidth, 
                       borderColor:"#e3e3e3",
                       padding:10,
                    }}/>
                </View>
                {/* Description */}
                <View style={{ marginBottom:"45%"}}>
                    <Text style={styles.title}>Description</Text>
                   <TextInput 
                   value={description}
                   onChangeText={description => setDescription(description)}
                   placeholder="Type Something"
                   style={{
                       borderWidth:StyleSheet.hairlineWidth, 
                       borderColor:"#e3e3e3",
                       padding:5,
                    }}/>
                </View>
                {/* Button */}
                <TouchableOpacity  onPress={submitReport} style={{alignItems:'center', justifyContent:"center",}} >
                    {load ? (
                    <ActivityIndicator />
                        ) : (
                    <View style={styles.Button} >
                        <Text style={{color: "#fff"}} >Report Case</Text>
                    </View>
                        )}
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

export default MakeReportModal
