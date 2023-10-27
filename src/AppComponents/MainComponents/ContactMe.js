import React from 'react';
import { ContactForm } from './ContactComponents/ContactForm';
import { MessageSubmitted } from './ContactComponents/MessageSubmitted';
 

export const ContactMe = () => {


  return (
    <div id="connect">
      <div style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "6%", paddingBottom: "4%" }}>
        <h2 id="connect-section" className="text-primary unselect" style={{ paddingBottom: "2%" }}>Contact Me</h2>

        <div className="row">
          <div className="col-sm-12 col-lg-6">
                   <a href="https://play.google.com/store/apps/dev?id=6866879052780294015" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/play_store_logo.png" 
          alt="Google Play Store Logo"/>
          Google Play Store 🔗</span>
        </div></a>


        <a href="https://www.hackerrank.com/kumaryashasvi255" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          
            
          <img id="logos" src="main_assets/hackerrank_logo.png" 
          alt="HackerRank Logo"/>
          HackerRank 🔗</span>
        </div></a>   


        <a href="https://www.codechef.com/users/kmryashasvi" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/codechef_logo.png" 
          alt="Codechef Logo"/>
          CodeChef 🔗</span>
        </div></a>


        <a href="https://leetcode.com/kmryashasvi/" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/leetcode_logo.png" 
          alt="LeetCode Logo"/>
          LeetCode 🔗</span>
        </div></a>


        <a href="https://www.linkedin.com/in/kmryashasvi/" 
        className="clicklinks" target="_blank" rel="noopener noreferrer">  
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/linkedin_logo.png" 
          alt="LinkedIn Logo"/>
          LinkedIn 🔗</span>
        </div></a>



        <a href="https://github.com/stlyash" 
          className="clicklinks" target="_blank" rel="noopener noreferrer">
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/github_logo.png" 
          alt="Github Logo"/>
          GitHub 🔗</span>
        </div></a>
          </div>


          <ContactForm />
          <MessageSubmitted />
        </div>
      </div>
    </div>
  );
};
