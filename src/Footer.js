import React, { Component } from "react";

class Footer extends Component
{
    render()
    {
        return(
            <footer class="text-muted py-5 bg-danger">
            <div class="container">
              <p class="float-start text-light">
                <p>©Keesey Newcombe 2021 30020919 SCP Assignment </p>
              </p>
              <p class="float-end mb-1">
                <a href="#">Back to top</a>
              </p>
             
            </div>
          </footer>
        );
    }
}

export default Footer;