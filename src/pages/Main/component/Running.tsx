import React from 'react';
import {Box} from 'native-base';
import Title from './Title';
import {TThings} from '../../../App';
import AThing from './AThing';

type Props = {
  running: TThings[];
  onChangeCheckbox: (isRunning: boolean, item: TThings) => void;
};

export default function Running({running, onChangeCheckbox}: Props) {
  return (
    <>
      <Box>
        <Title title="正在进行" length={running.length} />
        {running.map(item => (
          <AThing
            item={item}
            isChecked={false}
            key={item.id}
            onChangeCheckbox={onChangeCheckbox}
          />
        ))}
      </Box>
    </>
  );
}
