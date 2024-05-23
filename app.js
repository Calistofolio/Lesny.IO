import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./Screens/Login"
import ForgotPassword from "./Screens/ForgotPassword"
import Index from "./Screens/Index"

const Stack = createNativeStackNavigator();

export default function App(){

  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login">
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Esqueci minha senha" component={ForgotPassword}/>
        <Stack.Screen name = "Index" component={Index}/>
      </Stack.Navigator>
    </NavigationContainer>
   
)
}

