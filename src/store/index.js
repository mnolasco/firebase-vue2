import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tareas: [],
        tarea: { nombre: "", id: "" },
    },
    mutations: {
        setTareas(state, payload) {
            state.tareas = payload;
        },
        setTarea(state, payload) {
            state.tarea = payload;
        },
    },
    actions: {
        getTareas({ commit }) {
            const tareas = [];
            db.collection("tareas")
                .get()
                .then((res) => {
                    res.forEach((documento) => {
                        // console.log(documento.id);
                        // console.log(documento.data());
                        let tarea = documento.data();
                        tarea.id = documento.id;
                        tareas.push(tarea);
                    });
                    commit("setTareas", tareas);
                });
        },
        getTarea({ commit }, tareaId) {
            db.collection("tareas")
                .doc(tareaId)
                .get()
                .then((doc) => {
                    let tarea = doc.data();
                    tarea.id = doc.id;
                    commit("setTarea", tarea);
                });
        },
        editarTarea({ commit }, tarea) {
            db.collection("tareas")
                .doc(tarea.id)
                .update({
                    nombre: tarea.nombre,
                })
                .then(() => {
                    console.log("tarea editada");
                    router.push("/");
                });
        },
    },
    modules: {},
});
