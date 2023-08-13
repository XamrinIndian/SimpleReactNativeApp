import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../resources/constants';
import {useAppSelector} from '../redux/hooks';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const {
    user: {username},
  } = useAppSelector(state => state.userSlice);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.AuthNavigator}
        screenOptions={{
          headerShown: false,
        }}>
        {username !== '' ? (
          <Stack.Screen
            component={AuthNavigator}
            name={Screens.AuthNavigator}
          />
        ) : (
          <Stack.Screen component={AppNavigator} name={Screens.AppNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
