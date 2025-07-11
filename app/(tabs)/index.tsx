import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Clock, Users, ChartBar as BarChart, Calendar, CircleCheck as CheckCircle, UserCheck, TrendingUp, Settings } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 3;

export default function DashboardScreen() {
    const router = useRouter();

    const dashboardCards = [
        {
            id: 'attendance',
            title: 'Attendance',
            icon: Clock,
            color: '#2563eb',
            gradient: ['#3b82f6', '#1d4ed8'],
            onPress: () => router.push('/attendance'),
        },
        {
            id: 'employees',
            title: 'Employees',
            icon: Users,
            color: '#059669',
            gradient: ['#10b981', '#047857'],
            onPress: () => router.push('/employees'),
        },
        {
            id: 'reports',
            title: 'Reports',
            icon: BarChart,
            color: '#dc2626',
            gradient: ['#ef4444', '#b91c1c'],
            onPress: () => router.push('/reports'),
        },
        {
            id: 'schedule',
            title: 'Schedule',
            icon: Calendar,
            color: '#7c3aed',
            gradient: ['#8b5cf6', '#6d28d9'],
            onPress: () => {},
        },
        {
            id: 'approvals',
            title: 'Approvals',
            icon: CheckCircle,
            color: '#ea580c',
            gradient: ['#f97316', '#c2410c'],
            onPress: () => {},
        },
        {
            id: 'verification',
            title: 'Verification',
            icon: UserCheck,
            color: '#0891b2',
            gradient: ['#06b6d4', '#0e7490'],
            onPress: () => {},
        },
        {
            id: 'analytics',
            title: 'Analytics',
            icon: TrendingUp,
            color: '#be123c',
            gradient: ['#e11d48', '#9f1239'],
            onPress: () => {},
        },
        {
            id: 'settings',
            title: 'Settings',
            icon: Settings,
            color: '#374151',
            gradient: ['#6b7280', '#374151'],
            onPress: () => router.push('/settings'),
        },
    ];

    const renderCard = (card: any) => (
        <TouchableOpacity
            key={card.id}
            style={[styles.card, { width: cardWidth }]}
            onPress={card.onPress}
            activeOpacity={0.8}
        >
            <LinearGradient
                colors={card.gradient}
                style={styles.cardGradient}
            >
                <View style={styles.cardContent}>
                    <card.icon size={32} color="#ffffff" />
                    <Text style={styles.cardTitle}>{card.title}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <LinearGradient
            colors={['#f8fafc', '#e2e8f0']}
            style={styles.container}
        >

                <View style={styles.header}>
                    <Text style={styles.welcomeText}>Welcome back!</Text>
                    <Text style={styles.headerTitle}>Dashboard</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>234</Text>
                        <Text style={styles.statLabel}>Total Employees</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>98%</Text>
                        <Text style={styles.statLabel}>Attendance Rate</Text>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.cardsContainer}>
                    {dashboardCards.map(renderCard)}
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 20,
    },
    welcomeText: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#6b7280',
        marginBottom: 4,
    },
    headerTitle: {
        fontSize: 32,
        fontFamily: 'Inter-Bold',
        color: '#1f2937',
    },
    statsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginBottom: 24,
        gap: 16,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    statNumber: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: '#2563eb',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#6b7280',
    },
    sectionHeader: {
        paddingHorizontal: 24,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 24,
        gap: 16,
        paddingBottom: 100,
    },
    card: {
        height: 120,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    cardGradient: {
        flex: 1,
        borderRadius: 16,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 14,
        fontFamily: 'Inter-SemiBold',
        color: '#ffffff',
        marginTop: 8,
        textAlign: 'center',
    },
});