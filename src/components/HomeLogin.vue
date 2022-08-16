<template>
    <div>
        <v-app id="inspire">
            <v-main>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Login</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="loginForm">
                                <v-text-field
                                    v-model="formLogin.login"
                                    name="login"
                                    label="Login"
                                    type="text"
                                ></v-text-field>
                                <v-text-field
                                    v-model="formLogin.password"
                                    id="password"
                                    name="password"
                                    label="Senha"
                                    type="password"
                                ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="secondary" @click="redirectToRegister()">Cadastrar</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="login()">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    </v-layout>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import {LOGIN_URL} from '@/utils/httpUtils'

export default {
    data() {
        return {
            formLogin: {
                login: undefined,
                password: undefined
            }
        }
    },
    methods: {
        redirectToRegister(){
            this.$router.push({name:'register'})
        },
        login(){
            this.$http.post(LOGIN_URL, this.formLogin)
                .then((result)=>{
                    console.log(result)
                })
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>