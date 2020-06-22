import React, { useState} from 'react'
import { View, Text, Modal, 
    StyleSheet, TextInput, TouchableOpacity, 
    KeyboardAvoidingView,ActivityIndicator,Alert, 
}
from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';
import RadioButtonRN from 'radio-buttons-react-native';
import { width, height } from '../../constants/constants';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';

const ProfileModal = ({openModal,closeModal}) => {
    const [countryCode, setCountryCode] = useState('GH');
    const [countryCode2, setCountryCode2] = useState('GH');
    const [country, setCountry] = useState('Ghana');
    const [country2, setCountry2] = useState('Ghana');
    const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  
    const [withFlag, setWithFlag] = useState(true);
    const [withEmoji, setWithEmoji] = useState(true);
    const [withAlphaFilter, setWithAlphaFilter] = useState(false);
    const [withCallingCode, setWithCallingCode] = useState(false);
  
    const [load, setLoad] = useState(false);
    const [age, setAge] = useState("")
      // Radio Button data
  const rbData = [{ label: 'Male' }, { label: 'Female' }];

  const onSelect = (country, num) => {
    if (num === 1) {
      setCountryCode(country.cca2);
      setCountry(country);
    } else {
      setCountryCode2(country.cca2);
      setCountry2(country);
    }
  };

  function updateProfile() {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      Alert.alert('Success', 'Profile Updated', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }, 2000);
  }
    return (
        <KeyboardAvoidingView behavior="padding">
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
                   placeholder="Age"
                   keyboardType="number-pad"
                   value={age}
                    onChangeText={age => setAge(age)}
                   style={{
                       borderWidth:StyleSheet.hairlineWidth, 
                       borderColor:"#e3e3e3",
                       padding:5,
                    }}/>
               </View>
               {/* Radio buttons */}
            <View>
              <RadioButtonRN
                data={rbData}
                animationTypes={['shake']}
                circleSize={16}
                initial={3}
                box={false}
                activeColor={colors.black}
                inactiveColor={colors.grey}
                textStyle={{
                  letterSpacing: -0.4,
                }}
                icon={
                  <Ionicons
                    name="ios-checkmark-circle"
                    size={20}
                  />
                }
              />
            </View>
               <View>
                    <Text style={styles.title}>Travel History</Text>
                    <Text>Select the last two countries you visited(If Applicable)</Text>
                    <View style={styles.countryContainer}>
                {/* Pick first country */}
                <View style={styles.selectCountry}>
                  <CountryPicker
                    {...{
                      countryCode,
                      country,
                      withFlag,
                      withCountryNameButton,
                      withAlphaFilter,
                      withCallingCode,
                      withEmoji,
                      onSelect: (value, num = 1) => onSelect(value, num),
                    }}
                  />
                  {country.name == null ? (
                    <Text style={styles.mainText}>{country}</Text>
                  ) : (
                    <Text style={styles.mainText}>{country.name}</Text>
                  )}
                </View>
                {/* Pick second country */}
                <View style={styles.selectCountry}>
                  <CountryPicker
                    {...{
                      countryCode: countryCode2,
                      withFlag,
                      withCountryNameButton,
                      withAlphaFilter,
                      withCallingCode,
                      withEmoji,
                      onSelect: (value, num = 2) => onSelect(value, num),
                    }}
                  />
                  {country2.name == null ? (
                    <Text style={styles.mainText}>{country2}</Text>
                  ) : (
                    <Text style={styles.mainText}>{country2.name}</Text>
                  )}
                </View>
              </View>
            
                </View>
                <View style={{paddingBottom:20}}>
                    <Text style={styles.title}>Medical Professional Information</Text>
                    <Text>Applicable if you are a health worker</Text>
                    <Text style={{paddingTop:20, paddingBottom:10}}>Health Licence Number</Text>
                   <TextInput 
                   style={{
                       height:50,
                       borderWidth:StyleSheet.hairlineWidth, 
                       borderColor:"#e3e3e3",
                       padding:5,
                    }}/>
                </View>
                <TouchableOpacity onPress={updateProfile} style={styles.button}>
              {load ? (
                <ActivityIndicator />
              ) : (
                <Text style={([styles.mainText], { color: colors.white })}>
                  Update Profile
                </Text>
              )}
            </TouchableOpacity>
           </View>
           </Modal>
        </KeyboardAvoidingView>
        

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
    countryContainer: {
        flexDirection: 'row',
        marginVertical: 30,
        justifyContent: 'center',
      },
      selectCountry: {
        width: width * 0.4,
        height: height * 0.14,
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 5,
        borderColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
      },
})

export default ProfileModal
