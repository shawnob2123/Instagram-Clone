import { StyleSheet } from 'react-native';
import fonts from '../../theme/fonts';
import sizes from '../../theme/fonts';
import weight from '../../theme/fonts';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  post: {
    marginVertical: 30,
  },
  userPost: {
    width: '100%',
    aspectRatio: 1,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
  likedByText: {
    fontSize: fonts.sizes.sm,
    color: colors.black,
    marginTop: 5,
  },
  footer: {
    padding: 10,
  },
  likedByOthers: {
    fontWeight: fonts.weight.bold,
    color: colors.black,

  },
  postDescription: {
    fontSize: fonts.sizes.sm,
    color: colors.black,
    lineHeight: 18,
  },
 
  viewComments: {
    fontSize: fonts.sizes.md,
    color: colors.grayDark,
    paddingTop: 1,
    paddingBottom: 1,
  },

  date: {
    fontSize: fonts.sizes.md,
    color: colors.grayDark,
    paddingTop: 2,
  }
});