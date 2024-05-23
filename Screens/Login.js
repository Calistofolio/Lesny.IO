import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native"


export default function Login({navigation}){

  
const[email, setEmail] = useState("")
const[senha, setSenha] = useState("")

  return(
    <View style = {styles.containerPrincipal}>
      <View style = {styles.topBar}>
        <Text style = {styles.title}>Bem vindo de volta!</Text>
      </View>

      <Image source={require('../assets/imgs/BMI.png')} style={{width: 300, height: 300, alignSelf: "center"}} />
      
        <View  style = {[styles.containerLogin, styles.elevation]}>
          <TextInput style = {styles.contentBox} value={email}
          onChangeText={(texto) => setEmail(texto)}
          placeholder="Digite seu e-mail"/>
        </View>

        <View  style = {[styles.containerLogin, styles.elevation]}>
          <TextInput style = {styles.contentBox} value={senha}
          onChangeText={(texto) => setSenha(texto)}
          placeholder="Digite sua senha" secureTextEntry/>
        </View>
      <View>
        <Text style = {styles.textoLink} onPress={() => navigation.navigate("Esqueci minha senha")}>Esqueceu sua senha?</Text>
      </View>
      
      <TouchableOpacity style = {styles.botaoLogin} onPress={() => navigation.navigate("Index")}>
        <Text style ={styles.textoLogin}>Entrar</Text>
      </TouchableOpacity>

       <View>
        <Text style = {styles.textoLink}>Não tem uma conta? Cadastre-se!</Text>
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
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
    fontFamily: "Poppins Regular",
    textAlign: "center"
  },
  containerLogin:{
    flexDirection: "column",
    height: 50,
    margin: 10
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
    marginHorizontal: 80,
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
    marginVertical: 30
  }
}
)
