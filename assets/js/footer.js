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
                        <a href="https://www.facebook.com/profile.php?id=100083168575127" class="social-icon fb text-decoration-none">
                            <i class="bi bi-facebook"></i>
                            <span class="d-none d-md-inline">Facebook</span>
                        </a>
                        <a href="https://x.com/ecell_rgipt" class="social-icon twt text-decoration-none">
                            <i class="bi bi-twitter"></i>
                            <span class="d-none d-md-inline">Twitter</span>
                        </a>

                        <a href="https://www.linkedin.com/in/e-cell-rgipt-461705220" class="social-icon lnk text-decoration-none">                
                            <i class="bi bi-linkedin"></i>
                            <span class="d-none d-md-inline">LinkedIn</span>
                        </a>

                        <a href="https://www.instagram.com/ecell_rgipt" class="social-icon insta text-decoration-none">
                            <i class="bi bi-instagram"></i>
                            <span class="d-none d-md-inline">Instagram</span>
                        </a>
                    </div>
                </div>
                <!-- Contact Section -->
                <div class="col-lg-3 col-10 mt-4 mt-lg-0 contact-us">
                    <h4 class="fs-1 fw-bold">Contact Us</h4>
                    <p><i>ecell@rgipt.ac.in</i></p>
                    <div>
                        <div>
                            <input type="text" id="name" placeholder="Name"><br>
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

