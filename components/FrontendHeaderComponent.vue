<template>
	<div>
		<!-- Header Start  -->
		<div id="header" class="header section">
			<div class="container">
				<!-- Header Wrapper Start  -->
				<div class="header-wrapper">
					<!-- Header Logo Start -->
					<div class="header-logo">
						<a href="https://mentorslab.in/"><img
								src="https://mentorslab.in/assets/main/assets/images/logo-mentor.png" alt="" /></a>
					</div>
					<!-- Header Logo End -->

					<!-- Header Right Start -->
					<div class="header-right">
						<!-- Header Menu Start -->
						<div class="header-menu d-none d-lg-block">
							<ul class="main-menu">

								<!-- <li class="active-menu"><a href="index.html">Home</a></li> -->
								<li class=""><a href="https://mentorslab.in/about-us">About Us</a></li>
								<li class=""><a href="https://mentorslab.in/events/upcoming">Upcoming Events</a></li>
								<!--<li><a href="https://mentorslab.in/winning-edge">Winning Edge</a></li>-->
								<!--<li><a href=https://mentorslab.in/programs">Programs</a></li>-->
								<li class=""><a href="https://mentorslab.in/publication">Publication</a></li>
								<!--<li><a href="https://mentorslab.in/leadership">Leadership</a></li>-->
								<li class=""><a href="https://mentorslab.in/iso">ISO</a></li>
								<!-- <li><a href="https://mentorslab.in/expert">Experts</a></li> -->
								<li class=""><a href="https://mentorslab.in/contact-us">Contact</a></li>
								<!-- <li>
                    <a href="blog.html">Blog</a>
                    <ul class="sub-menu">
                      <li><a href="blog.html">Blog Grid</a></li>
                      <li><a href="blog-standard.html">Blog Listing</a></li>
                      <li><a href="blog-details.html">Blog Single</a></li>
                    </ul>
                  </li> -->
							</ul>
						</div>
						<!-- Header Menu End -->

						<!-- Header Meta Start -->
						<div class="header-meta">
							<!-- <div class="header-search d-none d-lg-block">
                  <a class="search-btn" href="#"
                    ><i class="flaticon-loupe"></i
                  ></a>
                  <div class="header-search-content">
                    <form action="#" method="get">
                      <input type="text" placeholder="Search..." />
                      <button class="close-search" type="submit">
                        <i class="flaticon-loupe"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="header-cart">
                  <a class="cart-btn" href="#"
                    ><i class="flaticon-shopping-cart"></i
                  ></a>
                </div> -->
							<div class="header-login-join d-none d-lg-block">
								<!-- <a class="login" href="#">Login</a> -->
								<a class="btn join-btn" href="https://mentorslab.in/registration">Registration</a>
							</div>
							<!-- Header Login Join End -->
						</div>
						<!-- Header Meta End -->

						<div class="header-toggle d-lg-none">
							<button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
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
		<div id="offcanvasMenu" class="offcanvas offcanvas-start">
			<div class="offcanvas-header">
				<!-- Offcanvas Logo Start -->
				<div class="offcanvas-logo">
					<a href="#"><img src="https://mentorslab.in/assets/main/assets/images/logo-mentor.png" alt="" /></a>
				</div>
				<!-- Offcanvas Logo End -->
				<button class="btn-close" data-bs-dismiss="offcanvas"></button>
			</div>

			<div class="offcanvas-body">
				<div class="offcanvas-menu">
					<ul class="main-menu">

						<li><a href="https://mentorslab.in/about-us">About Us</a></li>
						<li><a href="https://mentorslab.in/events/">Upcoming Events</a></li>
						<!--<li><a href="https://mentorslab.in/winning-edge">Winning Edge</a></li>-->
						<li><a href="https://mentorslab.in/publication">Publication</a></li>
						<!--<li><a href=https://mentorslab.in/programs">Programs</a></li>-->
						<!--<li><a href="https://mentorslab.in/leadership">Leadership</a></li>-->
						<li><a href="https://mentorslab.in/iso">ISO</a></li>
						<!--<li><a href="https://mentorslab.in/expert">Experts</a></li> -->
						<li><a href="https://mentorslab.in/contact-us">Contact</a></li>
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
}
</script>