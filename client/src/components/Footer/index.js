import React from "react";
import "./style.css"

function Footer() {
  return (
  
<div>

<footer className="page-footer font-small colorOfFooter">
  
  <div className="container-fluid text-center text-md-left">
  
    <div className="row p-0">

        
        <h2 className="h1-responsive font-weight-bold my-5 col-12 creatorsTitle">Creators of A-Speak</h2>

        
        <div className="row">
          <div className ="col-2"></div>

          
          <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-5 avatar">

              <img src="https://avatars3.githubusercontent.com/u/53452871?s=460&v=4"height="50%"width="30%"
                  className="rounded-circle z-depth-1 col-12" alt="AllisonJuarez"></img>
            

            <h5 className="font-weight-bold mb-3 titleBio">Allison Juarez</h5>
            <p className="text-uppercase text-center"><strong>Full- Stack Web Developer</strong></p>
            <p className="white-text text-center bio"> I am a Full-Stack Web Developer. A mom of two
              great kids. My son is autisic and is my inspiration for this project. I know the struggle from trying to find free and good resources for kids in the spectrum. So I dedicate this to him and everyone who can benefit from this application.
              </p>
            <ul className="list-unstyled mb-5 icons">
              
              <a className="p-2 fa-lg fb-ic" href="https://www.linkedin.com/in/allison-juarez-6712a518b/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin white-text"> </i>
              </a>
              
              <a className="p-2 fa-lg ins-ic" href="https://github.com/Aj518480" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github white-text"> </i>
              </a>
              
              
              
            </ul>
            
            
          </div>

          <div className ="col"></div>
          

          
          <div className="col-lg-3 col-md-6 col-sm-12  avatar">
            
             <img src="https://avatars2.githubusercontent.com/u/37284788?s=460&v=4" height="55%"width="30%"
                className="rounded-circle z-depth-1 col-12" alt="Gelissa Leveielle"></img>
            
            <h5 className="font-weight-bold mb-3 titleBio">Gelissa Leveille</h5>
            <p className="text-uppercase text-center"><strong>Full- Stack Web Developer</strong></p>
            <p className="white-text text-center bio">Gelissa leveille is a full-stack javascript developer from sunny florida. her likes include books, movies, and css.  due to commitment issues, all changes will be made in the dev tools until further notice.</p>
            <ul className="list-unstyled mb-5 icons">
              
              <a className="p-2 fa-lg fb-ic" href="http://linkedin.com/in/gelissaleveille" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin white-text"> </i>
              </a>
             
              <a className="p-2 fa-lg ins-ic" href="http://github.com/gelissa" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github white-text"> </i>
              </a>
              
              
            </ul>
            </div>
            <div className ="col-2"></div>  
          </div>
          </div>
          </div>
         
  <div className="footer-copyright text-center py-3 smallFooter">© 2019 Copyright
  </div>
  
  
</footer>


</div>

  );
}

export default Footer;
