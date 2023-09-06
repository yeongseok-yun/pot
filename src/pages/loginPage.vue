<template>
    <v-sheet>
        <v-sheet class="ma-2 pa-2" height="25dvh"></v-sheet>
        <v-sheet width="300" class="mx-auto pa-5 elevation-5" >
        <v-form ref="form" >
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>
            <v-text-field
            type="password"
            label="Password">
                
            </v-text-field>
            <!-- <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
            ></v-select> -->
<!--     
            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="remember me"
            required
            ></v-checkbox> -->
    
            <div class="d-flex flex-column">
            <v-btn
                color="success"
                class="mt-4"
                block
                @click="validate"
            >
                LogIn
            </v-btn>
    
            <v-btn
                color="blue"
                class="mt-4"
                block
                @click="dialog = !dialog"
            >
                JOIN
            </v-btn>
    
            <v-btn
                color="yellow"
                class="mt-4"
                block
                @click="resetValidation"
            >
                Help
            </v-btn>
            </div>
        </v-form>
        </v-sheet>
        <v-sheet class="ma-2 pa-2" height="15dvh"></v-sheet>
    </v-sheet>


    <!--join form modal-->
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="1024">
            <v-card>
                <v-card-title>
                <span class="text-h5">Join Form</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    <v-col cols="12">
                        <v-text-field 
                        label="ID*" 
                        v-model="insertId"
                        :rules="[() => !!insertId || 'This field is required',
                                 () => insertId.length >= 8 || 'Id must be less than 8 characters',
                                ]"
                                
                        required
                        >
                        </v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <v-text-field
                        label="NickName*"
                        v-model="insertNickName"
                        :rules="[() => !!insertNickName || 'This field is required',
                                 () => insertNickName.length >= 5 || 'NickName must be less than 5 characters.'
                                ]"
                        required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Password*"
                        type="password"
                        v-model="insertPassword1"
                        :rules="[() => !!insertPassword1 || 'This field is required',
                                 () => insertPassword1.length >= 10 || 'password must be less than 10 characters.'
                                ]"
                        required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Password*"
                        type="password"
                        v-model="insertPassword2"
                        :rules="[() => !!insertPassword2 || 'This field is required',
                                 () => insertPassword1 == insertPassword2 || 'Passwords do not match.',
                                 () => insertPassword2.length >= 10 || 'password must be less than 10 characters.'
                                ]"
                        required
                        >
                        </v-text-field>
                    </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="requestJoin">
                    Request Join
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>






  </template>
    
<script>
import {ref} from 'vue';
export default {
    
    setup(){
        const insertPassword1 = ref('');
        const insertPassword2 = ref('');
        const insertId = ref('');
        const insertNickName = ref('');
        const dialog = ref(false);
        const validate = () =>{
            alert('')
        }
        const pwdMatchCheck = () => {
            
            insertPassword1.value == insertPassword2.value  ? 'Password Err!!' : ``
        }
        const requestJoin = () => {
            let errFlag = true
            !insertId.value || insertId.value.length < 8 ? errFlag = !errFlag : console.log(1)
            !insertNickName.value || insertNickName.value.length < 5 ? errFlag = !errFlag : console.log(2)
            !insertPassword1.value || insertPassword1.value.length < 10 ? errFlag = !errFlag : console.log(3)
            !insertPassword2.value || insertPassword2.value.length < 10 ? errFlag = !errFlag : console.log(4)
            insertPassword1.value !== insertPassword2.value ? errFlag = !errFlag : console.log(5)

            errFlag == true ? alert('go') : alert('no go ')
        }

        return {
            pwdMatchCheck,
            insertPassword1,
            insertPassword2,
            insertNickName,
            insertId,
            dialog,
            validate,
            requestJoin
        }
    }
}
</script>

<style>

</style>