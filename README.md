
# Hi there and welcome to the CodeCademy React Setup repo!

This repo is an example of what setting up a React app should look like after following [CodeCademy's setup process](https://www.codecademy.com/articles/react-setup-i).

1) I think the 5-part setup guide from CodeCademy linked above is one of the best getting started guides I've seen in terms of explaining why things work, simplicity, 
and making sure you have a finished / useful product at the end.

2) In order to make it easier to copy and paste code (since CodeCademy uses screenshots) as well as show you what the finished product looks like, I wanted to create this repo.

3) I have also made a few changes to this repo in order to make it work seamlessly with Cloud9 IDE. The main change was altering `"start": "webpack-dev-server"` to 
`"start": "webpack-dev-server --port $PORT --host $IP  --content-base build/"` in package.json so that the Webpack server would work. If you aren't using Cloud9 IDE, please alter
those lines back.

4) Edit your app and do your actual coding in App/components, App/index.html, and App/index.js. Your build will be placed in build/.

5) To build your code, run `npm run build` at the Ubuntu console at the bottom of the Cloud9 IDE. To begin running your webserver, type in `npm run start`. After you run your webserver
a popup should appear in the bottom right corner giving you the URL of your app. Click on this popup and give the page a few seconds to load to see your React app work! The URL should be something like
https://workspaceName-userName.c9users.io/. For example: https://react-template-danielehrlich.c9users.io/.

### Happy coding and if you have any issues please reach out to me on twitter @danielehrlich1

