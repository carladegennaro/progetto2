let projectData = [];
        let currentFilter = 'all';
        let currentSort = 'titolo';
        let sortDirection = 'asc';
        const IMAGE_BASE_URL = "assets/imgs/";

        const logoWrapper = document.getElementById('logoWrapper');
        let starInterval;

        logoWrapper.onmouseenter = () => {
            starInterval = setInterval(() => {
                for (let i = 0; i < 2; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    
                    const size = Math.random() * 8 + 8; 
                    
                    star.style.width = `${size}px`;
                    star.style.height = `${size}px`;
                    
                    const x = Math.random() * document.body.clientWidth;
                    const y = Math.random() * document.body.clientHeight;
                    
                    star.style.left = `${x}px`;
                    star.style.top = `${y}px`;
                    
                    document.body.appendChild(star);
                    
                    setTimeout(() => star.remove(), 800);
                }
            }, 2);
        };

        logoWrapper.onmouseleave = () => {
            clearInterval(starInterval);
        };

        const backToTopButton = document.getElementById('back-to-top');
        const stickyHeader = document.getElementById('sticky-header');

        window.addEventListener('scroll', () => {
            const headerTop = stickyHeader.getBoundingClientRect().top;

            if (window.scrollY > 200) { 
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }

            if (headerTop <= 0 && window.scrollY > 300) {
                stickyHeader.classList.add('scrolled');
            } else {
                stickyHeader.classList.remove('scrolled');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });

        async function loadData() {
            try {
                const response = await fetch('https://ixd-supsi.github.io/n70api/data.json');
                projectData = await response.json();
                initFilters();
                updateSortHeaders();
                renderItems();
            } catch (error) { console.error(error); }
        }

        function initFilters() {
            const firstTags = new Set();
            projectData.forEach(item => { if (item.tags && item.tags.length > 0) firstTags.add(item.tags[0]); });
            
            const container = document.getElementById('filter-container');
            
            firstTags.forEach(tag => {
                const el = document.createElement('div');
                el.className = 'chip'; 
                el.innerText = tag;
                el.onclick = () => filterBy(tag, el);
                container.appendChild(el);
            });
        }

        function setSort(type) {
            if (currentSort === type) {
                sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentSort = type;
                sortDirection = 'asc';
            }
            updateSortHeaders();
            renderItems();
        }

        function updateSortHeaders() {
            const keys = ['titolo', 'autore', 'data'];
            keys.forEach(key => {
                const header = document.getElementById(`sort-${key}`);
                if (!header) return;
                
                const arrow = header.querySelector('.sort-arrow');
                
                if (key === currentSort) {
                    header.classList.add('active-sort');
                    arrow.innerText = sortDirection === 'asc' ? '↑' : '↓';
                } else {
                    header.classList.remove('active-sort');
                    arrow.innerText = '↓';
                }
            });
        }

        function filterBy(tag, el) {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
            currentFilter = tag;
            renderItems();
        }

        function renderItems() {
            const container = document.getElementById('items-container');
            const query = document.getElementById('searchInput').value.toLowerCase();
            container.innerHTML = '';

            let filtered = projectData.filter(i => {
                const matchesFilter = currentFilter === 'all' || (i.tags && i.tags[0] === currentFilter);
                
                const matchesTagArray = i.tags && i.tags.some(t => t.toLowerCase().includes(query));
                const matchesSearch = i.titolo.toLowerCase().includes(query) || 
                                      (i.autore && i.autore.toLowerCase().includes(query)) || 
                                      matchesTagArray;
                                      
                return matchesFilter && matchesSearch;
            });
            
            filtered.sort((a,b) => {
                let comparison = 0;
                if (currentSort === 'data') {
                    const dateA = new Date(a.data?.anno || 0, (a.data?.mese || 1) - 1, a.data?.giorno || 1);
                    const dateB = new Date(b.data?.anno || 0, (b.data?.mese || 1) - 1, b.data?.giorno || 1);
                    comparison = dateA - dateB;
                } else {
                    comparison = (a[currentSort] || "").localeCompare(b[currentSort] || "");
                }
                return sortDirection === 'asc' ? comparison : -comparison;
            });

            filtered.forEach(item => {
                const hasImage = item.immagine && item.immagine.length > 0;
                const imgPath = hasImage ? IMAGE_BASE_URL + item.immagine[0] : "";
                const day = item.data?.giorno || "--";
                const month = item.data?.mese || "--";
                const year = item.data?.anno || "----";
                const projectUrl = item.url || "#";
                
                const imageHtml = hasImage 
                    ? `<div class="project-image-fixed" style="background-image: url('${imgPath}')"></div>` 
                    : `<div class="project-image-fixed"></div>`;
                
                const row = document.createElement('div');
                row.className = 'project-row';
                row.onclick = () => { if(projectUrl !== "#") window.open(projectUrl, '_blank'); };
                row.innerHTML = `
                    <div class="project-content">
                        <div class="title-wrapper">
                            <div class="project-title">${item.titolo}</div>
                        </div>
                        <div class="project-meta">${item.autore || "NASA"}</div>
                        <div class="project-meta">${day}/${month}/${year}</div>
                    </div>
                    <div class="project-meta-wrapper">
                        <div class="description-grid">
                            <div class="project-description">${item.descrizione || "No description available."}</div>
                        </div>
                        <div class="image-container-col">${imageHtml}</div>
                    </div>
                `;

                container.appendChild(row);
            });
        }

        window.onload = loadData;