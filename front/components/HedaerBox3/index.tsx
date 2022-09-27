import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

type Props = {}


function HedaerBox3({ }: Props) {
    return (
        <div >
            <Grid 
                container 
                rowSpacing={0} 
                columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            >
                <Grid item xs={6}>
                    <Item>클릭수</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>31</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>3</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>@view</Item>
                </Grid>
            </Grid>
        </div>
    )
}

export default HedaerBox3