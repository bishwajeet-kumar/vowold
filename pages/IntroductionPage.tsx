import {
  useColorScheme,
  StatusBar,
  ScrollView,
  View,
  Pressable,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {mainStyle as styles} from '../mainCss';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const IntroductionPage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          ...backgroundStyle,
          backgroundColor: 'rgba(26, 101, 158, 1)',
          height: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingStart: 10,
            paddingEnd: 10,
            paddingTop: 50,
            height: Dimensions.get('window').height - 100,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 10,
            }}>
            <Image
              style={{width: 150, height: 150, resizeMode: 'contain'}}
              source={require('../assets/appLogoTemp.png')}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: 1,
              }}>
              Hotel Booking System
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '500',
                color: 'white',
                letterSpacing: 1,
              }}>
              Stay Your Way, Anytime, Anywhere!
            </Text>
          </View>
          <View style={{}}>
            <Pressable
              style={{...styles.primaryButtonLight}}
              unstable_pressDelay={200}
              android_ripple={{color: 'lightgray'}}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={{...styles.primaryTextLight}}>
                Continue <Icon name="arrow-right-long" size={16} />
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IntroductionPage;
