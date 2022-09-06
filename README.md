# LandPost
Welcome to **LandPost**! 

## About
LandPost is an environmentally focused blog which allows users to upload posts in the form of photos and bodies of text. 


## Motivation
LandPost is centered around a vision for an app that is focused completely on nature and our experiences within it. There is not a 
like button, there is only the ability to comment on other's photos. Designed minimally, LandPost reflects a more relaxed and fun
focused social media. This app is free of advertisements and video.


## Screenshots

#### Login Page/Home Route
![Login Page](https://i.imgur.com/QEV6K42.png "Login Page")

#### Register Page
![Register Page](https://i.imgur.com/TMWDw8h.png "Register Page")

#### Main Index Page
![Main Index Page](https://i.imgur.com/xazY3l0.jpg "Main Index Page")

#### New Post
![New Post](https://i.imgur.com/VSFah7s.png "New Post")

#### Edit Post
![Edit Post](https://i.imgur.com/pBg9XZN.png "Edit Post")

#### Delete Post
![Delete Post](https://i.imgur.com/WnZq8Yf.png "Delete Your Post")

#### Show Post
![Show Post](https://i.imgur.com/yuloH2R.png "Show Your Post")

#### Show Friend's Post
![Show Friend Post](https://i.imgur.com/kaR9cx0.png "Show Friend's Post")

## Tech/Framework used
LandPost is a cloud-based app that was built using express within a "Model, View, Controller" framework. Data is stored in a remote Mongo cloud database. All of the functionality is written in javscript. The aesthetics and layout of the app are handled by CSS. 


## Features
#### Dynamic Display

Data input through forms on the site is stored,updated and deleted in a remote Mongo database. Within the database, there are three main collections of data. Each of these collections share entity relationships with one another. The user may create 0 to many posts. Each post is tied to a specific username. Every post can have 0 to many comments. Every comment is tied to a specific user via the username data. 

New data sets are entered via forms on their respective EJS pages. Each form is modeled after its corresponding schema in the models folder. For instance, whenever a user creates a new post, a hidden piece of data (the current user's username) is entered automatically as the post's username in the database. Therefore, the app becomes dynamic based off of whether the current user is the author of a post or is just a viewer of the post. If the user owns the post, they can edit or delete the post. 

The same functionality applies to comments as well. When a comment is entered, the current user's username is stored as a key/value pair in the comment collection. If a user wrote a comment, they can delete the comment. If the user owns the post, they can delete the comment. 

The main index page displays the current user's name. Each post listed on the main page displays it's authors name and appropriate avatar image. 


## Code Examples
#### Hidden Inputs on Forms
![Hidden Inputs on Forms](https://i.imgur.com/FUGlem5.png "Hidden Inputs on Forms")

#### Redirecting Based on Session
![Redirecting Based on Session](https://i.imgur.com/B2ioIlc.png "Redirecting Based on Session")

#### Conditional Code for Users
![Conditional Code for Users](https://i.imgur.com/GbsS9mG.png "Conditional Code for Users")

## How to Use?
#### Login/Register
Upon arrival on the application's home page, the user is presented with a login:

**Email**: 'String' 
**Password**: 'String'

Both the email and username must be entered correctly. If login credentials are incorrect, user is denied entry. At current state, user must go back 
to login page to either try again or register with the following credentials:


**Email**: 'String' 
**Password**: 'String'
**Username**: 'String'

While all three credentials are required, only the the email and username must be unique. Upon valid registration, user may enter submit and is navigated to login screen. 

Once logged in, a user is directed to the main index page and a new session begins. Cookies are stored for two weeks. 

#### Main Page
On the index page, the user is presented with options. They may either logout (ends the session and returns to login), click on a post to navigate to its show page, or create a new post (directs user to create new post page). At any point in the user's experinece after logging in, the user can navigate to the main index page by clicking the LandPost logo at the top navigation bar. 

#### Create New Post 
On the Create Post Page, the user must enter the following:

body: String,
image:  String,
location: String

The image is the only required field of the Post data collection. A hidden field automatically enters the username and avatar image. When submit is hit, user is taken back to index page.

#### Show Page
On the show post page, the user views a selected post from the main index page. The user can comment on the post by clicking the comment button. If the user is the author of the post, they can edit or delete the post.

#### Edit Post Page
The user can edit any post that they themselves have posted. On this page, they can change any of the following:

body: String,
image: String,
location: String

When submitted, the user is redirected back to their newly edited post.
#### Delete Post Button
The delete post function is only made available if the current user is the author of the post. This button deletes the post from the database and redirects the user back to the main index page.

#### New Comment Page
On the new comment page, a user may write text and submit their comment. When submitted, user can view the comment by navigating back to the post.

- - 

##### Created By
MetaRUs
@7vma
@vvela2022
@bbakercello