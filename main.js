  const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            mobileMenu.style.maxHeight = '0px';
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        } else {
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
            mobileMenuButton.setAttribute('aria-expanded', 'true');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            if (mobileMenuButton.getAttribute('aria-expanded') === 'true') {
                mobileMenu.style.maxHeight = '0px';
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        }
    });
    
    // Close mobile menu on window resize to desktop landscape
    window.addEventListener('resize', () => {
        const isLandscapeDesktop = window.innerWidth >= 1024 && window.matchMedia('(orientation: landscape)').matches;
        if (isLandscapeDesktop) {
            mobileMenu.style.maxHeight = '0px';
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        }
    });
    
    // Handle orientation changes
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            const isLandscapeDesktop = window.innerWidth >= 1024 && window.matchMedia('(orientation: landscape)').matches;
            if (isLandscapeDesktop) {
                mobileMenu.style.maxHeight = '0px';
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        }, 100);
    });

        // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
            scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });