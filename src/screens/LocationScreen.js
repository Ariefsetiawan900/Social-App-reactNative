import React from "react"
import { View, text, StyleSheet} from "react-native"

export default class LocationScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LocationScreen screen dong</Text>
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