<template>
  <v-flex>
    <v-div>
        <v-div v-if = "dDay > 0">
            <h1>Coming soon! D - {{ dDay }}</h1>
            <span>이 페이지는 2024년 9월 15일 00시 01분 01초 부터 공개됩니다.</span>
        </v-div>
        <v-div v-else>
            <iframe src="http://localhost:8501" style="width:100%; height:100vh; border:none;"></iframe>
        </v-div>
        
    </v-div>
  </v-flex>
</template>

<script>
import {ref} from 'vue';
export default {
    
    setup(){
        let dDay = ref(0);

        

        const calculDday = () =>{
            const currentDate = new Date();
            const inputDate = new Date('2024-08-16');

            // 두 날짜 간의 차이 계산 (밀리초)
            const timeDiff = inputDate - currentDate;

            // 밀리초를 일로 변환
            const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            dDay.value = dayDiff
            console.log(dDay)
        }

        calculDday()

        return (
            {
                dDay
            }
        )
    }
}
</script>

<style>

</style>