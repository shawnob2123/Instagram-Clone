import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import colors from './src/theme/colors';
import sizes from './src/theme/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={{ color: colors.white, fontSize: sizes.sm }}>App</Text>
      <Ionicons name="home" size={sizes.xxl} color={colors.white} />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  }
})