import React from 'react';
import styled, { IPalette } from 'styled-components/native';
import Text from '../shared/text';
import { IPost } from '../services/feedService';

interface PostTypeProps {
  type: string;
}

const PostContainer = styled.View<PostTypeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  
  background-color: ${props => (props.theme[props.type + 'Color'] as IPalette).main};
  
  margin-bottom: 15px;
  
  overflow: hidden;
  border-radius: 1px;
`;

const PostImage = styled.Image`
  display: block;
  width: 100%;
  height: 200px;

  border-radius: 3px;
`;

const PostContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;

  padding: 10px;
`;

const ProfilePicture = styled.Image`
  display: block;
  
  width: 40px;
  height: 40px;

  margin-right: 15px;
  border-radius: 50%;
`;

const PostInfo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  flex: 1;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const UserNickname = styled.Text`
  color: ${props => props.theme.backgroundColor.main};
  font-weight: bold;
  margin-right: 5px;
`;

const UserIdentifier = styled.Text`
  color: ${props => props.theme.backgroundColor.main}90;
  font-weight: bold;
`;

const PostText = styled(Text) <PostTypeProps>`
  font-size: 14px;
  
  color: ${props => (props.theme[props.type + 'Color'] as IPalette).contrast};
`;

interface PostProps {
  post: IPost
}

export default function Post({ post }: PostProps) {
  return (
    <PostContainer type={post.type as string}>
      <PostContent>
        <ProfilePicture source={post.profilePicture} />
        <PostInfo>
          <UserInfo>
            <UserNickname>{post.nickname}</UserNickname>
            <UserIdentifier>@{post.identifier}</UserIdentifier>
          </UserInfo>
          {post.text && <PostText type={post.type as string}>{post.text}</PostText>}
          {post.image && <PostImage source={post.image} />}
        </PostInfo>
      </PostContent>
    </PostContainer>
  )
}
