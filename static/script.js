document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('topButton');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 1. 탭 전환 기능
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // 링크 클릭 시 페이지 이동 방지

            // 1-1. 모든 메뉴의 active 클래스 제거
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // 1-2. 클릭한 메뉴에 active 클래스 추가
            link.classList.add('active');

            // 1-3. 모든 섹션 숨기기
            sections.forEach(section => section.classList.remove('active'));

            // 1-4. 클릭한 메뉴의 data-target에 해당하는 섹션만 보여주기
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    updateProgressBar();
    window.addEventListener('scroll', updateProgressBar);

    function updateProgressBar() {
        const winScroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        document.documentElement.style.setProperty('--scroll-width', Math.min(scrolled, 100) + '%');
    }
});


