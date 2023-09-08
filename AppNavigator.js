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
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="escolherTipo" component={escolherTipo} />
          <Stack.Screen name="ChurrasquinhoPage" component={ChurrasquinhoPage} />
          <Stack.Screen name="PizzaPage" component={PizzaPage} />
          <Stack.Screen name="HamburguerPage" component={HamburguerPage} />
          <Stack.Screen name="ComidaJaponesaPage" component={ComidaJaponesaPage} />
          <Stack.Screen name='user' component={user}/>
</Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
