# React Gallery

This is a react gallery with an expressjs server loading photos from flickr.

## Frontend
The tool used to generate the react boilerplate is [Create React App](https://github.com/facebookincubator/create-react-app)
(You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md))

Create React App is one of the latest tools in the react environment for starting projects. It creates a simple boilerplate with powerful scripts (Babel, webpack, eslint, autoprefix CSS, ...)

The idea of the development of the Gallery is going from a simple solution to a more complex one, from fetching data from a component to use Flux architecture.
Things that are missing from the react galley.
- [x] Hover effect
- [x] Infinite scrolling
- [ ] Modal
- [ ] Redux
- [ ] ¿Routes? (if needed)
- [ ] Testing

## Backend
A Node.js server with expressjs framework.
The server has an endpoint for delivering images to the frontend. The frontend is completely agnostic from which services the backend is getting the photos.
We can easly add another provider e.g. 500px

Still some work to do:
- [x] Expressjs serving the frontend
- [x] Secure expressjs
- [ ] Testing

## How to start the react-gallery
First all installing the dependencies by running:
```sh
npm install
```

Once everything is installed, we can run the gallery by executing:
```sh
npm run serve
```
The server will listen to post 8000 [http://localhost:8000/](http://localhost:8000/)
