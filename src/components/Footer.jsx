import React from 'react';
import { TfiFacebook } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';

const footerClasses = "mt-10  bg-card bg-[#C4A885] text-card-foreground  p-8 text-white";
const linkClasses = "text-muted-foreground   hover:text-muted";

const Footer = () => {
  return (
    <footer className={footerClasses}>

      <div className="  mx-auto pt-10 pb-11 px-4  flex flex-col md:flex-row ">

        <FooterSection title="VIRID-VERVE">
          <ul className="mt-4  space-y-5">
            <li><Link to="/about-us" className={linkClasses}>About Us</Link></li>
            <li><Link to="/careers" className={linkClasses}>Careers</Link></li>
            <li><Link to="/privacy-policy" className={linkClasses}>Privacy & Policy</Link></li>
            <li><Link to="/terms-conditions" className={linkClasses}>Terms & Conditions</Link></li>
            <li><Link to="/contact-us" className={linkClasses}>Contact Us</Link></li>
          </ul>
        </FooterSection>
        <FooterSection title="HELP & SUPPORT">
          <ul className="mt-4 space-y-5">
            <li><Link to="/faq-subscriptions" className={linkClasses}>FAQ Subscriptions</Link></li>
            <li><Link to="/delivery-shipping" className={linkClasses}>Delivery & Shipping</Link></li>
            <li><Link to="/refunds-returns" className={linkClasses}>Refunds & Returns</Link></li>
            <li><Link to="/wholesale" className={linkClasses}>Wholesale</Link></li>
          </ul>
        </FooterSection>
        <FooterSection title="Join The Virid Verve Tribe!">
          <p className="mt-2 space-y-5 text-muted-foreground">We're all in this together; join the journey for inspiration on reducing your waste and receive 10% off to set you on the right path!</p>
          <form className="mt-4 ">
            <input type="text" placeholder="First Name" className="border border-border bg-white rounded p-2 w-full my-2" required />
            <input type="text" placeholder="Last Name" className="border border-border bg-white rounded p-2 w-full my-2" required />
            <input type="email" placeholder="Email address" className="border border-border bg-white rounded p-2 w-full my-4" required />
            <button type="submit" className=" text-primary-foreground  hover:bg-[#ecc4a2] bg-[#E9CDB5] p-2 rounded w-full">JOIN</button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className={linkClasses}><TfiFacebook /></a>
            <a href="#" className={linkClasses}><IoLogoInstagram size={20} /></a>
            <a href="#" className={linkClasses}><FaPinterestP size={20} /></a>
          </div>
        </FooterSection>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, children }) => {
  if (title === "Join The Eco Warrior Tribe!") {
    return (
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="text-2xl font-extrabold mb-8">{title}</h2>
        {children}
      </div>
    );
  }
  return (
    <div className="flex-1 mb-8 md:mb-0">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default Footer;
