import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="FavoritesScreen"
        options={{
          title: "Favoritas",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          )
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="QuestionsListScreen"
        options={{
          title: "Histórico",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          )
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="QuestionsDetailsScreen"
        options={{
          title: "Detalhes",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          )
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;
