import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';


export const links = [
    {
        id:1,
        url:"/",
        icon: <HomeIcon />,
        name:"Home"
    },
    {
        id: 2,
        url: "/about",
        icon: <InfoIcon />,
        name: "About"
    },
    {
        id: 3,
        url: "/profile",
        icon: <AssignmentIndIcon />,
        name: "Profile"
    },
    {
        id: 4,
        url: "/contact",
        icon: <ContactPhoneIcon />,
        name: "Contact"
    },
]


export const social = [
    {
        id:"a1",
        url:"https://www.google.com/",
        icon: <FacebookIcon />
    },
    {
        id: "a2",
        url: "https://www.google.com/",
        icon: <TwitterIcon />
    },
    {
        id: "a3",
        url: "https://www.google.com/",
        icon: <InstagramIcon />
    },
    {
        id: "a3",
        url: "https://www.google.com/",
        icon: <PinterestIcon />
    }
]