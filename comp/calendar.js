import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          width={340}
          showDayStragglers={true}
          previousTitle='לפני'
          previousTitleStyle={styles.text}
          nextTitle='אחרי'
          nextTitleStyle={styles.text}
          todayBackgroundColor='#f59753'
          selectedDayTextColor='#000'
          textStyle={styles.text}
          disabledDatesTextStyle={styles.textDisabled}
        />

        <View>
          <Text> </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '90%',
    backgroundColor: '#333',
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text:{
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: "bold",
    direction: 'rtl',
  },
  textDisabled:{
    color: '#555',
    fontSize: 14,
    fontWeight: "bold",
    direction: 'rtl',
  }
});