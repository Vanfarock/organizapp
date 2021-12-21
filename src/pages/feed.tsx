import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import styled from 'styled-components/native';
import Post from '../components/post';
import { getPosts, IPost } from '../services/feedService';

const FeedContainer = styled.View`
  flex: 1;

  margin-top: 30px;
`;

export default function Feed() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const renderItem: ListRenderItem<IPost> = ({ item }: { item: IPost }) => (
    <Post post={item} />
  )

  return (
    <FeedContainer>
      <FlatList<IPost>
        data={posts}
        renderItem={renderItem}
        keyExtractor={(post: IPost) => post.id}
      />
    </FeedContainer>
  )
}
