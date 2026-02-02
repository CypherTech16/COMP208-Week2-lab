// Kushal Patel - Detail Screen
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useState} from 'react';

export default function DetailScreen() {
    const [name, setName] = useState<string>('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Get a Personalized Message</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Your Name"
                value={name}
                onChangeText={setName}
            />
            {name.length > 0 && (
                <Text style={styles.message}>
                    Hello {name} Welcome To Cypher's App !!
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    input: {
        borderWidth:3,
        borderColor: '#ffffff',
        padding: 10,
        borderRadius: 6,
        marginBottom: 12,
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
    },
})