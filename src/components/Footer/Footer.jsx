import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <hr />
    <div className="Footer">
      <div className="footer-rights">
        <p className="footer-notes">
          &copy;{new Date().getFullYear()} LYRICS MAGIC | All rights reserved | Terms of Service | Privacy
        </p>
      </div>
      </div>
      </>
  )
}

export default Footer;