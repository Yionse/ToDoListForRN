import React from 'react';
import {Box, View} from 'native-base';
import Title from './Title';
import {TThings} from '../../../App';
import AThing from './AThing';

type Props = {
  finish: TThings[];
  onChangeCheckBox: (isRunning: boolean, item: TThings) => void;
};

export default function Finish({finish, onChangeCheckBox}: Props) {
  return (
    <>
      <Box>
        <Title title="已经完成" length={finish.length} />
        <View>
          {finish.map(item => (
            <AThing
              item={item}
              key={item.id}
              onChangeCheckbox={onChangeCheckBox}
            />
          ))}
        </View>
      </Box>
    </>
  );
}
