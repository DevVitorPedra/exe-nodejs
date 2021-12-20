import React from 'react'
import { StyledDisplay } from './styledDisplay'
import { Routes, Route } from 'react-router-dom'
import Exe01 from '../../exe-displays/exe-01/Exe01'
export default function Display() {
    return (
       <StyledDisplay>
           <Routes>
               <Route path="/exe01" element={<Exe01/>}/>
           </Routes>
       </StyledDisplay>
    )
}
