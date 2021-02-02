<template>
    <div class="section-contact">
        <div class="container">
            <div class="content">
                <h1 class="title-contact">CONTACTANOS</h1>
                <form style="margin-right: 105px">
                <input
                    class="input-info"
                    type="text"
                    placeholder="Nombre" />
                <input
                    class="input-info"
                    type="text"
                    placeholder="Apellido" />
                <input
                    class="input-info"
                    type="email"
                    placeholder="Email"
                    maxlength="10" />
                <input
                    class="input-info"
                    type="number"
                    placeholder="Télefono" />
                <p>¿Qué tipo de proyecto estás buscando?</p>
                <div class="toogle-display">
                        <VueToggles
                            @click="value = !value"
                            :value="value"
                            checkedBg="#E9DBF5"
                        />
                    <p>Consultoria, asesoría y capacitación</p>
                </div>
                <div class="toogle-display">
                    <VueToggles
                        @click="value = !value"
                        :value="value"
                        checkedBg="#E9DBF5"
                    />
                    <p>Desarrollo de plataformas web</p>
                </div>
                <div class="toogle-display">
                    <VueToggles
                        @click="value = !value"
                        :value="value"
                        checkedBg="#E9DBF5"
                    />
                    <p>Aplicaciones móviles</p>
                </div>
                <div class="toogle-display">
                    <VueToggles
                        @click="value = !value"
                        :value="value"
                        checkedBg="#E9DBF5"
                    />
                    <p>Mantenimiento a proyectos ya existentes</p>
                </div>
                <input class="style-button" type="submit" />
            </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        functionShowMision() {
            console.log("Hola")
        }
    },    
}
</script>

<style scoped>
.section-contact {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./../assets/Fondo-contactanos.jpg");
}
.section-contact .container {
    padding: 55px 0 0 1900px;
    display: grid;
    float: right;
    width: 40%;
    height: 90vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.white-color {
    color: #FFFFFF
}
.title-contact {
    font-size: 26px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.toogle-display {
    display: flex;
    padding: 10px;
    width: 70%;
}
.toogle-display p {
    padding-left: 10px;
}
.input-info {
    width: 100%;
    padding: 8px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background: #ccc;
}
.style-button {
    padding: 10px;
    width: 62%;
    background-color: #CBA4E5;
    border: 1px #CBA4E5;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
}
::placeholder {
    color: black;
    font-size: 15px;
}
</style>
