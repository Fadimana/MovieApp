import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieCard from "./page/Movie/MovieCard";
const Stack=createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MovieCard' component={MovieCard}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App();