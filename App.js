import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashingScreen from './screens/SplashingScreen';
import OnboardScreen from './screens/OnboardScreen';
import SignIn from './screens/SignIn';
import CreateAccount from './screens/CreateAccount';
import HomeApplication from './screens/app/HomeApplication';
import NotificationPage from './screens/app/NotificationPage';
import ForgotPassword from './screens/app/secure/ForgotPassword';
import VerifyEmail from './screens/app/secure/VerifyEmail';
import ChangePassword from './screens/app/secure/ChangePassword'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
            headerShown: false,
        }} name="Home" component={SplashingScreen} />
        <Stack.Screen options={{
            headerShown: false,
        }} name="OnBoard" component={OnboardScreen} />
        <Stack.Screen options={{
            headerShown: false,
        }} name="SignIn" component={SignIn} />
        <Stack.Screen options={{
            headerShown: false,
        }} name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen options={{
            headerShown: false,
        }} name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen options={{
            headerShown: false,
        }} name="ChangePassword" component={ChangePassword} />
        <Stack.Screen options={{
            headerShown: false,
        }} name="CreateAccount" component={CreateAccount} />
        <Stack.Screen options={{
            headerShown: false,
        }} name="HomeApplication" component={HomeApplication} />
        <Stack.Screen options={{
            headerShown: false,
        }} name="Notification" component={NotificationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
