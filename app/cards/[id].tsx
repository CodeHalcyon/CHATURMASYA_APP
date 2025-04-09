import { useLocalSearchParams } from 'expo-router';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { events } from './events.ts'; // ✅ make sure this path is correct!

export default function CardDetailScreen() {
    const { id } = useLocalSearchParams();
    const event = events.find((e) => e.id === id);

    if (!event) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.notFoundText}>Event not found 😞</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>📿 {event.title} - {event.day}</Text>
                <Text style={styles.date}>🗓️ {event.date}</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>✨ Occasion:</Text>
                    <Text style={styles.value}>{event.occassion}</Text>

                    <Text style={styles.label}>🌺 Alankara:</Text>
                    <Text style={styles.value}>{event.alankara}</Text>

                    <Text style={styles.label}>🧘‍♂️ Chief Guest:</Text>
                    <Text style={styles.value}>{event.guest}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        paddingHorizontal: 16,
    },
    scrollContent: {
        paddingVertical: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#facc15', // yellow-400
        textAlign: 'center',
        marginTop: 8,
    },
    date: {
        color: '#e5e5e5',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 4,
    },
    card: {
        marginTop: 24,
        backgroundColor: '#2a2a2a',
        borderRadius: 16,
        padding: 16,
        borderColor: '#ca8a04', // yellow-700
        borderWidth: 1,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fde68a', // yellow-300
        marginBottom: 4,
    },
    value: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 12,
    },
    notFoundText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
});
