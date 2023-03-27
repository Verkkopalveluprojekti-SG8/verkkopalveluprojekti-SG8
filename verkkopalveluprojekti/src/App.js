import logo from './logo.svg';
import './App.css';


function Navbar() {
  return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Top navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
</div>
</nav>
  )
}



function App() {
  return (
    <div>
      <div  class="logo">
        <h1>RYYST</h1>
      </div>


    <div class="header">


    <input class="searchbar" type="text" placeholder="Search.."></input>

    <h4>"Ryyst and Jyyst"</h4>
      </div>
      


   <div class="categories">

      <a class="c" href="https://www.oispakaljaa.com/">Alkoholittomat</a>

      <a class="c" href="https://www.oispakaljaa.com/">Viinit</a>

      <a class="c" href="https://www.oispakaljaa.com/">Miedot juomat</a>

      <a class="c" href="https://www.oispakaljaa.com/">Vodkat ja viinat</a>

      <a class="c" href="https://www.oispakaljaa.com/">Liköörit</a>

      <a class="c" href="https://www.oispakaljaa.com/">Muut</a>


   </div>
   </div>
  );
}



export default App;
