<template>
  <div class="layout">
      <!-- ========== HEADER ========== -->
  <header id="header" class="header header-box-shadow-on-scroll header-abs-top-lg header-bg-transparent-lg header-show-hide-lg" data-hs-header-options='{
            "fixMoment": 1000,
            "fixEffect": "slide"
          }'>
    <div class="header-section">
      <div id="logoAndNav" class="container">
        <!-- Nav -->
        <nav class="js-mega-menu navbar navbar-expand-lg">
          <!-- Logo -->
          <g-link class="navbar-brand" to="/">
              <g-image src="~/assets/img/credibalImg/logo.png" />
          </g-link>

          <!-- End Logo -->

          <!-- Responsive Toggle Button -->
          <button type="button" class="navbar-toggler btn btn-icon btn-sm rounded-circle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
            <span class="navbar-toggler-default">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z" />
              </svg>
            </span>
            <span class="navbar-toggler-toggled">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z" />
              </svg>
            </span>
          </button>
          <!-- End Responsive Toggle Button -->

          <!-- Navigation -->
          <div id="navBar" class="collapse navbar-collapse">
            <div class="navbar-body header-abs-top-inner">
              <ul class="navbar-nav">
                <!-- Home -->
                <li class="navbar-nav-item">
                  <g-link class="nav-link" to="/features">Features</g-link>
                </li>
                <li class="navbar-nav-item">
                  <g-link class="nav-link" to="/pricing">Pricing</g-link>
                </li>
                <li class="navbar-nav-item">
                  <g-link class="nav-link" to="/about">About</g-link>
                </li>
                <li class="navbar-nav-item">
                  <g-link class="nav-link" to="/blog">Blog</g-link>
                </li>

                <!-- Button -->
                <li class="navbar-nav-last-item">
                  <a class="btn btn-sm btn-primary transition-3d-hover" href="request.php">Start Free Trial</a>
                </li>
                <li class="navbar-nav-last-item">
                  <a class="btn btn-sm btn-primary transition-3d-hover" href="request.php">Login</a>
                </li>
                <!-- End Button -->
              </ul>
            </div>
          </div>
          <!-- End Navigation -->
        </nav>
        <!-- End Nav -->
      </div>
    </div>
  </header>
  <!-- ========== END HEADER ========== -->
      <slot/>

      <!-- ========== FOOTER ========== -->
<footer class="bg-navy">
  <div class="container">
    <div class="space-top-2 space-bottom-1 space-bottom-lg-2">
      <div class="row justify-content-lg-between">
        <div class="col-lg-3 ml-lg-auto mb-5 mb-lg-0">
          <!-- Logo -->
          <div class="mb-4">
            <a href="index.html" aria-label="Front">
              <g-image class="brand" src="~/assets/img/credibalImg/whiteLogo.png" alt="Logo"/>
            </a>
          </div>
          <!-- End Logo -->

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 nav-white flex-column">
            <li class="nav-item">
              <a class="nav-link media" href="javascript:;">
                <span class="media">
                  <span class="fas fa-location-arrow mt-1 mr-2"></span>
                  <span class="media-body">
                    6103 Parkway Dr, Laurel, MD 20707
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link media" href="tel:1-062-109-9222">
                <span class="media">
                  <span class="fas fa-phone-alt mt-1 mr-2"></span>
                  <span class="media-body">
                    (888) iCM - 4020
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-6 col-md-3 col-lg mb-5 mb-lg-0">
          <h5 class="text-white">Features</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 nav-white flex-column">
            <li class="nav-item"><a class="nav-link" href="#">Engage & Retain Donors</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Show your Impact</a></li>
            <li class="nav-item"><a class="nav-link" href="#">How does it work?</a></li>
          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-6 col-md-3 col-lg mb-5 mb-lg-0">
          <h5 class="text-white">Company</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 nav-white flex-column">
            <li class="nav-item"><a class="nav-link" href="pricing.php">Pricing</a></li>
            <li class="nav-item"><a class="nav-link" href="about.php">About</a></li>
            <li class="nav-item"><a class="nav-link" href="blog.php">Blog</a></li>
          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-6 col-md-3 col-lg">
          <h5 class="text-white">Contact</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 nav-white flex-column">
            <li class="nav-item"><a class="nav-link" href="#">Technical Support</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Sales</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.php">General</a></li>
          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-6 col-md-3 col-lg">
          <h5 class="text-white">Resources</h5>

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 nav-white flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="media align-items-center">
                  <i class="fa fa-info-circle mr-2"></i>
                  <span class="media-body">Help</span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="media align-items-center">
                  <i class="fa fa-user-circle mr-2"></i>
                  <span class="media-body">Your Account</span>
                </span>
              </a>
            </li>
          </ul>
          <!-- End Nav Link -->
        </div>
      </div>
    </div>

    <hr class="opacity-xs my-0">

    <div class="space-1">
      <div class="row align-items-md-center mb-7">
        <div class="col-md-6 mb-4 mb-md-0">
          <!-- Nav Link -->
          <p>© 2020 Codenito, Inc. All Rights Reserved. <a href="#">Privacy Policy</a></p>
            <!-- End Nav Link -->
        </div>

        <div class="col-md-6 text-md-right">
          <ul class="list-inline mb-0">
            <!-- Social Networks -->
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-light" href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-light" href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-xs btn-icon btn-soft-light" href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <!-- End Social Networks -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- ========== END FOOTER ========== -->
  </div>
</template>


<static-query>
  
</static-query>