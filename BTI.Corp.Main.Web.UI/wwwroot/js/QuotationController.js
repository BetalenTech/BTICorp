function QuotationController() {
    var self = this;
    self.init = function () {
        var requestQuoteHtml = `
<section class="ftco-section ftco-consult ftco-no-pt ftco-no-pb" style="background-image: url(images/bg_5.jpg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-md-6 py-5 px-md-5">
                <div class="py-md-5">
                    <div class="heading-section heading-section-white ftco-animate mb-5">
                        <h2 class="mb-4">Request A Quote</h2>
                        <p>We are here to assist you with our range of healthcare software solutions. Please fill out the form below to get started.</p>
                    </div>
                    <form action="#" class="appointment-form ftco-animate">
                        <div class="d-md-flex">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name" required>
                            </div>
                            <div class="form-group ml-md-4">
                                <input type="text" class="form-control" placeholder="Last Name" required>
                            </div>
                        </div>
                        <div class="d-md-flex">
                            <div class="form-group">
                                <div class="form-field">
                                    <div class="select-wrap">
                                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                        <select name="services" id="servicesDropdown" class="form-control" required>
                                            <option value="">Select Service</option>
                                            <option value="btHealthSysHub">HealthSysHub</option>
                                            <option value="btHealthPharmacyHub">Pharmacy</option>
                                            <option value="btHRPayrollHub">Payroll</option>
                                            <option value="it-staffing-consulting-company">Staffing</option>
                                            <option value="clinic-login">Clinic</option>
                                            <option value="lab-login">Lab</option>
                                            <option value="hospital-login">Hospital</option>
                                            <option value="outsourcing-projects">Outsourcing Projects</option>
                                            <option value="software-development-company">Software Management</option>
                                            <option value="network-infrastructure-management-services">Network & Infrastructure Management</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ml-md-4">
                                <input type="text" class="form-control" placeholder="Phone" required>
                            </div>
                        </div>
                        <div class="d-md-flex">
                            <div class="form-group">
                                <textarea name="message" id="message" cols="30" rows="2" class="form-control" placeholder="Message" required></textarea>
                            </div>
                            <div class="form-group ml-md-4">
                                <input type="submit" value="Request A Quote" class="btn btn-white py-3 px-4">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
`;

        // Append the Request A Quote HTML to the specified container
        $("#quote-container").append(requestQuoteHtml);
    };
}