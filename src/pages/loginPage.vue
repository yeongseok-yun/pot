<template>
    <v-layout class="rounded rounded-md" v-if = "loginCheck">
        <v-app-bar
        class="custom-app-bar"
        rounded>
        <v-div class="congratulation-text">
            <span class="congratulation">C</span>
            <span class="congratulation">O</span>
            <span class="congratulation">N</span>
            <span class="congratulation">G</span>
            <span class="congratulation">R</span>
            <span class="congratulation">A</span>
            <span class="congratulation">T</span>
            <span class="congratulation">U</span>
            <span class="congratulation">L</span>
            <span class="congratulation">A</span>
            <span class="congratulation">T</span>
            <span class="congratulation">I</span>
            <span class="congratulation">O</span>
            <span class="congratulation">N</span>
        </v-div>
        </v-app-bar>
        <!--<v-navigation-drawer
        v-model="drawer"
        class="bg-blue-lighten-5"
        
        >
        <v-list color="transparent"> 
            <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    color=""
            >
                <v-list-item-title @click="dispCom">
                    {{ item.menuLable }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
        <v-list color="transparent"> 
            
        <router-link class="navbar-brand" :to="{name : 'Test'}"> 
             <v-list :items="items"></v-list>
            
            
            <v-list-item>
                <v-list :items="items.menuLable" :click="dispCom">
                    
                </v-list>
            </v-list-item> 
        </router-link> 
        </v-list>
        
        </v-navigation-drawer>-->

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        
                    <!-- <CalendarCom/>
                    <TodoCom/> -->
            <component :is="selectedComponent"></component>
            <v-flex>
                <v-div v-if = "level == 1">
                    <v-div class="lv1" style="font-size:60px;text-align: center;">안녕~안혜리!<br>생일을 축하한다네<br></v-div>
                    <v-div class="lv1" style="font-size:40px;text-align: center;">손쉬운 퀴즈를 풀고<br></v-div>
                    <v-div class="lv1" style="font-size:40px;text-align: center;">생일 선물을 get해보지 않겠나?<br></v-div>
                    <v-div class="lv1-1" style="font-size:40px;text-align: center;">
                        <v-btn class="lv1-1" color="indigo-darken-3" @click="next(2)">그래퀴즈풀자</v-btn><br>
                        <v-btn class="lv1-1" color="indigo-darken-3" @click="end()">난 퀴즈따위 하지 않겠어</v-btn><br>
                    </v-div>
                </v-div>
                <v-div v-if = "level == 2">
                    <v-div class="lv2" style="font-size:40px;text-align: center;">첫번째 문제는 일본어 문제야
                    <br>준비가 완료되면 아래 시작하기 버튼을 눌러</v-div>
                    <v-btn class="lv2" color="indigo-darken-3" @click="next(3)">시작하기</v-btn>
                </v-div>

                <v-div v-if = "level == 3">
                    <v-div style="font-size:40px;text-align: center;">STAGE1<br></v-div>
                    <v-div style="font-size:40px;text-align: center;">Q) 지문의 빈칸에 알맞는 단어는?<br></v-div>
                    <v-div style="font-size:25px;text-align: center;">지문) しいたけのたけは（）のしい<br></v-div>

                    <v-div style="font-size:25px;text-align: center;" @click="next(4)" >１) かしい<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="end()" >２) がしい<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="end()" >３) げしい<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="end()" >４) ふしい<br></v-div>
                    
                </v-div>
                <v-div v-if = "level == 4">
                    <v-div style="font-size:40px;text-align: center;">제법이야 안혜리<br>우리의 추억을 기억하고있군<br></v-div>
                    <v-div style="font-size:40px;text-align: center;">다음 문제는 영어라 난이도가 높을꺼야<br>
                    <br>준비가 완료되면 아래 버튼을 눌러</v-div>
                    <v-btn class="lv2" color="indigo-darken-3" @click="next(5)">다음 문제보기</v-btn>
                    
                </v-div>
                <v-div v-if = "level == 5">
                    <v-div style="font-size:40px;text-align: center;">STAGE2<br></v-div>
                    <v-div style="font-size:40px;text-align: center;">Q) 다음 중 어법에 맞는 문장은 무엇인가요??<br></v-div>

                    <v-div style="font-size:25px;text-align: center;" @click="end()" >１)He don't like coffee.<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="end()" >２) She is have a busy day tomorrow.<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="end()" >３) They was playing soccer in the park.<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="next(6)" >４) I have been to Paris twice.<br></v-div>
                    
                </v-div>

                <v-div v-if = "level == 6">
                    <v-div style="font-size:40px;text-align: center;">오 안혜리<br>여기까지 오다니 대단해<br></v-div>
                    <v-div style="font-size:40px;text-align: center;">다음 문제는 직무에 관련 된 문제야<br>
                    <br>준비가 완료되면 아래 버튼을 눌러</v-div>
                    <v-btn class="lv2" color="indigo-darken-3" @click="next(7)">다음 문제보기</v-btn>
                    
                </v-div>
                <v-div v-if = "level == 7">
                    <v-div style="font-size:40px;text-align: center;">STAGE3<br></v-div>
                    <v-div style="font-size:40px;text-align: center;">Q) 다음 중 자동차공학연구소의 설립일로 옳은것은?<br></v-div>

                    <v-div style="font-size:25px;text-align: center;" @click="end()" >１) 2012년 1월<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="end()" >２) 2012년 7월<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="next(8)" >３) 2013년 1월<br></v-div>
                    <v-div style="font-size:25px;text-align: center;" @click="end()" >４) 2013년 7월<br></v-div>
                    
                </v-div>

                <v-div v-if = "level == 8">
                    <v-div style="font-size:40px;text-align: center;">이제 마지막 문제만 남아있어<br>조금 더 힘내라고</v-div>
                    <v-div style="font-size:40px;text-align: center;">마지막 문제는 윤영석에 관련 된 문제야<br>
                    <br>준비가 완료되면 아래 버튼을 눌러</v-div>
                    <v-btn class="lv2" color="indigo-darken-3" @click="next(9)">마지막 문제보기</v-btn>
                    
                </v-div>

                <v-div v-if = "level == 9">
                    <v-div style="font-size:40px;text-align: center;">STAGE4 주관식<br></v-div>
                    <v-div style="font-size:40px;text-align: center;">Q) 윤영석 이름을 한자로 입력하시오<br></v-div>
                    <br><br>
                    <input v-model = "answer9" style="border: 2px solid black;height:40px /* 검정색 테두리 스타일 지정 */padding: 5px;margin:10px"/>
                    <br><br><br><br>
                    <v-btn @click = "check()">제출하기</v-btn>
                    
                </v-div>
                <v-div v-if = "level == 10">
                    <img :src="require('@/assets/cong.png')" alt="Sample Image">
                    <v-div style="font-size:40px;text-align: center;">선물 위치 알고 싶지?<br></v-div>
                    <v-btn color="indigo-darken-3" @click="next(98)">알려줘!!!!</v-btn>
                </v-div>
                <v-div v-if = "level == 98">
                    <v-sheet style="font-size: 40px;" v-if="showBirthdayMessage">
                        {{ typedMessage }}
                    </v-sheet>
                </v-div>
                <v-div v-if = "level == 99">
                    <img :src="require('@/assets/gameover.png')" alt="Sample Image">
                    <v-btn color="indigo-darken-3" @click="next(1)">처음부터 다시...</v-btn>
                </v-div>
            </v-flex> 
        </v-main>
     </v-layout>




    <v-sheet v-else>
        
        <v-sheet class="ma-2 pa-2" height="25dvh"></v-sheet>
        <v-sheet width="300" class="mx-auto pa-5 elevation-5" >
        <v-form ref="form" >
            <v-text-field
            v-model="loginId"
            label="Name"
            :rules="[() => !!loginId || 'This field is required']"
            required
            ></v-text-field>
            <v-text-field
            v-model="loginPassword"
            type="password"
            label="Password"
            :rules="[() => !!loginPassword || 'This field is required']"
            required
            >
                
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
            <v-dialog v-model="loginDialog" persistent width="40vh">
                <v-alert
                justify="center"
                width = 40vh
                type="error"
                title="Login failed!!"
                text="Please check you Id or Password"
                >
                    <div
                        style ="text-align: -webkit-right;">
                        <v-btn
                            class=""
                            color="medium-white"
                            min-width="40"
                            rounded
                            variant="tonal"
                            @click="initAll()"
                        >
                            Ok
                        </v-btn>
                    </div>
                </v-alert>
            </v-dialog>
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

                <div class="d-flex justify-center mb-6 bg-surface-variant" v-if = "joinAlertNum == 1">
                    <v-dialog v-model="dialog" persistent width="40vh">
                        <v-alert
                            justify="center"
                            
                            width = 30vh
                            type="success"
                            title="Join Complete"
                            text="Please try login"
                        >
                        <div
                         style ="text-align: -webkit-right;">
                            <v-btn
                                class=""
                                color="medium-white"
                                min-width="40"
                                rounded
                                variant="tonal"
                                @click="initAll()"
                            >
                                Ok
                            </v-btn>
                        </div>
                        </v-alert>
                    </v-dialog>
                </div>
            </v-card>


            

        </v-dialog>
    </v-row>


    



  </template>
    
