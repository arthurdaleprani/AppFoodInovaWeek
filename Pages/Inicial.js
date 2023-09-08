import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';


const Inicial = ({  }) => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate('user'); 
  };
  
  const windowWidth = Dimensions.get('window').width;

  
  return (
    

    <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button color={'#E07F21'} title="Delivery" onPress={() => navigation.navigate('escolherTipo', { irPag: false })} />
    </View>
    <View style={styles.buttonContainer}>
      <Button  color={'#E07F21'} style={styles.button}  title="Ir até o local" onPress={() => navigation.navigate('escolherTipo', { irPag: true})} />
    </View>
    <Text style={styles.txt}>Olá, seja bem vindo novamente{'\n '}O que vamos fazer hoje?</Text>
    <Image source={require('../src/icons/logo.png')} style={styles.logo}/>
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
    backgroundColor: '#E1B60A',
    paddingTop: 30, 
    justifyContent: 'center',
  },
  txt: {
    fontSize: 18, 
    fontWeight: 'bold',
    position: 'absolute',
    top: 150, 
    textAlign: 'center',
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E07F21',
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 15, 
    shadowColor: '#000',
    width: '70%',
    shadowOffset: {
      width: 5, 
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginTop: 20,
  },
  icon: {
    position: 'relative',
    top: -440, 
    right: -120, 
    width: 30, 
    height: 30, 
  },
  logo: {
    width: 80, 
    height: 80, 
    marginTop: 20,
  },
});

export default Inicial;
