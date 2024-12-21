/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchPage from './pages/SearchPage';
import HotelListPage from './pages/HotelListPage';
import BootSplash from 'react-native-bootsplash';
import IntroductionPage from './pages/IntroductionPage';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerTitle: undefined, // This removes the default route name
        headerBackButtonDisplayMode: 'generic',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'rgba(0, 78, 137, 1)'},
      }}>
      <Stack.Screen name="Home" component={SearchPage} />
      <Stack.Screen name="Hotels" component={HotelListPage} />
      <Stack.Screen
        name="Intro"
        component={IntroductionPage}
        options={{
          title: 'Get Started',
          headerStyle: {backgroundColor: 'rgba(0, 78, 137, 1)'},
        }}
      />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
