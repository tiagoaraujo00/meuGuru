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
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="FavoritesScreen"
        options={{
          title: "Favoritas",
          headerTitleAlign: "center",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="QuestionsListScreen"
        options={{
          title: "Histórico",
          headerTitleAlign: "center",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="QuestionsDetailsScreen"
        options={{
          title: "Detalhes",
          headerTitleAlign: "center",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;
