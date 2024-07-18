const { createApp } = Vue;

createApp({
  data() {
    return {
      todo: [
        {
          text: "Chiamare il commercialista",
          done: false,
        },
        {
          text: "Prenotare un tavolo",
          done: false,
        },
        {
          text: "Andare dal gommista",
          done: false,
        },
        {
          text: "Comprare gli ingredienti per stasera",
          done: false,
        },
        {
          text: "Andare dall'estetista",
          done: false,
        },
        {
          text: "Pulire il bagno",
          done: false,
        },
        {
          text: "Studiare",
          done: false,
        },
      ],
      newTask: undefined
    };
  },
  methods: {
    isTaskDone(i) {
        this.todo[i].done = true
        console.log(this.todo[i].done)
    },
    taskRemove(i){
        if(confirm("Sicuro di voler eliminare questa task?")){
            this.todo.splice(i, 1)
        }
    },
    taskAdd() {
        // creare oggetto
        let objectTask = {
            text: this.newTask,
            done: false
        }
        this.todo.push(objectTask)
        this.newTask = undefined
    }
  },
}).mount("#app");
