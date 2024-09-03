import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { allWay } from './constant';
import { getTotalMoney } from '../database/database';

export function DataView() {
    const [totalMoney, setTM] = React.useState({});
    useEffect(() => {
        const unsubscribe = getTotalMoney((ret) => {
            console.log('Updated totalMoney:', ret);
            setTM({ ...ret });
        });

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <>
            <h1>ViewData</h1>
            {
                allWay.map((ele, id) => {
                    return (
                        <div key={id}>
                            <Typography> {ele.chi} </Typography>
                            <Typography> {totalMoney[ele.eng]} </Typography>
                        </div>
                    )
                })
            }
            <Link to="..">
                <Button>
                    返回
                </Button>
            </Link>
        </>
    )
}