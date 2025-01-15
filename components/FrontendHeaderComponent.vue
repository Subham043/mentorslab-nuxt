<template>
  <div>
    <div class="header-top-section d-none d-lg-block">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-auto">
            <ul class="social-header-top">
              <li class="m-0"><a target="_blank" href="https://www.facebook.com/MentorsLab.in"><i
                    class="fab fa-facebook"></i></a></li>
              <li class="m-0"><a target="_blank" href="https://www.instagram.com/mentorslab.in/"><i
                    class="fab fa-instagram"></i></a></li>
              <li class="m-0"><a target="_blank"
                  href="https://www.linkedin.com/feed/update/urn:li:activity:6914775360538644480/"><i
                    class="fab fa-linkedin"></i></a></li>
              <li class="m-0"><a target="_blank" href="#"><i class="fab fa-twitter"></i></a></li>
            </ul>
          </div>
          <div class="col-auto link-header-top">
            <NuxtLink to="/about-us" class="header-contact-btn">About Us</NuxtLink>
            <NuxtLink to="/events" class="header-contact-btn">Upcoming Events</NuxtLink>
            <NuxtLink to="/iso" class="header-contact-btn">ISO</NuxtLink>
            <NuxtLink to="/publication" class="header-contact-btn">Publication</NuxtLink>
            <NuxtLink to="/contact-us" class="header-contact-btn">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Start  -->
    <div id="header" class="header section">
      <div class="container">
        <!-- Header Wrapper Start  -->
        <div class="header-wrapper">
          <!-- Header Logo Start -->
          <div class="header-logo">
            <NuxtLink to="/"><img src="/images/logo-mentor.webp" alt="" /></NuxtLink>
          </div>
          <!-- Header Logo End -->

          <!-- Header Right Start -->
          <div class="header-right">
            <!-- Header Menu Start -->
            <div class="header-menu d-none d-lg-block">
              <ul class="main-menu">

                <!-- <li class="active-menu"><NuxtLink to="index.html">Home</NuxtLink></li> -->
                <!-- <li class="">
                  <NuxtLink to="/about-us">About</NuxtLink>
                </li> -->
                <li class="">
                  <NuxtLink to="/grooming-principal-aspirants">Grooming Principal Aspirants</NuxtLink>
                </li>
                <li>
                  <el-dropdown>
                    <a href="#" class="el-dropdown-link">
                      Teachers Training<i class="el-icon-arrow-down el-icon--right"></i>
                    </a>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>
                        <NuxtLink to="/courses/ittc-certification">ITTC</NuxtLink>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <NuxtLink to="/courses/ittc-advanced-certification">ITTC Advanced</NuxtLink>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <NuxtLink to="/courses/ttp">TTP</NuxtLink>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
                <!-- <li class=""><NuxtLink to="/events">Events</NuxtLink></li> -->
                <!-- <li class=""><NuxtLink to="/publication">Publication</NuxtLink></li> -->
                <!-- <li class="">
                  <NuxtLink to="/iso">ISO</NuxtLink>
                </li> -->
                <li class="">
                  <NuxtLink to="/school-audit">School Audit</NuxtLink>
                </li>
                <!-- <li class="">
                  <NuxtLink to="/contact-us">Contact</NuxtLink>
                </li> -->

              </ul>
            </div>
            <!-- Header Menu End -->

            <!-- Header Meta Start -->
            <div class="header-meta">
              <div class="header-login-join d-none d-lg-block">
                <!-- <a class="login" to="#">Login</a> -->
                <a class="btn join-btn" href="https://lms.edumentorslab.com/login/index.php" target="_blank">Courses
                </a>
              </div>
              <!-- Header Login Join End -->
            </div>
            <!-- Header Meta End -->

            <div class="header-toggle d-lg-none">
              <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" @click="toggleFrontendSidebar">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <!-- Header Right End -->
        </div>
        <!-- Header Wrapper End -->
      </div>
    </div>
    <!-- Header End -->

    <!-- Offcanvas Start -->
    <div id="offcanvasMenu"
      :class="frontendSidebar ? `offcanvas offcanvas-start offcanvas-start-expand` : `offcanvas offcanvas-start`">
      <div class="offcanvas-header">
        <!-- Offcanvas Logo Start -->
        <div class="offcanvas-logo">
          <NuxtLink to="/"><img src="/images/logo-mentor.webp" alt="" /></NuxtLink>
        </div>
        <!-- Offcanvas Logo End -->
        <button class="btn-close" data-bs-dismiss="offcanvas" @click="toggleFrontendSidebar"></button>
      </div>

      <div class="offcanvas-body">
        <div class="offcanvas-menu">
          <ul class="main-menu">

            <li>
              <NuxtLink to="/about-us">About Us</NuxtLink>
            </li>
            <li>
              <el-dropdown>
                <a href="#" class="el-dropdown-link">
                  Teachers Training<i class="el-icon-arrow-down el-icon--right"></i>
                </a>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <NuxtLink to="/courses/ittc-certification">ITTC</NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <NuxtLink to="/courses/ittc-advanced-certification">ITTC Advanced</NuxtLink>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <NuxtLink to="/courses/ttp">TTP</NuxtLink>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>
              <NuxtLink to="/events">Upcoming Events</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/publication">Publication</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/iso">ISO</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/school-audit">School Audit</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Offcanvas End --> <!-- Instructor Start -->
  </div>
</template>

<script>
export default {
  name: 'FrontendHeaderComponent',
  data() {
    return {
      frontendSidebar: false
    }
  },
  methods: {
    toggleFrontendSidebar() {
      this.frontendSidebar = !this.frontendSidebar
    }
  }
}
</script>

<style>
.offcanvas-start-expand {
  visibility: visible;
  transform: translateX(0);
}

.header-top-section {
  background-color: #0c96e2;
  padding: 5px 0;
}

.header-top-section .social-header-top {
  color: white;
  display: inline-flex;
  gap: 20px;
}

.header-top-section .link-header-top {
  color: white;
  display: inline-flex;
  gap: 20px;
}
</style>
