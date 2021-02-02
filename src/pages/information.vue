<template>
    <div class="information">
        <div class="container">
            <h1 class="title-second">¿QUIÉNES SOMOS?</h1>
            <p class="subtitle-second">"Para nosotros la tecnología es una solución, no un obstáculo"</p>
            <ul class="list-first">
                <li>
                    <p class="text-content">
                        <img class="img-icon" src="./../assets/down-arrow.svg" v-on:click="showMision = !showMision" />
                        MISIÓN 
                        <span class="text-info" v-if="showMision">
                            Ser una empresa socialmente responsable que contribuye con soluciones innovadoras
                        </span>
                    </p>    
                </li>
                <li>
                    <p class="text-content">
                        <img class="img-icon" src="./../assets/down-arrow.svg" v-on:click="showVision = !showVision" />
                        VISIÓN 
                        <span class="text-info" v-if="showVision">
                            Ayudamos a comprender, utilizar y desarrollar herramientas tecnologicas que esten al avance de todos
                        </span>
                    </p>
                </li>
                <li>
                    <p class="text-content">
                        <img :class="!showValues ? 'img-icon' : 'img-with-padding'" src="./../assets/down-arrow.svg" v-on:click="showValues = !showValues" />
                        NUESTROS VALORES
                    </p>
                    <ul class="list-securities" v-if="showValues">
                        <li class="list-value">Trabajo en equipo</li>
                        <li class="list-value">Trabajo respetuoso</li>
                        <li class="list-value">Innovación y competitividad</li>
                        <li class="list-value">Integridad laboral</li>
                        <li class="list-value">Constncia y disciplina</li>
                        <li class="list-value">Transparencia y cultura abierta</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: false,
            showMision: false,
            showVision: false,
            showValues: false,
        }
    },
}
</script>

<style scoped>
.img-icon {
    width: 20px;
    cursor: pointer;
    padding-right: 10px ;
}
.img-with-padding {
    width: 20px;
    cursor: pointer;
    padding-bottom: 88px;
    padding-right: 10px;
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
.list-first {
    width: 100%;
}
.list-first li {
    display: flex;
    padding: 30px;
}
.text-content {
    width: 50%;
    padding: 10px;
    font-size: 25px;
    display: flex;
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
.text-info {
    padding: 0 0 0 20px;
    font-size: 20px;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
