import React from "react";
import { createBrowserRouter } from "react-router-dom";
import StudentCreationPage from "../../pages/Student/StudentCreationPage";
import NavBar from "../common/NavBar";
import { Outlet } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/navbar/navBarSlice";
import StudentListPage from "../../pages/Student/StudentListPage";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {

    const collapsed = useSelector(state => state.navbar.collapsed);
    const dispatch = useDispatch();
    const toggleHandler = () => dispatch(toggleNavbar())

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible  collapsed={collapsed}>
                <NavBar />
            </Sider>
            <Layout className="">
                <Header className=' p-0 bg-white' >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={toggleHandler}
                        className=' text-base w-16 h-16'
                    />
                </Header>
                <Content className=" mx-6 my-4 p-6 bg-white min-h-72">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/student",
                children: [
                    {
                        path: "create",
                        element: <StudentCreationPage />
                    },
                    {
                        path:"getAllSrudent",
                        element:<StudentListPage/>
                    }
                ]
            },
        ]
    },

]);

export default router;