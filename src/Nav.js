import logo from './imagemLogoGOT.png'
import './nav.css';

function Nav(){
    return(<>
        <div className="nav">
            <img className="logo" src={logo}/>
        </div>
        <div className="degradeBaixo"></div>
    </>
    );
}
export default Nav;