import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import DownvoteButton from './DownvoteButton';
import SentimentIndicator from './SentimentIndicator';

export default function Pun({ pun }) {
  return (
    <Card>
      <View>
        <Text h4 h4Style={{ fontSize: 20 }}>{pun.text}</Text>
        <Text>Posted: {pun.posted}</Text>
        <DownvoteButton pun={pun} />
        <SentimentIndicator pun={pun} />
      </View>
    </Card>
  );
}
