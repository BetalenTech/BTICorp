function HomeSliderController() {
    var self = this;
    self.init = function () {
        var sliderHtml = `
                <section class="home-slider owl-carousel">
                    <div class="slider-item" style="background-image:url(images/bg-5.jpg);">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                                <div class="col-md-7 ftco-animate">
                                    <span class="subheading">Try Our Free Hospital Software</span>
                                    <h1 class="mb-4">Transform Patient Care with Technology</h1>
                                    <p><a href="#" class="btn btn-primary px-4 py-3 mt-3">Try now for free trial</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="slider-item" style="background-image:url(images/bg_1.jpg);">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                                <div class="col-md-7 ftco-animate">
                                    <span class="subheading">Free Pharmacy Management Software</span>
                                    <h1 class="mb-4">Streamline Your Pharmacy Operations</h1>
                                    <p><a href="#" class="btn btn-primary px-4 py-3 mt-3">Try now for free trial</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="slider-item" style="background-image:url(images/bg_2.jpg);">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                                <div class="col-md-7 ftco-animate">
                                    <span class="subheading">Try Our Free Clinic Software</span>
                                    <h1 class="mb-4">Enhance Patient Management Efforts</h1>
                                    <p><a href="#" class="btn btn-primary px-4 py-3 mt-3">Try now for free trial</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="slider-item" style="background-image:url(images/bg_3.jpg);">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                                <div class="col-md-7 ftco-animate">
                                    <span class="subheading">Free Lab Management Software</span>
                                    <h1 class="mb-4">Optimize Your Lab Operations</h1>
                                    <p><a href="#" class="btn btn-primary px-4 py-3 mt-3">Try now for free trial</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="slider-item" style="background-image:url(images/bg_1.jpg);">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                                <div class="col-md-7 ftco-animate">
                                    <span class="subheading">IT Staffing Solutions</span>
                                    <h1 class="mb-4">Find the Right Talent for Your Projects</h1>
                                    <p><a href="#" class="btn btn-primary px-4 py-3 mt-3">Try now for free trial</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="slider-item" style="background-image:url(images/bg_5.jpg);">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                                <div class="col-md-7 ftco-animate">
                                    <span class="subheading">Technology Development Services</span>
                                    <h1 class="mb-4">Innovative Solutions for Your Business</h1>
                                    <p><a href="#" class="btn btn-primary px-4 py-3 mt-3">Try now for free trial</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;

        // Append the slider HTML to the slider container
        $("#slider-container").append(sliderHtml);
        $(".home-slider").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 1,
            nav: true,
            dots: true,
            navText: ["<span class='icon-chevron-left'></span>", "<span class='icon-chevron-right'></span>"]
        });
    };
}