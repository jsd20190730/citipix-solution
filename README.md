# Lab: Citipix

---

### Description

JavaScript is powerful: we're able to take user interaction and information and use it to update the page without requiring a refresh. This week, a new startup in your city, CitiPix, is looking to create a personalized picture app that allows users to store pictures they've taken around the world and quickly access them by typing in keywords or tags associated with each photo; they have asked for your help to start building the front-end prototype.

You will begin by building a web-app that will take a user's input and update the background image of the page based on that input. Once again, you have been given the starter code that includes the HTML and the CSS. Use the images in the images folder and write JavaScript to make the background image reflect user input based on the Technical Requirements below.


---

### Technical Requirements

- Call ```$.val()``` on inputs to get the string value of your user's input
- Store user input in a variable called ```city```
- Use ```$.click``` to trigger the application to conduct a city search when the user clicks the "submit" button
- Create ```if / else if``` conditionals to control the flow of your application
- Write at least six different lines of pseudocode and display them inline as JavaScript comments
- Use the jQuery's document ready function handler to delay your code from executing until all DOM assets have been loaded
- Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
- For example: if a user submits:

  - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
  - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
  - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
  - "Austin" or "ATX" make the background of the page austin.jpg
  - "Sydney" or "SYD" make the background of the page sydney.jpg

Take a look at what your final product should look like before and after:

![deliverable](https://github.com/jsd20190730/citipix/blob/master/images/citipix.gif)
