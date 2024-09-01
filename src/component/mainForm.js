import React from 'react';
import ReactDOM from 'react-dom/client';

import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Box, Typography, Container } from '@mui/material';

export function MainForm() {
    const location = useLocation(); // Get the current location

    // Check if the path includes /pay or /transfer to conditionally render the content
    const isFormRoute = location.pathname.includes('pay') || location.pathname.includes('transfer');

    return (
        <>
            {!isFormRoute && (
                <Container
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '60%',
                            // overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{ flex: 4 }}
                        >
                            <Link to="pay">
                                <Button>
                                    付款
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            sx={{ flex: 4 }}
                        >
                            <Link to="transfer">
                                <Button>
                                    轉帳
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            )}
            <Outlet />
        </>

    );
}