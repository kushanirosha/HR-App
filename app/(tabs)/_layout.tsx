import { Tabs } from 'expo-router';
import { Chrome as Home, Users, ChartBar as BarChart, Settings } from 'lucide-react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    borderTopWidth: 2,
                    borderTopColor: '#e5e7eb',
                    height: 80,
                    paddingBottom: 10,
                    paddingTop: 8,
                },
                tabBarActiveTintColor: '#2563eb',
                tabBarInactiveTintColor: '#6b7280',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Inter-Medium',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ size, color }) => (
                        <Home size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="employees"
                options={{
                    title: 'Employees',
                    tabBarIcon: ({ size, color }) => (
                        <Users size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="reports"
                options={{
                    title: 'Reports',
                    tabBarIcon: ({ size, color }) => (
                        <BarChart size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ size, color }) => (
                        <Settings size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}