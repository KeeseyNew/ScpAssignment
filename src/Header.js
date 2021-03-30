import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(

            <div>
      <header>

<div class="navbar navbar-light bg-danger shadow-sm">
<div class="container">
<a href="#" class="navbar-brand d-flex align-items-center">
  
  <strong>SCP LIBRARY</strong>
</a>

</div>
</div>
</header>
<section class="py-5 text-center container">
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<img src='images/scp.jpg' className="img-fluid" alt="Responsive image"></img>

<div class="row py-lg-5">
<div class="col-lg-6 col-md-8 mx-auto ">
  
  <h1 class="fw-light"><strong>This is a SCP log System be aware!</strong></h1>
  <p class="lead text-muted">The subjects below are not for the faint of heart enter with caution!</p>
  <div class="spinner-grow text-danger " role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

</div>
</div>

</section>
</div>

        );
    }
}

export default Header;