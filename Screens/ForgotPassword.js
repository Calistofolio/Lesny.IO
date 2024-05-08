import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native"


export default function ForgotPassword({navigation}){

const[email, setEmail] = useState("")

  return(
    <View style = {styles.containerPrincipal}>
      <View style = {styles.topBar}>
        <Text style = {styles.title}>Te ajudaremos a recuperar sua conta!</Text>
      </View>

      <Image source={require('../assets/imgs/BMI.png')} style={{width: 300, height: 300, alignSelf: "center"}} />
      
        <View  style = {[styles.containerLogin, styles.elevation]}>
          <TextInput style = {styles.contentBox} value={email}
          onChangeText={(texto) => setEmail(texto)}
          placeholder="Digite seu e-mail"/>
        </View>
      
      
        <TouchableOpacity style = {styles.botaoLogin}>
          <Text style ={styles.textoLogin}>Recuperar senha</Text>
        </TouchableOpacity>
      
        <View>
          <Text style = {styles.textoLink} onPress={() => navigation.navigate("Login")}>Voltar para login</Text>
        </View>
  </View>
  )
}

const styles = StyleSheet.create({
  containerPrincipal:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F5F5"
  },
  topBar:{
    flexDirection: "collumn",
    height: 70, 
    marginTop: 30
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    fontFamily: "Poppins Regular",
    textAlign: "center"
  },
  containerLogin:{
    flexDirection: "column",
    height: 50,
    margin: 20
  },
  contentBox:{ 
    borderRadius: 50,
    height: 50,
    fontSize: 20,
    marginVertical: 20,
    fontFamily: "Poppins Regular",
    textAlign: "center",
    elevation: 5,
    backgroundColor : "#FFFAFA",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  botaoLogin:{
    backgroundColor:"#6495ED",
    height: 50,
    mmarginHorizontal: 50,
    marginVertical: 20,
    borderRadius: 50,
    padding: 10
  },
  textoLogin:{
    fontSize: 20,
    fontFamily: "Poppins Regular",
    alignSelf: "center"
  }, 
  textoLink:{
    fontSize: 20,
    fontFamily: "Poppins Regular",
    alignSelf: "center",
    color: "#1E90FF",
    marginVertical: 10
  }
})

