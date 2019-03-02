import axios from '~/plugins/axios'
import Cookie from 'js-cookie'

export default {
    async goLogin({ commit, state, rootState }, userInfo) {
            await axios
                .post('/api/login', {
                    email: userInfo.email,
                    password: userInfo.password
                })
                .then(response => {
                    console.log(response.data)
                    commit('SET_TOKEN', response.data.token, { root: true })
                    commit('SET_USER', response.data, { root: true })
                    Cookie.set('token', rootState.token)
                })
                .catch(error => {
                    console.log(error)
                })
    },
    async getMes({ commit, rootState }) {
        await axios
            .get('/api/mes', {
                headers: {
                    Authorization: `Bearer ${rootState.token}`
                }
            })
            .then(response => {
                commit('SET_STATUS', response.data.status)
            })
    }
    // logOut({ commit, state }) {
    //     //console.log(rootState.auth.token)
    //     commit('SET_TOKEN', null)
    //     commit('SET_USER', '')
    //     Cookie.remove('token_cookie')
    //     Cookie.remove('name')
    //     Cookie.remove('email')
    // }
}