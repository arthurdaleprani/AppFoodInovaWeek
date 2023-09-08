import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Button, StyleSheet, Linking } from 'react-native';

const pizzaria = [
{
  nome:'PIZZA CREK',
  desc:"Não é Crepe, Panqueca, Cone, tampouco Taco. É Pizza Crek! Massa Extra Fina e crocante, a qual é recheada com os mais variados e saborosos ingredientes. São mais de 40 sabores de Pizzas (salgadas, doces e Light) a escolha dos clientes.",
  localizacao:'https://goo.gl/maps/JRtfJ1VvrcQrq3rTA',
  foto: require('../../src/imgs/p1.PNG'),
},



{
nome:'Chicago Pizzaria',
desc:"Chicago Pizzaria: O autêntico sabor de Chicago em cada fatia.",
localizacao:'https://goo.gl/maps/dqPRmqmP4sWieU1b6',
foto: require('../../src/imgs/p2.PNG')

},

{
  nome:'Vila Rusticana',
  desc:"Bruschettas, massas e pizzas, além de cervejas artesanais, em espaço com tijolo aparente e forno a lenha.",
  localizacao:'https://goo.gl/maps/2xwE6K14R6khhenA8',
  foto: require('../../src/imgs/p3.PNG')
  
  },


  {
    nome:'Maledita Pizzeria Napoletana',
    desc:"Pizza estilo Napoletana 🍕",
    localizacao:'https://goo.gl/maps/csusyQN8cAksMMLH7',
    foto: require('../../src/imgs/p4.PNG')
    
    },


{
      nome:'LItaliano Pizzas e Massas',
      desc:"Ravióli de queijo brie com pera, burrata, risoto, vinhos e drinques, em clima descontraído e animado.",
      localizacao:'https://goo.gl/maps/wQkF27E2seA8DnCu9',
      foto: require('../../src/imgs/p6.PNG')
      
},

{
  nome:'Rusti Pizzeria',
  desc:"🍕 Massa fininha e crocante, com ingredientes de qualidade",
  localizacao:'https://goo.gl/maps/5U6tak7xcZyb1xvZ7',
  foto: require('../../src/imgs/p5.PNG')
  
  },

];

function escolherPizza(){
const indiceAleatorio = Math.floor(Math.random() * pizzaria.length);
return pizzaria[indiceAleatorio];

}



const PizzariaPage = ({navigation, route}) => {
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


  const openLocationInMaps = () => {
    if (pizzariaAleatoria && pizzariaAleatoria.localizacao) {
      Linking.openURL(pizzariaAleatoria.localizacao);
    }
  };
 
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#E07F21'}/>
      ): pizzariaAleatoria?( 
          <View>
                <Image source = {pizzariaAleatoria.foto} style={styles.foto}/>
                <Text style={styles.nome}>{pizzariaAleatoria.nome}</Text>
                 <Text style={styles.desc}>{pizzariaAleatoria.desc}</Text>
          <Button style={styles.btn}
            title="Ver Localização"
            onPress={openLocationInMaps}
          />
<Button style={styles.btn}
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
          </View>
      ): null}
          </View>

      
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1B60A',
  },
 
  foto: {
    width: '90%', // Usar uma porcentagem para tornar a imagem responsiva
    aspectRatio: 1, // Manter a proporção da imagem
    borderRadius: 50,
    marginBottom: 30,
    maxHeight: '50%', // Limitar a altura máxima da imagem
    alignItems:'center',
    justifyContent:'center',
    left:15

  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Centralizar o texto horizontalmente
  },
  desc: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#E07F21',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    width:50
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackButton: {
    backgroundColor: '#E07F21',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    width:50
  },
})





export default PizzariaPage; 