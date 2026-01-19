
// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Mission & Vision card flip functionality
document.getElementById('missionCard').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

document.getElementById('visionCard').addEventListener('click', function() {
    this.classList.toggle('flipped');
});
