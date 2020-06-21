import React,{ useState, useContext } from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native'
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { GlobalContext } from '../../states/states';
import { useIsFocused } from '@react-navigation/native';
import { width, height} from '../../constants/constants';
import colors from '../../constants/colors';

import Header from '../../components/header/header'
import MakeReportModal from '../../components/report/MakeReportModal';
import CaseReports from '../../components/report/caseReport';
import load from '../../assets/lottie/reports.json'

export default function ReportScreen({navigation}){
    const [openModal, setopenModal] = useState(false);
    const { reports } = useContext(GlobalContext);
    const isFocused = useIsFocused();

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
                <Text style={styles.headerText}>Case Report</Text>
            </View>
            {/* Check Report Items */}
            {reports.length > 0 ? (
                <View>
                {reports.map(report => (
                    <View>
                    <CaseReports key={report.id}   {...report} />
                    </View>
                ))}
                </View>
            
            ) : (
                <Text />
            )}
              {/* Check if report is empty*/}
            {reports.length <= 0 ? (
                <View>
                    <Lottie
                        source= { load } 
                        autoPlay 
                        loop
                        style={{alignItems:"center", width:70, height:140, marginLeft:25, marginVertical:15, marginBottom:"20%"}}
                        />
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Text>You don't have any case reports </Text>
                    </View>
                    <TouchableOpacity onPress={handleOpenModal} style={{alignItems:'center', justifyContent:"center"}} >
                            <View style={styles.submitCode} >
                                <Text>Make Case Reports</Text>
                            </View>
                            <MakeReportModal openModal={openModal} closeModal={handleCloseModal} />
                    </TouchableOpacity> 
                </View>
            
                  ) : (
                    <Text />
                  )}  
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