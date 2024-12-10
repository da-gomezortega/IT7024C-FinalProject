import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TouchableOpacity, Keyboard, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles';
// import map from '../app/map';

export function NavButtons() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Function to check screen width and update the screen size state
    const checkScreenSize = () => {
        const { width } = Dimensions.get('window');
        setIsSmallScreen(width < 768); // Set the breakpoint for mobile screen size
    };

    // Set up listener for screen size changes
    useEffect(() => {
        checkScreenSize(); // Initial check
        Dimensions.addEventListener('change', checkScreenSize); // Listen for screen resize events
    }, []);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.navbar}>
            {/* Navigation Links */}
            <View style={[!isSmallScreen && { display: "contents" }, isOpen && styles.activeMenu, isSmallScreen && !isOpen && styles.hiddenMenu]}>
                <Pressable onPress={() => Keyboard.dismiss()}>
                    <Link href="/" style={styles.navLink}>
                        <Text style={styles.navLink}>Home</Text>
                    </Link>
                </Pressable>
                <Pressable onPress={() => Keyboard.dismiss()}>
                    <Link href="/team" style={styles.navLink}>
                        <Text style={styles.navLink}>Team</Text>
                    </Link>
                </Pressable>
                <Pressable onPress={() => Keyboard.dismiss()}>
                    <Link href="/map" style={styles.navLink}>
                        <Text style={styles.navLink}>Map</Text>
                    </Link>
                </Pressable>
                <Pressable onPress={() => Keyboard.dismiss()}>
                    <Link href="/portfolio" style={styles.navLink}>
                        <Text style={styles.navLink}>Portfolio</Text>
                    </Link>
                </Pressable>
            </View>

            {isSmallScreen && (
                <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
                    <Text style={styles.hamburgerText}>&#9776;</Text>
                </TouchableOpacity>
            )}
        </View>

    );
}

export default NavButtons;