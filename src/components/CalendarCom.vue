<template>
  <VueCal
  
  :snap-to-time="30"
  editable-events
  
  :on-event-create="onEventCreate"
  @event-drag-create="showEventCreationDialog = true"
  :disable-views="['years', 'year']"
  :split-days="[{ id: 1, label: 'Y' }, { id: 2, label: 'H' }]"
  :events="events"
  ></VueCal>




  <v-dialog v-model="showEventCreationDialog" :persistent="true" max-width="420">
    <v-card>
    <v-card-title>
      <input v-model="selectedEvent.title" placeholder="Event Title" />
    </v-card-title>
    <v-card-text>
      <v-textarea v-model="selectedEvent.content" placeholder="Event Content" />
      <v-flex>
        <v-select
          :items="eventsCssClasses"
          placeholder="Event Color"
          @change="selectedEvent.class = $event"
          :value="selectedEvent.class" />
      </v-flex>
      <v-flex>
        <v-btn @click="cancelEventCreation()">Cancel</v-btn>
        <v-btn @click="closeCreationDialog()">Save</v-btn>
      </v-flex>
    </v-card-text>
  </v-card>
  </v-dialog>

</template>

<script>
import {ref} from 'vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
    name: 'CalendarCom',
    components:{
        VueCal
    },
    setup(){
        const selectedEvent = ref(null);
        const showEventCreationDialog = ref(false);
        const eventsCssClasses = ref(['orange', 'red', 'green']);
        const events = ref([{
            pk:'',
            id:'',
            title: 'Doctor appointment',
            content: '<i class="icon material-icons">local_hospital</i>',
            start: '2023-09-13 10:30',
            end: '2023-09-13 11:30',
            class: 'orange',
            split:1,
        }]);
        //func
        const onEventCreate = (event, deleteEventFunction) =>{
            selectedEvent.value = event
            
            console.log(deleteEventFunction)
            return event;
        }
        
        const cancelEventCreation = () =>{

            
            closeCreationDialog()
        }
        //저장
        const closeCreationDialog = () =>{
            showEventCreationDialog.value = false
            console.log(selectedEvent.value)
            selectedEvent.value = {}
        }
        return {
            selectedEvent,
            showEventCreationDialog,
            onEventCreate,
            eventsCssClasses,
            cancelEventCreation,
            closeCreationDialog,
            events

        }

    }
}
</script>

<style>
.vuecal__event.orange {background-color: rgba(253, 156, 66, 0.9);border: 1px solid rgb(233, 136, 46);color: #fff;}
.vuecal__event.red {background-color: rgba(255, 102, 102, 0.9);border: 1px solid rgb(235, 82, 82);color: #fff;}
.vuecal__event.green {background-color: rgba(102, 255, 153, 0.9);border: 1px solid rgb(82, 235, 123);color: #fff;}
</style>