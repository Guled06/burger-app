# Burger App

# Description

This application allows the user to add the hamburgers they desired to devour and delete the input. 

Once the user visits this website, the user is given an location to input a text, preferrably relating to hamburgers. Once the user types the type of burger he/she would like to eat, then the user can press 'enter' on his/her keyboard or click on the 'add burger' button. The input the user type will be displayed on the left side of the page under 'bugers that have been devoured' list. 

The input (considering it is a type of hamburger) will have two buttons next to it. A 'devour this' button and a 'delete' button. If the user wants to eat the hamburger, he/she can click 'devour this' and the hamburger will move to the right side of the page under the "bugers that have been devoured' list, indicating the hamburger was devoured. There will be a 'delete' button next to the devoured burger where the user can click to the delete the devoured burger. 

# Usage

<h2>Burger-App is using MVC architectural framework</h2>

1. I created a MySQL database and ran the following files to set up the schema
    * db/schema.sql
    * db/seeds.sql

2. I configured the database connection settings.

3. I created a jawsDB database using Heroku and deployed this app on Heroku.


This App was designed using the following:

    * I used an Object Relational Mapping (ORM)
    * I used Express.js
    * This app was designed using 'Handlebars Engine Integration'
    * I used Node.js
    * MySQL / JawsDB

# Screenshot Of Deployed App

1. The main page of the app prior to the user typing his/her input of the type of burger the user wants to eat. 

<img src="assets/images/picture1.png" alt=""> 
<br>
2. Screenshot of the app AFTER the user inputs what type of burger he/she would like to eat. Next to the burger, there are two button. If the user clicks 'devour this', then the burger will move to the right hand side of the page, shown in screenshot image #3.

<img src="assets/images/picture2.png" alt=""> 
<br>
3. This is the result of the user clicking 'devour this' button, indicating that the burger has been devoured. Once the user clicks the 'devour this' button, the burger is automatically moved from the 'burgers awaiting to be devoured' list on the left side to the 'bugers that have been devoured' list on the right side. A 'delete' button is available on both sides if the user chooses to delete at anytime. 

<img src="assets/images/picture3.png" alt=""> 
