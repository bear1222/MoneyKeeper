import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, Box, Typography, Container } from '@mui/material';

import { RecordView } from './src/component/recordView';
import { MainForm } from './src/component/mainForm';
import { PayForm } from './src/component/payForm';
import { TransferForm } from './src/component/transferForm';

function MainPage() {
    return (
        <Container
            sx={{
                width: '100vw',
                height: '100vh',
                // overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
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
                    sx={{
                        flex: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h1" gutterBottom>
                        Money Keeper
                    </Typography>

                </Box>
                <Box sx={{ flex: 2 }}>
                    <Link to="/viewRecord">
                        <Button>
                            View
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ flex: 2 }}>
                    <Link to="/form">
                        <Button>
                            Add
                        </Button>
                    </Link>
                </Box>
            </Box >
        </Container>
    );
}

export class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/viewRecord" element={<RecordView />} />
                    <Route path="/form" element={<MainForm />} >
                        <Route path="pay" element={<PayForm />} />
                        <Route path="transfer" element={<TransferForm />} />
                    </Route>
                </Routes>
            </Router>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);