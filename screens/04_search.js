import React, { Component } from 'react';
import NavDrawer from '../comp/navDrawer';
import { Button, View, Image } from 'react-native';
import styles from '../comp/styles.js';

import SearchTab from '../comp/searchCard';

export default function Search({ navigation }){

		return (
			<View style={styles.container}>
				<SearchTab />
			</View>
		);
}