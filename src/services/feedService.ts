import { ImageSourcePropType } from 'react-native';
import PostType from './../enum/postType';

export interface IPost {
  id: string,
  image?: ImageSourcePropType;
  profilePicture: ImageSourcePropType;
  nickname: string,
  identifier: string,
  text?: string;
  type: PostType;
}

export function getPosts(): IPost[] {
  const posts: IPost[] = [
    {
      id: '1',
      image: require('../assets/images/koala.jpg'),
      profilePicture: require('../assets/images/koala.jpg'),
      nickname: "Koala",
      identifier: "koalito",
      type: PostType.Investment,
    },
    {
      id: '2',
      image: require('../assets/images/koala.jpg'),
      profilePicture: require('../assets/images/koala.jpg'),
      nickname: "Koala",
      identifier: "koalito",
      text: 'Vivamus',
      type: PostType.Calendar,
    },
    {
      id: '3',
      image: require('../assets/images/koala.jpg'),
      profilePicture: require('../assets/images/koala.jpg'),
      nickname: "Koala",
      identifier: "koalito",
      text: 'Vivamus eget augue tempus',
      type: PostType.Home,
    },
    {
      id: '4',
      image: require('../assets/images/koala.jpg'),
      profilePicture: require('../assets/images/koala.jpg'),
      nickname: "Koala",
      identifier: "koalito",
      text: 'Vivamus eget augue tempus',
      type: PostType.Investment,
    },
  ];

  return posts;
}
