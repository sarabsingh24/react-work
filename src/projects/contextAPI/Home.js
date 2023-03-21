import React from 'react';
import IconButton from '@material-ui/core/IconButton'; 
import MenuIcon from '@material-ui/icons/Menu';
import { useGlobalContext} from './Context'

export default function Home() {
    const { showHideMenu } = useGlobalContext();

    return (
        <>
            <IconButton onClick={showHideMenu}>
                <MenuIcon />
            </IconButton>
        </>
    )
}
