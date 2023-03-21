import React from 'react';
import Banner from './Banner';
import { AppProvider} from './Context';

export default function Menustrip() {
    return (<>
        <AppProvider>
            <Banner />
            
        </AppProvider>
      
        </>
    )
}
