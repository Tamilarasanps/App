import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserCategory from "../(userCategory)/UserCategory";
import SubCategory from "../(userCategory)/SubCategory";
import Profile from "../(profile)/Profile";

const Stack = createStackNavigator();

export default function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="categoryPage"
        component={UserCategory}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="SubCategoryPage"
        component={SubCategory}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="check"
        component={Profile}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
