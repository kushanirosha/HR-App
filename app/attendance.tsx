import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, QrCode, User, Search } from 'lucide-react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

const { width, height } = Dimensions.get('window');

export default function AttendanceScreen() {
    const router = useRouter();
    const [employeeId, setEmployeeId] = useState('');
    const [showCamera, setShowCamera] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();

    const handleScanBarcode = async () => {
        if (!permission) {
            return;
        }

        if (!permission.granted) {
            const result = await requestPermission();
            if (!result.granted) {
                Alert.alert('Permission Required', 'Camera permission is required to scan barcodes.');
                return;
            }
        }

        setShowCamera(true);
    };

    const handleBarcodeScanned = (data: string) => {
        setEmployeeId(data);
        setShowCamera(false);
    };

    const handleGo = () => {
        if (!employeeId.trim()) {
            Alert.alert('Error', 'Please enter an employee ID or scan a barcode.');
            return;
        }

        // Navigate to employee details with the ID
        router.push({
            pathname: '/employee-details',
            params: { employeeId: employeeId.trim() }
        });
    };

    if (showCamera) {
        return (
            <View style={styles.cameraContainer}>
                <CameraView
                    style={styles.camera}
                    facing="back"
                    onBarcodeScanned={({ data }) => handleBarcodeScanned(data)}
                >
                    <View style={styles.cameraOverlay}>
                        <View style={styles.scanArea}>
                            <View style={styles.scanCorner} />
                            <View style={[styles.scanCorner, styles.scanCornerTopRight]} />
                            <View style={[styles.scanCorner, styles.scanCornerBottomLeft]} />
                            <View style={[styles.scanCorner, styles.scanCornerBottomRight]} />
                        </View>
                        <Text style={styles.scanText}>Position the barcode within the frame</Text>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setShowCamera(false)}
                        >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </CameraView>
            </View>
        );
    }

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
                <Text style={styles.headerTitle}>Attendance</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.instructionCard}>
                    <User size={48} color="#2563eb" />
                    <Text style={styles.instructionTitle}>Employee Verification</Text>
                    <Text style={styles.instructionText}>
                        Enter the employee ID manually or scan the barcode from their ID card
                    </Text>
                </View>

                <View style={styles.inputSection}>
                    <Text style={styles.inputLabel}>Employee ID</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter employee ID"
                            value={employeeId}
                            onChangeText={setEmployeeId}
                            placeholderTextColor="#9ca3af"
                            autoCapitalize="characters"
                        />
                    </View>
                </View>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.dividerLine} />
                </View>

                <TouchableOpacity
                    style={styles.scanButton}
                    onPress={handleScanBarcode}
                    activeOpacity={0.8}
                >
                    <LinearGradient
                        colors={['#3b82f6', '#1d4ed8']}
                        style={styles.scanButtonGradient}
                    >
                        <QrCode size={24} color="#ffffff" />
                        <Text style={styles.scanButtonText}>Scan Barcode</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.goButton, !employeeId.trim() && styles.goButtonDisabled]}
                    onPress={handleGo}
                    activeOpacity={0.8}
                    disabled={!employeeId.trim()}
                >
                    <LinearGradient
                        colors={employeeId.trim() ? ['#10b981', '#047857'] : ['#9ca3af', '#6b7280']}
                        style={styles.goButtonGradient}
                    >
                        <Search size={24} color="#ffffff" />
                        <Text style={styles.goButtonText}>GO</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

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
    instructionCard: {
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    instructionTitle: {
        fontSize: 20,
        fontFamily: 'Inter-SemiBold',
        color: '#1f2937',
        marginTop: 16,
        marginBottom: 8,
    },
    instructionText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: '#6b7280',
        textAlign: 'center',
        lineHeight: 20,
    },
    inputSection: {
        marginBottom: 24,
    },
    inputLabel: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        color: '#374151',
        marginBottom: 8,
    },
    inputContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    textInput: {
        padding: 16,
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#1f2937',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#d1d5db',
    },
    dividerText: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#6b7280',
        marginHorizontal: 16,
    },
    scanButton: {
        borderRadius: 12,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    scanButtonGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        gap: 8,
    },
    scanButtonText: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#ffffff',
    },
    goButton: {
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    goButtonDisabled: {
        shadowOpacity: 0.05,
        elevation: 2,
    },
    goButtonGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 12,
        gap: 8,
    },
    goButtonText: {
        fontSize: 18,
        fontFamily: 'Inter-Bold',
        color: '#ffffff',
    },
    cameraContainer: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    cameraOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanArea: {
        width: 250,
        height: 250,
        position: 'relative',
    },
    scanCorner: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderTopWidth: 4,
        borderLeftWidth: 4,
        borderColor: '#ffffff',
        top: 0,
        left: 0,
    },
    scanCornerTopRight: {
        borderTopWidth: 4,
        borderRightWidth: 4,
        borderLeftWidth: 0,
        top: 0,
        right: 0,
    },
    scanCornerBottomLeft: {
        borderBottomWidth: 4,
        borderLeftWidth: 4,
        borderTopWidth: 0,
        bottom: 0,
        left: 0,
    },
    scanCornerBottomRight: {
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        bottom: 0,
        right: 0,
    },
    scanText: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 32,
    },
    cancelButton: {
        marginTop: 32,
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 8,
    },
    cancelButtonText: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#ffffff',
    },
});