import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Container>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    );
};

export default Layout;