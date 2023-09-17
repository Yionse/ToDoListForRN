import React from 'react';
import {Text, Box} from 'native-base';

type Props = {
  title: string;
  length: number;
};

export default function HeaderTitle({title, length}: Props) {
  return (
    <>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        borderColor="#fff"
        borderStyle="solid"
        borderBottomWidth={1}
        onTouchStart={() => console.log(111)}>
        <Text fontSize={20} fontWeight="bold" my={3}>
          {title}
        </Text>
        <Text
          fontSize={20}
          fontWeight="bold"
          my={3}
          px={5}
          bg="#eee"
          textAlign="center"
          borderRadius="full">
          {length}
        </Text>
      </Box>
    </>
  );
}
