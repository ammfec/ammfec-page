<template>
    <div class="hero">
            <!--div class="container-img">
                <img class="simbol-class" src="./../assets/instagram.svg" />
                <img class="simbol-class" src="./../assets/facebook.svg" />
                <img class="simbol-class" src="./../assets/youtube.svg" />
                <img class="simbol-class" src="./../assets/whatsapp.svg" />
            </div-->
            <div class="container">
                <div class="content">
                    <h1 class="title">A M M F E C</h1>
                    <p class="subtitle">TECHNOLOGIES</p>
                    <p class="letters">SOLUCIONES INNOVADORAS</p>
                    <img class="simbol-class" src="./../assets/signo.png" />
                </div>
            </div>
        </div>
</template>

<style scoped>
.hero {
    background-image: url("./../assets/background-init.png");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}
.hero .container-img {
    align-content: center;
}
.hero .container {
    display: grid;
    align-content: center;
    height: 100vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.simbol-class {
    width: 10%;
    padding-top: 80px;
}
.hero .content {
    text-align: center;
    color: #FFFFFF;
}
.title {
    margin: 0;
    font-size: 6rem;
    font-weight: bold;
}
.subtitle {
    margin: 30px 0 30px 0;
    font-size: 2rem;
}
</style>
