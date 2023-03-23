# FlopBusterFinalProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Final Project Instructions
# Detailed Requirements
Your application will consist of several pages: a Home page, which displays movies to rent, a Details page which displays details of a movie, and a Cart page which shows which movies you have chosen to rent, and allows you to rent the movies in your cart. There may be an optional login page if you choose to do the optional requirements.

# Common Navigation
There should be a common navigation pane on every page to go to either the rental cart OR the home page. In the starter project, the app component has the navigation pane, but it’s only on the application component. The nav should show on every page
Routing Views
The starter project doesn’t include any routing. You will need multiple views, and therefore will need to include routing

# Home Page
The home page should display a list of movies available for rent. For each movie be sure to display the name, the picture of the movie, the # of stars, and a button to add it to your rental list. Sort the list alphabetically by default, but allow the user to change the sort order to be alphabetical or by # of stars. The home page should display a summary of your rental cart in the top right, and clicking on the rental button should add it to that list. If the user clicks on the title of the movie or the picture, they should be taken to the movie details page. The rental cart summary should have a button or link to proceed to checkout. No movie should be able to be added to the cart more than once.

# Rental Cart
The rental cart page should show a detailed list of the movies in the rental cart, including title, stars, and cost. The total cost of the cart should be displayed. When the user clicks the “check out” button then mark those movies as checked out and store that information on the server in the “checkedOut” node. The cart itself should NOT be saved to the server. It should only be local data in the application. 

# Movie Details
The movie detail page should display more of the available information about a movie. Add at least 3 more pieces of data to the details page available from the server. The movie detail page should also display a list of reviews. 

By default no movie has a review, but add a form at the bottom of the details page to add a new review. Reviews have three pieces of data: the user’s name, a # of stars from 1 to 5 (only whole numbers allowed on any given review) and a comments field. Make sure comments are no more than 200 characters. A basic implementation would be to use a textbox for the # of stars and validate that only the integers 1 through 5 are entered. For more fun, use a row of 5 stars, and allow the user to click on a star to note their rating. The name should be required, but the comment should be optional. Save reviews to the server into the “reviews” section of the data. All reviews for the movie should display below the movie but above the “create review” form.

The details page should also show the rental cart in the top right and should allow the current movie to be added to the rental cart.

Optional Challenges
Choose any of the following optional challenges, or come up with your own if you think of them.

Make the current navigation link different than the non-current navigation link

Lazy load the cart and detail pages

Make the sort order on the home page part of the URL

On the home page create a hover effect as you hover over each movie

Allow users to favorite movies from either the home page or details page. Show that a movie has been favorited in both places. Save this to the server into the “watchList” node.

Make reviews editable.

Add a screen that displays which movies the user has checked out. Allow movies to be returned.

When a movie is checked out, show that the movie is checked out, and don’t allow checked out movies to be added to the Rental Cart.

Add a user login page, using an email address and no password

Don’t allow users to check out without logging in

Don’t allow users to leave reviews without logging in, and don’t gather the user’s name, instead use their email address from their login

Make all the data that would belong to a user (favorites, checked out movies, reviews) belong to the user and store that on the server. Don’t allow 
other users to view others favorites or checked out movies. Make reviews only editable by the owning user.

Add a password to the login and create a registration page. store users on the server, create a new “users” node in the data and store users there. Make sure that email addresses are unique and can’t be reused. Add a security question to allow users to change their password if they forget it.

Use the bcrypt library to hash the users’ passwords. See the following example: https://stackblitz.com/edit/angular-bcryptjs-hashing-al5yjg?file=src%2Fapp%2Fapp.component.ts

Use Auth0 for login

Deploy your application to Netlify
Netlify doesn’t allow for easy data storage and won’t work with the current server. This leaves a couple options: Either make all the data local in the application and remove all HTTP requests, use seed data for movies and some reviews and users, but during the session allow more data to be created, OR find a way to store the data on a server, perhaps using something like Netlify functions, or a hosted database like Firebase, Mongo cloud, etc.
