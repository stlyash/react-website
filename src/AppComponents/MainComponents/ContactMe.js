// import React from 'react'
//   // Get a reference to the iframe
//   var iframe = document.getElementById('contform');

//   // Check if the iframe has loaded
//   iframe.addEventListener('load', function () {
//     // Access the iframe's content document
//     var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

//     // Get the form element within the iframe
//     var form = iframeDoc.getElementById('contact-form'); // Replace with your form's ID
//     var thank = document.getElementById('thank');
//     // Add a submit event listener to the form
//     form.addEventListener('submit', function (event) {
//       iframe.style.display='none';
//       thank.removeAttribute("hidden");
//     });
//   });

// export const ContactMe = () => {
//   return (
//     <div id="connect">
//   <div style={{paddingLeft:"10%",paddingRight:"10%",paddingTop:"6%",paddingBottom:"4%"}}>
//     <h2 id="connect-section" className="text-primary unselect"
//     style={{paddingBottom:"2%"}}>Contact Me</h2>

//     <div className="row">
//       <div className="col-sm-12 col-lg-6">
//         <a href="https://play.google.com/store/apps/dev?id=6866879052780294015" 
//         className="clicklinks" target="_blank">
//         <div className="contact-links">
//           <span className="clickables">
          
//           <img id="logos" src="main_assets/play_store_logo.png" 
//           alt="Google Play Store Logo"/>
//           Google Play Store 🔗</span>
//         </div></a>
//         <a href="https://www.hackerrank.com/kumaryashasvi255" 
//         className="clicklinks" target="_blank">
//         <div className="contact-links">
//           <span className="clickables">
          
            
//           <img id="logos" src="main_assets/hackerrank_logo.png" 
//           alt="HackerRank Logo"/>
//           HackerRank 🔗</span>
//         </div></a>   

//         <a href="https://www.codechef.com/users/kmryashasvi" 
//         className="clicklinks" target="_blank">
//         <div className="contact-links">
//           <span className="clickables">
          
//           <img id="logos" src="main_assets/codechef_logo.png" 
//           alt="Codechef Logo"/>
//           CodeChef 🔗</span>
//         </div></a>
//         <a href="https://leetcode.com/kmryashasvi/" 
//         className="clicklinks" target="_blank">
//         <div className="contact-links">
//           <span className="clickables">
          
//           <img id="logos" src="main_assets/leetcode_logo.png" 
//           alt="LeetCode Logo"/>
//           LeetCode 🔗</span>
//         </div></a>

//         <a href="https://www.linkedin.com/in/kmryashasvi/" 
//         className="clicklinks" target="_blank">  
//         <div className="contact-links">
//           <span className="clickables">
          
//           <img id="logos" src="main_assets/linkedin_logo.png" 
//           alt="LinkedIn Logo"/>
//           LinkedIn 🔗</span>
//         </div></a>

//         <a href="https://github.com/stlyash" 
//           className="clicklinks" target="_blank">
//         <div className="contact-links">
//           <span className="clickables">
          
//           <img id="logos" src="main_assets/github_logo.png" 
//           alt="Github Logo"/>
//           GitHub 🔗</span>
//         </div></a>
//       </div>

//       <div className="col-sm-12 col-lg-6">
//         <iframe width="100%"style={{height:"12cm"}} id="contform" src="contactMe.html"></iframe>
//         <div className="thank" id="thank" hidden>
//           <img src="greentick.png" alt="Green Tick Image" style={{marginLeft:"30%",borderRadius:"1.5cm",width:"3cm",height:"3cm"}}/>
//           <br/>
//           <br/>
//           Thank You for contacting me, I will get back to you soon :)
//         </div>
      
//       </div>
//     </div>
//   </div>
//   </div>

//   )
// }
import React, { useEffect } from 'react';

export const ContactMe = () => {
  useEffect(() => {
    // Get a reference to the iframe
    var iframe = document.getElementById('contform');

    // Check if the iframe has loaded
    iframe.addEventListener('load', function () {
      // Access the iframe's content document
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Get the form element within the iframe
      var form = iframeDoc.getElementById('contact-form'); // Replace with your form's ID
      var thank = document.getElementById('thank');
      
      // Add a submit event listener to the form
      form.addEventListener('submit', function (event) {
        iframe.style.display = 'none';
        thank.removeAttribute("hidden");
      });
    });
  }, []);

  return (
    <div id="connect">
      <div style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "6%", paddingBottom: "4%" }}>
        <h2 id="connect-section" className="text-primary unselect" style={{ paddingBottom: "2%" }}>Contact Me</h2>

        <div className="row">
          <div className="col-sm-12 col-lg-6">
                   <a href="https://play.google.com/store/apps/dev?id=6866879052780294015" 
        className="clicklinks" target="_blank">
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/play_store_logo.png" 
          alt="Google Play Store Logo"/>
          Google Play Store 🔗</span>
        </div></a>


        <a href="https://www.hackerrank.com/kumaryashasvi255" 
        className="clicklinks" target="_blank">
        <div className="contact-links">
          <span className="clickables">
          
            
          <img id="logos" src="main_assets/hackerrank_logo.png" 
          alt="HackerRank Logo"/>
          HackerRank 🔗</span>
        </div></a>   


        <a href="https://www.codechef.com/users/kmryashasvi" 
        className="clicklinks" target="_blank">
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/codechef_logo.png" 
          alt="Codechef Logo"/>
          CodeChef 🔗</span>
        </div></a>


        <a href="https://leetcode.com/kmryashasvi/" 
        className="clicklinks" target="_blank">
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/leetcode_logo.png" 
          alt="LeetCode Logo"/>
          LeetCode 🔗</span>
        </div></a>


        <a href="https://www.linkedin.com/in/kmryashasvi/" 
        className="clicklinks" target="_blank">  
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/linkedin_logo.png" 
          alt="LinkedIn Logo"/>
          LinkedIn 🔗</span>
        </div></a>



        <a href="https://github.com/stlyash" 
          className="clicklinks" target="_blank">
        <div className="contact-links">
          <span className="clickables">
          
          <img id="logos" src="main_assets/github_logo.png" 
          alt="Github Logo"/>
          GitHub 🔗</span>
        </div></a>
          </div>


          <div className="col-sm-12 col-lg-6">
            <iframe width="100%" style={{ height: "12cm" }} id="contform" src="contactMe.html"></iframe>
            <div className="thank" id="thank" hidden>
              <img src="greentick.png" alt="Green Tick Image" style={{ marginLeft: "30%", borderRadius: "1.5cm", width: "3cm", height: "3cm" }} />
              <br />
              <br />
              Thank You for contacting me, I will get back to you soon :)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
