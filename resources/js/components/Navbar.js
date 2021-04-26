import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-success fixed-top">
                <div class="container">
                    <a class="navbar-brand text-white" href="#" >
                        Sidoarjo Digital
                    </a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="#">
                                    Home <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/about">
                                    About Sidoarjo
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle text-white"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Tutorial
                                </a>
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <a class="dropdown-item" href="#">
                                        Tutorial HTML
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        Tutorial CSS
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">
                                        Tutorial Bootstrap
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link disabled text-white"
                                    href="#"
                                    tabindex="-1"
                                    aria-disabled="true"
                                >
                                    Link Mati
                                </a>
                            </li>
                        </ul>

                        <a href="/account/login" class="btn btn-primary mr-3">
                            Login
                        </a>
                        <a href="/account/register" class="btn btn-danger text-white">
                            Daftar
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}
