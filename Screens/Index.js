import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native"


export default function Index({navigation}){


  return(
    <View style = {styles.containerPrincipal}>
      <View style = {styles.topBar}>
        <Text style = {styles.title}>Lesny.IO</Text>
      </View>

          
        <View  style = {[styles.functionTitle, styles.elevation]}>
          <Text style = {[styles.textoSecao, styles.colorChange]}> Calcular IMC e TMB </Text>
        </View>

      <View style = {styles.results}>
            <View style = {styles.tables}>
              <View style = {[styles.contentBox, styles.sizeUp]}>
                <Text style = {styles.textoSecao}> IMC </Text>
                <Text style = {styles.textoResult}> 18,7 </Text>
                <Text style = {styles.textoSecao}> Peso ideal </Text>
              </View>
              <View style = {styles.contentBox}>
                <Text style = {styles.textoSecao}> TMB - Manutenção </Text>
                <Text style = {styles.textoResult}> 2051,4 KCAL </Text>
                <Text style = {styles.textoSecao}> Por dia </Text>
              </View>

              

            </View>
          <View style = {styles.tables}>
            <View style = {styles.contentBox}>
                <Text style = {styles.textoSecao}> TMB - Deficit </Text>
                <Text style = {styles.textoResult}> 1551,4 KCAL </Text>
                <Text style = {styles.textoSecao}> Por dia </Text>
              </View>

              <View style = {styles.contentBox}>
                <Text style = {styles.textoSecao}> TMB - Superavit </Text>
                <Text style = {styles.textoResult}> 2551,4 kcal </Text>
                <Text style = {styles.textoSecao}> Por dia </Text>
              </View>

            </View>
      </View>

        <View  style = {[styles.functionTitle, styles.elevation]}>
          <Text style = {[styles.textoSecao, styles.colorChange]}> Calcular BF </Text>
        </View>
        <View style = {[styles.contentBox, styles.sizeDown]}>
                <Text style = {styles.textoSecao}> Gordura corporal </Text>
                <Text style = {styles.textoResult}> 25% </Text>
              </View>

        <View  style = {[styles.functionTitle, styles.elevation]}>
          <Text style = {[styles.textoSecao, styles.colorChange]}> Calcular QDR de água </Text>
        </View>
        <View style = {[styles.contentBox, styles.sizeDown]}>
                <Text style = {styles.textoResult}> 2,5L </Text>
                <Text style = {styles.textoSecao}> Por dia </Text>
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
    margin: 15
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
    fontFamily: "Poppins Regular",
    textAlign: "left"
  },
  functionTitle:{ 
    borderRadius: 50,
    height: 50,
    fontSize: 20,
    marginHorizontal: 30,
    fontFamily: "Poppins Regular",
    textAlign: "center",
    elevation: 5,
    backgroundColor : "#6495ED",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  textoSecao:{
    fontSize: 20,
    fontFamily: "Poppins Regular",
    alignSelf: "center",
    marginTop: 10
    },
  results:{
    flexDirection: "column"
  }, 
  textoResult:{
    fontSize: 25,
    fontFamily: "Poppins Regular",
    alignSelf: "center",
    marginTop: 10, 
    fontWeight: "bold"
    },
  tables:{
    flexDirection: "row", 
    alignSelf: "center"
  },
  contentBox:{
    backgroundColor: '#FFFAFA',
    borderRadius: 10, 
    contentBox: "column",
    margin: 10,
    padding: 10, 
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  }, 
  sizeDown:{
    marginHorizontal: 30
  }, 
  sizeUp:{
    width: 150
  },
  colorChange:{
    color: "#FFF5EE"
   }
  }
)
