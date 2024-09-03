import { MenuItem, Select, TextField, Typography, InputLabel, Button, Checkbox, Container, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { addAnalysis, addRecord, cntRemaining } from '../database/database';
// import firebase from 'firebase/compat/app';
import { allType, allWay } from './constant';


export function PayForm() {

    const [name, setName] = React.useState('');
    const [money, setMoney] = React.useState('');
    const [ty, setTy] = React.useState('');
    const [payWay, setPayWay] = React.useState('');

    const [checked, setCheck] = React.useState(false);
    const [money2, setMoney2] = React.useState('');
    const [receiveWay, setReceiveWay] = React.useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleMoneyChange = (event) => {
        setMoney(Number(event.target.value));
    };
    const handleTypeChange = (event) => {
        setTy(event.target.value);
    };
    const handlePayWayChange = (event) => {
        setPayWay(event.target.value);
    };
    const handleCheck = (event) => {
        setCheck(event.target.checked);
    };

    const handleMoneyChange2 = (event) => {
        setMoney2(Number(event.target.value));
    };
    const handleReceiveWayChange = (event) => {
        setReceiveWay(event.target.value);
    };

    const handleSubmit = () => {
        const nowTime = Date.now();
        const timeStr = new Date(nowTime);
        if (!name) {
            alert('商品名稱不得為空');
            return;
        }
        if (!money) {
            alert('金額不得為空');
            return;
        }
        if (!type) {
            alert('類型不得為空');
            return;
        }
        if (!payWay) {
            alert('付款方式不得為空');
            return;
        }
        if (checked && !money2) {
            alert('代付金額不得為空');
            return;
        }
        if (checked && !receiveWay) {
            alert('收款方式不得為空');
            return;
        }
        console.log('submit:', name, money, ty, payWay, timeStr.toLocaleString());
        if (checked) console.log('other:', money2, receiveWay);

        if (checked) {
            addRecord(name, money, ty, '', payWay, nowTime);
            addRecord(name + "_收款", money2, ty, receiveWay, '', nowTime);
            addAnalysis(money - money2, ty, nowTime);
        } else {
            Promise.all([
                addRecord(name, money, ty, '', payWay, nowTime),
                addAnalysis(money, ty, nowTime)
            ]).then(() => {
                alert('成功新增一筆紀錄');
                // Send your message or handle the next step here
            }).catch(err => {
                console.error('Error in Firebase operations:', err);
            });
        }
    }



    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                <Typography
                >
                    付款
                </Typography>
                <InputLabel id='name-label'>商品名稱</InputLabel>
                <TextField
                    value={name}
                    type='text'
                    onChange={handleNameChange}
                    labelid='name-label'
                />

                <InputLabel id='money-label'>金額</InputLabel>
                <TextField
                    value={money}
                    type='text'
                    onChange={handleMoneyChange}
                    labelid='money-label'
                />
                <InputLabel id="type-label">類型</InputLabel>
                <Select
                    labelid="type-label"
                    id="type"
                    value={ty}
                    label="type"
                    onChange={handleTypeChange}
                >
                    {
                        allType.map((ele, id) => {
                            return (
                                <MenuItem value={ele.eng} key={id}>{ele.chi}</MenuItem>
                            )
                        })
                    }
                </Select>
                <InputLabel id="pay-way-label">付款方式</InputLabel>
                <Select
                    labelid="pay-way-label"
                    id="pay-way"
                    value={payWay}
                    label="pay-way"
                    onChange={handlePayWayChange}
                >
                    {
                        allWay.map((ele, id) => {
                            return (
                                <MenuItem value={ele.eng} key={id}>{ele.chi}</MenuItem>
                            )
                        })
                    }
                </Select>
                <Checkbox
                    checked={checked}
                    onChange={handleCheck}
                    label='代付'
                />
                {
                    checked && (
                        <>
                            <InputLabel id='money2-label'>代付金額</InputLabel>
                            <TextField
                                value={money2}
                                type='text'
                                onChange={handleMoneyChange2}
                                labelid='money2-label'
                            />

                            <InputLabel id="receive-way-label">收款方式</InputLabel>
                            <Select
                                labelid="receive-way-label"
                                id="receive-way"
                                value={receiveWay}
                                label="receive-way"
                                onChange={handleReceiveWayChange}
                            >
                                {
                                    allWay.map((ele, id) => {
                                        return (
                                            <MenuItem value={ele.eng} key={id}>{ele.chi}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </>
                    )
                }
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Link to="..">
                        <Button>
                            返回
                        </Button>
                    </Link>
                    <Button
                        onClick={handleSubmit}
                    >
                        送出
                    </Button>
                </Box>

            </Container>
        </>
    );
}