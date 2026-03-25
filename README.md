# Alba Electrical - albaelectrical.co.uk

Static website for Alba Electrical, built from the PowerFix WordPress/Elementor template (MonsterOne).

## Stack

- **Nginx Alpine** serving static HTML/CSS/JS
- **Docker Compose** for containerisation
- **Nginx Proxy Manager (NPM)** for reverse proxy + SSL

## Quick Start

```bash
docker compose up -d
```

Site is available at `http://localhost:8088`.

## Deployment (Production)

### Prerequisites

- Docker and Docker Compose installed
- `proxy-tier` Docker network exists (`docker network create proxy-tier`)
- Nginx Proxy Manager running on the same `proxy-tier` network

### Steps

1. Clone/copy to server:
   ```bash
   cd /home/piotrfx/Desktop/WebApps/albaelectrical
   ```

2. Start the container:
   ```bash
   docker compose up -d
   ```

3. Configure Nginx Proxy Manager:
   - **Domain**: `albaelectrical.co.uk`
   - **Scheme**: `http`
   - **Forward Hostname / IP**: `albaelectrical-web`
   - **Forward Port**: `80`
   - **SSL**: Request new Let's Encrypt certificate, enable Force SSL

4. Verify:
   ```bash
   docker compose ps
   curl -I http://localhost:8088
   ```

## Container Details

| Setting | Value |
|---------|-------|
| Container name | `albaelectrical-web` |
| Internal port | `80` |
| External port | `8088` |
| Network | `proxy-tier` |
| Image | `nginx:alpine` |

## Project Structure

```
albaelectrical/
├── index.html              # Main page
├── docker-compose.yml      # Docker Compose config
├── nginx.conf              # Nginx server config
├── README.md
└── assets/
    ├── css/                # Stylesheets (45 files)
    ├── js/                 # JavaScript (28 files)
    ├── images/             # Images - WebP, PNG, SVG (30 files)
    └── fonts/              # Font files
        ├── google/         # Montserrat, Titillium Web, Roboto
        ├── fontawesome/    # Font Awesome 5 icons
        ├── jkiticon/       # JEG Elementor Kit icons
        └── xpro-icons/     # XPro Elementor icons
```

## Notes

- Template source: PowerFix by TemplateOrbit (MonsterOne marketplace)
- All assets are served locally - no external CDN dependencies
- Navigation links (about, blog, contact, etc.) still point to template demo and need updating as pages are built out
- The MetForm contact form references WordPress API endpoints - will need a replacement (e.g. Formspree, custom endpoint)
