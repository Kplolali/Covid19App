import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import ProfileModal from './profileModal';
import Modal from 'react-native-modalbox'

const { height, width } = Dimensions.get('window')

export default function header(){

    const [openModal, setopenModal] = useState(false);
    const [isOpen, setisOpen] = useState(false)

    function handleOpenModal(){
        setopenModal(true)
    }

    function handleCloseModal(){
        setopenModal(false)
    }
    return(
        <View style={{paddingVertical:15, paddingHorizontal:15}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={handleOpenModal}>
                    <Ionicons name="ios-contact" size={50} color="#949494"/>
                    <ProfileModal openModal={openModal} closeModal={handleCloseModal} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setisOpen(true)} >
                    <Ionicons name="ios-notifications-outline" size={45} color="#363636"/>
                           {/* Notification Modal */}
                  <Modal 
                    animationDuration={1000}
                    isOpen={isOpen}
                    onClosed={() => setisOpen(false)}
                    coverScreen={true}
                    swipeToClose={true}
                    style={{height:height*0.9, backgroundColor:'white', borderRadius:20}}
                  >
                     <Text style={{textAlign:'center', fontSize:20}} >Testing Notification</Text>
                  </Modal>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}  