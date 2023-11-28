document.addEventListener('DOMContentLoaded', function () {
    const welcomeTab = document.getElementById('welcomeTab');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const mainTab = document.getElementById('mainTab');
    const detailTab = document.getElementById('detailTab');

    const welcomeContent = document.getElementById('welcome');
    const loginContent = document.getElementById('login');
    const registerContent = document.getElementById('register');
    const mainContent = document.getElementById('main');
    const detailContent = document.getElementById('detail'); 

    function hideAll() {
        welcomeContent.style.display = 'none';
        loginContent.style.display = 'none';
        registerContent.style.display = 'none';
        mainContent.style.display = 'none';
        detailContent.style.display = 'none'; 
    }

    function displayContent(tab, content) {
        hideAll();

        const allTabs = document.querySelectorAll('.nav-link');
        allTabs.forEach((individualTab) => {
            if (individualTab.id === tab.id) {
                individualTab.classList.add('active');
            } else {
                individualTab.classList.remove('active');
            }
        });

        content.style.display = 'block';
    }

    loginTab.addEventListener('click', function (e) {
        e.preventDefault();
        displayContent(loginTab, loginContent);
    });

    welcomeTab.addEventListener('click', function (e) {
        e.preventDefault();
        displayContent(welcomeTab, welcomeContent);
    });

    registerTab.addEventListener('click', function (e) {
        e.preventDefault();
        displayContent(registerTab, registerContent);
    });

    mainTab.addEventListener('click', function (e) {
        e.preventDefault();
        displayContent(mainTab, mainContent);
    });

    detailTab.addEventListener('click', function (e) { 
        e.preventDefault();
        displayContent(detailTab, detailContent);
    }); 

    const welcomeLink = document.querySelector('#welcome a');
    welcomeLink.addEventListener('click', function (e) {
        e.preventDefault();
        displayContent(detailTab, detailContent); 
    });

    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');

    loginButton.addEventListener('click', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'muadzalch' && password === 'password123') {
            alert('Login berhasil');

            const tabContents = document.querySelectorAll('.tabcontent');
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            mainTab.classList.add('active');
            mainContent.style.display = 'block';
        } else {
            alert('Login gagal: Silakan ketik kembali hint text');
        }
    });

    registerButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Registrasi berhasil');

        const tabContents = document.querySelectorAll('.tabcontent');
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
        mainTab.classList.add('active');
        mainContent.style.display = 'block';
    });
});
