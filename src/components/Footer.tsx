import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <footer>
            <Container>
                <Typography variant="body2" color="textSecondary" align="center">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;