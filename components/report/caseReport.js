import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated , TouchableOpacity} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import FAB from 'react-native-fab';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { covertDateTime, width } from '../../constants/constants';
import ReportModal from './MakeReportModal';
import { height } from '../../constants/constants';
import font_sizes from '../../constants/font_sizes';
import colors from '../../constants/colors';


export default function CaseReports({ reportFor, contact, description, date }) {
  const [openModal, setopenModal] = useState(false);
  const isFocused = useIsFocused();

  function handleOpenModal(){
    setopenModal(true)
}

function handleCloseModal(){
    setopenModal(false)
}
  function rightActions(dragX, index) {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.9],
      extrapolate: 'clamp',
    });

    const opacity = dragX.interpolate({
      inputRange: [-100, -20, 0],
      outputRange: [1, 0.9, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity>
        <Animated.View style={[styles.deleteItem, { opacity: opacity }]}>
          <Animated.Text
            style={{
              color: colors.white,
              fontWeight: 'bold',
              transform: [{ scale }],
            }}>
            Delete
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
  return (
    <View
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
      }}>
      <Swipeable renderRightActions={(_, dragX) => rightActions(dragX)}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text style={styles.mainTitle}>{reportFor}</Text>
            <Text style={styles.mainText}>{covertDateTime(date)}</Text>
          </View>
          <Text style={styles.book}>{description}</Text>
          <Text style={styles.book}>{contact}</Text>
        </View>
      </Swipeable>
      <FAB
        onClickAction={() => setopenModal(true)}
        style={{
          position: 'absolute',
          width: 65,
          height: 65,
          top: height * 0.58,
        }}
        buttonColor="black"
        iconTextColor="#FFFFFF"
        visible={isFocused}
        iconTextComponent={<Ionicons name="ios-add" />}
      />
      <ReportModal openModal={openModal} closeModal={handleCloseModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  mainText: {
    letterSpacing: -0.6,
    color: colors.grey,
    fontFamily:"Georgia"
  },
  mainTitle: {
    letterSpacing: -0.6,
    fontSize: font_sizes.t3,
    fontFamily:"Georgia"
  },
  book: {
    letterSpacing: -0.3,
    fontSize: font_sizes.t4,
    fontFamily:"Georgia"
  },
  deleteItem: {
    backgroundColor: 'red',
    width: 80,
    height: 87,
    justifyContent: 'center',
    alignItems: 'center',
  },
});