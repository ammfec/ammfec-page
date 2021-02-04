<template>
    <div class="section-we-make">
        <div class="container">
            <h1 class="title-second white-color">¿QUÉ HACEMOS?</h1>
            <p class="subtitle-we-make white-color">Desarrollamos e implementamos soluciones innovadoras para satisfacer las necesidades tecnológicas a la medida del cliente con costos accesibles.</p>
            <ul class="white-color">
                <li class="list-value">Consultoría, asesoría y capacitación en IT..</li>
                <li class="list-value">Desarrollo de plataformas web.</li>
                <li class="list-value">Aplicaciones móviles.</li>
                <li class="list-value">Mantenimiento a proyectos ya existentes.</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.title-second {
    font-size: 45px;
    margin: 25px;
    padding-top: 50px ;
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
@media (max-width: 750px) {
    .section-we-make .container {
        margin-left: 20px;
        display: grid;
        width: 80%;
        height: 100vh;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .section-we-make {
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("./../assets/background-init.png");
    }
    .subtitle-we-make {
        font-size: 18px;
        padding-bottom: 0;
    }
    .title-second {
        font-size: 25px;
        margin: 0;
        padding-top: 10px;
    }
    ul .list-value {
        padding: 2px;
        list-style-type: circle;
        font-size: 16px;
    }
}
</style>