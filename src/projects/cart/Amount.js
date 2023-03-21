import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useGlobalCart} from './Context'
export default function Amount({ id, amount}) {

    const {  increase, decrease } = useGlobalCart();

    

  

    return (
        <div className="arrow-content">
            <IconButton className="arrow-width" size="small" onClick={()=>increase(id)} >
                <ExpandLessIcon />
            </IconButton>
            {amount}
            <IconButton className="arrow-width" size="small" onClick={()=>decrease(id)} ><ExpandMoreIcon /></IconButton>
            {/* <div>{cost}</div> */}
        </div>
    )
}
