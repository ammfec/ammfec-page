<template>
    <div class="hero">
            <div class="container-img">
                <img class="social-media" src="./../assets/instagram.svg" />
                <img class="social-media" src="./../assets/facebook.svg" />
                <img class="social-media" src="./../assets/youtube.svg" />
                <img class="social-media" src="./../assets/whatsapp.svg" />
            </div>
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
.container {
    margin-top: 0;
}
.hero .container-img {
    align-content: center;
}
.hero .container {
    display: grid;
    padding-top: 8%;
    height: 100vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.social-media {
    margin: 0;
    cursor: pointer;
    padding-right: 15px;
    width: 30px;
}
.simbol-class {
    margin-top: 50px;
    width: 10%;
}
.container-img {
  margin: 0;
  padding-top: 25px;
  display: flex;
  justify-content: center;
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
