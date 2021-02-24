<template>
    <div class="section-contact">
        <div class="container">
            <h1 class="title-contact">CONTACTANOS</h1>
            <form @submit.prevent>
                <input
                    class="input-info"
                    type="text"
                    placeholder="Nombre"
                    v-model="body.name"
                />
                <input
                    class="input-info"
                    type="text"
                    placeholder="Apellido"
                    v-model="body.lastName"
                />
                <input
                    class="input-info"
                    type="email"
                    placeholder="Email"
                    v-model="body.email"
                />
                <input
                    class="input-info"
                    type="number"
                    maxlength="10"
                    placeholder="Télefono"
                    v-model="body.phone"
                />
                <p style="padding-bottom: 10px" v-if="!error && result === 200">Los datos, se enviaron correctamente</p>
                <p style="padding-bottom: 10px">¿Qué tipo de proyecto estás buscando?</p>
                <div class="toogle-display">
                    <div>
                        <VueToggles
                            width="50"
                            @click="advisory = !advisory"
                            :value="advisory"
                            checkedBg="#F3EBFA"
                        />
                    </div>

                    <p>Consultoría, asesoría y capacitación</p>
                </div>
                <div class="toogle-display">
                    <div>
                        <VueToggles
                            width="50"
                            @click="developing = !developing"
                            :value="developing"
                            checkedBg="#F3EBFA"
                        />
                    </div>

                    <p>Desarrollo de plataformas web.</p>
            
                </div>
                <div class="toogle-display">
                    <div>
                        <VueToggles
                            width="50"
                            @click="applications = !applications"
                            :value="applications"
                            checkedBg="#F3EBFA"
                        />
                    </div>
                    
                    <p>Aplicaciones móviles</p>
                    
                </div>
                <div class="toogle-display">
                    <div>
                        <VueToggles
                            width="50"
                            @click="maintenance = !maintenance"
                            :value="maintenance"
                            checkedBg="#F3EBFA"
                        />
                    </div>

                    <p>Mantenimiento a proyectos ya existentes</p>
                    
                </div>
                <button class="style-button" @click="hdlOnClick">Enviar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            body: {
              name: '',
              lastName: '',
              email: '',
              phone: '',
              proyects: []
            },
            advisory: false,
            developing: false,
            applications: false,
            maintenance: false,
            result: false,
            error: false
        }
    },

    methods: {
        functionShowMision() {
            console.log("Hola")
        },
        async hdlOnClick () {
            if (this.advisory) { this.body.proyects.push('Consultoria') }
            if (this.developing) { this.body.proyects.push('Desarrollo') }
            if (this.applications) { this.body.proyects.push('Apps') }
            if (this.maintenance) { this.body.proyects.push('Mantenimiento') }

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(this.body)
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            await fetch("https://ws.ammfec.com/information", requestOptions)
                .then(result => this.result = result.status)
                .catch(error => this. error = error)

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
    padding: 55px 50px 0 1900px;
    display: grid;
    float: right;
    width: 30%;
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
    padding-bottom: 10px;
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
    display: block;
    margin: auto;
    padding: 10px;
    width: 100%;
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
@media (max-width: 1000px) {
    .section-contact .container {
        display: grid;
        padding-right: 20px;
        width: 40%;
        height: 90vh;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .title-contact {
        margin: 0;
    }
}
@media (max-width: 650px) {
    .section-contact {
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("./../assets/background-info.png");
    }
    .section-contact .container {
        display: grid;
        padding-right: 20px;
        width: 90%;
        height: 90vh;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .title-contact {
        margin: 0;
    }
}
</style>
