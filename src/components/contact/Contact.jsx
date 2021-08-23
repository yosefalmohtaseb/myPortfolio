import "./contact.scss";
import Social from "./Social";

export default function Contact() {

  
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="input">Contact me to get the best performance for your professional website.</div>
        <Social/>
        
      </div>
    </div>
  );
}
