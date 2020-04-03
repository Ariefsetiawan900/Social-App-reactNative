import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid, TextInput } from "react-native"
import * as  firebase from "firebase"


export default class ProfileScreen extends React.Component {
    state = {
        displayName: "",
        status: "",
    }

    componentDidMount() {
        const { displayName } = firebase.auth().currentUser;
        this.setState({displayName})
    }
    signOutUser = () => {
        firebase.auth().signOut();
            this.props.navigation.navigate('LoginScreen')
    }

    // editHandler = () => {
    //     this.props.navigation.navigate('editProfile')
    // }
    profileHandler = async () => {
        const { displayName, status} = this.state;
        const uid = firebase.auth().currentUser.uid;
        const email = firebase.auth().currentUser.email;
        const ref = firebase.database().ref(`/user/${uid}`);

        setTimeout(async () => {
            await ref.set({
                uid: uid,
                email: email,
                displayName,
                status,
            })
            ToastAndroid.showWithGravity(
                'Data Updated',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
        }, 3000)
    }

    render() {
        // LayoutAnimation.easeInEaseOut()
        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    {/* <Text onPress={this.editHandler}>Edit Profile </Text>
                    <Text onPress={this.signOutUser}>Logout </Text> */}
                </View>
                <View style={styles.containerBottom}>
                    <View style={styles.circle} />
                    <Text>Hi, {this.state.displayName}</Text>
                    <TextInput
                        value={this.state.status}
                        onChangeText={value => this.setState({status: value})}
                        style={styles.formInput}
                        placeholder="Status"
                    />
                    <TouchableOpacity
                        onPress={this.profileHandler}
                        style={styles.saveButton}>
                            <Text style={{ color:'#fff', fontSize: 20, textAlign: 'center'}}>
                                Save
                            </Text>
                        </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"
    },
    containerHeader: {
        padding: 40,
        height: '20%',
        width: '100%',
    },
    containerBottom: {
        padding: 40,
        width: '100%',
        height: '80%',
        flexDirection: 'column',
        // alignItems: 'center',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        backgroundColor: 'red',
        width: 160,
        height: 160,
        borderRadius: 100,
        top: -120,
    },
    saveButton: {
        marginTop: 10,
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 15,
        padding: 15,
    },
})
