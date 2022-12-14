import { Routes, Route, Link } from 'react-router-dom'
import Contact from './contactme'
import Resume from './resume'
import Work from './mywork'

function Home (){
    return(
<div>
<nav className='nav-bar'>
<Link className='link1' to="/home">
<h1 className='nav-bar' >Home</h1>
</Link>
<Link className='link2' to="/Resume">
<h1 className='nav-bar'>Resume</h1>
</Link>
<Link className='link3'to='/My-Work'>
<h1 className='nav-bar'>My Work</h1>
</Link>
<Link className='link4'to='/Contact-Me'>
<h1 className='nav-bar'>Contact Me</h1>
</Link>
</nav> 

<Routes>
 <Route path='/home' />
 <Route path='/Resume'element={ < Resume/>} />
 <Route path="/Contact-Me" element={< Contact/>} />
 <Route path='/My-Work' element={ < Work />}/>
</Routes>
</div>
    )
}

export default Home