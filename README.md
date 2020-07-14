# FITTER - a social media platform for fitness enthusiasts.

- [FITTER - a social media platform for fitness enthusiasts.](#fitter---a-social-media-platform-for-fitness-enthusiasts)
  - [Overview](#overview)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries and Dependencies](#libraries-and-dependencies)
    - [Client (Front End)](#client-front-end)
      - [Wireframes](#wireframes)
      - [Component Tree](#component-tree)
      - [Component Hierarchy](#component-hierarchy)
      - [Component Breakdown](#component-breakdown)
      - [Time Estimates](#time-estimates)
    - [Server (Back End)](#server-back-end)
      - [ERD Model](#erd-model)
  - [Post-MVP](#post-mvp)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**FITTER** is an application desgined to connect fitness enthusiasts around the globe. Begin by creating your user profile. Post your workout activity, track your calories, and connect to your fitness community.


<br>

## MVP

_Fitter's first sprint is aimed to be a fully functional web-based application. Users will be able to create their profile in order to create posts. Within a post, activity will be tracked and shared amongst the User community. By implementing the Nutrionix API, Users will be able to calculate an approximate ammount of calories burned. Those within the community will be able to comment on posts to keep each other motivated._

<br>

### Goals

- _Create and Display User profile._
- _Display Global Feed of community posts and respective comments._
- _Add, edit, delete comments to User posts._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end._ |
|   React Router   | _Front-end._ |
| Ruby on Rails | _Back-end._ |
| PostgreSQL | _Database Management._ |
| Bcrypt | _Authentication._ |
|     Axios     | _API Call._ |
|     Nutrionix API     | _Calculating User activity._ |

<br>

### Client (Front End)

#### Wireframes

![](Fitter%20Wireframe.png?raw=true)

- Desktop, Mobile, and Tablet

#### Component Tree

![](Fitter%20Flow%20Chart.png?raw=true)

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ graphics
      |__ images
|__ components/
      |__ shared/
          |__ Header.jsx
          |__ Footer.jsx
          |__ Navigation.jsx
          |__ Sub-Header.jsx
      |__ Profile.jsx
      |__ Feed.jsx
      |__ User-Profile.jsx
      |__ Comments.jsx
      |__ Create-Profile-Form.jsx
      |__ Create-Post-Form.jsx
      |__ Comment-Form.jsx
      |__ Main.jsx
      |__ App.jsx
|__ services/
      |__ Feed.js
      |__ Post-Form.js
      |__ Profile-Form.js
      |__ Comment-Form.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | class |   y   |   y   | _The header will contain the navigation, logo, and log-in form._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Feed    |   functional    |   n   |   n   | _The feed will display all Users' posts._      |
| Post | class |   y   |   y   | _Display Post conent. Display Comments belonging to Post._                 |
| Comment-Form | class |   y   |   y   | _Add, edit, delete comments._                 |
| Create User Form | class |   y   |   y   | _Users can add comments to single post._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Post Form    |    H     |     3 hrs      |     N/A     |    3 hrs    |
| Create Comment Form |    H     |     3 hrs      |     N/A     |     TBD     |
| Create User Form |    H     |     3 hrs      |     N/A     |     TBD     |
| Create CRUD Actions |    H     |     6 hrs      |     N/A     |     TBD     |
| Feed.jsx |    H     |     4 hrs      |     N/A     |     TBD     |
| Post.jsx |    H     |     3 hrs      |     N/A     |     TBD     |
| Header.jsx |    L     |     2 hrs      |     N/A     |     TBD     |
| Footer.jsx |    L     |     2 hrs      |     N/A     |     TBD     |
| Navigation.jsx |    H     |     4 hrs      |     N/A     |     TBD     |
| CSS |    M     |     6 hrs      |     N/A     |     TBD     |
| TOTAL               |          |     40 hrs      |     TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![](Fitter%20v1%20(1).png?raw=true)

<br>

***

## Post-MVP

- _User authentication._
- _Allow Users to add 'friends' to profile._
- _Allow for upload of photos within posts._
- _Set User 'goals' and reward Users with 'activity badges'._

***

## Code Showcase

N/A.

## Code Issues & Resolutions

N/A.
