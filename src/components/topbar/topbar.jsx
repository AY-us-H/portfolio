import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function topbar() {
  return (
    <div className='topbar' id="topbar">
      <div className="wrapper">
        <div className="left">
                <a href="#intro" className="logo">Ayush</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+91 7488993137</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>ranjanayush4001@gmail.com</span>
                </div>
        </div>
        <div className="right">
            <div className="hamburger">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}
