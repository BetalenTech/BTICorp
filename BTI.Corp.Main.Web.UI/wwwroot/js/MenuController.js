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
                                            <a href="#" class="btn py-2 px-3 btn-primary">
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
                                                <a class="dropdown-item" href="/outsourcing-projects/">Outsourcing Projects</a>
                                                <a class="dropdown-item" href="/software-development-company/">Software Management</a>
                                                <a class="dropdown-item" href="/network-infrastructure-management-services/">Network & Infrastructure Management</a>
                                                <a class="dropdown-item" href="/server-storages-solutions/">Server & Storages</a>
                                                <a class="dropdown-item" href="/software-testing-company/">Testing & Audit Functions</a>
                                            </div>
                                            <div class="col-md-6">
                                                <h6 class="dropdown-header">More Services</h6>
                                                <a class="dropdown-item" href="/human-resource-management-services/">HRMS Assessments</a>
                                                <a class="dropdown-item" href="/product-development-2/">Product Development</a>
                                                <a class="dropdown-item" href="/digital-transformation/">Digital Enterprise Transformation</a>
                                                <a class="dropdown-item" href="/managed-it-services/">Managed Services</a>
                                                <a class="dropdown-item" href="/it-staffing-consulting-company/">IT Staffing</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" id="loginDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</a>
                                    <div class="dropdown-menu" aria-labelledby="loginDropdown">
                                        <a class="dropdown-item" href="/employee-login.html">Employee Login</a>
                                        <a class="dropdown-item" href="/healthsys-hub-login.html">Hospital Login</a>
                                        <a class="dropdown-item" href="/clinic-login.html">Clinic Login</a>
                                        <a class="dropdown-item" href="/pharmacy-login.html">Pharmacy Login</a>
                                        <a class="dropdown-item" href="/lab-login.html">Lab Login</a>
                                        <a class="dropdown-item" href="/payroll-login.html">Payroll Login</a>
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
    };
}