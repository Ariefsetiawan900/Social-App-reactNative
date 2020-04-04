import React, { Component } from 'react';
import { View, Text, ToastAndroid, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class editProfile extends Component {
    state = {
        displayName:"",
        imageUrl:"",
        phone:"",
        status: "",
    }
    componentDidMount() {
        const { displayName } = firebase.auth().currentUser
        this.setState({ displayName })
    }
    profileHandler = async () => {
        const { displayName, status, imageUrl, phone } = this.state
        const uid = firebase.auth().currentUser.uid
        const email = firebase.auth().currentUser.email
        const ref = firebase.database().ref(`/user/${uid}`)

        setTimeout(async () => {
            await ref.set({
                uid: uid,
                email: email,
                displayName,
                status,
                imageUrl,
                phone,
            })
            ToastAndroid.showWithGravity(
                'Data Updated',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
        }, 4000)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageIcon}
                        source={require('../assets/draw.png')} 
                        />
                </View>
                <View style={styles.headerContainer}>
        <Text style={{ fontSize: 30 }}>Hi, {this.state,displayName}</Text>
        <Text style={{ fontSize: 17, color: '#262626' }}>
            Configure Your Profile
        </Text>
         </View>
         <View style={styles.formContainer}>
            <TextInput
                onChangeText={value => this.setState({ imageUrl: value })}
                style={styles.inputForm}
                placeholder="Profile Image URL"
                />
                 <TextInput
                onChangeText={value => this.setState({ phone: value })}
                style={styles.inputForm}
                placeholder="Phone Number"
                />
                 <TextInput
                onChangeText={value => this.setState({ status: value })}
                style={styles.inputFormBio}
                placeholder="Bio"
                multiline={true}
                />
         </View>
         <View style={styles.formButtonContainer}>
             <TouchableOpacity 
                style={styles.formSaveButton}
                onPress={this.profileHandler}>
                    <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center'}}>
                        Save
                    </Text>
                    
                </TouchableOpacity>
         </View>

            </View>
        )
    }
}

export default editProfile;

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    imageContainer: {
        width: 230,
        height: 150,
    },
    imageIcon: {
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        marginTop: 35,
        width: '100%',
        textAlign: 'left',
        // backgroundColor: 'red',
    },
    formContainer: {
        marginTop: 15,
        // backgroundColor: 'yellow',
        width: '100%',
    },
    inputForm: {
        height: 50,
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        fontSize: 17,
        // backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#B2B2B2',
    },inputFormBio: {
        height: 80,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 17,
        // backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#B2B2B2'
    },
    formButtonContainer: {
        // backgroundColor: 'aqua',
        width: '100%',
    },
     formSaveButton: {
         backgroundColor: '#5C93C4',
         padding: 10,
         marginVertical: 10,
         borderRadius: 10
     },
     signUpLinkContainer: {
         marginVertical: 10,
         width: '100%',
         flexDirection: 'row',
         justifyContent: 'space-between',
     },
     circleImageContainer: { width: 500, height: 210},
     cirleImage: {
         zIndex: -1,
         position: 'absolute',
         bottom: 5,
         width: 260,
         height: '100',
     },
     errorMessage: {
         marginTop: 10,
         width: '100%',
     },
     errorText: { 
         textAlign: 'center', color: 'red', fontSize: 16 },
    })