import   { useEffect } from "react";
import "./Navbar.css";
import $ from 'jquery';


const Navbar = () => {
  useEffect(() => {
    const handleNavClick = () => {
      $('.navigation').addClass('navigation-show');
      $('.modal-shade').addClass('modal-shade-show');
    };

    const handleModalClick = () => {
      $('.navigation').removeClass('navigation-show');
      $('.modal-shade').removeClass('modal-shade-show');
    };

    $('.nav-icn').on('click', handleNavClick);
    $('.modal-shade').on('click', handleModalClick);

    return () => {
      $('.nav-icn').off('click', handleNavClick);
      $('.modal-shade').off('click', handleModalClick);
    };
  }, []);

  return (
    <div>
      <>
        <nav>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="desk-none mob-block">
                  <div className="nav-icn">
                    <i className="fa fa-bars"  style={{textAlign:"center !important "}}/> <p >Navigation</p>
                  </div>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">HOME</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">NEWS</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">ECONOMY</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">SPORTS</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">SHOWS</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">CULTURE &amp; ART</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">GOSSIPS</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">FASHION</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">HEALTH &amp; BODY</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">TECHNOLOGY</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">SCIENCE</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="modal-shade" />
      </>
    </div>
  );
};

export default Navbar;
