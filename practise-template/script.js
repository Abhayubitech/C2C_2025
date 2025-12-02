document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');

    // Initialize AOS
    try {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true
            });
        } else {
            console.warn('AOS library not found');
        }
    } catch (e) {
        console.error('AOS init failed:', e);
    }

    // Initialize Owl Carousel
    try {
        if (typeof $ !== 'undefined' && $('.owl-carousel').length > 0) {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                autoWidth: true,
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    1000: { items: 3 }
                }
            });
        }
    } catch (e) {
        console.error('OwlCarousel init failed:', e);
    }

    // Signup Logic
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        console.log('Signup form found');
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Signup submitted');
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (localStorage.getItem(email)) {
                alert('User already exists! Please login.');
                return;
            }

            const user = { name, email, password };
            localStorage.setItem(email, JSON.stringify(user));
            console.log('User created:', user);
            alert('Signup successful! Redirecting to login...');
            window.location.href = 'login.html';
        });
    }

    // Login Logic
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        console.log('Login form found');
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Login submitted');
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const userStr = localStorage.getItem(email);
            if (!userStr) {
                alert('User not found! Please sign up.');
                return;
            }

            const user = JSON.parse(userStr);
            if (user.password === password) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log('Login successful');
                window.location.href = 'dashboard.html';
            } else {
                alert('Incorrect password!');
            }
        });
    }

    // Dashboard Logic (Protected Route)
    if (window.location.pathname.includes('dashboard.html')) {
        console.log('Dashboard loaded');
        const currentUserStr = localStorage.getItem('currentUser');
        if (!currentUserStr) {
            alert('You must be logged in to view this page.');
            window.location.href = 'login.html';
            return;
        }

        const currentUser = JSON.parse(currentUserStr);
        const greeting = document.getElementById('userGreeting');
        if (greeting) {
            greeting.textContent = `Hello, ${currentUser.name}`;
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            });
        }

        // --- Complex Image Grid Logic (DOM Manipulation) ---
        const imageGrid = document.getElementById('imageGrid');
        if (imageGrid) {
            const galleryData = [
                { id: 1, title: 'Project Alpha', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
                { id: 2, title: 'Design Beta', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
                { id: 3, title: 'Code Gamma', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
                { id: 4, title: 'App Delta', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
                { id: 5, title: 'Web Epsilon', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
                { id: 6, title: 'Cloud Zeta', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
            ];

            galleryData.forEach(item => {
                // Create Elements
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item';
                
                const img = document.createElement('img');
                img.src = item.img;
                img.alt = item.title;

                const caption = document.createElement('div');
                caption.className = 'grid-caption';
                caption.textContent = item.title;

                // Append to Grid Item
                gridItem.appendChild(img);
                gridItem.appendChild(caption);

                // Add Event Listeners (Advanced)
                gridItem.addEventListener('mouseenter', function() {
                    console.log(`Hovered over: ${item.title}`);
                    // Example of JS-driven style manipulation (in addition to CSS)
                    this.style.borderColor = '#0d6efd';
                    this.style.borderWidth = '2px';
                    this.style.borderStyle = 'solid';
                });

                gridItem.addEventListener('mouseleave', function() {
                    this.style.border = 'none';
                });

                // Append to Container
                imageGrid.appendChild(gridItem);
            });
        }

        // --- Scroll Spy Logic ---
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(li => {
                li.classList.remove('active');
                const href = li.getAttribute('href');
                if (href && href.includes(current)) {
                    li.classList.add('active');
                }
            });
        });

        // --- Combinator Playground Logic ---
        const playground = document.getElementById('playground');
        const desc = document.getElementById('combinatorDescription');
        
        if (playground && desc) {
            const resetPlayground = () => {
                playground.classList.remove('active-direct', 'active-adjacent', 'active-general');
                desc.textContent = 'Select a combinator to see the effect.';
                desc.className = 'text-muted fst-italic';
            };

            document.getElementById('btnDirectChild').addEventListener('click', () => {
                resetPlayground();
                playground.classList.add('active-direct');
                desc.textContent = 'Direct Child (>): Selects all .child-box elements that are immediate children of .parent-box.';
                desc.className = 'text-primary fw-bold';
            });

            document.getElementById('btnAdjacentSibling').addEventListener('click', () => {
                resetPlayground();
                playground.classList.add('active-adjacent');
                desc.textContent = 'Adjacent Sibling (+): Selects the .child-box immediately following the target element.';
                desc.className = 'text-success fw-bold';
            });

            document.getElementById('btnGeneralSibling').addEventListener('click', () => {
                resetPlayground();
                playground.classList.add('active-general');
                desc.textContent = 'General Sibling (~): Selects all .child-box elements that follow the target element.';
                desc.className = 'text-info fw-bold';
            });

            document.getElementById('btnReset').addEventListener('click', resetPlayground);
        }

        // --- Positioning Playground Logic ---
        const posBox = document.getElementById('posBox');
        const posDesc = document.getElementById('posDescription');

        if (posBox && posDesc) {
            const resetPosition = () => {
                posBox.className = 'pos-box bg-danger text-white d-flex justify-content-center align-items-center shadow rounded';
                posDesc.textContent = 'Select a position type to see the effect.';
                posDesc.className = 'text-muted fst-italic';
            };

            document.getElementById('btnRelative').addEventListener('click', () => {
                resetPosition();
                posBox.classList.add('pos-relative');
                posDesc.textContent = 'Relative: Moved 20px down and 50px right from its NORMAL position. Space is preserved.';
                posDesc.className = 'text-warning fw-bold';
            });

            document.getElementById('btnAbsolute').addEventListener('click', () => {
                resetPosition();
                posBox.classList.add('pos-absolute');
                posDesc.textContent = 'Absolute: Removed from flow. Positioned relative to the nearest positioned ancestor (the container).';
                posDesc.className = 'text-primary fw-bold';
            });

            document.getElementById('btnFixed').addEventListener('click', () => {
                resetPosition();
                posBox.classList.add('pos-fixed');
                posDesc.textContent = 'Fixed: Removed from flow. Positioned relative to the VIEWPORT. Stays in place when scrolling.';
                posDesc.className = 'text-success fw-bold';
            });

            document.getElementById('btnSticky').addEventListener('click', () => {
                resetPosition();
                posBox.classList.add('pos-sticky');
                posDesc.textContent = 'Sticky: Toggles between relative and fixed based on scroll position. Scroll the container to see it stick!';
                posDesc.className = 'text-info fw-bold';
            });

            document.getElementById('btnPosReset').addEventListener('click', resetPosition);
        }
    }
});
