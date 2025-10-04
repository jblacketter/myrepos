// Update this list with your own repositories. Each object drives one card on the grid.
window.PROJECTS = [
    {
        name: "Project Command Center",
        description: "Central hub for launching and tracking my Django portfolio projects.",
        githubUrl: "https://github.com/your-handle/project-command-center",
        deployedUrl: "",
        status: "completed",
        deploymentStatus: "healthy",
        image: "assets/placeholder-bridge.png",
        readmePreview: "Features a project grid, work log tracker, and deployment status checks.",
        tags: ["django", "portfolio"]
    },
    {
        name: "Launch Codes",
        description: "CLI utility that bootstraps new repositories with CI, linting, and issue templates.",
        githubUrl: "https://github.com/your-handle/launch-codes",
        deployedUrl: "https://pypi.org/project/launch-codes/",
        status: "in_progress",
        deploymentStatus: "unknown",
        image: "",
        readmePreview: "Generates GitHub Actions pipelines and local dev containers with one command.",
        tags: ["python", "tooling"]
    },
    {
        name: "Nebula Notes",
        description: "Lightweight static site that syncs README files into a searchable documentation hub.",
        githubUrl: "https://github.com/your-handle/nebula-notes",
        deployedUrl: "https://your-handle.github.io/nebula-notes/",
        status: "planned",
        deploymentStatus: "unreachable",
        image: "assets/placeholder-notes.png",
        readmePreview: "Uses GitHub Pages for hosting and a JSON data source generated from repository metadata.",
        tags: ["static", "docs"]
    }
];
