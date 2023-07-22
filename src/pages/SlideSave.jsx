import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { recentSearch } from '../utils/localStorage';

export async function currentWeather(city) {
    const API_KEY = import.meta.env.VITE_APIKEY
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${API_KEY}&units=imperial`)
    const data = await response.json()
    return data
}

export default function SlideSave({ save }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleClick = (city) => {
        recentSearch(city)
        window.location.reload()
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {save.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>

                            <ListItemText primary={text} onClick={() => handleClick(text)} />



                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {save.map((text, index) => (
                    <ListItem key={text} disablePadding>

                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{<i class="fa-solid fa-bars text-white text-2xl "></i>}</Button>
                    <SwipeableDrawer
                        anchor={anchor}

                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}