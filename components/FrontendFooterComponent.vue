<template>
    <div>
        <!-- Footer Start -->
        <div class="footer-section section">
            <div class="container">

                <!-- Footer Widget Wrapper Start -->
                <div class="footer-widget-wrapper">
                    <div class="row" style="justify-content:space-between;">
                        <div class="col-lg-4 col-sm-6">
                            <!-- Footer Widget Start -->
                            <div class="footer-widget widget-about text-center">
                                <NuxtLink class="footer-logo" to="/"><img
                                        src="/images/logo-edumentor.webp" alt="Logo"></NuxtLink>

                                <div class="widget-info">

                                    <ul class="social justify-content-center gap-3">
                                        <li class="m-0"><a target="_blank" href="https://www.facebook.com/MentorsLab.in"><i
                                                    class="fab fa-facebook"></i></a></li>
                                        <li class="m-0"><a target="_blank" href="https://www.instagram.com/mentorslab.in/"><i
                                                    class="fab fa-instagram"></i></a></li>
                                        <li class="m-0"><a
target="_blank"
                                                href="https://www.linkedin.com/feed/update/urn:li:activity:6914775360538644480/"><i
                                                    class="fab fa-linkedin"></i></a></li>
                                        <li class="m-0"><a target="_blank" href="#"><i class="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Footer Widget End -->
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <!-- Footer Widget Start -->
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Useful Links</h4>

                                <div class="widget-link">
                                    <ul class="link">
                                        <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
                                        <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
                                        <li><NuxtLink to="#">Privacy Policy</NuxtLink></li>
                                        <li><NuxtLink to="#">Terms & Condition</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Footer Widget End -->
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <!-- Footer Widget Start -->
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Quick Links</h4>

                                <div class="widget-link">
                                    <ul class="link">
                                        <li><a href="/events" target="_blank">Upcoming Events</a></li>
                                        <li><NuxtLink to="/publication">Publication</NuxtLink></li>
                                        <li><NuxtLink to="/iso">ISO</NuxtLink></li>
                                        <li><NuxtLink to="/school-audit">School Audit</NuxtLink></li>
                                        <li><NuxtLink to="/courses/ittc-certification">ITTC</NuxtLink></li>
                                        <li><NuxtLink to="/courses/ittc-advanced-certification">ITTC Advanced</NuxtLink></li>
                                        <li><NuxtLink to="/courses/ttp">TTP</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Footer Widget End -->
                        </div>
                        <div class="col-lg-2 col-sm-6">
                            <!-- Footer Widget Start -->
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Contact Us</h4>

                                <ul class="widget-info">
                                    <li>
                                        <div class="media">
                                            <i class="fas fa-phone-volume"></i>
                                            <div class="media-body">
                                                <a href="tel:+9902570561">+91 9902570561</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="media">
                                            <i class="el-icon-message"></i>
                                            <div class="media-body">
                                                <a href="info@pfla.in">info@pfla.in</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- Footer Widget End -->
                        </div>
                    </div>
                </div>
                <!-- Footer Widget Wrapper End -->

                <!-- Footer Copyright End -->
                <div class="footer-copyright">
                    <div class="copyright-wrapper">
                        <!-- <div class="copyright-design">
                        <p>Designed & Developed by <a href="#"> Raistheme</a></p>
                    </div> -->
                        <div class="copyright-text">
                            <p>&copy; Copyright 2022 All Rights Reserved by EdumentorsLab Pvt. Ltd.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Footer Copyright End -->

            </div>
        </div>
        <!-- Footer End -->

        <!-- Back to Top End -->
        <button id="backBtn" class="back-btn"><i class="flaticon-left-arrow-1"></i></button>
        <!-- Back to Top End -->
    </div>
</template>

<script>
export default {
    name: 'FrontendFooterComponent',
}
</script>
