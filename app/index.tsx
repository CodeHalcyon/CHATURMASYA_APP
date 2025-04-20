import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable, StyleSheet, Image, Linking, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import image from './image.png';      // Calendar image
import donation from './donation.jpg'; // UPI QR image

export default function HomeScreen() {
    const router = useRouter();

    const handleContactPress = () => {
        Linking.openURL('tel:+919849191837');
    };

    const handleUPIPayment = () => {
        Linking.openURL('upi://pay?pa=temple@upi&pn=Temple%20Donations&cu=INR');
    };

    const handleOpenMaps = () => {
        Linking.openURL('https://maps.app.goo.gl/3dDYvRMdJqjc4rv2A');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.heading}>🕉 CHATURMASYA 2025</Text>

                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="contain"
                />

                <View style={styles.card}>
                    {/* Calendar Button */}
                    <Pressable
                        onPress={() => router.push('/cards')}
                        style={({ pressed }) => [
                            styles.button,
                            { backgroundColor: pressed ? '#a58c5f' : '#c5aa6a' },
                        ]}
                    >
                        <Text style={styles.buttonText}>OPEN CALENDAR</Text>
                    </Pressable>

                    {/* Contact */}
                    <Pressable onPress={handleContactPress}>
                        <Text style={styles.contact}>📞 Contact Us: +91 98491918374</Text>
                    </Pressable>

                    {/* Donation Section */}
                    <View style={{ marginTop: 30, alignItems: 'center'}}>
                        <Pressable onPress={handleUPIPayment}>
                            <Image
                                source={donation}
                                style={styles.donationImage}
                                resizeMode="contain"

                            />
                        </Pressable>
                    </View>

                    {/* Location Section */}
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationHeading}>📍 Visit Us</Text>
                        <Pressable onPress={handleOpenMaps}>
                            <Text style={styles.locationLink}>Tap to open in Google Maps</Text>
                        </Pressable>
                    </View>
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
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    contact: {
        color: '#1e1b18',
        fontSize: 14,
        marginTop: 10,
    },
    donationImage: {
        width: 180,
        height: 180,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#1e1b18',
        marginTop: 10,
        padding: 10
    },
    tapToPay: {
        color: '#1e1b18',
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center',
    },
    locationContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    locationHeading: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1e1b18',
        marginBottom: 8,
    },
    locationLink: {
        color: '#3b82f6',
        fontSize: 14,
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});
