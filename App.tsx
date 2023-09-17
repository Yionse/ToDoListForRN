import React, {useState, useEffect} from 'react';
import {NativeBaseProvider, View} from 'native-base';
import Header from './src/pages/Header';
import Main from './src/pages/Main';

export type TThings = {
  id: string;
  things: string;
};

export type TData = {
  running: TThings[];
  finish: TThings[];
};

const App = () => {
  const initialize: TData = {
    running: [],
    finish: [],
  };
  const [data, setData] = useState(initialize);

  const onAdd = (things: string) => {
    const id = +new Date() + '';
    setData({
      ...data,
      running: [...data.running, {id, things}],
    });
  };

  return (
    <NativeBaseProvider>
      <View bg="#cdcdcd" flex={1} padding={10}>
        <Header onAdd={onAdd} />
        <Main data={data} setData={setData} />
      </View>
    </NativeBaseProvider>
  );
};
export default App;
