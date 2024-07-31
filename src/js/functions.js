export function dinamicScroll() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    const header = document.querySelector('.navbar');

    

    const updateNavItems = () => {
        let activeSectionIndex = -1;
        const scrollPosition = window.scrollY + header.offsetHeight;

        sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = index;
        }
        });

        if (activeSectionIndex !== -1 && navItems[activeSectionIndex]) {
            navItems.forEach(item => item.classList.remove('active'));
            navItems[activeSectionIndex].classList.add('active');
        }
    };

    const onScroll = () => {
        updateNavItems();
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
};

export function loadPage() {
    const contentHidden = document.querySelectorAll('.content')
    const loadingContainer = document.createElement('div');

    loadingContainer.classList.add('loading-container', 'd-flex', 'flex-column', 'vh-100', 'align-items-center', 'justify-content-center', 'gap-4');
    loadingContainer.innerHTML = `
        <div class="spinner-border text-lbluefox" role="status">
        </div>
        <p>Loading...</p>
    `;
    document.body.appendChild(loadingContainer);

    // Simula um tempo de carregamento (por exemplo, 2 segundos)
    setTimeout(() => {
        // Remove completamente o conteúdo HTML da loading page
        // document.body.innerHTML = '';

        document.body.removeChild(loadingContainer);
        contentHidden.forEach(element => {
            element.classList.toggle('visually-hidden');
        });
    }, 1000);
};

export function colorModeToggler() {
  
    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = theme => {
      if (theme === 'auto') {
        document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const btnOfActiveBtnQuery = btnToActive.querySelectorAll('i')
      console.log(btnToActive)
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
        element.querySelector('.bi-check').classList.add('d-none')
      })
  

      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      btnToActive.querySelector('.bi-check').classList.remove('d-none')
      activeThemeIcon.setAttribute('class', btnOfActiveBtnQuery[0].getAttribute('class') + ' theme-icon-active')
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (focus) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')

            console.log(theme)
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    
};

