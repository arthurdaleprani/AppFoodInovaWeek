import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Buutton, StyleSheet } from 'react-native';

const pizzaria = [

//Pizza

];

function escolherPizza(){
const indiceAleatorio = Math.floor(Math.random() * pizzaria.length);
return pizzaria[indiceAleatorio];

}



const PizzariaPage = () => {
  /* 
pizzariaAleatoria: Estado que armazena dados da pizzaria exibida, inicializado como null, atualizado após carregamento, usado para mostrar informações na interface.*/
  const[pizzariaAleatoria, setPizzariaAleatoria] = useState(null);
 /*isLoading: Estado controlando carregamento da página, inicializado como true, muda para false após carregamento, decide se mostrar indicador de carregamento ou informações. */
 
  const [isLoading, setIsLoading] = useState(true);
 //O Useeffect executa as ações apos a renderização
  useEffect(() => {
    //setTimeOut simula um tempo antes de aparecer a pizzaria
      setTimeout(() => {
          const pizzaria = escolherPizza();
          setPizzariaAleatoria(pizzaria);
          setIsLoading(false);// Altera o estado isLoading para false para indicar que os dados foram carregados.

      }, 1000);


  },[]);
 
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#E07F21'}/>
      ): pizzariaAleatoria?( 
          <View>
                <Image source = {pizzariaAleatoria.foto} style={styles.foto}/>
                <Text style= {styles.nome}/>
                <Text style = {styles.desc}/>
                <Button style={styles.button}
                title="Ver Localização"
                onPress={() => {
                  // Abra a localização no Google Maps ou outro aplicativo de mapa
                  // Use restauranteAleatorio.localizacao para o link
                }}/>

          </View>
      ): null}
          </View>

      
    
  );
};

const styles = StyleSheet.create({
foto: {



},

container:{



},

desc:{




},

nome:{





}







})





export default PizzariaPage; 