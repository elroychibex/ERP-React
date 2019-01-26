import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';



class Dashboard extends Component {
    render() {
        
      return (
       <div>
         <div id="main-wrapper">
        {/* ============================================================== */}
        {/* Topbar header - style you can find in pages.scss */}
        {/* ============================================================== */}
        <header className="topbar">
          <nav className="navbar top-navbar navbar-expand-md navbar-dark">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                {/* Logo icon */}<b>
                  {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                  {/* Dark Logo icon */}
                  <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                  {/* Light Logo icon */}
                  <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                </b>
                {/*End Logo icon */}
                {/* Logo text */}<span>
                  {/* dark Logo text */}
                  <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                  {/* Light Logo text */}    
                  <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span> </a>
            </div>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            <div className="navbar-collapse">
              {/* ============================================================== */}
              {/* toggle and nav items */}
              {/* ============================================================== */}
              <ul className="navbar-nav mr-auto">
                {/* This is  */}
                <li className="nav-item"> <a className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu" /></a> </li>
                <li className="nav-item"> <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><i className="icon-menu" /></a> </li>
                {/* ============================================================== */}
                {/* Search */}
                {/* ============================================================== */}
                <li className="nav-item">
                  <form className="app-search d-none d-md-block d-lg-block">
                    <input type="text" className="form-control" placeholder="Search & enter" />
                  </form>
                </li>
              </ul>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
              <ul className="navbar-nav my-lg-0">
                {/* ============================================================== */}
                {/* Comment */}
                {/* ============================================================== */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="ti-email" />
                    <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                    <ul>
                      <li>
                        <div className="drop-title">Notifications</div>
                      </li>
                      <li>
                        <div className="message-center">
                          {/* Message */}
                          <a href="javascript:void(0)">
                            <div className="btn btn-danger btn-circle"><i className="fa fa-link" /></div>
                            <div className="mail-contnet">
                              <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                          </a>
                          {/* Message */}
                          <a href="javascript:void(0)">
                            <div className="btn btn-success btn-circle"><i className="ti-calendar" /></div>
                            <div className="mail-contnet">
                              <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                          </a>
                          {/* Message */}
                          <a href="javascript:void(0)">
                            <div className="btn btn-info btn-circle"><i className="ti-settings" /></div>
                            <div className="mail-contnet">
                              <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                          </a>
                          {/* Message */}
                          <a href="javascript:void(0)">
                            <div className="btn btn-primary btn-circle"><i className="ti-user" /></div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a className="nav-link text-center link" href="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right" /> </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End Comment */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Messages */}
                {/* ============================================================== */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id={2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon-note" />
                    <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
                  </a>
                  <div className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown" aria-labelledby={2}>
                    <ul>
                      <li>
                        <div className="drop-title">You have 4 new messages</div>
                      </li>
                      <li>
                        <div className="message-center">
                          {/* Message */}
                          <a href="javascript:void(0)">
                            <div className="user-img"> <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right" /> </div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                          </a>
                          {/* Message */}
                          <a href="javascript:void(0)">
                            <div className="user-img"> <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right" /> </div>
                            <div className="mail-contnet">
                              <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                          </a>
                          {/* Message */}
                          <a href="javascript:void(0)">
                            <div className="user-img"> <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right" /> </div>
                            <div className="mail-contnet">
                              <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                          </a>
                          {/* Message */}
                          <a href="javascript:void(0)">
                            <div className="user-img"> <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right" /> </div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a className="nav-link text-center link" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right" /> </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End Messages */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* mega menu */}
                {/* ============================================================== */}
                <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-layout-width-default" /></a>
                  <div className="dropdown-menu animated bounceInDown">
                    <ul className="mega-dropdown-menu row">
                      <li className="col-lg-3 col-xlg-2 m-b-30">
                        <h4 className="m-b-20">CAROUSEL</h4>
                        {/* CAROUSEL */}
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                          <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                              <div className="container"> <img className="d-block img-fluid" src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img1.jpg" alt="First slide" /></div>
                            </div>
                            <div className="carousel-item">
                              <div className="container"><img className="d-block img-fluid" src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img2.jpg" alt="Second slide" /></div>
                            </div>
                            <div className="carousel-item">
                              <div className="container"><img className="d-block img-fluid" src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/big/img3.jpg" alt="Third slide" /></div>
                            </div>
                          </div>
                          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true" /> <span className="sr-only">Previous</span> </a>
                          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true" /> <span className="sr-only">Next</span> </a>
                        </div>
                        {/* End CAROUSEL */}
                      </li>
                      <li className="col-lg-3 m-b-30">
                        <h4 className="m-b-20">ACCORDION</h4>
                        {/* Accordian */}
                        <div className="accordion" id="accordionExample">
                          <div className="card m-b-0">
                            <div className="card-header bg-white p-0" id="headingOne">
                              <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Collapsible Group Item #1
                                </button>
                              </h5>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high.
                              </div>
                            </div>
                          </div>
                          <div className="card m-b-0">
                            <div className="card-header bg-white p-0" id="headingTwo">
                              <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  Collapsible Group Item #2
                                </button>
                              </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high.
                              </div>
                            </div>
                          </div>
                          <div className="card m-b-0">
                            <div className="card-header bg-white p-0" id="headingThree">
                              <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  Collapsible Group Item #3
                                </button>
                              </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                              <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high.
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-3  m-b-30">
                        <h4 className="m-b-20">CONTACT US</h4>
                        {/* Contact */}
                        <form>
                          <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name" /> </div>
                          <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter email" /> </div>
                          <div className="form-group">
                            <textarea className="form-control" id="exampleTextarea" rows={3} placeholder="Message" defaultValue={""} />
                          </div>
                          <button type="submit" className="btn btn-info">Submit</button>
                        </form>
                      </li>
                      <li className="col-lg-3 col-xlg-4 m-b-30">
                        <h4 className="m-b-20">List style</h4>
                        {/* List style */}
                        <ul className="list-style-none">
                          <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> You can give link</a></li>
                          <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> Give link</a></li>
                          <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> Another Give link</a></li>
                          <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> Forth link</a></li>
                          <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> Another fifth link</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End mega menu */}
                {/* ============================================================== */}
                <li className="nav-item right-side-toggle"> <a className="nav-link  waves-effect waves-light" href="javascript:void(0)"><i className="ti-settings" /></a></li>
              </ul>
            </div>
          </nav>
        </header>
        {/* ============================================================== */}
        {/* End Topbar header */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div className="scroll-sidebar">
            {/* User Profile*/}
            <div className="user-profile">
              <div className="user-pro-body">
                <div><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg" alt="user-img" className="img-circle" /></div>
                <div className="dropdown">
                  <a href="javascript:void(0)" className="dropdown-toggle u-dropdown link hide-menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Steave Gection <span className="caret" /></a>
                  <div className="dropdown-menu animated flipInY">
                    {/* text*/}
                    <a href="javascript:void(0)" className="dropdown-item"><i className="ti-user" /> My Profile</a>
                    {/* text*/}
                    <a href="javascript:void(0)" className="dropdown-item"><i className="ti-wallet" /> My Balance</a>
                    {/* text*/}
                    <a href="javascript:void(0)" className="dropdown-item"><i className="ti-email" /> Inbox</a>
                    {/* text*/}
                    <div className="dropdown-divider" />
                    {/* text*/}
                    <a href="javascript:void(0)" className="dropdown-item"><i className="ti-settings" /> Account Setting</a>
                    {/* text*/}
                    <div className="dropdown-divider" />
                    {/* text*/}
                    <a href="pages-login.html" className="dropdown-item"><i className="fas fa-power-off" /> Logout</a>
                    {/* text*/}
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="nav-small-cap">--- PERSONAL</li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="icon-speedometer" /><span className="hide-menu">Dashboard <span className="badge badge-pill badge-cyan ml-auto">4</span></span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="index.html">Minimal </a></li>
                    <li><a href="index2.html">Analytical</a></li>
                    <li><a href="index3.html">Demographical</a></li>
                    <li><a href="index4.html">Modern</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-layout-grid2" /><span className="hide-menu">Apps</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="app-calendar.html">Calendar</a></li>
                    <li><a href="app-chat.html">Chat app</a></li>
                    <li><a href="app-ticket.html">Support Ticket</a></li>
                    <li><a href="app-contact.html">Contact / Employee</a></li>
                    <li><a href="app-contact2.html">Contact Grid</a></li>
                    <li><a href="app-contact-detail.html">Contact Detail</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-email" /><span className="hide-menu">Inbox</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="app-email.html">Mailbox</a></li>
                    <li><a href="app-email-detail.html">Mailbox Detail</a></li>
                    <li><a href="app-compose.html">Compose Mail</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-palette" /><span className="hide-menu">Ui Elements <span className="badge badge-pill badge-primary text-white ml-auto">25</span></span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="ui-cards.html">Cards</a></li>
                    <li><a href="ui-user-card.html">User Cards</a></li>
                    <li><a href="ui-buttons.html">Buttons</a></li>
                    <li><a href="ui-modals.html">Modals</a></li>
                    <li><a href="ui-tab.html">Tab</a></li>
                    <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
                    <li><a href="ui-tooltip-stylish.html">Tooltip stylish</a></li>
                    <li><a href="ui-sweetalert.html">Sweet Alert</a></li>
                    <li><a href="ui-notification.html">Notification</a></li>
                    <li><a href="ui-progressbar.html">Progressbar</a></li>
                    <li><a href="ui-nestable.html">Nestable</a></li>
                    <li><a href="ui-range-slider.html">Range slider</a></li>
                    <li><a href="ui-timeline.html">Timeline</a></li>
                    <li><a href="ui-typography.html">Typography</a></li>
                    <li><a href="ui-horizontal-timeline.html">Horizontal Timeline</a></li>
                    <li><a href="ui-session-timeout.html">Session Timeout</a></li>
                    <li><a href="ui-session-ideal-timeout.html">Session Ideal Timeout</a></li>
                    <li><a href="ui-bootstrap.html">Bootstrap Ui</a></li>
                    <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                    <li><a href="ui-bootstrap-switch.html">Bootstrap Switch</a></li>
                    <li><a href="ui-list-media.html">List Media</a></li>
                    <li><a href="ui-ribbons.html">Ribbons</a></li>
                    <li><a href="ui-grid.html">Grid</a></li>
                    <li><a href="ui-carousel.html">Carousel</a></li>
                    <li><a href="ui-date-paginator.html">Date-paginator</a></li>
                    <li><a href="ui-dragable-portlet.html">Dragable Portlet</a></li>
                  </ul>
                </li>
                <li className="nav-small-cap">--- FORMS, TABLE &amp; WIDGETS</li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-layout-media-right-alt" /><span className="hide-menu">Forms</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="form-basic.html">Basic Forms</a></li>
                    <li><a href="form-layout.html">Form Layouts</a></li>
                    <li><a href="form-addons.html">Form Addons</a></li>
                    <li><a href="form-material.html">Form Material</a></li>
                    <li><a href="form-float-input.html">Floating Lable</a></li>
                    <li><a href="form-pickers.html">Form Pickers</a></li>
                    <li><a href="form-upload.html">File Upload</a></li>
                    <li><a href="form-mask.html">Form Mask</a></li>
                    <li><a href="form-validation.html">Form Validation</a></li>
                    <li><a href="form-dropzone.html">File Dropzone</a></li>
                    <li><a href="form-icheck.html">Icheck control</a></li>
                    <li><a href="form-img-cropper.html">Image Cropper</a></li>
                    <li><a href="form-bootstrapwysihtml5.html">HTML5 Editor</a></li>
                    <li><a href="form-typehead.html">Form Typehead</a></li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                    <li><a href="form-xeditable.html">Xeditable Editor</a></li>
                    <li><a href="form-summernote.html">Summernote Editor</a></li>
                    <li><a href="form-tinymce.html">Tinymce Editor</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-layout-accordion-merged" /><span className="hide-menu">Tables</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="table-basic.html">Basic Tables</a></li>
                    <li><a href="table-layout.html">Table Layouts</a></li>
                    <li><a href="table-data-table.html">Data Tables</a></li>
                    <li><a href="table-footable.html">Footable</a></li>
                    <li><a href="table-jsgrid.html">Js Grid Table</a></li>
                    <li><a href="table-responsive.html">Responsive Table</a></li>
                    <li><a href="table-bootstrap.html">Bootstrap Tables</a></li>
                    <li><a href="table-editable-table.html">Editable Table</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-settings" /><span className="hide-menu">Widgets</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="widget-data.html">Data Widgets</a></li>
                    <li><a href="widget-apps.html">Apps Widgets</a></li>
                    <li><a href="widget-charts.html">Charts Widgets</a></li>
                  </ul>
                </li>
                <li className="nav-small-cap">--- EXTRA COMPONENTS</li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-gallery" /><span className="hide-menu">Page Layout</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="layout-single-column.html">1 Column</a></li>
                    <li><a href="layout-fix-header.html">Fix header</a></li>
                    <li><a href="layout-fix-sidebar.html">Fix sidebar</a></li>
                    <li><a href="layout-fix-header-sidebar.html">Fixe header &amp; Sidebar</a></li>
                    <li><a href="layout-boxed.html">Boxed Layout</a></li>
                    <li><a href="layout-logo-center.html">Logo in Center</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-files" /><span className="hide-menu">Sample Pages <span className="badge badge-pill badge-info">25</span></span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="starter-kit.html">Starter Kit</a></li>
                    <li><a href="pages-blank.html">Blank page</a></li>
                    <li><a href="javascript:void(0)" className="has-arrow">Authentication <span className="badge badge-pill badge-success pull-right">6</span></a>
                      <ul aria-expanded="false" className="collapse">
                        <li><a href="pages-login.html">Login 1</a></li>
                        <li><a href="pages-login-2.html">Login 2</a></li>
                        <li><a href="pages-register.html">Register</a></li>
                        <li><a href="pages-register2.html">Register 2</a></li>
                        <li><a href="pages-register3.html">Register 3</a></li>
                        <li><a href="pages-lockscreen.html">Lockscreen</a></li>
                        <li><a href="pages-recover-password.html">Recover password</a></li>
                      </ul>
                    </li>
                    <li><a href="pages-profile.html">Profile page</a></li>
                    <li><a href="pages-animation.html">Animation</a></li>
                    <li><a href="pages-fix-innersidebar.html">Sticky Left sidebar</a></li>
                    <li><a href="pages-fix-inner-right-sidebar.html">Sticky Right sidebar</a></li>
                    <li><a href="pages-invoice.html">Invoice</a></li>
                    <li><a href="pages-treeview.html">Treeview</a></li>
                    <li><a href="pages-utility-classes.html">Helper Classes</a></li>
                    <li><a href="pages-search-result.html">Search result</a></li>
                    <li><a href="pages-scroll.html">Scrollbar</a></li>
                    <li><a href="pages-pricing.html">Pricing</a></li>
                    <li><a href="pages-lightbox-popup.html">Lighbox popup</a></li>
                    <li><a href="pages-gallery.html">Gallery</a></li>
                    <li><a href="pages-faq.html">Faqs</a></li>
                    <li><a href="javascript:void(0)" className="has-arrow">Error Pages</a>
                      <ul aria-expanded="false" className="collapse">
                        <li><a href="pages-error-400.html">400</a></li>
                        <li><a href="pages-error-403.html">403</a></li>
                        <li><a href="pages-error-404.html">404</a></li>
                        <li><a href="pages-error-500.html">500</a></li>
                        <li><a href="pages-error-503.html">503</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-pie-chart" /><span className="hide-menu">Charts</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="chart-morris.html">Morris Chart</a></li>
                    <li><a href="chart-chartist.html">Chartis Chart</a></li>
                    <li><a href="chart-echart.html">Echarts</a></li>
                    <li><a href="chart-flot.html">Flot Chart</a></li>
                    <li><a href="chart-knob.html">Knob Chart</a></li>
                    <li><a href="chart-chart-js.html">Chartjs</a></li>
                    <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
                    <li><a href="chart-extra-chart.html">Extra chart</a></li>
                    <li><a href="chart-peity.html">Peity Charts</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-light-bulb" /><span className="hide-menu">Icons</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="icon-material.html">Material Icons</a></li>
                    <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                    <li><a href="icon-themify.html">Themify Icons</a></li>
                    <li><a href="icon-weather.html">Weather Icons</a></li>
                    <li><a href="icon-simple-lineicon.html">Simple Line icons</a></li>
                    <li><a href="icon-flag.html">Flag Icons</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-location-pin" /><span className="hide-menu">Maps</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="map-google.html">Google Maps</a></li>
                    <li><a href="map-vector.html">Vector Maps</a></li>
                  </ul>
                </li>
                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-align-left" /><span className="hide-menu">Multi level dd</span></a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="javascript:void(0)">item 1.1</a></li>
                    <li><a href="javascript:void(0)">item 1.2</a></li>
                    <li> <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Menu 1.3</a>
                      <ul aria-expanded="false" className="collapse">
                        <li><a href="javascript:void(0)">item 1.3.1</a></li>
                        <li><a href="javascript:void(0)">item 1.3.2</a></li>
                        <li><a href="javascript:void(0)">item 1.3.3</a></li>
                        <li><a href="javascript:void(0)">item 1.3.4</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0)">item 1.4</a></li>
                  </ul>
                </li>
                <li className="nav-small-cap">--- SUPPORT</li>
                <li>
                  <a className="waves-effect waves-dark" href="http://eliteadmin.themedesigner.in/demos/bt4/documentation/documentation.html" aria-expanded="false">
                    <i className="far fa-circle text-danger" />
                    <span className="hide-menu">Documentation</span>
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-dark" href="pages-login.html" aria-expanded="false">
                    <i className="far fa-circle text-success" />
                    <span className="hide-menu">Log Out</span>
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-dark" href="pages-faq.html" aria-expanded="false">
                    <i className="far fa-circle text-info" />
                    <span className="hide-menu">FAQs</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
        {/* ============================================================== */}
        {/* End Left Sidebar - style you can find in sidebar.scss  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Page wrapper  */}
        {/* ============================================================== */}
        <div className="page-wrapper">
          {/* ============================================================== */}
          {/* Container fluid  */}
          {/* ============================================================== */}
          <div className="container-fluid">
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Dashboard 1</h4>
              </div>
              <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard 1</li>
                  </ol>
                  <button type="button" className="btn btn-info d-none d-lg-block m-l-15"><i className="fa fa-plus-circle" /> Create New</button>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Info box */}
            {/* ============================================================== */}
            {/* Row */}
            <div className="row">
              {/* Column */}
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-row">
                      <div className="round align-self-center round-success"><i className="ti-wallet" /></div>
                      <div className="m-l-10 align-self-center">
                        <h3 className="m-b-0">3564</h3>
                        <h5 className="text-muted m-b-0">New Customers</h5></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
              {/* Column */}
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-row">
                      <div className="round align-self-center round-info"><i className="ti-user" /></div>
                      <div className="m-l-10 align-self-center">
                        <h3 className="m-b-0">342</h3>
                        <h5 className="text-muted m-b-0">New Products</h5></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
              {/* Column */}
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-row">
                      <div className="round align-self-center round-danger"><i className="ti-calendar" /></div>
                      <div className="m-l-10 align-self-center">
                        <h3 className="m-b-0">56%</h3>
                        <h5 className="text-muted m-b-0">Today's Profit</h5></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
              {/* Column */}
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-row">
                      <div className="round align-self-center round-success"><i className="ti-settings" /></div>
                      <div className="m-l-10 align-self-center">
                        <h3 className="m-b-0">56%</h3>
                        <h5 className="text-muted m-b-0">New Leads</h5></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
            </div>
            {/* Row */}
            {/* ============================================================== */}
            {/* End Info box */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Over Visitor, Our income , slaes different and  sales prediction */}
            {/* ============================================================== */}
            <div className="row">
              {/* Column */}
              <div className="col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title ">Leads by Source</h5>
                    <div id="morris-donut-chart" className="ecomm-donute" style={{height: '317px'}} />
                    <ul className="list-inline m-t-30 text-center">
                      <li className="p-r-20">
                        <h5 className="text-muted"><i className="fa fa-circle" style={{color: '#fb9678'}} /> Ads</h5>
                        <h4 className="m-b-0">8500</h4>
                      </li>
                      <li className="p-r-20">
                        <h5 className="text-muted"><i className="fa fa-circle" style={{color: '#01c0c8'}} /> Tredshow</h5>
                        <h4 className="m-b-0">3630</h4>
                      </li>
                      <li>
                        <h5 className="text-muted"> <i className="fa fa-circle" style={{color: '#4F5467'}} /> Web</h5>
                        <h4 className="m-b-0">4870</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Top Products sales</h5>
                    <ul className="list-inline text-center">
                      <li>
                        <h5><i className="fa fa-circle m-r-5" style={{color: '#00bfc7'}} />iMac</h5>
                      </li>
                      <li>
                        <h5><i className="fa fa-circle m-r-5" style={{color: '#b4becb'}} />iPhone</h5>
                      </li>
                    </ul>
                    <div id="morris-area-chart2" style={{height: '370px'}} />
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* Total Leads */}
            {/* ============================================================== */}
            {/* .row */}
            <div className="row">
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><small className="pull-right text-success"><i className="fa fa-sort-asc" /> 18% High then last month</small> Total Leads</h5>
                    <div className="stats-row">
                      <div className="stat-item">
                        <h6>Overall Growth</h6>
                        <b>80.40%</b></div>
                      <div className="stat-item">
                        <h6>Montly</h6>
                        <b>15.40%</b></div>
                      <div className="stat-item">
                        <h6>Day</h6>
                        <b>5.50%</b></div>
                    </div>
                  </div>
                  <div id="sparkline8" className="minus-mar" />
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><small className="pull-right text-danger"><i className="fa fa-sort-desc" /> 18% High then last month</small>Total Vendor</h5>
                    <div className="stats-row">
                      <div className="stat-item">
                        <h6>Overall Growth</h6>
                        <b>80.40%</b></div>
                      <div className="stat-item">
                        <h6>Montly</h6>
                        <b>15.40%</b></div>
                      <div className="stat-item">
                        <h6>Day</h6>
                        <b>5.50%</b></div>
                    </div>
                  </div>
                  <div id="sparkline9" className="minus-mar" />
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><small className="pull-right text-success"><i className="fa fa-sort-asc" /> 18% High then last month</small>Invoice</h5>
                    <div className="stats-row">
                      <div className="stat-item">
                        <h6>Overall Growth</h6>
                        <b>80.40%</b></div>
                      <div className="stat-item">
                        <h6>Montly</h6>
                        <b>15.40%</b></div>
                      <div className="stat-item">
                        <h6>Day</h6>
                        <b>5.50%</b></div>
                    </div>
                  </div>
                  <div id="sparkline10" className="minus-mar" />
                </div>
              </div>
            </div>
            {/* /.row */}
            {/* ============================================================== */}
            {/* End Total Leads */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* New Customers List and New Products List */}
            {/* ============================================================== */}
            {/* /row */}
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title m-b-0">New Customers List</h5>
                    <p className="text-muted">this is the sample data here for crm</p>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Deshmukh</td>
                            <td>Prohaska</td>
                            <td>@Genelia</td>
                            <td><span className="label label-danger">admin</span> </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Deshmukh</td>
                            <td>Gaylord</td>
                            <td>@Ritesh</td>
                            <td><span className="label label-info">member</span> </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sanghani</td>
                            <td>Gusikowski</td>
                            <td>@Govinda</td>
                            <td><span className="label label-warning">developer</span> </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Roshan</td>
                            <td>Rogahn</td>
                            <td>@Hritik</td>
                            <td><span className="label label-success">supporter</span> </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Joshi</td>
                            <td>Hickle</td>
                            <td>@Maruti</td>
                            <td><span className="label label-info">member</span> </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Nigam</td>
                            <td>Eichmann</td>
                            <td>@Sonu</td>
                            <td><span className="label label-success">supporter</span> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title m-b-0">New Product List</h5>
                    <p className="text-muted">this is the sample data here for crm</p>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Products</th>
                            <th>Popularity</th>
                            <th>Sales</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Milk Powder</td>
                            <td><span className="peity-line" data-width={120} data-peity="{ &quot;fill&quot;: [&quot;#13dafe&quot;], &quot;stroke&quot;:[&quot;#13dafe&quot;]}" data-height={40}>0,-3,-2,-4,-5,-4,-3,-2,-5,-1</span> </td>
                            <td><span className="text-danger text-semibold"><i className="fa fa-level-down" aria-hidden="true" /> 28.76%</span> </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Air Conditioner</td>
                            <td><span className="peity-line" data-width={120} data-peity="{ &quot;fill&quot;: [&quot;#13dafe&quot;], &quot;stroke&quot;:[&quot;#13dafe&quot;]}" data-height={40}>0,-1,-1,-2,-3,-1,-2,-3,-1,-2</span> </td>
                            <td><span className="text-warning text-semibold"><i className="fa fa-level-down" aria-hidden="true" /> 8.55%</span> </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>RC Cars</td>
                            <td><span className="peity-line" data-width={120} data-peity="{ &quot;fill&quot;: [&quot;#13dafe&quot;], &quot;stroke&quot;:[&quot;#13dafe&quot;]}" data-height={40}>0,3,6,1,2,4,6,3,2,1</span> </td>
                            <td><span className="text-success text-semibold"><i className="fa fa-level-up" aria-hidden="true" /> 58.56%</span> </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Down Coat</td>
                            <td><span className="peity-line" data-width={120} data-peity="{ &quot;fill&quot;: [&quot;#13dafe&quot;], &quot;stroke&quot;:[&quot;#13dafe&quot;]}" data-height={40}>0,3,6,4,5,4,7,3,4,2</span> </td>
                            <td><span className="text-info text-semibold"><i className="fa fa-level-up" aria-hidden="true" /> 35.76%</span> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
            {/* ============================================================== */}
            {/* End Page Content */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* Right sidebar */}
            {/* ============================================================== */}
            {/* .right-sidebar */}
            <div className="right-sidebar">
              <div className="slimscrollright">
                <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
                <div className="r-panel-body">
                  <ul id="themecolors" className="m-t-20">
                    <li><b>With Light sidebar</b></li>
                    <li><a href="javascript:void(0)" data-skin="skin-default" className="default-theme">1</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-green" className="green-theme">2</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-red" className="red-theme">3</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-blue" className="blue-theme">4</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-purple" className="purple-theme">5</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-megna" className="megna-theme">6</a></li>
                    <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                    <li><a href="javascript:void(0)" data-skin="skin-default-dark" className="default-dark-theme working">7</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-green-dark" className="green-dark-theme">8</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-red-dark" className="red-dark-theme">9</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-blue-dark" className="blue-dark-theme">10</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-purple-dark" className="purple-dark-theme">11</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-megna-dark" className="megna-dark-theme ">12</a></li>
                  </ul>
                  <ul className="m-t-20 chatonline">
                    <li><b>Chat option</b></li>
                    <li>
                      <a href="javascript:void(0)"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/5.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/6.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/7.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/8.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Right sidebar */}
            {/* ============================================================== */}
          </div>
          {/* ============================================================== */}
          {/* End Container fluid  */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Page wrapper  */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* footer */}
        {/* ============================================================== */}
        <footer className="footer">
          © 2018 Eliteadmin by themedesigner.in
        </footer>
        {/* ============================================================== */}
        {/* End footer */}
        {/* ============================================================== */}
      </div>
       </div>
   );
}
  }
  
  export default Dashboard;
  