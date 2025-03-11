document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("footer-placeholder").innerHTML = `
        <footer id="footer" class="footer py-5">
        <div class="container text-center">
            <div class="row justify-content-center">
                <!-- Social Media Section -->
                <div class="col-12 col-lg-8">
                    <h4 class="fs-1 fw-bold">We are social</h4>
                    <p class="fs-4">Visit our social media handles</p>

                    <div class="d-flex flex-wrap justify-content-center gap-3 mt-3">
                        <a href="#" class="social-icon fb text-decoration-none">
                            <i class="fab fa-facebook-f"></i>
                            <span class="d-none d-md-inline">Facebook</span>
                        </a>
                        <a href="#" class="social-icon twt text-decoration-none">
                            <i class="fab fa-twitter"></i>
                            <span class="d-none d-md-inline">Twitter</span>
                        </a>
                        <a href="#" class="social-icon lnk text-decoration-none">
                            <i class="fab fa-linkedin-in"></i>
                            <span class="d-none d-md-inline">LinkedIn</span>
                        </a>
                        <a href="#" class="social-icon insta text-decoration-none">
                            <i class="fab fa-instagram"></i>
                            <span class="d-none d-md-inline">Instagram</span>
                        </a>
                    </div>
                </div>
                <!-- Contact Section -->
                <div class="col-lg-3 mt-4 mt-lg-0 contact-us rounded-4">
                    <h4 class="fs-1 fw-bold">Contact Us</h4>
                    <p>ecell@rgipt.ac.in</p>
                    <div class="d-flex justify-content-center">
                        <div>
                            <input type="text" id="name" placeholder="Name">
                            <input type="email" id="email" placeholder="E-Mail">
                        </div>
                        <button type="submit" id="submit">Submit <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <p class="thanks pt-5">💟 With love from <span>Tech Team, E-Cell RGIPT</span></p>
        </div>
    </footer>
    `;
});
