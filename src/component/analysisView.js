import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { allWay } from './constant';
import { getTotalMoney } from '../database/database';

export function AnalysisView() {
    const [totalMoney, setTM] = React.useState({});
    useEffect(() => {
    }, []);
    return (
        <>
            <h1>View Analysis</h1>
        </>
    )
}