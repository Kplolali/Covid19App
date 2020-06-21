import React from 'react';
import {
    View,
    Text,
    Modal, 
    ScrollView,
    SafeAreaView, 
    FlatList, 
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'


const ListItem = ({name, flag, select, data})=>{
    return(
    <TouchableOpacity onPress={()=>{select(data)}}>
        <View style={{flexDirection: "row",borderBottomWidth: .3, height: 50, borderBottomColor: "#e3e3e3"}}>
            <View style={{flex:1, paddingVertical:17}}>
                <Image source={flag} style={{width: 30, height: 20}}/>
            </View>
            <View style={{flex: 8, flexDirection: "row", paddingVertical: 17, marginLeft: 15}}>
            <View>
                <Text style={{fontSize: 15}}>{name}</Text>
            </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }


export default function WorldData({showModal, closeModal, SelectedTeam}){
  
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(()=>{  
        async function fetchData(){
            let response = await fetch('https://covid19-graphql.netlify.app/', 
            {   method: 'POST', 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                       query  {
                            countries {
                                country
                                countryInfo {
                                    _id
                                    flag
                                    iso3
                                    iso2
                                }
                            }
                        }
                    `
                    })
                })
                let json = await response.json();
                console.log(json.data.countries)
                setData(json.data.countries)
                setLoading(!loading)
           }
           fetchData()
    }, [])

    return(
        <SafeAreaView>
            <Modal visible={showModal} presentationStyle='pageSheet' animationType='fade' >
                {
                    loading ?
                    <View style={styles.container}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{fontSize:34, fontWeight:'bold'}}>World Statistics</Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Ionicons name='ios-close' size={28} />
                            </TouchableOpacity>

                        </View>
                    </View> 
                    :
                    <View style={styles.container}>
                        <TouchableOpacity onPress={closeModal}>
                                <Ionicons name='ios-close' size={28} />
                            </TouchableOpacity>

                        <ScrollView style={{padding: 10, }}>
                        <FlatList
                                data={data}
                                renderItem={({item})=> <ListItem {...item} data={item} name={item.country} flag={{uri: item.countryInfo.flag}} select={data=>{
                                    SelectedTeam({...data})
                                    close()
                                }}/>}
                            />  
                        </ScrollView>

                    </View>     
                }
               
            </Modal>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        paddingHorizontal:10
    }
})