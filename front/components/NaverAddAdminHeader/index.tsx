import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HedaerBox from '../HedaerBox';
import HedaerBox2 from '../HedaerBox2';
import HedaerBox3 from '../HedaerBox3';


type Props = {}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));


const NaverAddAdminHeader = (props: Props) => {
    return (
        
        <div style={{display:"flex", justifyContent:"space-around", gap: "0px"}}>

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