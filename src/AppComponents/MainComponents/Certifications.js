import React from 'react'
// Drop down of certifications
function clicked(params) {
  var collapsible1 = document.getElementById('collapse'+params+'Button');
collapsible1.click();
}

export const Certifications = () => {
  return (
    <div>
      <article id="whole-certifications">
    <h2 id="certs-section"style={{paddingLeft: "10%",paddingRight: "10%",paddingTop:"6%"}}className="text-primary unselect">Certifications</h2>
    <div style={{paddingLeft: "10%",paddingRight: "10%",paddingTop:"2%"}}>
      <div style={{paddingBottom: "2%"}}>
        <div id="front-end" className="card spcard" >
            <div className="card-header" id="headingOne" onClick={()=>clicked("One")}>
                
                    <a rel="noopener noreferrer" className="btn" id="collapseOneButton" data-bs-toggle="collapse" href="#collapseOne" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h5>1. Meta Front-End Development Professional Certificate</h5>
                    </a>
            </div>
            <div className="collapse" id="collapseOne">
                <div className="card card-body">
                    <ul>
                        <li>Introduction to Front-End Development		[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/T92SSTMMCWBC" target="_blank">Link</a>]</li>
                        <li>Programming in JavaScript		[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/C88VKZ6WCGKZ" target="_blank">Link</a>]</li>
                        <li>Version Control		[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/NL8JSWH2D3D5" target="_blank">Link</a>]</li>
                        <li>HTML and CSS in Depth    [<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/K9RNQEWEMYNC" target="_blank">Link</a>]</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div style={{paddingBottom: "2%"}}>
        <div className="card spcard">
            <div className="card-header" id="headingTwo" onClick={()=>clicked("Two")}>
                    <a rel="noopener noreferrer" className="btn"  id="collapseTwoButton"  data-bs-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h5>2. Google Data Analytics Professional Certificate</h5>
                    </a>
            </div>
            <div className="collapse" id="collapseTwo">
                <div className="card card-body">
                    <ul>
                        <li>Foundations: Data, Data, Everywhere   [<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/39F4AFDRSG8R" target="_blank">Link</a>]</li>
                        <li>Ask Questions to Make Data-Driven Decisions   [<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/LZS3F5VZCWL7" target="_blank">Link</a>]</li>
                        <li>Prepare Data for Exploration    [<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/3CH36JKEDP57" target="_blank">Link</a>]</li>
                        <li>Process Data from Dirty to Clean    [<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/35SVEASNYZ2L" target="_blank">Link</a>]</li>
                        <li>Analyze Data to Answer Questions    [<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/WXLWHUYLZN7V" target="_blank">Link</a>]</li>
                     </ul>
                </div>
            </div>
        </div>
      </div>

      <div style={{paddingBottom: "2%"}}>
        <div className="card spcard">
            <div className="card-header" id="headingThree" onClick={()=>clicked("Three")}>
                    <a rel="noopener noreferrer" className="btn"  id="collapseThreeButton"  data-bs-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h5>3. Guided Projects on Linux</h5>
                    </a>
            </div>
            <div className="collapse" id="collapseThree">
                <div className="card card-body">
                    <ul>
                        <li>Getting started in Ubuntu Linux		[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/DQU8B72WWGEY" target="_blank">Link</a>] </li>
                        <li>Command Line Basics in Linux			[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/9M72JMJPN3NL" target="_blank">Link</a>]</li>
                        <li>Files and Directories in Linux File-system			[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/UKR2HPNATZK2" target="_blank">Link</a>]</li>
                      </ul>
                </div>
            </div>
        </div>
      </div>

      <div style={{paddingBottom: "2%"}}>
        <div className="card spcard">
            
            <div className="card-header" id="headingFour" onClick={()=>clicked("Four")}>
                    <a rel="noopener noreferrer" className="btn"  id="collapseFourButton" data-bs-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h5>4. Google Project Management: Professional Certificate</h5>
                    </a>
            </div>
            
            <div className="collapse" id="collapseFour">
                <div className="card card-body">
                    <ul>
                        <li>Foundations of Project Management		[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/JEPGSDMKJG2A" target="_blank">Link</a>] </li>
                        <li>Project Initiation: Starting a Successful Project		[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/S7KDDR7X7SEW" target="_blank">Link</a>]</li>
                        <li>Project Planning: Putting It All Together		[<a rel="noopener noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/NKJHFBGJX5XM" target="_blank">Link</a>] </li>
                      </ul>
                </div>
            </div>
        </div>
      </div>

    </div>
  </article>
    </div>
  )
}
