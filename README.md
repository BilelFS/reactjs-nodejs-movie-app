# CinePhile
A Full stack MERN website for movie theatres where user can search for movies and filter by rating and genres that are available,
and admin can add movie to the list and much more.
<img width="1438" alt="ss" src="https://user-images.githubusercontent.com/25881325/67157291-7e05dc00-f32a-11e9-8d0e-00e6ecda5b7d.png">

<small>This project still not completed at 100% ! </small>

<h2>Installation </h2>

Use the package manager [npm](https://www.npmjs.com/) to install CinePhile.
 Run project with command
```bash
npm run dev
```
 
<h2> Built with  </h2>
<ul>
  <li>FrontEnd: <b> React.JS, Redux Library, Bootstrap, HTML/CSS</b></li>
  <li>Backend:  <b> Node.JS, Express.JS </b> </li>
  <li>Database: <b> MongoDB</b> </li>
</ul>

<h2> Features </h2>
<ul>
  <li> Sign In / Sign Up / Sign Out the user. </li>
  <li> Recieving a welcoming email when sign-up using Nodemailer. </li>
  <li> Add a new movie to the list.</li>
  <li> Recieve montly emails about new movies.</li>
  <li> Favorite or like a movie and save it in your list of favourites. </li>
</ul>



<h2> API </h2>
<h4> Users </h4>
<ul>
  <li> <b>POST</b> /api/users/signup </li>
  <li> <b>POST</b>  /api/users/login  </li>
  <li> <b>DELETE</b>  /api/users/:userID </li>
</ul>

<h4> Movies </h4>
<ul>
  <li> <b>GET</b> /api/movies </li>
  <li> <b>POST</b> /api/movies/addmovie </li>
  <li> <b>DELETE</b> /api/movies/:movieID </li>
</ul>

<h4> Genres </h4>
<ul>
  <li> <b>GET</b> /api/genres </li>
  <li> <b>POST</b> /api/genres/addgenre </li>
  <li> <b>DELETE</b> /api/movies/:genreID </li>
</ul>
