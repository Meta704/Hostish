import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, CheckBox, Text, TextInput, StyleSheet } from 'react-native';
import DatePicker from './datePicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
export default class SearchCard extends React.Component{

	constructor(props) {
		super(props);
		this.state = { show: "empty" };
	  }

	showResults = (data) => {
		this.setState({ show: data });
	  }

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.innerContainer}>

					<DropDownPicker items={[	//JSON import
												{label: 'עמק חפר', value: 'item2'},
												{label: 'חוף כרמל', value: 'item2'},
												{label: 'מנשה', value: 'item2'},
												{label: 'גולן', value: 'item2'},
												{label: 'גלבוע', value: 'item2'},
											]}
						placeholder="מועצה"
						containerStyle={styles.pickerHeight}
						style={styles.picker}
						dropDownStyle={styles.pickerDrop}
						onChangeItem={item => console.log(item.label, item.value)}
					/>

					<DropDownPicker items={[	//JSON import
												{label: 'חדרה', value: 'item2'},
												{label: 'חיפה', value: 'item2'},
												{label: 'קרית גת', value: 'item2'},
												{label: 'שניר', value: 'item2'},
												{label: 'הידד', value: 'item2'},
											]}
						placeholder="יישוב"
						containerStyle={styles.pickerHeight}
						style={styles.picker}
						dropDownStyle={styles.pickerDrop}
						onChangeItem={item => console.log(item.label, item.value)}
					/>

					<View style={styles.row}>
						<DatePicker style={styles.date}/>
						<Text style={styles.formText}> מתאריך        </Text>
					</View>

					<View style={styles.row}>
						<DatePicker style={styles.date}/>
						<Text style={styles.formText}> לתאריך        </Text>
					</View>

					<View style={styles.row}>
						<TextInput style = {styles.inputField} placeholder = "   " />
						<Text style={styles.formText}> תחום גיל </Text>
						<TextInput style = {styles.inputField} placeholder = "   " />
						<Text style={styles.formText}> כמות אורחים   </Text>
					</View>

					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={false}
							tintColors={{ true: '#000', false: 'black' }}
							style={styles.checkbox} />
							<Text style={styles.label}> 
							שירותים 
							</Text>

						<CheckBox
							value={false}
							tintColors={{ true: '#000', false: 'black' }}
							style={styles.checkbox} />
							<Text style={styles.label}> 
							מקלחות
							</Text>	

						<CheckBox
							value={false}
							tintColors={{ true: '#000', false: 'black' }}
							style={styles.checkbox} />
							<Text style={styles.label}> 
							מטבח
							</Text>	
					</View>

					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={false}
							tintColors={{ true: '#000', false: 'black' }}
							style={styles.checkbox} />
							<Text style={styles.label}> 
							חצר
							</Text>	

						<CheckBox
							value={false}
							tintColors={{ true: '#000', false: 'black' }}
							style={styles.checkbox} />
							<Text style={styles.label}> 
							שטח מדורה
							</Text>

						<CheckBox
							value={false}
							tintColors={{ true: '#000', false: 'black' }}
							style={styles.checkbox} />
							<Text style={styles.label}> 
							בריכה 
							</Text>	
					</View>

					<View style={styles.row}>
						<TextInput style = {styles.inputFieldFree} placeholder = "   " />
						<Text style={styles.formText}> טקסט חופשי </Text>
					</View>
									
					<TouchableOpacity style={styles.button}>
						<Text style={styles.formText}>בצע חיפוש</Text>
					</TouchableOpacity>

				</View>





            </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '98%',
		backgroundColor: '#333333',
		marginTop: '2%'
	  },
	  innerContainer: {
		paddingTop: 15,
		width: '100%',
		backgroundColor: '#AAA',
		borderRadius: 10,
		alignItems: 'center',
	  },
	  picker:{
		  backgroundColor: '#eee',
		  marginVertical: 5,
		  width: '90%'
	  },
	  pickerDrop:{
		  backgroundColor: '#eee'
	  },
	  pickerHeight:{
		  height: 50
	  },
	  row:{
		flexDirection: 'row',
		alignItems: 'center',
	  },
	  formText:{
		color: '#000',
		fontSize: 18,
		direction: 'rtl',
	  },
	  inputField: {
		color: '#000',
		textAlign: 'center',
		margin: 5,
		fontSize: 18,
		width: '15%', 
		height: 35,
		backgroundColor: '#eee',
		borderColor: '#db7739', 
		borderWidth: 1,
		paddingHorizontal: 16
	  },
	  checkbox: {
		alignSelf: "center",
	  },
	  label: {
		margin: 9,
		fontSize: 18,
	  },
	  checkBoxContainer:{
		  flexDirection: 'row'
	  },
	  inputFieldFree:{
		color: '#000',
		textAlign: 'center',
		margin: 5,
		fontSize: 18,
		width: '55%', 
		height: 35,
		backgroundColor: '#eee',
		borderColor: '#db7739', 
		borderWidth: 1,
		paddingHorizontal: 16
	  },
	  button:{
		alignItems: 'center',
		width: 200,
		backgroundColor: '#db8020',
		opacity: 0.9,
		borderRadius: 25,
		marginTop: 15,
		marginBottom: 25,
		paddingVertical: 12
	  },

});