import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

type Props = {}

function HedaerBox({ }: Props) {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "200px", border: "1px solid black", height:"100px" }}>
            <div style={{ height: "50px", display: "flex", alignItems: "flex-end", paddingLeft: "10px" }}>
                방문자
            </div>
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "flex-end", paddingLeft: "10px", border: "1px solid black", flex: 3 }}>
                    12
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", paddingLeft: "10px", border: "1px solid black", height: "50px", flex: 1 }}>
                    34
                </div>
            </div>
        </div>
    )
}

export default HedaerBox