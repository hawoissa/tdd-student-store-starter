import * as React from "react"
import "./Contact.css"

export default function Contact() {
   return (
      <div className="contact">
         <div className="content">
         <h3>Contact Us</h3>
         <div className="summary">
            <ul className="info">
               <li>
                  <span className="label">Email: </span>
                  <span>code@path.org</span>
               </li>
               <li>
                  <span className="label">Phone:</span>
                  <span>1-800-CODEPATH</span>
               </li>
               <li>
                  <span className="label">Adress:</span>
                  <span>123 Fake Street, San Francisco, CA</span>
               </li>
            </ul>
            <div className="media">
               <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="" />
            </div>
         </div>
         </div>
      </div>
   )
}