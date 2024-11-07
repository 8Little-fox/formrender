import React from 'react';
import Generator from 'fr-generator';
import CaptchaInput from './widgets/template/src/index'

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '简单输入框',
      type: 'string',
    },
  },
};

const NewWidget = ({ value = 0, onChange, ...elesProps}) => {
  console.log('songzc-elesProps', elesProps);
  return (<button>测试</button>)
  // return <Button type='primary'
  //   {...elesProps}
  //   onClick={() => {
  //     // message.success(value + 1);
  //     onChange(value + 1);
  //   }}>
  //     111121212
  //   {value}
  // </Button>;
};
const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} widgets={{CaptchaInput}} />
    </div>
  );
};

export default Demo;
