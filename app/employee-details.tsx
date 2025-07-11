import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Check, MapPin, Calendar, Mail, Phone } from 'lucide-react-native';
import { useState } from 'react';
import { mockEmployees } from '@/utils/dummyData/employeeData';

export default function EmployeeDetailsScreen() {
    const router = useRouter();
    const { employeeId } = useLocalSearchParams<{ employeeId: string }>();
    const [isVerifying, setIsVerifying] = useState(false);

    const employee = mockEmployees[employeeId || ''] || mockEmployees['EMP001'];

    const handleVerify = async () => {
        setIsVerifying(true);

        // Simulate verification process
        setTimeout(() => {
            setIsVerifying(false);
            Alert.alert(
                'Verification Successful',
                `${employee.name} has been successfully verified for attendance.`,
                [
                    {
                        text: 'OK',
                        onPress: () => router.push('/(tabs)'),
                    },
                ]
            );
        }, 1500);
    };

    return (
        <LinearGradient
            colors={['#f8fafc', '#e2e8f0']}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <ArrowLeft size={24} color="#1f2937" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Employee Details</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.profileCard}>
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={{ uri: employee.profileImage }}
                            style={styles.profileImage}
                        />
                    </View>
                    <Text style={styles.employeeName}>{employee.name}</Text>
                    <Text style={styles.employeePosition}>{employee.position}</Text>
                    <View style={styles.teamBadge}>
                        <Text style={styles.teamBadgeText}>{employee.team}</Text>
                    </View>
                </View>

                <View style={styles.detailsSection}>
                    <Text style={styles.sectionTitle}>Employee Information</Text>

                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                            <Mail size={20} color="#6b7280" />
                        </View>
                        <View style={styles.detailContent}>
                            <Text style={styles.detailLabel}>Email</Text>
                            <Text style={styles.detailValue}>{employee.email}</Text>
                        </View>
                    </View>

                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                            <Phone size={20} color="#6b7280" />
                        </View>
                        <View style={styles.detailContent}>
                            <Text style={styles.detailLabel}>Phone</Text>
                            <Text style={styles.detailValue}>{employee.phone}</Text>
                        </View>
                    </View>

                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                            <MapPin size={20} color="#6b7280" />
                        </View>
                        <View style={styles.detailContent}>
                            <Text style={styles.detailLabel}>University</Text>
                            <Text style={styles.detailValue}>{employee.university}</Text>
                        </View>
                    </View>

                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                            <Calendar size={20} color="#6b7280" />
                        </View>
                        <View style={styles.detailContent}>
                            <Text style={styles.detailLabel}>Join Date</Text>
                            <Text style={styles.detailValue}>{new Date(employee.joinDate).toLocaleDateString()}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.statusSection}>
                    <Text style={styles.sectionTitle}>Project History</Text>
                    <View style={styles.statusCard}>
                        <View style={styles.statusIndicator} />
                        <Text style={styles.statusText}>Ongoing Project</Text>
                        <Text style={styles.detailValue}>{employee.ongoingProject}</Text>
                    </View>
                    <View style={styles.detailContent}>
                        <Text style={styles.detailLabel}>Finished Projects</Text>
                        <Text style={styles.detailValue}>{employee.university}</Text>
                        <Text style={styles.detailValue}>{employee.previousTeam}</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.verifyButton}
                    onPress={handleVerify}
                    activeOpacity={0.8}
                    disabled={isVerifying}
                >
                    <LinearGradient
                        colors={isVerifying ? ['#6b7280', '#4b5563'] : ['#10b981', '#047857']}
                        style={styles.verifyButtonGradient}
                    >
                        <Check size={24} color="#ffffff" />
                        <Text style={styles.verifyButtonText}>
                            {isVerifying ? 'Verifying...' : 'Verify Attendance'}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

// Styles remain the same
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 20,
    },
    backButton: {
        marginRight: 16,
        padding: 8,
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
    profileCard: {
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    employeeName: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    employeePosition: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        color: '#6b7280',
        marginBottom: 12,
    },
    teamBadge: {
        backgroundColor: '#dbeafe',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    teamBadgeText: {
        fontSize: 12,
        fontFamily: 'Inter-SemiBold',
        color: '#2563eb',
    },
    detailsSection: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
        marginBottom: 16,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    detailIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f9fafb',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    detailContent: {
        flex: 1,
    },
    detailLabel: {
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        color: '#6b7280',
        marginBottom: 2,
    },
    detailValue: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#1f2937',
    },
    statusSection: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    statusCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f0fdf4',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#bbf7d0',
    },
    statusIndicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#10b981',
        marginRight: 12,
    },
    statusText: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        color: '#059669',
    },
    footer: {
        paddingHorizontal: 24,
        paddingBottom: 40,
        paddingTop: 16,
    },
    verifyButton: {
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    verifyButtonGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 16,
        gap: 8,
    },
    verifyButtonText: {
        fontSize: 18,
        fontFamily: 'Inter-Bold',
        color: '#ffffff',
    },
});