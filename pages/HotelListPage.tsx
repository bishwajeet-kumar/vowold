import {Text} from '@react-navigation/elements';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HotelListPage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const hotelList: any[] = [
    {
      id: 1,
      name: 'The Taj Mahal Palace',
      location: 'Mumbai, India',
      rating: 4.9,
      price_per_night: 500,
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Fine Dining'],
      available_rooms: 20,
    },
    {
      id: 2,
      name: 'Leela Palace',
      location: 'New Delhi, India',
      rating: 4.8,
      price_per_night: 450,
      amenities: ['Free Breakfast', 'Concierge Service', 'Gym', 'Spa'],
      available_rooms: 15,
    },
    {
      id: 3,
      name: 'Oberoi Amarvilas',
      location: 'Agra, India',
      rating: 4.9,
      price_per_night: 550,
      amenities: ['Taj Mahal View', 'Pool', 'Fine Dining', 'Spa'],
      available_rooms: 12,
    },
    {
      id: 4,
      name: 'Umaid Bhawan Palace',
      location: 'Jodhpur, India',
      rating: 5.0,
      price_per_night: 600,
      amenities: ['Heritage Property', 'Free WiFi', 'Pool', 'Spa'],
      available_rooms: 10,
    },
    {
      id: 5,
      name: 'ITC Grand Chola',
      location: 'Chennai, India',
      rating: 4.7,
      price_per_night: 400,
      amenities: ['Free Parking', 'Multiple Restaurants', 'Gym', 'Pool'],
      available_rooms: 25,
    },
    {
      id: 6,
      name: 'The Oberoi Udaivilas',
      location: 'Udaipur, India',
      rating: 4.9,
      price_per_night: 520,
      amenities: ['Lake View', 'Pool', 'Spa', 'Fine Dining'],
      available_rooms: 14,
    },
    {
      id: 7,
      name: 'JW Marriott',
      location: 'Bengaluru, India',
      rating: 4.6,
      price_per_night: 350,
      amenities: ['Free WiFi', 'Business Center', 'Spa', 'Gym'],
      available_rooms: 18,
    },
    {
      id: 8,
      name: 'Taj Lake Palace',
      location: 'Udaipur, India',
      rating: 5.0,
      price_per_night: 580,
      amenities: ['Heritage Property', 'Lake View', 'Boat Rides', 'Spa'],
      available_rooms: 8,
    },
    {
      id: 9,
      name: 'The Lalit',
      location: 'Kolkata, India',
      rating: 4.5,
      price_per_night: 320,
      amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant'],
      available_rooms: 30,
    },
    {
      id: 10,
      name: 'Radisson Blu',
      location: 'Jaipur, India',
      rating: 4.4,
      price_per_night: 280,
      amenities: ['Free WiFi', 'Airport Shuttle', 'Pool', 'Restaurant'],
      available_rooms: 22,
    },
  ];

  return (
    <SafeAreaView style={{...backgroundStyle, height: '100%'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View style={{paddingTop: 25, paddingStart: 10, paddingEnd: 10}}>
          {hotelList.map(hotel => (
            <View key={hotel.id} style={{...componentStyles.hotelCard}}>
              <Image
                style={{...componentStyles.hotelThumbnail}}
                source={require('../assets/hotelThumbnail1.jpg')}
              />
              <View style={{...componentStyles.hotelSpecs}}>
                <Text style={{...componentStyles.hotelName}}>
                  {hotel.name}{' '}
                  <View
                    style={{
                      backgroundColor: 'black',
                      borderRadius: 20,
                      display: 'flex',
                      alignItems: 'center',
                      padding: 5,
                    }}>
                    <Text style={{fontSize: 15, color: 'white'}}>
                      {hotel.rating} ⭐
                    </Text>
                  </View>
                </Text>
                <Text style={{...componentStyles.hotelProp}}>
                  {hotel.location}
                </Text>
                <Text style={{...componentStyles.hotelProp}}>
                  {hotel.available_rooms} rooms available
                </Text>
              </View>
              <View style={{...componentStyles.hotelPrice}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: 'white',
                  }}>
                  Rs {hotel.price_per_night}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const componentStyles = StyleSheet.create({
  hotelCard: {
    position: 'relative',
    backgroundColor: 'white',
    marginVertical: 10,
    borderColor: 'lightgrey',
    borderWidth: 2,
    boxShadow: '1 1 5',
    borderRadius: 4,
  },
  hotelThumbnail: {
    height: 150,
    width: '100%',
  },
  hotelSpecs: {
    padding: 8,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hotelProp: {
    fontSize: 16,
  },
  hotelPrice: {
    position: 'absolute',
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomStartRadius: 4,
  },
});

export default HotelListPage;