<script>
import {ref,shallowRef,onMounted  } from 'vue';
import axios from 'axios';
import CalendarCom from '@/components/CalendarCom.vue';
import TodoCom from '@/components/TodoCom.vue';
//import {useRouter} from 'vue-router';
export default {
    components: {
        CalendarCom,
        TodoCom,
    },
    setup(){
        
        //alert(sessionStorage.getItem('loginCheck'))
        // if(sessionStorage.getItem('loginCheck')){

        // }
        //변수
        const showBirthdayMessage = ref(true);
        const typedMessage = ref('');

        const birthdayMessage = [
        '혜', '리', '야', ' ', '생', '일', ' ', '축', '하', '하', '고',' ',
        '항', '상', ' ', '사', '랑', '하', '고',' ',
        '항', '상', ' ', '건', '강', '하', '자', ' ',
        '선', '물', '은', '.', '.', '.', '',' ',
        '베', '란', '다', '창', '고', '를', ' ', '확', '인', '해',' ',
        ];
        const answer9 = ref('')
        const level = ref(1)
        const selectedComponent = shallowRef(null);
        const drawer = ref(true);
        const items = ref(
            [
                {
                    menuLable : 'Cal',
                    componentsName : 'CalendarCom'
                },
                {
                    menuLable : 'Todo1',
                    componentsName : 'TodoCom'
                },
                {
                    menuLable : 'Todo2',
                    componentsName : 'TodoCom'
                },
                {
                    menuLable : '메뉴4',
                    componentsName : 'TodoCom'
                }
            ]
        )
        const loginCheck = ref(true);
        //const router = useRouter();
        const loginId = ref('');
        const loginPassword = ref('');
        const joinAlertNum = ref(0);
        const insertPassword1 = ref('');
        const insertPassword2 = ref('');
        const insertId = ref('');
        const insertNickName = ref('');
        const dialog = ref(false);
        const loginDialog = ref(false);


        //func
        const typeText = () => {
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < birthdayMessage.length) {
            typedMessage.value += birthdayMessage[index];
            index++;
            } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                //showBirthdayMessage.value = false; // 메시지 표시를 숨김
            }, 2000); // 2초 후에 메시지를 숨김
            }
        }, 200); // 0.2초마다 한 글자씩 출력
        };
        onMounted(() => {
        // 컴포넌트가 마운트된 후에 타이핑 효과 시작
        setTimeout(() => {
            showBirthdayMessage.value = true; // 메시지 표시 시작
            typeText();
        }, 2000); // 2초 후에 메시지 표시 시작
        });
        const check = () => {
            answer9.value === '尹永錫' ? next(10) : end()
        }
        const next = (step) => {
            if (step === 98) {
                typedMessage.value = ''; // typedMessage 초기화
                typeText(); // 새로운 메시지 출력 시작
            }
            level.value = step
        }
        const end = () => {
            level.value = 99
        }
        const dispCom = (obj) => {
            const indexOfCal = items.value.findIndex(item => item.menuLable === obj.srcElement.textContent);
            console.log(items.value)
            selectedComponent.value = items.value[indexOfCal].componentsName
            console.log(selectedComponent)
        }
        const initAll = () => {
            loginDialog.value = false
            joinAlertNum.value = 0
            dialog.value = false
            insertPassword1.value = ''
            insertPassword2.value = ''
            insertId.value = ''
            insertNickName.value = ''
        }
        const validate = () =>{
            let errFlag = true
            loginId.value == '' ? errFlag = false : console.log(1)
            loginPassword.value == '' ? errFlag = false : console.log(3)

            if(errFlag){
                axios.post("/login",{
                    id : loginId.value,
                    password : loginPassword.value
                }).then((res)=> {
                    console.log(res)
                    if(res.data == 0){
                        loginDialog.value = true
                    }else{
                        loginCheck.value = true
                    }
                }).catch((res)=> {
                    console.log(res)
                    loginDialog.value = true
                })
            }else{
                //loginAlertNum.value = 1
                loginDialog.value = true
            }
        }
        const pwdMatchCheck = () => {
            
            insertPassword1.value == insertPassword2.value  ? 'Password Err!!' : ``
        }
        const requestJoin = () => {
            let errFlag = true
            insertId.value || insertId.value.length < 8 ? errFlag = false: console.log(1)
            insertNickName.value || insertNickName.value.length < 5 ? errFlag = false : console.log(2)
            insertPassword1.value || insertPassword1.value.length < 10 ? errFlag = false : console.log(3)
            insertPassword2.value || insertPassword2.value.length < 10 ? errFlag = false : console.log(4)
            insertPassword1.value !== insertPassword2.value ? errFlag = false : console.log(5)

            //errFlag == true ? alert('go') : alert('no go ')
            if(errFlag){
                axios.post("/join",{
                    id : insertId.value,
                    nickName : insertNickName.value,
                    password : insertPassword1.value

                }).then((res)=> {
                    console.log(res)
                    if(res.data == 0){
                        joinAlertNum.value = 1
                    }
                }).catch((res)=> {
                    console.log(res)
                })
            }
        }

        return {
            showBirthdayMessage,
            typedMessage,
            check,
            answer9,
            end,
            next,
            level,
            selectedComponent,
            dispCom,
            drawer,
            items,
            loginCheck,
            loginDialog,
            loginPassword,
            loginId,
            initAll,
            joinAlertNum,
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@600&display=swap');
#app{
    font-family: 'Noto Sans KR', sans-serif;
}
/* 모바일 화면에서 이미지 크기 조절 */
@media (max-width: 767px) {
    img {
      max-width: 100%; /* 이미지 최대 너비를 조절하세요 */
    }
  }
 /* Add this CSS for the animation */
.congratulation-text {
  font-size: 24px;
  color: transparent;
  text-align: center;
  font-weight: bold;
  font-family: 'cursive';
  padding: 10px;
  display: inline-block;
}

.congratulation {
  display: inline-block;
  animation: colorChange 2s linear infinite,
             fontSizeChange 2s alternate infinite;
}

/* Apply different font-family for PC screens */
@media screen and (min-width: 768px) {
  .congratulation-text {
    font-family: sans-serif, sans-serif;
  }
}

@keyframes colorChange {
  0% {
    color: #ff5722;
  }
  50% {
    color: #f44336;
  }
  100% {
    color: #ff5722;
  }
}

@keyframes fontSizeChange {
  0% {
    font-size: 24px;
  }
  100% {
    font-size: 30px;
  }
}
</style>