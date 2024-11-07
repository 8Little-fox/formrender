import React from 'react';
import { Input, Button, Space } from 'antd';
const CaptchaInput = (props: any) => {
  const { value, onChange } = props;
  console.log('widget props:', props);

  const sendCaptcha = (phone: string) => {
    console.log('send captcha to:', phone);
  }

  return (
    <Space>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="请输入手机号"
      />
      <Button onClick={() => sendCaptcha(value)}>发送验证码</Button>
    </Space>
  );
};
export default CaptchaInput;
