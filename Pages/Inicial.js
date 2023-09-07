import React from 'react';
import { ActivityIndicator ,View, Button, Text, StyleSheet, Image } from 'react-native';

const Inicial = ({ navigation }) => {
  return (
    
    //<ActivityIndicator size="small" color="#0000ff">
    <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button color={'#E07F21'} title="Delivery" onPress={() => navigation.navigate('escolherTipo', { irPag: false })} />
    </View>
    <View style={styles.buttonContainer}>
      <Button  color={'#E07F21'} style={styles.button}  title="Ir até o local" onPress={() => navigation.navigate('escolherTipo', { irPag: true})} />
    </View>
    <Text style={styles.txt}>Olá, seja bem vindo novamente {'\n '} O que vamos fazer hoje?</Text>
  </View>
  //</ActivityIndicator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: 10,
    backgroundColor: '#E1B60A',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,

  },
  
  buttonContainer: {
    flexDirection:'row',
    justifyContent: 'center', 
    backgroundColor: '#E07F21',
    padding: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20, // Espaçamento entre o texto e o primeiro botão
  },
  

  title: {
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 20, 
  },


});

export default Inicial;
