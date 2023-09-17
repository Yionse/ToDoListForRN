import React from 'react';
import {Box, ScrollView} from 'native-base';
import Running from './component/Running';
import Finish from './component/Finish';
import {TData, TThings} from '../../App';

export default function Main({
  data,
  setData,
}: {
  data: TData;
  setData: (data: TData) => void;
}) {
  const onChangeCheckbox = (isRunning: boolean, item: TThings) => {
    const currentArray = isRunning ? data.running : data.finish;
    const newArray = isRunning ? data.finish : data.running;

    // 对原数组中的数据做删除操作
    const idx = currentArray.findIndex(i => i.id === item.id);
    newArray.push(currentArray.splice(idx, 1)[0]);
    setData({
      running: isRunning ? currentArray : newArray,
      finish: isRunning ? newArray : currentArray,
    });
  };

  return (
    <>
      <Box>
        <ScrollView
          height={500}
          marginTop={8}
          showsVerticalScrollIndicator={false}>
          <Running running={data.running} onChangeCheckbox={onChangeCheckbox} />
          <Finish finish={data.finish} onChangeCheckBox={onChangeCheckbox} />
        </ScrollView>
      </Box>
    </>
  );
}
