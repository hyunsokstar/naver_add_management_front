import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    height:"40px",
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

type Props = {}

function HedaerBox2({ }: Props) {
    return (
        <div >
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                sx={{ width: "200px", border: "0px solid blue" }}
            >
                <Box gridColumn="span 8">
                    <Item>광고 클릭수 </Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item> </Item>
                </Box>
                <Box gridColumn="span 8">
                    <Item>31</Item>
                </Box>
                <Box gridColumn="span 4">
                    <Item>@view</Item>
                </Box>
            </Box>
        </div>
    )
}

export default HedaerBox2