import { Text, View, Image, } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import Comment from '../Comment/Comment';
import {IPost} from '../../types/Models';

interface IFeedPost {
  post: IPost
}


const FeedPost = ({ post }: IFeedPost) => {
  
  return (
    <View style={styles.post}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          style={styles.userAvatar}
          source={{uri: post.user.image}}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
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
          uri: post.image,
        }}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign name={'hearto'} size={24} style={styles.icon} />
          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />
          <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
        </View>
        <Text style={styles.likedByText}>Liked by <Text style={styles.likedByOthers}>yamotha</Text> and <Text style={styles.likedByOthers}>{post.nofLikes} others</Text></Text>
         {/* post description */}
      <Text style={styles.postDescription}>
          <Text style={styles.userName}>{post.user.username}</Text> {''}
          {post.description}
        </Text>

        {/* COMMENTS */}
        <Text style={styles.viewComments}>View {post.nofComments} comments</Text>

        {post.comments.map((comment: IComment) => (
           <Comment
            comment={comment}
            key={comment.id}
          />
        ))}
        
         
        {/* posted date */}
        <Text style={styles.date}>{post.createdAt}</Text>
      </View>
     
    </View>
  );
};

export default FeedPost;
