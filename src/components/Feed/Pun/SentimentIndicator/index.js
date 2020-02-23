import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

function getAttributes(sentiment) {
  if (sentiment > .5) {
    return {
      icon: {
        name: 'sentiment-satisfied',
        color: 'green'
      },
      text: 'Positive'
    };
  } else if (sentiment > -.5) {
    return {
      icon: {
        name: 'sentiment-neutral',
        color: 'gray'
      },
      text: 'Neutral'
    };
  } else {
    return {
      icon: {
        name: 'sentiment-dissatisfied',
        color: 'red'
      },
      text: 'Negative'
    }
  }
}

export default function SentimentIndicator({ pun }) {
  const { icon, text } = getAttributes(pun.sentiment);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon
        name={icon.name}
        color={icon.color}
      />
      <Text>{text}</Text>
    </View>
  );
}
