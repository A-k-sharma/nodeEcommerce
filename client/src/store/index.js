import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login(state) {
      state.isLogin = true;
      router.push("/products");
    }
  },
  actions: {
    // eslint-disable-next-line
    localLogin({ commit }, data) {
      axios.post("http://localhost:5000/local/login", { ...data }).then(res => {
        console.log("res", res);
        if (res.status == 200) {
          commit("login");
          let d = new Date();
          d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
          let expires = "expires=" + d.toUTCString();
          document.cookie =
            "Token=" + res.data.token + ";" + expires + ";path=/";
        }
      });
    },
    googleLogin({ commit }) {
      axios
        .get("http://localhost:5000/login/google", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
            "Access-Control-Allow-Headers":
              "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
        .then(res => {
          if (res.status == 200) {
            commit("login");
            console.log(res);
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie =
              "Token=" + res.data.token + ";" + expires + ";path=/";
          }
        });
    }
  },
  modules: {}
});
