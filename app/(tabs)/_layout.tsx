import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fbc02d", // optional
        tabBarInactiveTintColor: "gray", // optional
        headerShown: false, // optional
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "hello",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size + 8} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="login"
        options={{
          title: "login0",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat-bubble" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
