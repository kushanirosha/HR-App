import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, User, Bell, Shield, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function SettingsScreen() {
    const settingsItems = [
        {
            icon: User,
            title: 'Profile',
            description: 'Manage your profile information',
            onPress: () => {},
        },
        {
            icon: Bell,
            title: 'Notifications',
            description: 'Configure notification preferences',
            onPress: () => {},
        },
        {
            icon: Shield,
            title: 'Security',
            description: 'Password and security settings',
            onPress: () => {},
        },
        {
            icon: HelpCircle,
            title: 'Help & Support',
            description: 'Get help and contact support',
            onPress: () => {},
        },
        {
            icon: LogOut,
            title: 'Logout',
            description: 'Sign out of your account',
            onPress: () => {},
        },
    ];

    return (
        <LinearGradient
            colors={['#f8fafc', '#e2e8f0']}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.profileSection}>
                    <View style={styles.profileCard}>
                        <View style={styles.profileAvatar}>
                            <Text style={styles.profileInitial}>A</Text>
                        </View>
                        <Text style={styles.profileName}>Admin User</Text>
                        <Text style={styles.profileRole}>System Administrator</Text>
                    </View>
                </View>

                <View style={styles.settingsSection}>
                    {settingsItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.settingsItem}
                            onPress={item.onPress}
                            activeOpacity={0.7}
                        >
                            <View style={styles.settingsIcon}>
                                <item.icon size={20} color="#6b7280" />
                            </View>
                            <View style={styles.settingsContent}>
                                <Text style={styles.settingsTitle}>{item.title}</Text>
                                <Text style={styles.settingsDescription}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.versionSection}>
                    <Text style={styles.versionText}>Version 1.0.0</Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: '#1f2937',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    profileSection: {
        marginBottom: 24,
    },
    profileCard: {
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    profileAvatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#2563eb',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    profileInitial: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: '#ffffff',
    },
    profileName: {
        fontSize: 20,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
        marginBottom: 4,
    },
    profileRole: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: '#6b7280',
    },
    settingsSection: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 24,
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    settingsIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f9fafb',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    settingsContent: {
        flex: 1,
    },
    settingsTitle: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
        marginBottom: 2,
    },
    settingsDescription: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: '#6b7280',
    },
    versionSection: {
        alignItems: 'center',
        paddingBottom: 100,
    },
    versionText: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#9ca3af',
    },
});