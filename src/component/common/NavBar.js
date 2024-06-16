import React from 'react';
import {  UploadOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import {  Layout, Menu} from 'antd';
import { useNavigate } from "react-router-dom";

function NavBar() {

    const navigate=useNavigate();

    const navigationHandler=e=>navigate(e.key)

    return (
        <>
            <Layout className='h-screen'>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        className='h-screen'
                        onClick={navigationHandler}
                        items={[
                            {
                                key: 'student',
                                icon: <UserOutlined />,
                                label: 'Student',
                                children:[
                                    {
                                        key: 'student/create',
                                        label: 'Create Student',
                                    },
                                    {
                                        key: 'student/getAllSrudent',
                                        label: 'Get all Student',
                                        
                                    },
                                ]
                            },
                            {
                                key: '5',
                                icon: <VideoCameraOutlined />,
                                label: 'Teacher',
                            },
                        ]}
                    />
            </Layout>
        </>
    )
}

export default NavBar



