<template>
    <div>
        <div class="hero">
            <div class="container">
                <div class="content">
                    <h1 class="title">A M M F E C</h1>
                    <p class="subtitle">TECHNOLOGIES</p>
                    <p class="letters">SOLUCIONES INNOVADORAS</p>
                    <img class="simbol-class" src="./../assets/signo.png" />
                </div>
            </div>
        </div>
        <div class="information">
            <div class="container">
                <h1 class="title-second">¿QUIÉNES SOMOS?</h1>
                <p class="subtitle-second">"Para nosotros la tecnología es una solución, no un obstáculo"</p>
                <ul class="list-first">
                    <li>
                        <img class="img-icon" src="./../assets/down-arrow.svg" />
                        <p class="text-content">
                            MISIÓN 
                            <span class="text-info">
                                Ser una empresa socialmente responsable que contribuye con soluciones innovadoras
                            </span>
                        </p>    
                    </li>
                    <li>
                        <img class="img-icon" src="./../assets/down-arrow.svg" />
                        <p class="text-content">
                            VISIÓN 
                            <span class="text-info">
                                Ayudamos a comprender, utilizar y desarrollar herramientas tecnologicas que esten al avance de todos
                            </span>
                        </p>
                    </li>
                    <li>
                        <img class="img-icon" src="./../assets/down-arrow.svg" />
                        <p class="text-content">
                            NUESTROS VALORES
                            <ul class="list-securities">
                                <li class="list-value">Trabajo en equipo</li>
                                <li class="list-value">Trabajo respetuoso</li>
                                <li class="list-value">Innovación y competitividad</li>
                                <li class="list-value">Integridad laboral</li>
                                <li class="list-value">Constncia y disciplina</li>
                                <li class="list-value">Transparencia y cultura abierta</li>
                            </ul>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="section-we-make">
            <div class="container">
                <div class="content">
                    <h1 class="title-second white-color">¿QUÉ HACEMOS?</h1>
                    <p class="subtitle-we-make white-color">Desarrollamos e implementamos soluciones innovadoras para satisfacer las necesidades tecnologicas a la medida del cliente con costos accesibles</p>
                    <ul class="white-color">
                            <li class="list-value">Consultoria, assesoría y capacitación en IT</li>
                            <li class="list-value">Desarrollo de plataformas web</li>
                            <li class="list-value">Aplicaciones móviles</li>
                            <li class="list-value">Mantenimiento a proyectos ya existentes</li>
                        </ul>
                </div>
            </div>
        </div>

        <div class="section-contact">
            <div class="container">
                <div class="content">
                    <h1 class="title">CONTACTANOS</h1>
                </div>
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
.img-icon {
    width: 20px;
    cursor: pointer;
}
.information {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./../assets/background-info.png");
}
.information .container {
    display: grid;
    align-content: center;
    height: 100vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.title-second {
    font-size: 45px;
    margin: 25px;
    padding-top: 50px ;
}
.subtitle-second {
    margin: 30px 0 20px 0;
    font-size: 1.5rem;
}
.text-content {
    width: 100%;
    padding: 20px;
    font-size: 25px;
    display: flex;
}
.text-info {
    padding: 0 0 0 20px;
    font-size: 20px;
    width: 40%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.list-securities {
    width: 100%;
}
.list-securities .list-value {
    margin: 0;
    font-size: 20px;
    list-style-type: circle;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
ul .list-value {
    margin: 15px;
    list-style-type: circle;
    font-size: 20px;
}
.list-first {
    width: 100%;
}
.list-first li {
    display: flex;
    flex-wrap: wrap;
    margin: 40px;
}
.section-we-make {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./../assets/background-1.png");
}
.subtitle-we-make {
    font-size: 22px;
    padding-bottom: 45px;
}
.section-we-make .container {
    padding: 12px 40px 0 0;
    display: grid;
    float: right;
    width: 40%;
    height: 100vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.section-contact {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./../assets/Fondo-contactanos.jpg");
}
.section-contact .container {
    display: grid;
    height: 100vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.white-color {
    color: #FFFFFF
}
</style>