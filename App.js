import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView } from 'react-native'; 

export default function App(){
return(

<ScrollView>
<View style={estilo.container}>

<Text style={estilo.titulo}>Profissões de T.I</Text>

<Text style={estilo.paragrafo}> Programador de Mobile </Text>
<Image style={estilo.img} source={require("./assets/desenvolvedores-mobile-em-alta-2.jpg")}/>

<Text style={estilo.paragrafo}> Programador de Pepe hack </Text>
<Image style={estilo.img} source={require("./assets/tumblr_o6wbvqwhXa1rmerh9o1_1280.gif")}/>

<Text style={estilo.paragrafo}> Programador de Pão </Text>
<Image style={estilo.img} source={require("./assets/download.jpg")}/>

<Text style={estilo.paragrafo} > Programador de Alcol </Text>
<Image style={estilo.img} source={require("./assets/Barman-tudo-o-que-voce-precisa-saber-sobre-essa-profissao.jpg")}/>

<Text style={estilo.paragrafo}> Programador de Música </Text>
<Image style={estilo.img} source={require("./assets/ghosyt.jpg")}/>

</View>
</ScrollView>
  );
}

const estilo = StyleSheet.create({
container:{
  flex:1,
  justifyContent:"center",
  alignItems: "center",
  backgroundColor: "#3399ff"
},
titulo:{
  fontSize:50,
  color: "#cc3399"
},
img:{
  width: 250,
  height: 250,
},

paragrafo:
{
  color: "#cc3333",
  fontSize:27,

}

});

