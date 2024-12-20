import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {mainStyle as styles} from './mainCss';

const SearchPage = () => {
  const navigation = useNavigation<any>();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [openLocSelect, setOpenLocSelect] = useState(false);
  const [selectedLocId, setSelectedLocId] = useState<any>(null);
  const locationList = [
    {value: '1', label: 'Delhi'},
    {value: '2', label: 'Mumbai'},
    {value: '3', label: 'Bengaluru'},
    {value: '4', label: 'Goa'},
    {value: '5', label: 'Chennai'},
    {value: '6', label: 'Jaipur'},
    {value: '7', label: 'Hyderabad'},
  ];
  const [openRoomSelect, setOpenRoomSelect] = useState(false);
  const [roomCountId, setRoomCountId] = useState(null);
  const roomCountList = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
  ];
  const [openPersonSelect, setOpenPersonSelect] = useState(false);
  const [personCountId, setPersonCountId] = useState(null);
  const personCountList = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
  ];

  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());

  const openFromDatePickHandler = () => {
    DateTimePickerAndroid.open({
      mode: 'date',
      value: fromDate,
      onChange: (event, date: any) => {
        setFromDate(date);
      },
    });
  };
  const openToDatePickHandler = () => {
    DateTimePickerAndroid.open({
      mode: 'date',
      value: toDate,
      onChange: (event, date: any) => {
        setToDate(date);
      },
    });
  };

  const search = () => {
    navigation.navigate('Hotels');
  };

  const reset = () => {
    setSelectedLocId(null);
    setFromDate(new Date());
    setToDate(new Date());
    setRoomCountId(null);
    setPersonCountId(null);
  };

  return (
    <SafeAreaView style={{...backgroundStyle, height: '100%'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{...backgroundStyle, paddingTop: 25}}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          HMS
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
          }}>
          Hotel Management System
        </Text>

        <View style={{paddingTop: 25, paddingStart: 10, paddingEnd: 10}}>
          <View style={{...styles.fieldContainer}}>
            <Text style={{...styles.fieldCaption}}>Location</Text>
            <DropDownPicker
              open={openLocSelect}
              value={selectedLocId}
              items={locationList}
              setOpen={setOpenLocSelect}
              setValue={setSelectedLocId}
              listMode={'MODAL'}
              searchable={true}
              labelStyle={{fontSize: 16}}
              selectedItemLabelStyle={{fontSize: 20}}
              listItemLabelStyle={{fontSize: 16}}
            />
          </View>
          <View
            style={{
              ...styles.flexRowContainer,
              ...styles.fieldContainer,
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, marginEnd: 5}}>
              <Text style={{...styles.fieldCaption}}>Check-In</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{width: '75%', fontWeight: '600', fontSize: 20}}>
                  {fromDate.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </Text>
                <Pressable
                  style={{...styles.primaryButton, width: '25%'}}
                  onPress={openFromDatePickHandler}>
                  <Text style={{...styles.buttonText}}>Date</Text>
                </Pressable>
              </View>
            </View>
            <View style={{flex: 1, marginEnd: 5}}>
              <Text style={{...styles.fieldCaption}}>Check-out</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{width: '75%', fontWeight: '600', fontSize: 20}}>
                  {toDate.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </Text>
                <Pressable
                  style={{...styles.primaryButton, width: '25%'}}
                  onPress={openToDatePickHandler}>
                  <Text style={{...styles.buttonText}}>Date</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.flexRowContainer,
              ...styles.fieldContainer,
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, marginEnd: 5}}>
              <Text style={{...styles.fieldCaption}}>Rooms</Text>

              <DropDownPicker
                open={openRoomSelect}
                value={roomCountId}
                items={roomCountList}
                setOpen={setOpenRoomSelect}
                setValue={setRoomCountId}
                listMode={'MODAL'}
                searchable={true}
                labelStyle={{fontSize: 16}}
                selectedItemLabelStyle={{fontSize: 20}}
                listItemLabelStyle={{fontSize: 16}}
              />
            </View>
            <View style={{flex: 1, marginStart: 5}}>
              <Text style={{...styles.fieldCaption}}>Persons</Text>

              <DropDownPicker
                open={openPersonSelect}
                value={personCountId}
                items={personCountList}
                setOpen={setOpenPersonSelect}
                setValue={setPersonCountId}
                listMode={'MODAL'}
                searchable={true}
                labelStyle={{fontSize: 16}}
                selectedItemLabelStyle={{fontSize: 20}}
                listItemLabelStyle={{fontSize: 16}}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.fieldContainer,
              ...styles.flexRowContainer,
              justifyContent: 'center',
              columnGap: 10,
              paddingTop: 20,
            }}>
            <Pressable
              style={{...styles.primaryButton, width: '25%'}}
              onPress={search}
              unstable_pressDelay={200}
              android_ripple={{color: 'white'}}>
              <Text style={{...styles.buttonText}}>Search</Text>
            </Pressable>
            <Pressable
              style={{...styles.primaryButton, width: '25%'}}
              onPress={reset}
              unstable_pressDelay={200}
              android_ripple={{color: 'white'}}>
              <Text style={{...styles.buttonText}}>Reset</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const componentStyles = StyleSheet.create({
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

export default SearchPage;
