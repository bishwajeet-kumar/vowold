import {StyleSheet} from 'react-native';

export const mainStyle = StyleSheet.create({
  fieldContainer: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  fieldCaption: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'gray',
    letterSpacing: 1,
  },
  flexRowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: 'rgba(0, 78, 137, 1)',
    paddingVertical: 12,
    borderRadius: 100,
    boxShadow: '1 1 2 white',
  },
  secondaryButton: {
    backgroundColor: 'gray',
    paddingVertical: 12,
    borderRadius: 100,
    boxShadow: '1 1 2 white',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
  primaryButtonLight: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 100,
    boxShadow: '1 1 2 white',
  },
  primaryTextLight: {
    textAlign: 'center',
    color: 'rgba(0, 78, 137, 1)',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
