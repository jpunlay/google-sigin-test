import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Button } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import * as Google from 'expo-google-app-auth';

export default function EditScreenInfo({ path }: { path: string }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
    }, []);

    const login = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: '261501057690-as3mrrsa10jperbidv6j4p5td8pib0ih.apps.googleusercontent.com',
                scopes: ["profile", "email"]

            })
            if (result.type === "success") {
                setUser(result.user)
                setLoggedIn(true)
                console.log(result)
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
                    Open up the code for this screen: {isLoggedIn ? <Text>Welcome {user.name}</Text> : ''}
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
            <Button
                onPress={login}
                title="Login"
                color="#839496"
            />
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
