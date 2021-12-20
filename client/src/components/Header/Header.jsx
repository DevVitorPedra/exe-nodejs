import React from 'react'
import { UL, LI, IMG } from './styledHeader'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <IMG/>
  <UL className="nav nav-tabs">
  <LI className="nav-item">
    <Link className="nav-link" aria-current="page"  to={`/exe01`}>Exe-01</Link>
  </LI>

</UL>
        </div>
    )
}
/**
 *   <LI className="nav-item">
    <Link className="nav-link" href="#">Exe-02</Link>
  </LI>
  <LI className="nav-item">
    <Link className="nav-link" href="#">Exe-03</Link>
  </LI>
  <LI className="nav-item">
    <Link className="nav-link">Exe-04</Link>
  </LI>
  <LI className="nav-item">
    <Link className="nav-link" aria-current="page" href="#">Exe-05</Link>
  </LI>
  <LI className="nav-item">
    <Link className="nav-link" href="#">Exe-06</Link>
  </LI>
  <LI className="nav-item">
    <Link className="nav-link" href="#">Exe-07</Link>
  </LI>
  <LI className="nav-item">
    <Link className="nav-link">Exe-08</Link>
  </LI>
  <LI className="nav-item">
    <Link className="nav-link" aria-current="page" href="#">Exe-09</Link>
  </LI>
  <LI className="nav-item">
    <Link className="nav-link" href="#">Exe-10</Link>
  </LI>
  
  
*/