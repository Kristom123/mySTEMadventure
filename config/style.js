'use strict';
import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

{
  /* get screen dimensions */
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
    //padding: 8,
  },
  logo: {
    resizeMode: 'cover',
    padding: 30,
  },
  background_image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11.5,
    paddingHorizontal: 38,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: colors.green,
  }
});