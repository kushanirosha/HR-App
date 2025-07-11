import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChartBar as BarChart, TrendingUp, Download, Calendar } from 'lucide-react-native';

export default function ReportsScreen() {
    return (
        <LinearGradient
            colors={['#f8fafc', '#e2e8f0']}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Reports</Text>
                <TouchableOpacity style={styles.downloadButton}>
                    <Download size={20} color="#6b7280" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.metricsContainer}>
                    <View style={styles.metricCard}>
                        <TrendingUp size={24} color="#10b981" />
                        <Text style={styles.metricValue}>98.5%</Text>
                        <Text style={styles.metricLabel}>Attendance Rate</Text>
                    </View>
                    <View style={styles.metricCard}>
                        <Calendar size={24} color="#3b82f6" />
                        <Text style={styles.metricValue}>22</Text>
                        <Text style={styles.metricLabel}>Working Days</Text>
                    </View>
                </View>

                <View style={styles.chartCard}>
                    <View style={styles.chartHeader}>
                        <Text style={styles.chartTitle}>Monthly Attendance</Text>
                        <BarChart size={24} color="#6b7280" />
                    </View>
                    <View style={styles.chartPlaceholder}>
                        <Text style={styles.chartPlaceholderText}>Chart will be displayed here</Text>
                    </View>
                </View>

                <View style={styles.summaryCard}>
                    <Text style={styles.summaryTitle}>Summary</Text>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Total Employees</Text>
                        <Text style={styles.summaryValue}>234</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Present Today</Text>
                        <Text style={styles.summaryValue}>218</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Absent Today</Text>
                        <Text style={styles.summaryValue}>16</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Late Arrivals</Text>
                        <Text style={styles.summaryValue}>5</Text>
                    </View>
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
    downloadButton: {
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
    metricsContainer: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 24,
    },
    metricCard: {
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
    metricValue: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: '#1f2937',
        marginTop: 8,
    },
    metricLabel: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#6b7280',
        marginTop: 4,
    },
    chartCard: {
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
    chartHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    chartTitle: {
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
    },
    chartPlaceholder: {
        height: 200,
        backgroundColor: '#f9fafb',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e5e7eb',
        borderStyle: 'dashed',
    },
    chartPlaceholderText: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#6b7280',
    },
    summaryCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    summaryTitle: {
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
        marginBottom: 16,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    summaryLabel: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#6b7280',
    },
    summaryValue: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
    },
});