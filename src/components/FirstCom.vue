<template>
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
</template>

<script>
import {ref,onMounted  } from 'vue';

export default {
    name: 'FirstCom',
    setup(){
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
        const drawer = ref(true);

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

        return {
            showBirthdayMessage,
            typedMessage,
            check,
            answer9,
            end,
            next,
            level,
            drawer
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