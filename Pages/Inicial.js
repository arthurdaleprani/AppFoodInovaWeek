import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Inicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button title="Delivery" onPress={() => navigation.navigate('escolherTipo', { irPag: false })} />
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Ir até o local" onPress={() => navigation.navigate('escolherTipo', { irPag: true})} />
    </View>
    <Text style={styles.txt}>Olá, seja bem vindo novamente {'\n '} O que vamos fazer hoje?</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, 
  },
  buttonContainer: {
    marginVertical: 10, 
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 20, 
  },

txt: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 20,


}


});

export default Inicial;
