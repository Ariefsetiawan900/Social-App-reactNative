import React from "react"
import { View, text, StyleSheet} from "react-native"

export default class ChatScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ChatScreen screen dong</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})