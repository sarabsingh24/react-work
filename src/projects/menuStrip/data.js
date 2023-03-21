import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

export const menu  = [
    {
        
        page:"Product",
        sublinks:[
            {
                url:"",
                icon: <DescriptionIcon />,
                name:"Product 1"
            },
            {
                url: "",
                icon: <DescriptionIcon />,
                name: "Product 2"
            },
            {
                url: "",
                icon: <DescriptionIcon />,
                name: "Product 3"
            },
            {
                url: "",
                icon: <DescriptionIcon />,
                name: "Product 4"
            },
            {
                url: "",
                icon: <DescriptionIcon />,
                name: "Product 5"
            },
            {
                url: "",
                icon: <DescriptionIcon />,
                name: "Product 6"
            }

        ]
    },
    {
        
        page: "Devlopers",
        sublinks: [
            {
                url: "",
                icon: <RecentActorsIcon />,
                name: "Devlopers 1"
            },
            {
                url: "",
                icon: <RecentActorsIcon />,
                name: "Devlopers 2"
            },
            {
                url: "",
                icon: <RecentActorsIcon />,
                name: "Devlopers 3"
            }
        ]
    },
    {
        
        page: "Company",
        sublinks: [
            {
                url: "",
                icon: <FreeBreakfastIcon />,
                name: "Company 1"
            },
            {
                url: "",
                icon: <FreeBreakfastIcon />,
                name: "Company 2"
            },
            {
                url: "",
                icon: <FreeBreakfastIcon />,
                name: "Company 3"
            },
            {
                url: "",
                icon: <FreeBreakfastIcon />,
                name: "Company 4"
            }
        ]
    }
]
