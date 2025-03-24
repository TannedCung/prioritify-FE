import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Application
                </Typography>
                <Button color="inherit">
                    <Link href="/" passHref>
                        Home
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link href="/about" passHref>
                        About
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;