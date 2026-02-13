document.getElementById('loginBtn').addEventListener('click', function() {
    alert('Redirecting to Login...');
});

window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
};

