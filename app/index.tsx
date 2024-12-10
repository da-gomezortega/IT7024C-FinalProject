import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Home() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
            {/* Responsive Container */}
            <View style={styles.container}>
                {/* About Us Section */}
                <View style={styles.aboutSection}>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading1}>About Us</Text>
                        <Text style={styles.text}>
                            We are a dynamic group of students passionate about transforming ideas into innovative software solutions. With a diverse range of skills in programming languages and technologies, we work collaboratively to create high-quality digital projects that showcase our creativity and technical expertise.
                        </Text>
                    </View>
                </View>

                {/* Meet the Team Section */}
                <View style={styles.teamSection}>
                    <Image
                        source={require('../assets/images/team-section.jpeg')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={styles.teamTextContainer}>
                        <Text style={styles.heading1}>Meet the Team</Text>
                        <TouchableOpacity>
                            <Link href="/team" style={styles.button}>
                                Our Profiles
                            </Link>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Where We Are From Section */}
                <View style={styles.whereSection}>
                    <Text style={styles.quote}>
                        "One team, many continents---building the future from every corner of the world!"
                    </Text>
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <Link href="/map" style={styles.button}>
                                See Our Map
                            </Link>
                        </TouchableOpacity>
                        <Image
                            source={require('../assets/images/where-we-are-from.jpeg')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                {/* Portfolio Section */}
                <ImageBackground
                    source={require('../assets/images/porfolio.jpeg')}
                    imageStyle={styles.imageBackground}
                    style={styles.portfolioSection}
                >
                    <View style={styles.portfolioTextContainer}>
                        <Text style={styles.heading1}>Portfolio</Text>
                        <TouchableOpacity>
                            <Link href="/portfolio" style={styles.button}>
                                Check Our Work
                            </Link>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 1200,
        alignSelf: 'center',
        padding: 16,
    },
    aboutSection: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    textContainer: {
        paddingHorizontal: 20,
        width: '100%',
    },
    heading1: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        color: '#333',
    },
    teamSection: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: width * 0.4,
        height: 150,
        borderRadius: 10,
    },
    teamTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        color: '#fff',
        textAlign: 'center',
    },
    whereSection: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#e9ecef',
        borderRadius: 10,
    },
    quote: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    portfolioSection: {
        width: '100%',
        marginTop: 20,
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    imageBackground: {
        borderRadius: 10,
        height: 'auto',
    },
    portfolioTextContainer: {
        alignItems: 'center',
        padding: 48,
    },
});
