import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Users, Search, Filter, ArrowLeft } from 'lucide-react-native';
import { mockEmployees } from '@/utils/dummyData/employeeData';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const employees = Object.values(mockEmployees).map(employee => ({
    id: employee.employeeId,
    name: employee.name,
    position: employee.position,
    team: employee.team,
    profileImage: employee.profileImage,
    status: employee.status,
}));

export default function EmployeesScreen() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    // Filter employees based on search query
    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.team.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setSearchQuery(''); // Clear search query when toggling
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
                    accessibilityLabel="Go back"
                >
                    <ArrowLeft size={24} color="#1f2937" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Employees</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={toggleSearch}
                        accessibilityLabel="Toggle search"
                    >
                        <Search size={20} color="#6b7280" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => {
                            // Placeholder for filter functionality
                            alert('Filter functionality to be implemented');
                        }}
                        accessibilityLabel="Open filter"
                    >
                        <Filter size={20} color="#6b7280" />
                    </TouchableOpacity>
                </View>
            </View>

            {showSearch && (
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search by name, position, or team"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholderTextColor="#9ca3af"
                        autoCapitalize="none"
                        accessibilityLabel="Search employees"
                    />
                </View>
            )}

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.statsCard}>
                    <View style={styles.statItem}>
                        <Users size={24} color="#2563eb" />
                        <Text style={styles.statNumber}>{filteredEmployees.length}</Text>
                        <Text style={styles.statLabel}>Total Employees</Text>
                    </View>
                </View>

                <View style={styles.employeesList}>
                    {filteredEmployees.length === 0 ? (
                        <Text style={styles.noResultsText}>No employees found</Text>
                    ) : (
                        filteredEmployees.map((employee) => (
                            <TouchableOpacity
                                key={employee.id}
                                style={styles.employeeCard}
                                onPress={() => router.push(`/employee-details?employeeId=${employee.id}`)}
                                accessibilityLabel={`View details for ${employee.name}`}
                            >
                                <Image
                                    source={{ uri: employee.profileImage }}
                                    style={styles.employeeImage}
                                    accessibilityLabel={`Profile image of ${employee.name}`}
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
                        ))
                    )}
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
    backButton: {
        marginRight: 16,
        padding: 8,
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
    searchContainer: {
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
    searchInput: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 12,
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#1f2937',
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
        backgroundColor: '#50ec7c',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 12,
        fontFamily: 'Inter-SemiBold',
        color: '#ffffff',
    },
    noResultsText: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#6b7280',
        textAlign: 'center',
        marginTop: 20,
    },
});