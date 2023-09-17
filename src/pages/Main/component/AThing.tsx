import {Box, Checkbox, Text, VStack} from 'native-base';
import React from 'react';
import {TThings} from '../../../App';

export default function AThing({
  item,
  isChecked = true,
  onChangeCheckbox,
}: {
  item: TThings;
  isChecked?: boolean;
  onChangeCheckbox: (isRunning: boolean, item: TThings) => void;
}) {
  return (
    <>
      <Box
        flexDirection="row"
        borderLeftWidth={10}
        borderColor="#06b6d4"
        borderStyle="solid"
        my={3}
        opacity={isChecked ? '0.4' : '1'}>
        <Checkbox
          value={item.things}
          height={10}
          mx={2}
          accessibilityLabel="Checkbox"
          defaultIsChecked={isChecked}
          onChange={() => onChangeCheckbox(!isChecked, item)}
          flex={1}
        />
        <Text fontSize="lg" strikeThrough={isChecked} flex={10} lineHeight={40}>
          {item.things}
        </Text>
      </Box>
    </>
  );
}
