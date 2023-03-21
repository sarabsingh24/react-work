import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function SideButton({ index,setIndex}) {
    return (
        <>
            <label htmlFor="icon-button-file" className="next-btn" >
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => setIndex(index + 1)}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </label>
            <label htmlFor="icon-button-file" className="prev-btn" >
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => setIndex(index - 1)}>
                    <ArrowBackIosIcon />
                </IconButton>
            </label>
        </>
    )
}
