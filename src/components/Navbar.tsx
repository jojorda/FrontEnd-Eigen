import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="fixed-top px-4">
      <Menu theme="dark" mode="horizontal" style={{marginTop:"10px"}}>
        <Menu.Item>
          <Link to="https://www.bbc.com/">
            <img src="/R.png" alt="Logo" style={{ width: '120px', height: '32px', marginRight:'1250px', padding: '' }} />
          </Link>
        </Menu.Item>
        <div style={{display: 'flex', justifyContent: 'center'}} >
        <Menu.Item key="1">
          <Link to="/">Beranda</Link>
        </Menu.Item>
        </div> 
      </Menu>
    </Header>
  );
};

export default Navbar;
