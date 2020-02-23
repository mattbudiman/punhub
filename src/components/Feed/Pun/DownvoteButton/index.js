import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function DownvoteButton({ pun }) {
  const handleDownvote = () => {
    // This is a temporary URL
    fetch(`http://9e7891bc.ngrok.io/api/puns/${pun.id}/downvote`, {
      method: 'POST'
    });
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon
        name="thumb-down"
        onPress={handleDownvote}
      />
      <Text>{pun.downvotes}</Text>
    </View>
  );
}
