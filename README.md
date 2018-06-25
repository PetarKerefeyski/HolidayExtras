# Flickr Photo Stream

## Getting Started
Simple Angular app for reviewing latest public Flickr photos.

The application has the following features: 
- Setting up proxy server
- Getting and viewing data from Flickr
- Search by photo title
- Redirection to user or photo
- Responsiveness

## Installing
This project is done with the latest version of Angular (for the time being 6.0.8) requires node >=v9.11.1.

```
# Clone project
git clone https://github.com/PetarKerefeyski/HolidayExtras.git

# Navigate to project folder
cd HolidayExtras

# Run front-end package installer
npm install

# Run Angular and proxy servers
npm start

# APP is available at: localhost:4200

```

## Directory Structure

```

├── e2e
├── node_modules
├── src
|   ├── app
|   |   ├── gallery
|   |   |   ├── gallery.component.ts
|   |   |   ├── gallery.component.spec.ts
|   |   |   ├── gallery.component.html
|   |   |   ├── gallery.component.css
|   |   ├── post
|   |   |   ├── post.component.ts
|   |   |   ├── post.component.spec.ts
|   |   |   ├── post.component.html
|   |   |   ├── post.component.css
|   |   ├── app.component.ts
|   |   ├── app.component.spec.ts
|   |   ├── app.component.html
|   |   ├── app.module.ts
|   |   ├── filters.pipe.ts
|   |   ├── filters.pipe.spec.ts
|   |   ├── gallery.service.ts
|   |   └── gallery.service.spec.ts
|   ├── assets
|   ├── index.html
|   ├── tsconfig.js
|   ├── karma.conf
|   ├── main.js
|   ├── polyfills.js
|   ├── styles.css
|   ├── test.js
|   ├── tsconfig.app.json
|   ├── tsconfig.spec.json
|   └── tslint.json
├── angular.json
├── package.json          <- dependencies of the project
├── package-lock.json
├── proxy.config.json
├── tsconfig.json
├── tslint.json
└── README.md             <- project readme and how to install
```

## Author

Petar Kerefeyski

