import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';







const User = ({navigation, route}) =>{
    const[nome, setNome] = useState('Arthur');
    const[email, setEmail] = useState('sasass@gmail.com');
    const[numero, setNumero] = useState('27999666666');
    const[dataNasc, setDataNasc] = useState('02/05/2000');
    const[cidade,setCidade] = useState('Vila Velha-ES')

    const salvarDados = async () => {
  
       await AsyncStorage.setItem('nome', nome);
       await AsyncStorage.setItem('email', email);
       await AsyncStorage.setItem('numero', numero);
       await AsyncStorage.setItem('dataNasc', dataNasc);
       await AsyncStorage.setItem('cidade', cidade);
      };
    



return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
      />

      <Text style={styles.label}>Número:</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={(text) => setNumero(text)}
        placeholder="Digite seu número"
      />

      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        value={dataNasc}
        onChangeText={(text) => setDataNasc(text)}
        placeholder="Digite sua data de nascimento"
      />

      <Text style={styles.label}>Cidade:</Text>
      <Picker
        selectedValue={cidade}
        onValueChange={(itemValue) => setCidade(itemValue)}
      >
        <Picker.Item label="Vila Velha" value="Vila Velha" />
      </Picker>

      <Button style={styles.btn} color={'#E07F21'}  title="Salvar" onPress={salvarDados} />
       <Button   color={'#E07F21'}  style={styles.btn}
        title="Voltar"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E1B60A',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  paddingBottom:10
  },
});

export default User;