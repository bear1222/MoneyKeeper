import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
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
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                allWay.map((ele, id) => {
                                    return (
                                        <TableCell key={ele.eng}>{ele.chi}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {
                                allWay.map((ele, id) => {
                                    return (
                                        <TableCell key={ele.eng}>{totalMoney[ele.eng]}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Outlet />
            <Link to="record">
                <Button>
                    Record
                </Button>
            </Link>
            <Link to="analysis">
                <Button>
                    Analysis
                </Button>
            </Link>
            <Link to="..">
                <Button>
                    返回
                </Button>
            </Link>
        </>
    )
}