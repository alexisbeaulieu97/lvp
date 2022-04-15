import "./NavBar.css"
import React from "react";
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from "@mui/system";

export default function NavBar() {
    return (
        <Box
        // sx={{
        //     display: 'flex',
        //     flexDirection: { xs: 'column', md: 'row' },
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     bgcolor: 'background.paper',
        // }}
        >
            <Button>
                <HomeOutlinedIcon />
            </Button>
            <Button>
                <AddCircleOutlineIcon />
            </Button>
            <Button>
                <OndemandVideoIcon />
            </Button>
            <Button>
                <LogoutIcon />
            </Button>
        </Box>
    )
}