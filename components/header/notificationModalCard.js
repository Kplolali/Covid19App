import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default function NotificationCard({ main, text }) {
  return (
      <View style={{paddingHorizontal:26,paddingVertical:25}}>
        <View  style={styles.body}>
            <Text style={styles.Text}>{main}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    paddingHorizontal:25,
    paddingVertical:15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor:"#e3e3e3",
    justifyContent:"space-between"
  },
  Text: {
    letterSpacing: -0.3,
    fontSize: 15,
    fontFamily:"Georgia"
  },
  text: {
    letterSpacing: -0.3,
    fontSize: 8,
    fontFamily:"Georgia"
  }

});