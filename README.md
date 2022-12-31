Hi Ashish,

I have completed the following task which you share with me above with the requirements. I am sharing some information about the task for your reference to know about it.

1. Home Screen with the list of NBA teams
2. We have a search functionality with this we can search for the particular team from the table data. We can search details with city and team name
3. Click on particular row to see the team details with a random game detail of the team
4. On Team details Drawer if the home team would be winner for that we have added the celebration gif to make it little eye catching.

I am using the following api https://www.balldontlie.io/api/v1/ to get the details and I used required packages and libraries for the frontend ui and integration.

Some of the things which I want to mention which makes this task little more interesting as per the development and code level:

1. We are using husky for the code checking when we will be committing our code
2. We are using eslint rules to maintain the quality of the code
3. We are using import sort with eslint for maintain the order of the imports
4. We are using typescript for make our code more clean with typechecking and other benefits of typescript

I hope these things are good enough, but one thing which I want to emphasize is that I have used React architecture with MVVM, where we make a hook file for business logic and functional code, which helps to maintain the code quality and readability. One thing this architecture also helps if we are making the app and website for any product so this way we have already a business logic written in one place we just need to change the JSX file.

You can check it out here: https://github.com/KishanSinghChauhan/Alkira-task and just add a .env file on directory with the following detail - REACT_APP_BASE_URL=https://www.balldontlie.io/api/v1

you can now setup project with yarn and then yarn start and hoooraaah we are set to use and play.
