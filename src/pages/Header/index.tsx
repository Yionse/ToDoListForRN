import React, {useState} from 'react';
import {Box, Button, Input, Text, View} from 'native-base';

export default function Header({onAdd}: {onAdd: (things: string) => void}) {
  const [text, setText] = useState('');
  return (
    <>
      <Box>
        <Text
          fontSize={35}
          color={'white'}
          textAlign="center"
          my={7}
          fontWeight="bold">
          ToDoList
        </Text>
        <View flexDirection="row">
          <Input
            placeholder="请输入一个任务"
            flex={3}
            onChangeText={setText}
            value={text}
          />
          <Button
            flex={1}
            mx={2}
            onPress={() => {
              if (text) {
                onAdd(text);
                setText('');
              }
            }}>
            添加
          </Button>
        </View>
      </Box>
    </>
  );
}
