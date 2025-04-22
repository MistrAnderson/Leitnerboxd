# Leitnerboxd

**Leitnerboxd** is an app for practicing spaced retrieval. It's based on the [Leitner System](https://en.wikipedia.org/wiki/Leitner_system).

## Installation

### Self-host

For now, you can clone this repo and run it yourself, either on a web server or in a **docker** container. You can use the app as a standard website or install it via your browser, as it is a **PWA** (Progressive Web App).

```sh  
git clone https://github.com/MistrAnderson/LeitnerApp  
```

#### Web Server
Clone the repo and build the website:

```sh  
git clone https://github.com/MistrAnderson/Leitnerboxd.git
cd Leitnerboxd
npm run build  
```

This will generate all the static files.

You can then host the `build/` folder on any web server you like (Apache, Nginx, Vercel, etc).

#### Docker
You can run the image from Dockerhub:
```sh
docker run -d -p 3000:80 --name leitnerboxd mstrndrsn/leitnerboxd
```

> [!WARNING]
> Please note that the Dockerhub image might be behind in commits as CI/CD workflow is not yet integrated.

Or build it yourself from this repo:
```sh
git clone https://github.com/MistrAnderson/Leitnerboxd.git
cd Leitnerboxd
docker build -t leitnerboxd .
docker run -d -p 3000:80 --name leitnerboxd leitnerboxd
```

### Website

*TBD*

The project is not yet hosted online.

## Features

### Completed

- Spaced practice:
  - Filter cards based on the day they should be practiced
  - Adapt the frequency at which cards are reviewed
- Card creation
- Saving state using browser storage

### Planned

- Notifications
- Service Worker
- Card themes
- Settings:
  - Switch between dark and light mode
  - Configure notifications
  - Set a maximum number of cards to review per day

## License

Leitnerboxd is open source and uses the GNU General Public License v3.0. More information can be found [here](./COPYING).

