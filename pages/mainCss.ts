import {StyleSheet} from 'react-native';

export const mainStyle = StyleSheet.create({
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
    fontWeight: '700',
  },
  primaryButtonLight: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 4,
  },
  primaryTextLight: {
    textAlign: 'center',
    color: 'rgba(0, 78, 137, 1)',
    fontSize: 16,
    fontWeight: '700',
  },
});
