import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: {
            isAuthenticated: false,
            token: null,
        }
    }),
    action: {
        initStore() {
            this.user.isAuthenticated = false

            if (localStorage.getItem('user.token')){
                this.user.token = localStorage.getItem('user.token')
                this.user.isAuthenticated = true

                console.log('Initalized user:', this.user)
            }
        },
        setToken(token){
            console.log('setToken', token)

            this.user.token = token
            this.user.isAuthenticated = true

            localStorage.setItem('user.token', token)
        },
        removeToken(){
            console.log('removeToken')

            this.user.token = null
            this.user.isAuthenticated = false

            localStorage.setItem('user.token', '')
        }
    }
})