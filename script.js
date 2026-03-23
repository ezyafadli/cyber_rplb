// 1. Loading Animasi
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// 2. Fungsi Toggle Menu (Buka/Tutup Hamburger)
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
    
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
}

// 3. Menutup Menu (Hamburger) Saat Klik di Mana Saja (Area Luar)
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");

    // Jika menu terbuka DAN yang diklik bukan area menu/tombol hamburger
    if (navLinks.classList.contains('active')) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        }
    }
});

// 4. Efek Navbar & Animasi Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        // Saat di-scroll ke bawah: Warna solid & blur
        navbar.style.background = 'rgba(26, 26, 46, 0.95)'; 
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        // Saat kembali ke paling atas: Warna agak gelap transparan (bukan hilang total)
        navbar.style.background = 'rgba(26, 26, 46, 0.6)'; 
        navbar.style.backdropFilter = 'blur(5px)';
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = 'none';
    }
});

// 5. Animasi Mengetik (Typewriter)
const text = "Membangun masa depan dengan kolaborasi dan kreativitas.";
let index = 0;
let speed = 100;

function typeWriter() {
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement && index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// 6. Animasi Counter Angka
const counters = document.querySelectorAll('.counter');
const startCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

const statsSection = document.querySelector('.stats-mini');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startCounter();
            observer.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

// 7. Fitur Lightbox (Album)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const albumImages = document.querySelectorAll('.album-item img');

albumImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src;
        lightboxCaption.innerHTML = image.getAttribute('data-description');
        lightbox.classList.add('active');
    });
});

function closeLightbox() {
    if(lightbox) lightbox.classList.remove('active');
}

if(lightbox) {
    lightbox.addEventListener('click', (e) => { 
        if (e.target === lightbox) closeLightbox(); 
    });
}

// 8. Jalankan Fungsi saat Halaman Dimuat
window.onload = function() {
    typeWriter(); // Jalankan animasi ketik
};

// 9. Fitur Scroll
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    // Jalankan fungsi scroll navbar yang sudah ada sebelumnya, tambahkan ini:
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
