import './styles/MenuHeader.css';
import Menutitle from '../Data/MenuTitle';

export default function MenuHeader(){
    return(
        <div className="menu-header">
        {Menutitle}
        </div>
    )
}