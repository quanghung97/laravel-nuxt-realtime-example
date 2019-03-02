// import Vuex from 'vuex'
// import Vue from 'vue'
// import auth from './modules/auth'

// Vue.use(Vuex)

// const createStore = () => {
//     return new Vuex.Store({
//         modules: {
//             auth,
//         }
//     })
// }

// export default createStore

//import cookieparser from 'cookieparser'
// import Cookie from 'js-cookie'
import axios from '~/plugins/axios'
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  id: null,
  token: null,
  email: null,
  name: null
})

export const mutations = {
  SET_USER(state, user) {
    state.email = user.email
    state.name = user.name
    state.id = user.id
  },
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export const getters = {
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      //console.log(parsed.token)
      try {
        await axios
          .get('/api/user', {
            headers: {
              Authorization: `Bearer ${parsed.token}`
            }
          })
          .then(response => {
            //console.log(response.data)
            if (response.data) {

              commit('SET_TOKEN', parsed.token)
              commit('SET_USER', response.data)
              //Cookie.set('token', state.token)
              //commit('SET_DOMAIN', response.data.domain)
            } else {
              commit('SET_TOKEN', null)
              commit('SET_USER', '')
              //commit('SET_DOMAIN', null)
            }
          })
          .catch()


        //commit('auth/SET_TOKEN', parsed.token_cookie)
        //commit('auth/SET_USER', parsed)
      } catch (err) {
        // No valid cookie found
        //console.log(err)
      }
    } else {
      commit('SET_TOKEN', null)
      commit('SET_USER', '')
    }
  }
}
