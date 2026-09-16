import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClasesScreen from "../screens/ClasesScreen";
import DetallesClaseScream from "../screens/DetalleclaseScream";

const Stack = createNativeStackNavigator();

export default function ClasesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={ClasesScreen} />

      <Stack.Screen
        name="DatalleClase"
        component={DetallesClaseScream}
        options={{ title: "Detalle", headerBackTitle: "Atras" }}
      />
    </Stack.Navigator>
  );
}
