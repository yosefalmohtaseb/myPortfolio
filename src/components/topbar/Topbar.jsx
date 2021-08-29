import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Yousef 
          </a>
            <a className="link" href="https://wa.me/+970592255310" rel="noopener noreferrer"  target="_blanck">
          <div className="itemContainer">
            <Person className="icon" />
            +970592255310
          </div>
            </a>
            <a className="link" href="mailto:yosefalmohtasib@gmail.com?subject=Mail from my portfolio" rel="noopener noreferrer"  target="_blanck">
          <div className="itemContainer">
            <Mail className="icon" />
            yosefalmohtasib@gmail.com
          </div>
            </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
