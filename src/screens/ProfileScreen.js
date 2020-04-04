import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid, TextInput, Image } from "react-native"
import * as  firebase from "firebase"



export default class ProfileScreen extends React.Component {
    state = {
        displayName: "",
        status: "",
        email: ""
    }

    componentDidMount() {
        const { displayName } = firebase.auth().currentUser;
        this.setState({displayName : displayName})
        this.getUserData()
        console.log('imgku', this.state.imageUrl)
        console.log('emaillo', this.state.eamil);
        
        
    }
    signOutUser = () => {
        firebase
        .auth()
        .signOut().then(() => {
            this.props.navigation.navigate('LoginScreen')
        })     
    }
    getUserData = () => {
        const uid = firebase.auth().currentUser.uid;
        let ref = firebase.database().ref(`/user/${uid}`);
        ref.on('value', snapshot => {
            this.setState({ imageUrl: snapshot.val() != null || '' ? snapshot.val().imageUrl: ''})
        })
    }

    editHandler = () => {
        this.props.navigation.navigate('editProfile')
    }
    // profileHandler = async () => {
    //     const { displayName, status} = this.state;
    //     const uid = firebase.auth().currentUser.uid;
    //     const email = firebase.auth().currentUser.email;
    //     const ref = firebase.database().ref(`/user/${uid}`);

        // setTimeout(async () => {
        //     await ref.set({
        //         uid: uid,
        //         email: email,
        //         displayName,
        //         status,
        //     })
    //         ToastAndroid.showWithGravity(
    //             'Data Updated',
    //             ToastAndroid.SHORT,
    //             ToastAndroid.CENTER
    //         )
    //     }, 3000)
    // }

    render() {
        // LayoutAnimation.easeInEaseOut()
        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                <Image style={styles.circle} source={{ uri: this.state.imageUrl}} />
                    {/* <Text onPress={this.editHandler}>Edit Profile </Text>
                    <Text onPress={this.signOutUser}>Logout </Text> */}
                </View>
                <View style={styles.containerBottom}>
                    <Text style={styles.textTop}>Hi, {this.state.displayName}</Text>
                    <View style={styles.textBottom}>
                    <Text onPress={this.editHandler} >Edit Profile  | </Text>
                    <Text onPress={this.signOutUser} >Logout </Text>
                    </View>
                    
                    {/* <TextInput
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
                </TouchableOpacity> */}
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
        backgroundColor: "#0e76a8"
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
        top: 70
    },
    circle: {
        backgroundColor: 'red',
        width: 160,
        height: 160,
        borderRadius: 100,
        top: -30,
        alignSelf: 'center'
    },
    textTop: {
        top: -20,
        fontSize: 30
    },
    textBottom: {
        display: "flex",
        flexDirection: 'row',
        
    },
    saveButton: {
        marginTop: 10,
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 15,
        padding: 15,
    },
})
