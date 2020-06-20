import React,{useState} from 'react';
import { View, Text,  StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/header/header'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AssessmentModal from '../../components/settings/AssessmentModal';
import FAQModal from '../../components/settings/FAQModal';
import TestingCenter from '../../components/settings/TestingCenter';

export default function SettingsScreen({navigation}){

    const [ShowAssement, setShowAssement] = useState(false)
    const [ShowFAQ, setShowFAQ] = useState(false)
    const [ShowTesting, setShowTesting] = useState(false)
    const [ShowDetails, setShowDetails] = useState(false)
    const [ShowAudio, setShowAudio] = useState(false)
    const [ShowPrivacy, setShowPrivacy] = useState(false)

    function closeAssessment(){
        setShowAssement(false)
    }

    function closeFAQ(){
        setShowFAQ(false)
    }

    function closeTesting(){
        setShowTesting(false)
    }

    function closeDetails(){
        setShowDetails(false)
    }

    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
           {/* Assessement Modal */}
           <TouchableOpacity onPress={() => setShowAssement(true)} style={styles.cardContainer} >
                <View style={styles.body}>
                   <View>
                       <Text style={styles.mainText}>Self Assessement</Text>
                       <Text style={styles.subText}>Ascertain your covid-19 risk using our screen tool</Text>
                   </View>
                   <Ionicons name='ios-arrow-forward' size={25} />
                </View>
                <AssessmentModal showModal={ShowAssement} closeModal={closeAssessment} />
           </TouchableOpacity>
           {/* FAQs */}
           <TouchableOpacity  onPress={() => setShowFAQ(true)}  style={styles.cardContainer} >
                <View style={styles.body}>
                   <View>
                       <Text style={styles.mainText}>FAQs</Text>
                       <Text style={styles.subText}>Get answers to Frequently Asked Questions</Text>
                   </View>
                   <Ionicons name='ios-arrow-forward' size={25} />
                </View>
                <FAQModal showModal={ShowFAQ} closeModal={closeFAQ} />
           </TouchableOpacity>
           {/* Testing Centers */}
           <TouchableOpacity  onPress={() => setShowTesting(true)}  style={styles.cardContainer} >
                <View style={styles.body}>
                   <View>
                       <Text style={styles.mainText}>Testing Centers</Text>
                       <Text style={styles.subText}>View testing centers near you</Text>
                   </View>
                   <Ionicons name='ios-arrow-forward' size={25} />
                </View>
                <TestingCenter showModal={ShowTesting} closeModal={closeTesting} />
           </TouchableOpacity>
           {/* Personal Details */}
           <TouchableOpacity  onPress={() => setShowDetails(true)}  style={styles.cardContainer} >
                <View style={styles.body}>
                   <View>
                       <Text style={styles.mainText}>Personal Details</Text>
                       <Text style={styles.subText}>View and update you personal details</Text>
                   </View>
                   <Ionicons name='ios-arrow-forward' size={25} />
                </View>
           </TouchableOpacity>
           {/* Audio */}
           <TouchableOpacity  onPress={() => setShowAudio(true)}  style={styles.cardContainer} >
                <View style={styles.body}>
                   <View>
                       <Text style={styles.mainText}>Audio</Text>
                       <Text style={styles.subText}>Listen to audio</Text>
                   </View>
                   <Ionicons name='ios-arrow-forward' size={25} />
                </View>
           </TouchableOpacity>
           {/* Privacy Policy */}
           <TouchableOpacity  onPress={() => setShowPrivacy(true)}  style={styles.cardContainer} >
                <View style={styles.body}>
                   <View>
                       <Text style={styles.mainText}>Privacy Policy</Text>
                       <Text style={styles.subText}>View our privay policy</Text>
                   </View>
                   <Ionicons name='ios-arrow-forward' size={25} />
                </View>
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
        width: 225,
        backgroundColor: "#000000", 
        marginVertical: 20,
        borderRadius:10,
        
    },
    cardContainer:{
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#dedede'
    },
    body:{
        marginVertical:30,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    mainText:{
        letterSpacing:-0.2,
        fontSize:18,
        fontWeight:'bold'
    },
    subText:{
        fontWeight:"bold",
        fontSize:14,
        color:'grey',
        letterSpacing:-0.2
    }
  });