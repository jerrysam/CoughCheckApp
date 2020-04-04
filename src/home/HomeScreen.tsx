import i18n from 'i18n-js'
import * as React from 'react'
// import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { StandardViewStyled } from 'src/components/styledComponents'

import styled from 'styled-components/native'
import { useAuthContext } from 'src/globalState/AuthContext'

import { Component } from 'react'
import { StyleSheet, View, StatusBar, Text, Image } from 'react-native'
// import MaterialButtonTransparentHamburger6 from "../components/MaterialButtonTransparentHamburger6";

export default function HomeScreen({ navigation }, props) {
	return (
		<View style={styles.container}>
			<View style={styles.mainApp}>
				<View style={styles.imageContainer}>
					<Image
						source={require('../assets/images/recordButton.png')}
						resizeMode="contain"
						style={styles.image}
					></Image>
				</View>
				<Text style={styles.tapToRecord}>Tap to record</Text>
				<Text style={styles.bodyText}>
					Cough at your microphone for 10 seconds.{'\n'}
					{'\n'}Please record in a quiet environment as much as possible.
				</Text>
			</View>

			<View style={styles.shareContainer}>
				<Text style={styles.bodyTextLarge}>471,218</Text>
				<Text style={styles.bodyText}>People have contributed so far</Text>
				<View style={styles.progressBar}>
					<View style={styles.progressBarProgress}></View>
				</View>
				<Text style={styles.bodyText}>Help us reach 528,782 more people</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
	},
	mainApp: {
		width: '80%',
		alignItems: 'center',
	},
	tapToRecord: {
		color: 'rgba(119,144,157,1)',
		fontSize: 36,
		marginBottom: 20,
	},
	shareContainer: {
		width: '80%',
		justifyContent: 'space-between',
	},
	progressBar: {
		marginTop: 50,
		marginBottom: 20,
		height: 8,
		backgroundColor: 'rgba(207,216,220,1)',
	},
	progressBarProgress: {
		width: '40%',
		height: 8,
		backgroundColor: 'rgba(18,111,238,1)',
	},
	bodyText: {
		color: 'rgba(119,144,157,1)',
		fontSize: 20,
		textAlign: 'center',
	},
	bodyTextLarge: {
		color: 'rgba(119,144,157,1)',
		fontSize: 32,
		textAlign: 'center',
	},
})
