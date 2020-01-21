<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <div class="navbar-brand">
                <a href="#">
                    <img src="../assets/logo.png" alt="Brand Logo" class="logo"/>
                    <h3>E-Commerce</h3>
                </a>
            </div>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-flex justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fas fa-home"></i>
                        </a>
                    </li>
                    <li>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-user"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style scoped>
    .logo{
        height: 50px;
        width: 50px;
    }
    #navbarNav{
        justify-content: flex-end;
    }
    .navbar-brand a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
    }
    .navbar-brand a h3{
        color: white;
        margin: 0px 20px;
        font-weight: bolder;
        font-family: 'Times New Roman', Times, serif;

    }
    .navbar{
        color: black;
        height: 100%;
    }
    .navbar .nav-item .nav-link{
        color: black;
    }
</style>
