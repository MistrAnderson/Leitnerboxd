# Leitnerboxd

**Leitnerboxd** is an app for practicing spaced retrieval. It's based on the [Leitner System](https://en.wikipedia.org/wiki/Leitner_system).

## Installation

### Self-host

For now, you can clone this repo and run it yourself. You can use the app as a standard website or install it via your browser, as it is a **PWA** (Progressive Web App).

```sh  
git clone https://github.com/MistrAnderson/LeitnerApp  
```

Then run:

```sh  
npm run build  
```

This will generate all the static files.

You can then host the `build/` folder on any web server you like (Apache, Nginx, Vercel, etc.).

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

