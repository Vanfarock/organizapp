import React from 'react';
import { Button as NativeButton, ButtonProps } from 'react-native-elements'

export default function Button(props: ButtonProps) {
  return (
    <NativeButton buttonStyle={{padding: 0}} {...props} />
  )
};
