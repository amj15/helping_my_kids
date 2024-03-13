function loadMenu(title, active) {
  $('#menu').append(`<li class="nav-item active"><a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a></li>`);



  $('#menu').append(`<a class="nav-link fw-bold py-1 px-0" href="#">Features</a>`);
  $('#menu').append(`<a class="nav-link fw-bold py-1 px-0 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
            </div>`);         
}