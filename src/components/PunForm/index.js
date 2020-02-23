import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default function PunForm() {
  const [text, setText] = React.useState('');

  const handleSubmit = () => {
    // This is a temporary URL
    fetch('http://9e7891bc.ngrok.io/api/puns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    setText('');
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10}}>
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        style={{ height: 100, fontSize: 20 }}
        placeholder="Enter pun"
        multiline
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        buttonStyle={{ backgroundColor: 'maroon', width: 100 }}
      />
    </View>
  );
}
