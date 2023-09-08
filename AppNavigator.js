import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './Pages/Inicial'; 
import escolherTipo from './Pages/escolherTipo'; 
import ChurrasquinhoPage from './Pages/PageComida/ChurrasquinhoPage';
import PizzaPage from './Pages/PageComida/PizzaPage';
import HamburguerPage from './Pages/PageComida/HamburguerPage';
import ComidaJaponesaPage from './Pages/PageComida/ComidaJaponesaPage';
import user from './Pages/user';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
          <Stack.Screen name="Inicial" component={Inicial}  options={{headerShown :false}}/>
          <Stack.Screen name="escolherTipo" component={escolherTipo}  options={{headerShown :false}}/>
          <Stack.Screen name="ChurrasquinhoPage" component={ChurrasquinhoPage}  options={{headerShown :false}}/>
          <Stack.Screen name="PizzaPage" component={PizzaPage}  options={{headerShown :false}}/>
          <Stack.Screen name="HamburguerPage" component={HamburguerPage} options={{headerShown :false}} />
          <Stack.Screen name="ComidaJaponesaPage" component={ComidaJaponesaPage} options={{headerShown :false}} />
          <Stack.Screen name='user' component={user} options={{headerShown :false}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
