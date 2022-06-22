import React, {useRef} from 'react';
import {Form, Input, Button, message} from 'antd';
import styles from './index.module.css';

const Login: React.FC = () => {
    const myRef: any = useRef();

    const onSubmit = (e: any) => {
        e.preventDefault();
        myRef.current.validateFields().then((res: any) => {
            console.log(res)
        }).catch((err: any) => {
            console.log(err)
            message.error('登录失败!').then(r =>console.log(r,'123132') );
        })
    }

    return (
        <div className={styles.loginWrap}>
            <div className={styles.msLogin}>
                <div className={styles.msTitle}>后台管理系统</div>
                <Form className={styles.msContent} ref={myRef}
                      initialValues={{
                          'username': 'admin',
                          'password': '1234',
                      }}>
                    <Form.Item name="username" rules={[{required: true, message: '请输入用户名'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
                        <Input type="password"/>
                    </Form.Item>
                    <div className={styles.loginBtn}>
                        <Button type="primary" onClick={onSubmit}>登录</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default Login;
