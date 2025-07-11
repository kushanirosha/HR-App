import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withSequence, withDelay } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
    const router = useRouter();
    const logoScale = useSharedValue(0);
    const textOpacity = useSharedValue(0);

    useEffect(() => {
        // Animate logo entrance
        logoScale.value = withSpring(1, { damping: 8, stiffness: 100 });

        // Animate text after logo
        textOpacity.value = withDelay(500, withSpring(1));

        // Navigate to dashboard after animation
        const timer = setTimeout(() => {
            router.replace('/(tabs)');
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const logoAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: logoScale.value }],
    }));

    const textAnimatedStyle = useAnimatedStyle(() => ({
        opacity: textOpacity.value,
    }));

    return (
        <LinearGradient
            colors={['#1e3a8a', '#3b82f6', '#60a5fa']}
            style={styles.container}
        >
            <View style={styles.content}>
                <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
                    <View style={styles.logoBackground}>
                        <Text style={styles.logoText}>CORP</Text>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.textContainer, textAnimatedStyle]}>
                    <Text style={styles.companyName}>TechCorp Solutions</Text>
                    <Text style={styles.tagline}>Employee Management System</Text>
                </Animated.View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logoContainer: {
        marginBottom: 40,
    },
    logoBackground: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    logoText: {
        fontSize: 28,
        fontFamily: 'Inter-Bold',
        color: '#ffffff',
        letterSpacing: 2,
    },
    textContainer: {
        alignItems: 'center',
    },
    companyName: {
        fontSize: 32,
        fontFamily: 'Inter-Bold',
        color: '#ffffff',
        marginBottom: 8,
        textAlign: 'center',
    },
    tagline: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
    },
});