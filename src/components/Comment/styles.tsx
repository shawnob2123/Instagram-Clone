import { StyleSheet, Text, View } from 'react-native';
import fonts from '../../theme/fonts';
import sizes from '../../theme/fonts';
import weight from '../../theme/fonts';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
   comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    commentText: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
    lineHeight: 18

  },
  icon: {
    marginHorizontal: 5,
  },
  userName: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weight.bold,
    color: colors.black,
  }
})