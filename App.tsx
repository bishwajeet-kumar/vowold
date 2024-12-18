/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchPage from './pages/SearchPage';
import HotelListPage from './pages/HotelListPage';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: undefined, // This removes the default route name
        headerBackButtonDisplayMode: 'generic',
      }}>
      <Stack.Screen name="Home" component={SearchPage} />
      <Stack.Screen name="Hotels" component={HotelListPage} />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  fieldCaption: {
    fontSize: 16,
    marginBottom: 5,
  },
  flexRowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;
