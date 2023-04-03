import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Etusivu</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Ostoskori <span class="sr-only">(current)</span></a>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tietoa</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Kategoriat
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Viinit</a>
                            <a class="dropdown-item" href="#">Liköörit</a>
                            <a class="dropdown-item" href="#">Miedot</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}