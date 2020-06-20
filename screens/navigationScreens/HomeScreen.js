import React from 'react';
import { View, Text,  StyleSheet, TextInput,TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { Ionicons } from '@expo/vector-icons';
import { News } from '../../data/data';
import { getGhanaData } from '../../queries/queries';


import Header from '../../components/header/header'
import { ScrollView, FlatList } from 'react-native-gesture-handler';

const SliderComponent = (props) => {
    const {data} = props
    return(
        <ScrollView  style={styles.sliderContainer}horizontal={true} >
            {/* Cases */}
                <View>
                    <Image style={styles.image} source={require('../../assets/bg.jpg')}/>
                        <Text style={styles.number}>{data?.country?.result?.cases || 'Null'}</Text>
                     <Text style={styles.name}>Cases</Text>
                </View>
            {/* Recoveries  */}
               <View style={{paddingLeft:15}}>
                    <Image style={styles.image} source={require('../../assets/recovered.jpg')}/>
                        <Text style={styles.number}>{data?.country?.result?.recovered || 'Null'}</Text>
                     <Text style={styles.name}>Recovered</Text>
                </View>
            {/* Deaths */}
               <View style={{paddingLeft:15}}>
                    <Image style={styles.image} source={require('../../assets/deaths.jpeg')}/>
                        <Text style={styles.number}>{data?.country?.result?.deaths || 'Null'}</Text>
                     <Text style={styles.name}>Deaths</Text>
                </View>
        </ScrollView>
    )
}

const NewsComponent = (props) => {
    return(
       <View> 
        <View style={{borderBottomWidth:StyleSheet.hairlineWidth}}>
            <View style={{paddingHorizontal:10, paddingVertical:20}}>
            {/* Title and Date */}
            <Text style={styles.mainText}>{props.title}</Text>
            <Text style={styles.mainText}>{props.date}</Text>

          </View>
        </View>
        {/* Body */}
        <View style={{paddingTop:20}}>
            <Text>{props.body}</Text>
        </View>
      </View>  
    )
}
export default function HomeScreen({navigation}){
      const {loading, data, error} = useQuery(getGhanaData)

    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Home</Text>
            </View>
            {loading ? (
                <View style={{justifyContent:'center', alignItems:'center', paddingTop:'50%'}}>
                    <ActivityIndicator size='large' />
                 </View>   
            ):(
             <ScrollView showsVerticalScrollIndicator={false}>
                {/* Slider component     */}
                    <SliderComponent data={data} />
                    {/* News item */}
                    <View style={{padding:20}}>
                        <Text style={styles.mainText}>Ghana's Situation Updates</Text>
                        <Text style={styles.date}>Last Updated: 4/16/2020</Text>
                        <FlatList 
                            scrollEnabled={false}
                            data={News}
                            renderItem={({item}) => (<NewsComponent {...item} />)}
                    />
                    </View>
           
          </ScrollView> 
            )}
          
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
     flex:1,
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
    sliderContainer:{
        paddingVertical:20,
   
    },
    image:{
        width:240,
        height:150,
        borderRadius:10,
    },
    number:{
        position:'absolute',
        right:30,
        top:10,
        color:'#fff',
        letterSpacing:-0.3,
        fontSize:30,
        fontWeight:"bold"
    },
    name:{
        position:'absolute',
        right:30,
        top:55,
        color:'#fff',
        letterSpacing:-0.1, 
        fontWeight:"bold"
    },
    mainText:{
        fontWeight:'bold',
        fontSize:16,
        letterSpacing:-0.4
    },
    date:{
        fontSize:11,
        color:'grey',
        fontWeight:'600'
    }
 
  });