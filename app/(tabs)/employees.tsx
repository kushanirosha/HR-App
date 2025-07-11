import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Users, Search, Filter } from 'lucide-react-native';
import { mockEmployees } from '@/utils/dummyData/employeeData'; // Import mockEmployees
import { useRouter } from 'expo-router';

const employees = Object.values(mockEmployees).map(employee => ({
    id: employee.employeeId,
    name: employee.name,
    position: employee.position,
    team: employee.team,
    profileImage: employee.profileImage,
    status: 'Active',
}));

export default function EmployeesScreen() {
    const router = useRouter();
    // @ts-ignore
    return (
        <LinearGradient
            colors={['#f8fafc', '#e2e8f0']}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Employees</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Search size={20} color="#6b7280" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Filter size={20} color="#6b7280" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.statsCard}>
                    <View style={styles.statItem}>
                        <Users size={24} color="#2563eb" />
                        <Text style={styles.statNumber}>{employees.length}</Text>
                        <Text style={styles.statLabel}>Total Employees</Text>
                    </View>
                </View>

                <View style={styles.employeesList}>
                    {employees.map((employee) => (
                        <TouchableOpacity
                            key={employee.id}
                            style={styles.employeeCard}
                            onPress={() => router.push(`/employeeDetails?employeeId=${employee.id}`)}
                        >
                            <Image
                                source={{ uri: employee.profileImage }}
                                style={styles.employeeImage}
                            />
                            <View style={styles.employeeInfo}>
                                <Text style={styles.employeeName}>{employee.name}</Text>
                                <Text style={styles.employeePosition}>{employee.position}</Text>
                                <Text style={styles.employeeTeam}>{employee.team}</Text>
                            </View>
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>{employee.status}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: '#1f2937',
    },
    headerActions: {
        flexDirection: 'row',
        gap: 8,
    },
    actionButton: {
        padding: 8,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    statsCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 32,
        fontFamily: 'Inter-Bold',
        color: '#2563eb',
        marginTop: 8,
    },
    statLabel: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#6b7280',
        marginTop: 4,
    },
    employeesList: {
        paddingBottom: 100,
    },
    employeeCard: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    employeeImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    employeeInfo: {
        flex: 1,
    },
    employeeName: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
        marginBottom: 4,
    },
    employeePosition: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#6b7280',
        marginBottom: 2,
    },
    employeeTeam: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#9ca3af',
    },
    statusBadge: {
        backgroundColor: '#dcfce7',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 12,
        fontFamily: 'Inter-SemiBold',
        color: '#15803d',
    },
});