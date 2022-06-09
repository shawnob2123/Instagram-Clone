import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import FeedPost from '../../components/FeedPost/FeedPost';
import posts from '../../assets/data/posts.json';


const HomeScreen = () => {

  return (
    
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedPost post={item} />}
      />
  )
};



export default HomeScreen;