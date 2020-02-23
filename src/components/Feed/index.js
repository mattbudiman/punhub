import React from 'react';
import { View, FlatList } from 'react-native';
import Pun from './Pun';

export default function Feed() {
  const [puns, setPuns] = React.useState([]);

  React.useEffect(() => {
    const id = setInterval(() => {
      // This is a temporary URL
      fetch('http://9e7891bc.ngrok.io/api/puns')
        .then(res => res.json())
        .then(({ puns }) => setPuns(puns))
        .catch(() => {});
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <View>
      <FlatList
        data={puns}
        renderItem={({ item }) => <Pun pun={item} />}
        style={{ height: 425 }}
      />
    </View>
  );
}
