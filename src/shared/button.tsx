import React from 'react';
import { Button as NativeButton, ButtonProps } from 'react-native-elements'

export default function Button(props: ButtonProps) {
  return (
    <NativeButton {...props} />
  )
};
