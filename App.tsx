import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import sizes from './src/theme/fonts';
import weight from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from './src/theme/fonts';
const App = () => {
  return (
    <View style={styles.post}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          style={styles.userAvatar}
          source={{uri: 'https://i.pravatar.cc/1200'}}
        />
        <Text style={styles.userName}>shawnob_23</Text>
        <Entypo
          name="dots-three-horizontal"
          size={20}
          style={styles.threeDots}
        />
      </View>
      {/* Image */}
      <Image
        style={styles.userPost}
        source={{
          uri: 'https://www.si.com/.image/t_share/MTg5MTE2NzAwODYyNDU3NjI0/kenny-pickett-steelers-site.png',
        }}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign name={'hearto'} size={24} style={styles.icon} />
          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />
          <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
        </View>
        <Text style={styles.likedByText}>Liked by <Text style={styles.likedByOthers}>yamotha</Text> and <Text style={styles.likedByOthers}>69 others</Text></Text>
         {/* post description */}
      <Text style={styles.postDescription}>
          <Text style={styles.userName}>shawnob_23</Text> {''}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod  ipsum eu nisi consectetur, eget
          tincidunt nisl sagittis. Nullam euismod, nisl eu consectetur consectetur, nisi nisl consectetur nisl,
        </Text>
        {/* COMMENTS */}
        <View style={styles.comments}>
          <Text style={styles.commentText}>
          <Text style={styles.userName}>shawnob_23</Text> {''}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod ipsum.
          </Text>
          <AntDesign name={'hearto'} size={14} style={styles.icon} />
          </View>
      </View>
     
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  post: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
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
    marginHorizontal:5,
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
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1

  }
});
