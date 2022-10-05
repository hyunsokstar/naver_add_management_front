import React, { useEffect, useState, useCallback } from 'react'
import { styled } from '@mui/material/styles';
import { IExcelHeaderType } from "../../types/type";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HedaerBox from '../HedaerBox';
import HedaerBox2 from '../HedaerBox2';
import HedaerBox3 from '../HedaerBox3';
import axios from "axios";
import api from "../../utils/api"

type Props = {}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

const columns = [
    { key: 'clkCnt', name: 'clkCnt' },
    { key: 'cpc', name: 'cpc' },
    { key: 'dateStart', name: 'dateStart' },
    { key: 'dateEnd', name: 'dateEnd' },
    { key: 'impCnt', name: 'impCnt' },
    { key: 'salesAmt', name: 'salesAmt' }
];




const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
];

const NaverAddAdminHeader = (props: Props) => {

    useEffect(() => {
        // getDataFromNaver()
    }, [])

    return (

        <div style={{ display: "flex", justifyContent: "space-around", gap: "0px" }}>

            <HedaerBox />

            <HedaerBox2 />

            <HedaerBox3 />

            {/* <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                sx={{ width: "200px", border: "0px solid blue" }}
            >
                <Box gridColumn="span 12">
                    <Item>방문자 </Item>
                </Box>
                <Box gridColumn="span 8">
                    <Item>374</Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item>@view</Item>
                </Box>
            </Box> */}



            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                sx={{ width: "200px", border: "0px solid blue" }}
            >
                <Box gridColumn="span 12">
                    <Item>광고 클릭수 </Item>
                </Box>
                <Box gridColumn="span 8">
                    <Item>31</Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item>@view</Item>
                </Box>
            </Box>

            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                sx={{ width: "200px", border: "0px solid blue" }}
            >
                <Box gridColumn="span 12">
                    <Item>3회 이상 클릭한 ip </Item>
                </Box>
                <Box gridColumn="span 8">
                    <Item>0</Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item>@view</Item>
                </Box>
            </Box>

        </div>
    )
}

export default NaverAddAdminHeader