import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, minWidth } from "@mui/system";

import NavBarButton from "./NavBarButton";
import { Typography } from "@mui/material";

export default function NavBar() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'background.default',
                width: '100%',
                minWidth: '400px',
                border: '1px',
                borderColor: 'background.paper'
            }}
        >
            <Box
                sx={{
                    // margin: '16px',
                    // fontSize: '1.7em',
                    // fontWeight: 'bold',
                    color: 'text.primary'
                }}
            >
                <Typography variant="h4">L V P</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    margin: '16px',
                    gap: '10px'
                }}
            >
                <NavBarButton icon={<HomeOutlinedIcon />} />
                <NavBarButton icon={<AddCircleOutlineIcon />} />
                <NavBarButton icon={<OndemandVideoIcon />} />
                <NavBarButton icon={<LogoutIcon />} />
            </Box>
        </Box>

    )
}