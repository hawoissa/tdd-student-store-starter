import * as React from "react"
import "./Footer.css"

export default function Footer() {
   return (
      <div className="footer">
         <div className="footer-category">
            <div className="one">
               <h4>Categories</h4>
               <h6>All Categories</h6>
               <h6>Clothing</h6>
               <h6>Food</h6>
               <h6>Accessories</h6>
               <h6>Tech</h6>
            </div>
            <div className="two">
               <h4>Company</h4>
               <h6>About Us</h6>
               <h6>Find a store</h6>
               <h6>Terms</h6>
               <h6>Sitemap</h6>
               <h6>Careers</h6>
            </div>
            <div className="three">
               <h4>Support</h4>
               <h6>Contact Us</h6>
               <h6>Money Refund</h6>
               <h6>Order Status</h6>
               <h6>Shipping Info</h6>
               <h6>Open Dispute</h6>
            </div>
            <div className="four">
               <h4>Account</h4>
               <h6>Login</h6>
               <h6>Register</h6>
               <h6>Account Setting</h6>
               <h6>My Orders</h6>
            </div>
            <div className="five">
               <h4>Socials</h4>
               <h6>Facebook</h6>
               <h6>Twitter</h6>
               <h6>Linkedin</h6>
               <h6>Instagram</h6>
               <h6>Youtube</h6>
            </div>
         </div>
      </div>
   )
}