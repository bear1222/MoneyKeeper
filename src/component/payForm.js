import { MenuItem, Select, TextField, Typography, InputLabel, Button, Checkbox } from '@mui/material';
import React from 'react';


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
        setMoney(event.target.value);
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
        setMoney2(event.target.value);
    };
    const handleReceiveWayChange = (event) => {
        setReceiveWay(event.target.value);
    };

    const handleSubmit = () => {
        console.log('submit:', name, money, ty, payWay);
    }



    return (
        <>
            <Typography
            >
                付款
            </Typography>
            <TextField
                value={name}
                type='text'
                onChange={handleNameChange}
            >
                商品名稱
            </TextField>
            <TextField
                value={money}
                type='text'
                onChange={handleMoneyChange}
            >
                金額
            </TextField>
            <InputLabel id="type-label">類型</InputLabel>
            <Select
                labelId="type-label"
                id="type"
                value={ty}
                label="type"
                onChange={handleTypeChange}
            >
                <MenuItem value={'food'}>食物(三餐)</MenuItem>
                <MenuItem value={'food_other'}>食物(其他)</MenuItem>
                <MenuItem value={'drink'}>飲料</MenuItem>
                <MenuItem value={'clothes'}>衣服</MenuItem>
                <MenuItem value={'daily_use'}>生活用品</MenuItem>
                <MenuItem value={'entertainment'}>娛樂</MenuItem>
                <MenuItem value={'traffic'}>交通</MenuItem>
                <MenuItem value={'other'}>其他</MenuItem>
            </Select>
            <InputLabel id="pay-way-label">付款方式</InputLabel>
            <Select
                labelId="pay-way-label"
                id="pay-way"
                value={payWay}
                label="pay-way"
                onChange={handlePayWayChange}
            >
                <MenuItem value={'cash'}>現金</MenuItem>
                <MenuItem value={'CTBC_account'}>中信帳戶</MenuItem>
                <MenuItem value={'PO_account'}>郵局帳戶</MenuItem>
                <MenuItem value={'CTBC_card'}>中信信用卡</MenuItem>
                <MenuItem value={'student_card'}>學生證</MenuItem>
            </Select>
            <Checkbox
                checked={checked}
                onChange={handleCheck}
                label='代付'
            />
            {
                checked && (
                    <>
                        <TextField
                            value={money2}
                            type='text'
                            onChange={handleMoneyChange2}
                        >
                            代付金額
                        </TextField>
                        <InputLabel id="receive-way-label">收款方式</InputLabel>
                        <Select
                            labelId="receive-way-label"
                            id="receive-way"
                            value={receiveWay}
                            label="receive-way"
                            onChange={handleReceiveWayChange}
                        >
                            <MenuItem value={'cash'}>現金</MenuItem>
                            <MenuItem value={'CTBC_account'}>中信帳戶</MenuItem>
                            <MenuItem value={'PO_account'}>郵局帳戶</MenuItem>
                            <MenuItem value={'CTBC_card'}>中信信用卡</MenuItem>
                            <MenuItem value={'student_card'}>學生證</MenuItem>
                        </Select>
                    </>
                )
            }
            <Button
                onClick={handleSubmit}
            >
                送出
            </Button>
        </>
    );
}