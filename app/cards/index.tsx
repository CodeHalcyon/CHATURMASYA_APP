import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useRouter} from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";

export default function CardListScreen() {
    const router = useRouter();

    const cards = [
        {
            id: '1',
            title: 'Day One',
            date: "20th July, 2025",
            day: "Sunday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '2',
            title: 'Day Two',
            date: "21st July, 2025",
            day: "Monday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '3',
            title: 'Day Three',
            date: "22nd July, 2025",
            day: "Tuesday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '4',
            title: 'Day Four',
            date: "23rd July, 2025",
            day: "Wednesday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '5',
            title: 'Day Five',
            date: "24th July, 2025",
            day: "Thursday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '6',
            title: 'Day Six',
            date: "25th July, 2025",
            day: "Friday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '7',
            title: 'Day Seven',
            date: "26th July, 2025",
            day: "Saturday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '8',
            title: 'Day Eight',
            date: "27th July, 2025",
            day: "Sunday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '9',
            title: 'Day Nine',
            date: "28th July, 2025",
            day: "Monday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '10',
            title: 'Day Ten',
            date: "29th July, 2025",
            day: "Tuesday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '11',
            title: 'Day Eleven',
            date: "30th July, 2025",
            day: "Wednesday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '12',
            title: 'Day Twelve',
            date: "31st July, 2025",
            day: "Thursday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '13',
            title: 'Day Thirteen',
            date: "1st August, 2025",
            day: "Friday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '14',
            title: 'Day Fourteen',
            date: "2nd August, 2025",
            day: "Saturday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '15',
            title: 'Day Fifteen',
            date: "3rd August, 2025",
            day: "Sunday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '16',
            title: 'Day Sixteen',
            date: "4th August, 2025",
            day: "Monday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '17',
            title: 'Day Seventeen',
            date: "5th August, 2025",
            day: "Tuesday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '18',
            title: 'Day Eighteen',
            date: "6th August, 2025",
            day: "Wednesday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '19',
            title: 'Day Nineteen',
            date: "7th August, 2025",
            day: "Thursday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '20',
            title: 'Day Twenty',
            date: "8th August, 2025",
            day: "Friday",
            occassion: "Mudra Dharana",
            alankara: "Gandhad alankaara",
            guest: "Hari acharya"
        },
        {
            id: '21',
            title: 'Day Twenty-One',
            date: '9th August, 2025',
            day: 'Saturday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '22',
            title: 'Day Twenty-Two',
            date: '10th August, 2025',
            day: 'Sunday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '23',
            title: 'Day Twenty-Three',
            date: '11th August, 2025',
            day: 'Monday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '24',
            title: 'Day Twenty-Four',
            date: '12th August, 2025',
            day: 'Tuesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '25',
            title: 'Day Twenty-Five',
            date: '13th August, 2025',
            day: 'Wednesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '26',
            title: 'Day Twenty-Six',
            date: '14th August, 2025',
            day: 'Thursday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '27',
            title: 'Day Twenty-Seven',
            date: '15th August, 2025',
            day: 'Friday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '28',
            title: 'Day Twenty-Eight',
            date: '16th August, 2025',
            day: 'Saturday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '29',
            title: 'Day Twenty-Nine',
            date: '17th August, 2025',
            day: 'Sunday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '30',
            title: 'Day Thirty',
            date: '18th August, 2025',
            day: 'Monday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '31',
            title: 'Day Thirty-One',
            date: '19th August, 2025',
            day: 'Tuesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '32',
            title: 'Day Thirty-Two',
            date: '20th August, 2025',
            day: 'Wednesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '33',
            title: 'Day Thirty-Three',
            date: '21st August, 2025',
            day: 'Thursday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '34',
            title: 'Day Thirty-Four',
            date: '22nd August, 2025',
            day: 'Friday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '35',
            title: 'Day Thirty-Five',
            date: '23rd August, 2025',
            day: 'Saturday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '36',
            title: 'Day Thirty-Six',
            date: '24th August, 2025',
            day: 'Sunday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '37',
            title: 'Day Thirty-Seven',
            date: '25th August, 2025',
            day: 'Monday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '38',
            title: 'Day Thirty-Eight',
            date: '26th August, 2025',
            day: 'Tuesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '39',
            title: 'Day Thirty-Nine',
            date: '27th August, 2025',
            day: 'Wednesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '40',
            title: 'Day Forty',
            date: '28th August, 2025',
            day: 'Thursday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '41',
            title: 'Day Forty-One',
            date: '29th August, 2025',
            day: 'Friday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '42',
            title: 'Day Forty-Two',
            date: '30th August, 2025',
            day: 'Saturday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '43',
            title: 'Day Forty-Three',
            date: '31st August, 2025',
            day: 'Sunday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '44',
            title: 'Day Forty-Four',
            date: '1st September, 2025',
            day: 'Monday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '45',
            title: 'Day Forty-Five',
            date: '2nd September, 2025',
            day: 'Tuesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '46',
            title: 'Day Forty-Six',
            date: '3rd September, 2025',
            day: 'Wednesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '47',
            title: 'Day Forty-Seven',
            date: '4th September, 2025',
            day: 'Thursday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '48',
            title: 'Day Forty-Eight',
            date: '5th September, 2025',
            day: 'Friday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '49',
            title: 'Day Forty-Nine',
            date: '6th September, 2025',
            day: 'Saturday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '50',
            title: 'Day Fifty',
            date: '7th September, 2025',
            day: 'Sunday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '51',
            title: 'Day Fifty-One',
            date: '8th September, 2025',
            day: 'Monday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        },
        {
            id: '52',
            title: 'Day Fifty-Two',
            date: '9th September, 2025',
            day: 'Tuesday',
            occassion: 'Mudra Dharana',
            alankara: 'Gandhad alankaara',
            guest: 'Hari acharya'
        }
    ];


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#1e1b18'}}>
            <View style={{paddingHorizontal: 20, paddingTop: 20, flex: 1}}>
                <Text style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    color: '#f5f5dc',
                    marginBottom: 20,
                }}>
                    Hindu Calendar - 52 Days
                </Text>

                <FlatList
                    data={cards}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 80}} // ← 🚨 IMPORTANT
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => router.push(`/cards/${item.id}`)}
                            style={{
                                backgroundColor: '#f5f5dc',
                                borderRadius: 12,
                                padding: 18,
                                marginBottom: 16,
                                shadowColor: '#000',
                                shadowOffset: {width: 0, height: 3},
                                shadowOpacity: 0.2,
                                shadowRadius: 6,
                                elevation: 4,
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: '600',
                                color: '#1e1b18',
                                marginBottom: 6,
                            }}>
                                {item.title}
                            </Text>

                            <Text style={{
                                fontSize: 14,
                                color: '#3b3b3b',
                            }}>
                                {item.date} • {item.day}
                            </Text>

                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

