import React,{useState} from 'react'
import { Box } from '@material-ui/core';

//component
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'


const Menu = () => {
    const [text,setText] = useState('')
    return (<>
        <Header/>
        <Search setText={setText}/>
        <Conversations text={text}/>
       </> 
    )
}

export default Menu