import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';


const Inicial = ({  }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('user'); 
  };
  
  const windowWidth = Dimensions.get('window').width;

  
  return (
    

    <View style={styles.container}>
    <View style={styles.buttonContainer}>
    <Button color={'#E07F21'} title="Delivery"  
      
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button  color={'#E07F21'} style={styles.button}  title="Ir até o local" onPress={() => navigation.navigate('escolherTipo', { irPag: true})} />

    </View>
    <Text style={styles.disabledText}>
          Desculpe, a opção de Delivery ainda não está disponivel😢
        </Text>
    <Image source={require('../src/icons/logo.png')} style={styles.logo}/>
    <Text style={styles.txt}>Olá, seja bem vindo novamente.{'\n '}O que vamos fazer hoje?</Text>
    
    <TouchableOpacity onPress={handlePress}>
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
    position: 'absolute',
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

  disabledButton: {
    backgroundColor: '#E07F21',
    color:'#E07F21'
  },
  disabledText: {
    color: 'black',
    marginTop: 10,
    top:-165,
    fontSize:13
  }
});

export default Inicial;
