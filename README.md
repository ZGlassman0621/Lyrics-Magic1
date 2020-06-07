## Lyric Magic!

## Project Description

Find All Lyrics! I admit, Innagadadavida, still confuses the hell out of me. This project allows you to look up lyrics through an API and, as post-mvp, listen to a imbedded link of the song on Spotify.

## API and Data Sample

API Key: OEOsB3dM7mbVzGgWY78cl3uRUBm3gCj3em3NLARPKhkW3Lm5ydxgODkSaGDpHx7Q

https://orion.apiseeds.com/api/

{
  "result": {
    "artist": {
      "name": "Steely Dan"
    },
    "track": {
      "name": "Don't Take Me Alive",
      "text": "Agents of the law \nLuckless pedestrian \nI know you're out there \nWith rage in your eyes and your megaphones \nSaying all is forgiven \nMad Dog surrender \nHow can I answer \nA man of my mind can do anything \nCHORUS:\nI'm a bookkeeper's son \nI don't want to shoot no one \nWell I crossed my old man back in Oregon \nDon't take me alive \nGot a case of dynamite \nI could hold out here all night \nYes I crossed my old man back in Oregon \nDon't take me alive \n\nCan you hear the evil crowd \nThe lies and the laughter \nI hear my inside \nThe mechanized hum of another world \nWhere no sun is shining \nNo red light flashing \nHere in this darkness \nI know what I've done \nI know all at once who I am \n\nCHORUS\n",
      "lang": {
        "code": "en",
        "name": "English"
        
Potential use of Spotify (not an API, just a reference link):
https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

## Wireframes

See Repo for Wireframe

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### PERSONAL MVP

- A lyric finder through which users can search for song lyrics by artist and song
- An easy-to-use interface that reflects both the theme of the project and the style
- Site code that can be expanded upon after the completion of the project (easy to read, dry, organized, possibly with comments to future-Zach)

#### MVP COPIED FROM PROJECT README

*Planning*
Have a thoroughly developed README.md file. (Refer below to "Step 5: Pitch Your Project Idea" for more.)

*React*
Be a working, interactice React app, built using create-react-app. Make sure that the React app is at the root of your repository and not in a nested folder.
Utilize React Router, installed via NPM.
Have at least 6 separate, rendered components.
Implement an organized and understandable React file structure.
Utilize functional and class React components appropriately.
Use Axios to consume data from an third party API, and render that data in your components. (Remember, many lists of good API's are listed in the #Resources section.)
Use only React for DOM Manipulation.

*Styling*
Be styled with CSS, either using global style sheets or styled components.
Use flexbox (display: flex) or CSS Grid.
Implement responsive design on 3 screen sizes (including desktop) using 2 media queries (tablet and mobile).

*Linting*
Indent properly.
Utilize high-quality, semantic variable names.
Follow camelCase and kebab-case conventions.
Remove unnecessary boilerplate React files and code.
Remove all console.log()s and commented out code (functional notes and comments are okay).

*Deployment*
Deployed via Surge or Netlify.

*Procedural*
Commit early and often! Have GitHub commits (documenting substantial progress) every day.

*Dealer's Choice*

Utilize Storybook to create at least 5 reusable components, which are then used in your project

#### PostMVP  

- I would like to be able to institute an age gate for viewing explicit material
- Make an additional mini-project of a "what are the missing lyrics" game

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|June 1| Pitch, Working API Call, 75%+ Pseudo | Done |
|June 2| Storybook components (no longer required), basic HTML layout, 25%- Pseudo, basic CSS | Done |
|June 3| Partially functioning React app, most MVPs deployed | Done |
|June 4| All MVPs deployed, Post-MVP work 50-75% done (if I can figure them out), finalized CSS and HTML components, fully functioning app | Done |
|June 5| Deployed MVP and Presentation

## Priority Matrix

Find Priority Matrix in the Repo

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| JSX | M-H | 6hrs| 14hrs  |  |
| CSS | H | 6hrs| 16hrs  |  |
| React | H | 10hrs| 14hrs  |  |
| React Router | M | 8hrs | 12hrs |
| MVP Requirements | H | 6hrs | 18-22hrs |
| Testing, debugging | H | 6hrs| 6hrs |  |
| Post-MVP | M-L | 5hrs| 5hrs |  |
| Total |  | 39hrs| 87hrs |  |

## Code Snippet

Maybe a silly little thing, but getting the site from drab to exciting really made me happy. Using not just the gradient background but also the semi-transparent text was very cool to do and gave me a great sense of really owning the project.

.App {
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(7, 1, 32, 1) 0%,
    rgba(9, 9, 121, 1) 37%,
    rgba(20, 154, 255, 1) 100%
  );
  background-size: cover;
  top: 0;
  min-height: 100vh;
  width: 100%;
  color: #aeb6c4;
  margin-top: auto;
  box-sizing: border-box;
}

.title {
  color: rgba(255, 255, 255, 0.3);
}

## Change Log
