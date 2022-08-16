<template>
    <div>
        <v-app id="inspire">
            <v-main>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Formulário de Cadastro</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="registerForm">
                                <v-text-field
                                    name="name"
                                    label="Nome"
                                    type="text"
                                ></v-text-field>
                                <v-text-field
                                    name="login"
                                    label="Login"
                                    type="text"
                                ></v-text-field>                                
                                <v-text-field
                                    id="password"
                                    name="password"
                                    label="Senha"
                                    type="password"
                                ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="secondary" @click="backToLogin()">Voltar</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="register()">Cadastrar</v-btn>
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
    export default {
        methods: {
            register(e) {
                console.log(e)
            },
            backToLogin(){
                this.$router.push({name: 'login'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>