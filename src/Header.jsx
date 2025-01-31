import { Button } from '@mui/material';
import React, { useState } from 'react'
import Drawers from './Drawers';
import { useLocation } from 'react-router-dom';


const Header = () => {

    const location = useLocation()

    const [modal, setModal] = useState(false)

    const HnadleModal = () => {
        setModal(!modal)
    }

const all = ['/api','/country']
    if(all.includes(location.pathname)){
        return null
    }

    return (
        <>
            <div className='header-main'>





                <Button onClick={HnadleModal}>open</Button>


            </div>

            {modal &&
                <Drawers setModal={HnadleModal} modal={modal} />
            }


        </>
    )
}

export default Header