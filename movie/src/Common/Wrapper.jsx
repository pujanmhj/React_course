import NavBar from './Navbar'
import Footer from './Footer'
function Wrapper({Children}) {
  return (
    <div>
        <NavBar/>
        <div style={{width:'100%', alignItems:'center',justifyContent: 'center',padding:'50px'}}>
        {Children}
        </div>
        <Footer/>
    </div>
  )
}
export default Wrapper;