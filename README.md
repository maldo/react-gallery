# React Gallery

This is a react gallery with an expressjs server loading photos from flickr.

## Frontend
The tool used to generate the react boilerplate is [Create React App](https://github.com/facebookincubator/create-react-app)
( You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md))

Create React App is one of the latest tools in the react environment for starting projects. It creates a simple boilerplate with powerful scripts (Babel, webpack, eslint, autoprefix CSS, ...)

The idea of the development of the Gallery is going from a simple solution to a more complex one, from fetching data from a component to use Flux architecture.
Things that are missing from the react galley.
- [x] Hover effect
- [ ] Modal
- [ ] Redux
- [ ] ¿Routes? (if needed)
- [ ] Testing
- [ ] Infinite scrolling

## Backend
A Node.js server with expressjs framework.
The server has an endpoint for delivery images to the frontend. The frontend is completely agnostic from which services is the backend getting the photos.
We can easly add another provider e.g. 500px

Still some work to do:
- [ ] Expressjs serving the frontend
- [x] Secure expressjs
- [ ] Testing


