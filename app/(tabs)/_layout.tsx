import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#ffd33d',
                tabBarInactiveTintColor: '#ccc',
            }}
        >
            {/* 🏠 Home */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />

            {/* ℹ️ About */}
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />

            {/* 🧑 Account */}
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'person-circle' : 'person-circle-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />

            {/* 🛒 Cart */}
            <Tabs.Screen
                name="cart"
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'cart' : 'cart-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />

            {/* 💳 Pay */}
            <Tabs.Screen
                name="pay"
                options={{
                    title: 'Pay',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'card' : 'card-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
