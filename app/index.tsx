import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable, StyleSheet, Image, Linking, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import image from './image.png'; // use the correct path

export default function HomeScreen() {
    const router = useRouter();

    const handleContactPress = () => {
        Linking.openURL('tel:+919848655234'); // replace this
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            {/* NOW WRAPPED IN SCROLLVIEW */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.heading}>🕉 CHATURMASYA 2025</Text>

                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="contain"
                />

                <View style={styles.card}>
                    <Pressable
                        onPress={() => router.push('/cards')}
                        style={({ pressed }) => [
                            styles.button,
                            { backgroundColor: pressed ? '#a58c5f' : '#c5aa6a' },
                        ]}
                    >
                        <Text style={styles.buttonText}>OPEN CALENDAR</Text>
                    </Pressable>

                    <Pressable onPress={handleContactPress}>
                        <Text style={styles.contact}>📞 Contact Us:+91 9848655234 </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1b18',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 60,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f5f5dc',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 12,
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#f5f5dc',
        padding: 30,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
        alignItems: 'center',
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
        marginBottom: 20,
    },
    buttonText: {
        color: '#1e1b18',
        fontSize: 20,
        fontWeight: '600',
        backgroundColor: '#c5aa6a',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        textAlign: 'center',
    },
    contact: {
        color: '#1e1b18',
        fontSize: 14,
        marginTop: 30,
    },
    footer: {
        textAlign: 'center',
        color: '#a1a1aa',
        marginTop: 40,
        fontSize: 12,
    },
});
