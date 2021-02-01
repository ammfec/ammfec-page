<template>
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
</template>

<style scoped>
.title-second {
    font-size: 45px;
    margin: 25px;
    padding-top: 50px ;
}
.text-info {
    padding: 0 0 0 20px;
    font-size: 20px;
    width: 65%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.list-securities {
    width: 100%;
}
.list-securities .list-value {
    margin: 0;
    padding: 0;
    font-size: 20px;
    list-style-type: circle;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
ul .list-value {
    margin: 15px;
    list-style-type: circle;
    font-size: 20px;
}
.section-we-make {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./../assets/background-1.png");
}
.section-we-make .container {
    padding: 12px 40px 0 0;
    display: grid;
    float: right;
    width: 40%;
    height: 100vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.subtitle-we-make {
    font-size: 22px;
    padding-bottom: 45px;
}
.section-contact {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./../assets/Fondo-contactanos.jpg");
}
.white-color {
    color: #FFFFFF
}
</style>