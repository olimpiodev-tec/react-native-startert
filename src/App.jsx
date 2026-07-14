import { View, Text, StyleSheet } from 'react-native';

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eaeaea"
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    }
})

export default function App() {

    return (
        <View style={styleApp.container}>

            <Text style={styleApp.title}>Hello World, React Native!</Text>

        </View>

    );
}
