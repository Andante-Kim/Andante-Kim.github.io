document.addEventListener('DOMContentLoaded', function() {
    const controlButtons = document.querySelectorAll('.control-btn');
    controlButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('close')) {
                alert('👋 Thanks for visiting my portfolio!');
            } else if (this.classList.contains('minimize')) {
                document.querySelector('.window-container').style.transform = 'scale(0.95)';
                setTimeout(() => {
                    document.querySelector('.window-container').style.transform = 'scale(1)';
                }, 200);
            } else if (this.classList.contains('maximize')) {
                document.querySelector('.window-container').classList.toggle('maximized');
            }
        });
    });

    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            //e.preventDefault();
            const platform = this.textContent.trim();
            console.log('Contact via:', platform);
        });
    });
});
