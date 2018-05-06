# Where Everything Started?
Read the article: [Introducing Express React Starter](https://medium.com/burke-knows-words/introducing-express-react-starter-b6d299206a3a)

## Prerequisites
* [create-react-app](https://github.com/facebookincubator/create-react-app)

## Running The App

The template can be run in development, or in production.
For development, use the following workflow.

### Start Express and React App

```bash
npm start
```
(this will run in react App in port 3000, automatically run server in port 3001 )


### Debug server only
if you want to run the server only for testing and debuggin:
```bash
node server/server.js
```
(default port 3001)


![Imgur](http://i.imgur.com/f7Nlvx4.png)

The "Welcome to React" is a message that comes from the Express server.

### What Is Happening Here?

Create React App and the Express server are running on different processes. This is so that React can still use in memory Webpack to do hot reloads really fast.

All AJAX/fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `routes/index.js` file. This is done via a proxy setup in the `package.json` file.

## Building For Production

In production, you want Express to serve up your app.

### Build React App

```bash
npm build
```

Now simply visit the Express app at 'http://localhost:3001' and you will see your app served from the 'build' folder.

That's all there is to it!
