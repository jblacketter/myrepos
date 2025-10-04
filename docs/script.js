(function () {
    const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
    const grid = document.getElementById('projectGrid');
    const emptyState = document.getElementById('emptyState');
    const form = document.getElementById('filterForm');
    const searchInput = document.getElementById('search');
    const statusSelect = document.getElementById('status');

    function normalise(text) {
        return (text || '').toLowerCase();
    }

    function formatStatus(status) {
        switch (status) {
            case 'completed':
                return 'Completed';
            case 'in_progress':
                return 'In Progress';
            case 'planned':
                return 'Planned';
            default:
                return 'Unknown';
        }
    }

    function buildCard(project) {
        const link = project.deployedUrl || project.githubUrl;
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = link;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';

        const header = document.createElement('header');
        header.setAttribute('role', 'presentation');

        if (project.deploymentStatus) {
            const statusDot = document.createElement('span');
            statusDot.className = `deployment-status deployment-${project.deploymentStatus}`;
            statusDot.title = `Deployment: ${project.deploymentStatus}`;
            header.appendChild(statusDot);
        }

        if (project.image) {
            const img = document.createElement('img');
            img.src = project.image;
            img.alt = `${project.name} screenshot`;
            header.appendChild(img);
        } else {
            const fallback = document.createElement('span');
            fallback.className = 'image-fallback';
            fallback.textContent = '📁';
            header.appendChild(fallback);
        }

        const body = document.createElement('section');

        const title = document.createElement('h2');
        title.className = 'project-title';
        title.textContent = project.name;
        body.appendChild(title);

        if (project.description) {
            const description = document.createElement('p');
            description.className = 'project-description';
            description.textContent = project.description;
            body.appendChild(description);
        }

        if (project.status) {
            const status = document.createElement('span');
            status.className = `project-status status-${project.status}`;
            status.textContent = formatStatus(project.status);
            body.appendChild(status);
        }

        if (project.readmePreview) {
            const previewContainer = document.createElement('div');
            previewContainer.className = 'readme-preview';
            previewContainer.textContent = project.readmePreview;
            body.appendChild(previewContainer);
        }

        card.appendChild(header);
        card.appendChild(body);
        return card;
    }

    function renderProjects(data) {
        grid.innerHTML = '';
        if (!data.length) {
            emptyState.hidden = false;
            return;
        }

        emptyState.hidden = true;
        data.forEach((project) => {
            grid.appendChild(buildCard(project));
        });
    }

    function filterProjects() {
        const query = normalise(searchInput.value);
        const statusFilter = statusSelect.value;

        return projects.filter((project) => {
            const haystack = [
                project.name,
                project.description,
                project.readmePreview,
                Array.isArray(project.tags) ? project.tags.join(' ') : ''
            ].map(normalise).join(' ');

            const matchesQuery = !query || haystack.includes(query);
            const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
            return matchesQuery && matchesStatus;
        });
    }

    function handleFilter(event) {
        if (event) {
            event.preventDefault();
        }
        renderProjects(filterProjects());
    }

    form.addEventListener('submit', handleFilter);
    searchInput.addEventListener('input', () => {
        window.requestAnimationFrame(() => handleFilter());
    });
    statusSelect.addEventListener('change', handleFilter);

    renderProjects(projects);
})();
