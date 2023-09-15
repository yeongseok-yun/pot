<template>
    <v-layout class="rounded rounded-md">
        <v-app-bar
        class="custom-app-bar"
        rounded>
        <v-app-bar-nav-icon
        variant="text"
        @click.stop="toggleDrawer"
        ></v-app-bar-nav-icon>
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
        <v-navigation-drawer
        v-model="drawer"
        class="bg-blue-lighten-5"
        :mini-variant="miniDrawer"
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

            <v-list :items="items"></v-list>
       
        </v-list>

        </v-navigation-drawer>
        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <v-div v-if="selectedComponent == null">
                <h2>나와 혜리의 추억 아카이브</h2>
                <br><br>
                좌측 상단 메뉴를 눌러 날짜를 지정해주세요
            </v-div>
                <component :is="selectedComponent"></component>
        </v-main>
     </v-layout>

  </template>
    
<script>
import {ref,shallowRef,onMounted,onBeforeUnmount} from 'vue';
import FirstCom from '@/components/FirstCom.vue';
import SecondCom from '@/components/SecondCom.vue';
export default {
     components: {
         FirstCom,
         SecondCom
     },
    setup(){
        
        //변수
        const showBirthdayMessage = ref(true);
        const typedMessage = ref('');
        const miniDrawer = ref(window.innerWidth <= 767); 
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
        const drawer = ref(false);
        const items = ref(
            [
                {
                    menuLable : '2023/09/16',
                    componentsName : 'FirstCom'
                },
                {
                    menuLable : '2024/09/16',
                    componentsName : 'SecondCom'
                }
            ]
        )
        
        const dialog = ref(false);


        //func
        const toggleDrawer = () => {
            drawer.value = !drawer.value;
        };
        const handleResize = () => {
            miniDrawer.value = window.innerWidth <= 767;
        };
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
        // 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);
        onMounted(() => {
            // 컴포넌트가 마운트된 후에 타이핑 효과 시작
            setTimeout(() => {
                showBirthdayMessage.value = true; // 메시지 표시 시작
                typeText();
            }, 2000); // 2초 후에 메시지 표시 시작
        });
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        onBeforeUnmount(() => {
            window.removeEventListener('resize', handleResize);
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
             selectedComponent.value = items.value[indexOfCal].componentsName
             // 메뉴 항목을 클릭하면 좌측 메뉴를 자동으로 닫도록 설정
            drawer.value = false;
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
            dialog,
            miniDrawer, // mini-variant 상태를 템플릿에서 사용할 수 있도록 반환합니다.
            toggleDrawer, // 좌측 메뉴를 토글하는 함수를 템플릿에서 사용할 수 있도록 반환합니다.
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