function MenuController() {
    var self = this;
    self.init = function () {
        var headerHtml = `
                <div class="bg-top navbar-light">
                    <div class="container">
                        <div class="row no-gutters d-flex align-items-center align-items-stretch">
                            <div class="col-md-4 d-flex align-items-center py-4">
                                <a class="navbar-brand" href="index.html">
                                    <img src="images/logo.png" style="width:100%; height: 50px;" alt="Consolution Logo" class="img-fluid" />
                                </a>
                            </div>
                            <div class="col-lg-8 d-none d-md-block">
                                <div class="row d-flex">
                                    <div class="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                                        <div class="icon d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                                        <div class="text">
                                            <span><a href="mailto:info@betalen.in">info@betalen.in</a></span>
                                        </div>
                                    </div>
                                    <div class="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                                        <div class="icon d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                                        <div class="text">
                                            <span><a href="tel:+918332043983">Call Us: +91 833-204-3983</a></span>
                                        </div>
                                    </div>
                                    <div class="col-md topper d-flex align-items-center justify-content-end">
                                        <p class="mb-0 d-block">
                                            <a href="contact.html" class="btn py-2 px-3 btn-primary">
                                                <span>Request for Demo</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div class="container d-flex align-items-center">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="oi oi-menu"></span> Menu
                        </button>
                        <div class="collapse navbar-collapse" id="ftco-nav">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active"><a href="index.html" class="nav-link pl-0">Home</a></li>
                                <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" id="productsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                                    <div class="dropdown-menu" aria-labelledby="productsDropdown">
                                        <a class="dropdown-item" href="btHealthSysHub.html">btHealthSysHub</a>
                                        <a class="dropdown-item" href="btHealthClinicHub.html">btHealthClinicHub</a>
                                        <a class="dropdown-item" href="btHealthPharmacyHub.html">btHealthPharmacyHub</a>
                                        <a class="dropdown-item" href="btHRPayrollHub.html">btHRPayrollHub</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                                    <div class="dropdown-menu" aria-labelledby="servicesDropdown">
                                        <div class="row" style="flex-wrap: unset !important;">
                                            <div class="col-md-6">
                                                <h6 class="dropdown-header">Services</h6>
                                                <a class="dropdown-item" href="outsourcing-projects.html">Outsourcing Projects</a>
                                                <a class="dropdown-item" href="software-development.html">Software Management</a>
                                                <a class="dropdown-item" href="network-infrastructure.html">Network & Infrastructure Management</a>
                                                <a class="dropdown-item" href="server-storages.html">Server & Storages</a>
                                                <a class="dropdown-item" href="software-testing.html">Testing & Audit Functions</a>
                                            </div>
                                            <div class="col-md-6">
                                                <h6 class="dropdown-header">More Services</h6>
                                                <a class="dropdown-item" href="human-resource.html">HRMS Assessments</a>
                                                <a class="dropdown-item" href="digital-transformation.html">Digital Enterprise Transformation</a>
                                                <a class="dropdown-item" href="it-staffing.html">IT Staffing</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" id="loginDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</a>
                                    <div class="dropdown-menu" aria-labelledby="loginDropdown">
                                        <a class="dropdown-item" href="https://clarity.betalen.in/">Employee Login</a>
                                        <a class="dropdown-item" href="https://hospital.betalen.in/">Hospital Login</a>
                                        <a class="dropdown-item" href="https://clinic.betalen.in/">Clinic Login</a>
                                        <a class="dropdown-item" href="https://pharmacy.betalen.in/">Pharmacy Login</a>
                                        <a class="dropdown-item" href="https://lab.betalen.in/">Lab Login</a>
                                        <a class="dropdown-item" href="https://clarity.betalen.in/">Payroll Login</a>
                                    </div>
                                </li>
                                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                                <li class="nav-item"><a href="careers.html" class="nav-link">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            `;

        // Append the header HTML to the header container
        $("#header-container").append(headerHtml);

        var footerHtml = `
<footer class="ftco-footer ftco-bg-dark ftco-section" style="background-color: #343a40; color: #ffffff;">
    <div class="container">
        <div class="row mb-5">
            <!-- Contact Information -->
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2">Have Questions?</h2>
                    <div class="block-23 mb-3">
                        <ul>
                            <li><span class="icon icon-map-marker"></span><span class="text">Hi-tech City, Hyderabad, India</span></li>
                            <li><a href="tel:+918332043983"><span class="icon icon-phone"></span><span class="text">+91-833-204-3983</span></a></li>
                            <li><a href="mailto:info@betalen.in"><span class="icon icon-envelope"></span><span class="text">info@betalen.in</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Recent Insights -->
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2">Recent Insights</h2>
                    <div class="block-21 mb-4 d-flex">
                        <a class="blog-img mr-4" style="background-image: url(images/blog_1.jpg);"></a>
                        <div class="text">
                            <h3 class="heading"><a href="#">The Future of Telemedicine: Trends to Watch</a></h3>
                            <div class="meta">
                                <div><a href="#"><span class="icon-calendar"></span> August 15, 2023</a></div>
                                <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span class="icon-chat"></span> 12</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="block-21 mb-4 d-flex">
                        <a class="blog-img mr-4" style="background-image: url(images/blog_2.jpg);"></a>
                        <div class="text">
                            <h3 class="heading"><a href="#">How Data Analytics is Transforming Healthcare</a></h3>
                            <div class="meta">
                                <div><a href="#"><span class="icon-calendar"></span> July 30, 2023</a></div>
                                <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                <div><a href="#"><span class="icon-chat"></span> 8</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-5 ml-md-4">
                    <h2 class="ftco-heading-2">Quick Links</h2>
                    <ul class="list-unstyled">
                        <li><a href="index.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Home</a></li>
                        <li><a href="about.html"><span class="ion-ios-arrow-round-forward mr-2"></span>About Us</a></li>
                        <li><a href="services.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Our Services</a></li>
                        <li><a href="products.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Products</a></li>
                        <li><a href="contact.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <!-- Newsletter and Social Media -->
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2">Subscribe to Our Newsletter</h2>
                    <form action="#" class="subscribe-form">
                        <div class="form-group">
                            <input type="email" class="form-control mb-2 text-center" placeholder="Enter your email address" required>
                            <input type="submit" value="Subscribe" class="form-control submit px-3" style="background-color: #007bff; color: #ffffff;">
                        </div>
                    </form>
                </div>
                <div class="ftco-footer-widget mb-5">
                    <h2 class="ftco-heading-2 mb-0">Connect With Us</h2>
                    <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                        <li class="ftco-animate"><a href="https://x.com/home/betalen"><span class="icon-twitter"></span></a></li>
                        <li class="ftco-animate"><a href="https://facebook.com/betalen"><span class="icon-facebook"></span></a></li>
                        <li class="ftco-animate"><a href="https://www.linkedin.com/company/betalen/"><span class="icon-linkedin"></span></a></li>
                        <li class="ftco-animate"><a href="https://instagram.com/betalen"><span class="icon-instagram"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Copyright Notice -->
        <div class="row">
            <div class="col-md-12 text-center">
                <p>
                    Copyright @ 2025 ,All rights reserved </i> by <a href="https://betalen.in" target="_blank" style="color: #007bff;">betalen</a>
                </p>
            </div>
        </div>
    </div>

</footer>
   <!-- Footer Start -->
  

`;

        // Append the footer HTML to the footer container
        $("#footer-container").append(footerHtml);
    };
}