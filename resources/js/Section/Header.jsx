import { Link,usePage } from '@inertiajs/react'
import React from 'react'


export default function Header() {
    const { user } = usePage().props;
  return (
    <>


<div className="container">
      <div className="row">
        <div className="col-xs-12">


          <header className="header">
            <div className="header__wrap">
              <div className="header-top clearfix">
                <div className="header-top__inner">
                  <span className="header-top__contacts">call :  (007) 123 456 7890</span>
                  <span className="header-top__contacts">Email : <a className="header-top__contacts-link" href="mailto:inquiry@domain.com"> inquiry@domain.com</a></span>
                  <span className="header-top__contacts">Mon  -  SUN :  12PM  -  12AM</span>
                </div>
                <ul className="social-links list-inline">
                  <li><a target="_blank" href="https://twitter.com/"><i className="icons fa fa-twitter" /></a></li>
                  <li><a target="_blank" href="https://www.facebook.com/"><i className="icons fa fa-facebook" /></a></li>
                  <li><a target="_blank" href="https://www.linkedin.com/"><i className="icons fa fa-linkedin" /></a></li>
                  <li><a target="_blank" href="https://www.google.com/"><i className="icons fa fa-google-plus" /></a></li>
                </ul>
              </div>
              <a className="logo" href="home.html"><img className="logo__img" src="assets/img/logo_mod-a.png" alt="Logo" /></a>
              <div className="header__inner clearfix">
                <nav className="navbar yamm">
                  <div className="navbar-header ">
                    <button type="button" data-toggle="collapse" data-target="#navbar-collapse-1" className="navbar-toggle"><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button>
                  </div>

                  <div id="navbar-collapse-1" className="">
                    <ul className="nav navbar-nav">
                      <li className="active"><Link href="home.html">Home</Link></li>
                      <li><a href="about.html">ABOUT US</a></li>
                      <li className="dropdown"><Link href="services-1.html">Services</Link>
                        <ul role="menu" className="dropdown-menu">
                          <li> <Link href="services-1.html">Services 1</Link> </li>
                          <li> <Link href="services-2.html">Services 2</Link> </li>
                        </ul>
                      </li>
                      <li><Link href="blog-main.html">news</Link></li>
                      <li><Link href="contact.html">request a quote</Link></li>
                      <li><Link href="contact.html">Contact us</Link></li>
                    </ul>
                  </div>
                </nav>
                <a className="header__btn btn btn-primary btn-sm btn-effect-2" href="home.html">Track Your Item</a>
              </div>
            </div>
          </header>

          {/* end header*/}
        </div>{/* end col*/}
      </div>{/* end row*/}
    </div>


    </>
  )
}

