const { createApp } = Vue;

createApp({
    data(){
        return {
            todo: [
                {
                    text: "Chiamare il commercialista",
                    done: false
                },
                {
                    text: "Prenotare un tavolo",
                    done: false
                },
                {
                    text: "Andare dal gommista",
                    done: false
                },
                {
                    text: "Comprare gli ingredienti per stasera",
                    done: false
                },
                {
                    text: "Andare dall'estetista",
                    done: false
                },
                {
                    text: "Pulire il bagno",
                    done: false
                },
                {
                    text: "Studiare",
                    done: false
                }
            ]
        }
    },
    methods: {

    }
}).mount("#app")