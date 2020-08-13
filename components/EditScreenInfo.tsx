import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import * as AppAuth from 'expo-app-auth';
import * as Google from 'expo-google-app-auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  } from 'react-native-google-signin';



export default function EditScreenInfo({ path }: { path: string }) {
  // When configured correctly, URLSchemes should contain your REVERSED_CLIENT_ID
const { URLSchemes } = AppAuth;
const [user, setUser] = useState(null);

useEffect(() => {
 
  initAsync();
}, []);

// const initAsync = async () => {
//   await GoogleSignIn.initAsync({
//     // You may ommit the clientId when the firebase `googleServicesFile` is configured
//     clientId: '661002849298-2pq4euadij2h4a0r8qej2aq5lijvklpc.apps.googleusercontent.com',
//   });
//   _syncUserWithStateAsync();
// };

const initAsync = async () => {
  try {
    const result = await Google.logInAsync({
      // androidClientId: "Your Client ID",
      iosClientId: '',
      scopes: ["profile", "email"]

    })
    if (result.type === "success") {
      // const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
      // firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function (result) {
        console.log(result);
      // });
      // this.props.navigation.navigate('Where you want to go');
    } else {
      console.log("cancelled")
    }
  } catch (e) {
    console.log("error", e)
  }
}

  return (
    <View>
      <View style={styles.getStartedContainer}>
      {/* <Text onPress={onPress}>Toggle Auth</Text> */}
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen: yoo
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
