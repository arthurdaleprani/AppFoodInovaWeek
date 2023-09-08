import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Inicial = ({  }) => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('user'); 
  };
  
  
  return (
    

    <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button color={'#E07F21'} title="Delivery" onPress={() => navigation.navigate('escolherTipo', { irPag: false })} />
    </View>
    <View style={styles.buttonContainer}>
      <Button  color={'#E07F21'} style={styles.button}  title="Ir até o local" onPress={() => navigation.navigate('escolherTipo', { irPag: true})} />
    </View>
    <Text style={styles.txt}>Olá, seja bem vindo novamente {'\n '} O que vamos fazer hoje?</Text>
    <TouchableOpacity onPress={handleImagePress}>
        <Image source={require('../src/icons/user.png')} style={styles.icon} />
      </TouchableOpacity>

  </View>
 
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
  icon: {
    position: 'absolute',
    top: 20, // Ajuste a posição vertical conforme necessário
    right: 20, // Ajuste a posição horizontal conforme necessário
    width: 30, // Ajuste o tamanho conforme necessário
    height: 30, // Ajuste o tamanho conforme necessário
  },

});

export default Inicial;
