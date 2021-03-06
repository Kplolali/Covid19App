import React,{useState, useContext} from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Lottie from 'lottie-react-native'

import Header from '../../components/header/header'
import VitalsModal from '../../components/vitals/VitalsModal';
import load from '../../assets/lottie/heart-cardio.json';
import UserSymptoms from '../../components/vitals/userSymptoms';
import { GlobalContext } from '../../states/states';

export default function VitalsScreen({navigation}){
    const [openModal, setopenModal] = useState(false);
    const { userVitals } = useContext(GlobalContext);

    function handleOpenModal(){
        setopenModal(true)
    }

    function handleCloseModal(){
        setopenModal(false)
    }
    return(
        <View style={styles.container}>
            <Header />
            <View>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Vitals</Text>
                </View>
                      {/* Check if user vitals array is empty */}

                    {userVitals.length > 0 ? (
                        <View>
                        <UserSymptoms userVitals={userVitals} />
                        </View>
                    ) : (
                        <Text />
                    )}

                    {userVitals.length <= 0 ? (
                <View>
                    <Lottie
                    source= { load } 
                    autoPlay 
                    loop
                    style={{alignItems:"center", width:70, height:140, marginLeft:25, marginVertical:15, marginBottom:"20%"}}
                    />
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontFamily:"Georgia"}}>You have not logged your vitals yet</Text>
                    </View>
                    <TouchableOpacity onPress={handleOpenModal} style={{alignItems:'center', justifyContent:"center"}} >
                            <View style={styles.submitCode} >
                                <Text style={{fontFamily:"Georgia"}}>Log Vitals</Text>
                            </View>
                            <VitalsModal openModal={openModal} closeModal={handleCloseModal} />
                    </TouchableOpacity>
                </View>
                
              ) : (
                <Text />
              )}
            </View>     
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
        fontSize:30,
        fontFamily:"Georgia"
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