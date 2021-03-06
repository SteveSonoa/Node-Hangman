# An Introduction to Node Hangman
Welcome to Node Hangman! You have 9 guesses to come up with a randomly selected movie title. If you're stuck, you can ask for up to 3 hints to help you out. How well do you know your movies?

### How does it work?
Node Hangman finds a random movie title using the OMDB API; it will also save the year the movie released, the actors, and the plot summary to use as hints if you need them. The app uses the Inquirer package for the user's options and is driven by a set of Javascript Constructors.

### Who will use this?
As a server side game with no real GUI or returned code to speak of, the app is fairly useless except as a classroom exercise. Our family has enjoyed playing!

### What is the goal?
The goal was ultimately to showcase my ability to create and export Javascript Constructors in a Node environment. I've never been satisfied with the minimum expectations, so I also included external API calls and modular text-based art in the project.

# Deployment
Node is required to run this app. After downloading the repository, run `npm install` from the command line to ensure you have the necessary packages. When that's complete, simply run `node hangman` from the main directory to begin. An Internet connection is required; the app will not run without it.

# Screenshot
![Screenshot](http://www.fullstacksteve.com/wp-content/uploads/2018/01/node-hangman-4.png)

# Credits
Steve Marshall, sole developer
* [Steve's Online Portfolio](http://fullstacksteve.com/)
* [Steve's LinkedIn Profile](https://www.linkedin.com/in/sonoa/)

ASCII Art generated by [Patorjk.com](http://patorjk.com/software/taag/#p=display&f=Small&t=FullStackSteve)