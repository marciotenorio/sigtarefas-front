<template>
    <div>
        <v-app id="inspire">
            <v-main>
                <v-container fluid fill-height>
                    <v-layout align-center justify-center>
                    <v-flex  xs12 sm8 md8>
                        <v-flex>
                            <form>
                                <v-flex xs4 >
                                    <v-text-field
                                    v-model="queryTask.id"
                                    label="Número"
                                    required
                                    type="number"
                                    />
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea
                                    outlined
                                    v-model="queryTask.title"
                                    label="Título/Descrição"
                                    required
                                    />
                                </v-flex>
                                <v-flex xs12 row>
                                    <v-flex xs4>
                                        <v-autocomplete
                                        v-model="queryTask.responsible"
                                        :items="allUsers"
                                        return-object
                                        label="Responsável"
                                        :no-data-text="'Não existem usuários cadastrados'"
                                        required
                                        />
                                    </v-flex>
                                    <v-flex xs4 pl-8>
                                        <v-autocomplete
                                        v-model="queryTask.status"
                                        :items="allStatus"
                                        return-object
                                        label="Situação"
                                        required
                                        />
                                    </v-flex>
                                    <v-flex xs2 pl-10>
                                        <v-btn 
                                        depressed
                                        color="primary">
                                        Buscar
                                        </v-btn>
                                    </v-flex>                                
                                </v-flex>                                                         
                            </form>
                        </v-flex>

                        <v-flex mt-15>
                            <v-data-table
                                :headers="headers"
                                :items="tarefas"
                                :no-data-text="'Não existem tarefas cadastradas'"
                            />                        
                        </v-flex>
                    </v-flex>    
                 </v-layout>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                queryTask: {
                    id: undefined,
                    title: undefined,
                    description: undefined,
                    responsible: undefined,
                    priority: undefined,
                    status: undefined,
                    deadline: undefined
                }
            }
        },
        computed:{
            headers() {
                return [
                    {
                        text: 'Número',
                        value: 'id'
                    },
                    {
                        text: 'Título',
                        value: 'title'
                    },
                    {
                        text: 'Responsável',
                        value: 'id'
                    },
                    {
                        text: 'Ações'
                    }
                ]
            },
            allStatus() {
                return ["EM ANDAMENTO", "CONCLUIDO"]
            },
            allUsers(){
                return [];
            },
            tarefas() {
                return [];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>