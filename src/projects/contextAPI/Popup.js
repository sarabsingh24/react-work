import React from 'react';
import Button from '@material-ui/core/Button';
import Card from './Card';
import { useGlobalContext } from './Context';
import { SecondProvider} from './Context2'

export default function Popup() {
    const { showModal, showHideModal } = useGlobalContext();

    return (
        <div>
            <div className="model-btn">
                <Button variant="outlined" color="primary" size="small" onClick={showHideModal} >Open Modal</Button>
            </div>
            

            <div className={showModal ? "card-overlay display-blk" : "card-overlay"} >
                <div className="card-view">
                    <SecondProvider>
                    <Card showHideModal={showHideModal} />
                    </SecondProvider>
                </div>
               
            </div>
        </div>
    )
}
