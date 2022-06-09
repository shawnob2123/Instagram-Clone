import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { IComment } from '../../types/Models';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comments}>
      <Text style={styles.commentText}>
        <Text style={styles.userName}>{comment.user.username}</Text> {''}
        {comment.comment}
      </Text>

      <AntDesign name={'hearto'} size={14} style={styles.icon} />
    </View>
  );
};

export default Comment;
