import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { allWay } from './constant';
import { getAllRecord, getTotalMoney } from '../database/database';

export function RecordView() {
    const [allRecords, setRec] = useState([]);
    const [recordsFilter, setRF] = useState([]);
    const [filter, setFilter] = useState({});

    const chooseRecords = () => {
        setRF(allRecords);
        console.log('records after filter:', recordsFilter);

    }
    useEffect(() => {
        const unsubscribe = getAllRecord((newRec) => {
            console.log('new Record:', newRec);
            setRec(prevRecords => [...prevRecords, newRec]);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    useEffect(() => {
        console.log('all records:', allRecords);
        chooseRecords();
    }, [allRecords, filter]);

    return (
        <>
            <h1>View Record</h1>
            {
                recordsFilter.map((ele, id) => {
                    return <Typography key={id}> {ele.name + ' ' + ele.money}</Typography>;
                })
            }
        </>
    )
}