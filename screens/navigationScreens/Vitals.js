import React,{useState} from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/header/header'
import VitalsModal from '../../components/vitals/VitalsModal';

export default function VitalsScreen({navigation}){

    const [openModal, setopenModal] = useState(false);

    function handleOpenModal(){
        setopenModal(true)
    }

    function handleCloseModal(){
        setopenModal(false)
    }
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Vitals</Text>
            </View>
            <View style={{justifyContent:"center", alignItems:"center", marginTop:"50%"}}>
                <Text>You have not logged your vitals yet</Text>
            </View>
            <TouchableOpacity onPress={handleOpenModal} style={{alignItems:'center', justifyContent:"center"}} >
                    <View style={styles.submitCode} >
                        <Text>Log Vitals</Text>
                    </View>
                    <VitalsModal openModal={openModal} closeModal={handleCloseModal} />
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal:10,
      paddingVertical:20,
    },
    headerText:{
        fontWeight:'bold', 
        fontSize:30
    },
    headerView:{
         
        paddingHorizontal:10,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:"#949494"
    },
    submitCode:{
        display: "flex", 
        justifyContent: 'center', 
        alignItems: "center", 
        height: 45, 
        width: 185,
        backgroundColor: "#ffffff", 
        marginVertical: 20,
        borderRadius:1,
        borderColor:"#242424",
        borderWidth:1,
        borderStyle:"dashed"
        
    },
  });