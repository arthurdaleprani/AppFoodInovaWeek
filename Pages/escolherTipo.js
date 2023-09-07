import React from 'react';
import { View, Button } from 'react-native';
import ChurrasquinhoPage from './PageComida/ChurrasquinhoPage';



const EscolherTipoScreen = ({ navigation, route }) => {
   const { irPag } = route.params;

   return (
      <View>
         <Button
             title="Churrasquinho"
             onPress={() => navigation.navigate('ChurrasquinhoPage', { mostrarDadosRestaurante: true })}
          
         />
         <Button
            title="Pizza"
            onPress={() => navigation.navigate('PizzaPage')}
         />
         <Button
            title="Hamburguer"
            onPress={() => navigation.navigate('HamburguerPage')}
         />
         <Button
            title="Comida Japonesa"
            onPress={() => navigation.navigate('ComidaJaponesaPage')}
         />
      </View>
   );
};

export default EscolherTipoScreen;
