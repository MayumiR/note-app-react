import Card from "antd/es/card/Card";
import {Form} from "antd";
import Input from "antd/es/input/Input";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import Checkbox from "antd/es/checkbox/Checkbox";
import Button from "@mui/material/Button";
import Modal from "antd/es/modal/Modal";
import Password from "antd/es/input/Password";
import { Link } from 'react-router-dom';
import "./Login.css";
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

export default function Login() {




    return (
        <div className="login-form">

            <Card className="card-style">

                <Form
                    name="normal_login"
                    className="form-login"
                    initialValues={{remember: true}}
                    onFinish={''}
                >
                    <div className="user-logo">
                        {/*<img src={user}/>*/}
                    </div>
                    <br/>
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: 'Please input your Username!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>


                    </Form.Item>

                    <Form.Item>
                        <Link to='note'><Button variant="contained" className="login-form-button">
                            Log in
                        </Button> </Link>
                        {/*<Link to="login"><a href="">register now!</a></Link>*/}
                        <a type="primary"  style={{cursor: "pointer"}}>register now!</a>
                    </Form.Item>
                </Form>
            </Card>

            <div><Modal

                title="Register Now"
                onOk={''}
                onCancel={''}
                width={800}
                footer={[
                    <Button key="back" onClick={''}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={''} htmlType="submit">
                        Submit
                    </Button>,

                ]}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={''}
                    onFinishFailed={''}
                >
                    <Form.Item
                        label="User Name"
                        name="Name"
                        /*  rules={[{ required: true, message: 'Please add customer name!' }]}*/
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="ID Number"
                        name="sets"
                        /*rules={[{ required: true, message: 'Please add vehicle number!' }]}*/
                    >
                        <Input/>
                    </Form.Item>


                    <Form.Item
                        label="Password"
                        name="Namerrrr"
                        /*  rules={[{ required: true, message: 'Please add customer name!' }]}*/
                    >
                        <Password/>
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="Namerrsd"
                        /*  rules={[{ required: true, message: 'Please add customer name!' }]}*/
                    >
                        <Password/>
                    </Form.Item>
                </Form>
            </Modal></div>
        </div>
    );
}