// Kushal Patel - Home Screen
import {View, Text, Button, Image, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
    const [previous, setPrevious] = useState<number>(0);
    const [current, setCurrent] = useState<number>(1);
    const nextFibonacciNum = () => {
        const next = previous + current;
        setPrevious(current);
        setCurrent(next);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fibonacci Generator</Text>
            <Image
                source={{uri: 'https://i.pinimg.com/736x/3d/3a/04/3d3a048009ecda5e251dda7bc6fb20bf.jpg'}}
                style={styles.image}
            />
            <Text style={styles.number}>
                Current Fibonacci Number
            </Text>
            <Text style={styles.fibNum}>{current}</Text>
            <Button title="Next Fibonacci Number" onPress={nextFibonacciNum} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 14,
    },
    number: {
        fontSize: 18,
        marginBottom: 6,
    },
    fibNum: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 14,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 12,
    },
});


