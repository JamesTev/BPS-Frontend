/* eslint-disable vue/require-default-prop */
/* eslint-disable vue/html-self-closing */
<template>
  <div style="padding-bottom: 20px">
    <div
      class="tile is-ancestor is-flex-mobile"
      :style="showNote ? 'padding-bottom:0px' : 'padding-bottom:10px'"
    >
      <div
        v-if="$mq != 'sm'"
        class="tile is-1 is-vertical is-parent"
      >
        <div class="tile is-child v-centre">
          <b-button 
            size="is-small" 
            icon-left="edit" 
            class="is-text"
            :class="overviewObject.note.length > 0 ? 'has-text-primary': ''"
            @click="toggleNoteView"
          />
        </div>
      </div>
      <div class="tile is-8 is-vertical is-parent">
        <div class="tile is-child">
          <b-tag class="heading is-5 has-text-weight-light">
            <strong>{{ overviewObject.formattedDate }}</strong> at
            <strong>{{ overviewObject.formattedTime }}</strong>
          </b-tag>
          <p
            class="subtitle is-6 has-text-weight-light is-size-7-mobile"
            style="margin-bottom:5px; margin-top:5px"
          >
            <strong>{{ parseFloat(overviewObject.pump_volume).toFixed(0) }}</strong> litres over
            <strong>{{ parseFloat(overviewObject.pump_duration/60).toFixed(2) }}</strong> mins
            <span v-if="overviewObject.hasOwnProperty('trickleData')">*</span>
          </p>
          <p
            class="subtitle has-text-weight-light is-6 is-size-7-mobile"
            style="margin-bottom:0px"
          >
            Avg flow rate <strong>{{ parseFloat(overviewObject.avg_flow_rate).toFixed(2) }}</strong> l/min
          </p>
        </div>
      </div>

      <div class="tile is-parent">
        <div
          class="tile is-child v-centre"
          style="float:right; padding-right:20px"
        >
          <div class="field has-addons">
            <p
              v-if="$mq == 'sm'"
              class="control"
            >
              <b-button
                icon-left="edit"
                :class="overviewObject.note.length > 0 ? 'has-text-primary': ''"
                @click="toggleNoteView"
              />
            </p>
            
            <p class="control">
              <a
                v-if="activeButtonType == 'view'"
                type="submit"
                :disabled="enabled || activeObj.ID==overviewObject.ID"
                class="button is-success"
           
                :loading="dataLoading && activeObj.ID==overviewObject.ID"
                @click="$emit('get-inst-readings', overviewObject)"
              >
                view
                
              </a>
            </p>
          </div>

          <!-- <b-button
            v-if="activeButtonType == 'view'"
            type="submit"
            :disabled="enabled || activeObj.ID==overviewObject.ID"
            class="button is-success"
            :class="$mq=='lg' ? '' : 'is-medium'"
            :loading="dataLoading && activeObj.ID==overviewObject.ID"
            @click="$emit('get-inst-readings', overviewObject)"
          >
            view
          </b-button> -->



          <!-- <b-button 
            
          >
            view
          </b-button>
          <a
            v-if="activeButtonType == 'delete'"
            class="button is-danger"
            :class="$mq=='lg' ? '' : 'is-small'"
            style="float:right"
            @click="$emit('delete-record', overviewObject)"
          >
            <b-icon
              class="is-small"
              icon="trash-alt"
            />
          </a>-->
        </div>
      </div>
    </div>
    <div
      v-if="showNote"
      class="is-white"
      :closable="false"
      style="margin-bottom:20px"
    >
      <div
        v-if="overviewObject.note.length > 0"
        class="tile is-ancestor is-flex-mobile"
      >
        <div
          class="tile is-parent is-9"
          style="margin-left:5px"
        >
          <p
            class="subtitle is-6 is-size-7-mobile" 
          >
            {{ overviewObject.note }}
          </p>
        </div>
        <div
          class="tile is-parent is-3"
        >
          <b-button 
            size="is-small" 
            class="is-light is-pulled-right"
            style="float:right; margin-right:20px"
            @click="editingNote =!editingNote"
          >
            {{ editingNote ? 'done':'edit' }}
          </b-button>
        </div>
      </div>
    
      
      <div v-if="editingNote">
        <b-field
          label="Note"
        >
          <b-input
            v-model="editNoteText"
            maxlength="200"
            type="textarea"
          />
        </b-field>

        <div class="field is-grouped">
          <p class="control">
            <a
              class="button is-small is-success"
              :loading="processingNoteUpdate"
              :disabled="processingNoteUpdate"
              @click="updateNote"
            >
              update
            </a>
          </p>
          <p class="control">
            <a
              class="button is-small is-light"
              @click="editingNote = false"
            >
              cancel
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'buefy/dist/components/toast';
import config from '@/config.json'

export default {
  name: "MonthViewTableItem",
  props: {
    overviewObject: Object,
    enabled: Boolean,
    activeObj: Object,
    dataLoading: Boolean
  },
  data() {
    return {
      activeButtonType: "view",
      showNote: false,
      editingNote: false,
      editNoteText: "",
      processingNoteUpdate: false
    };
  },
  computed: {
    showNoteText() {
      return this.showNote ? "hide" : "show note";
    }
  },
  methods: {
    toggleNoteView(){
      if(this.showNote){
        this.showNote = false;
        return
      }
      this.showNote = true
      if(this.overviewObject.note.length == 0){
        this.editingNote = true
      }

    },
    updateNote(){
      this.processingNoteUpdate = true
      axios.put(config.apiBaseURL+`api/edit_note/`, {note: this.editNoteText, id: this.overviewObject.ID}).then(res => {
          // this.showNote = false
          this.editingNote = false
          this.overviewObject.note = this.editNoteText
          this.editNoteText = ""
          Toast.open({
              message: 'Note updated.',
              type: 'is-success'
          })
          
        }).catch(err => {
          Toast.open({
              message: 'Oops, could not update note. See console.',
              type: 'is-error'
          })
          console.log(err)
        }).finally(this.processingNoteUpdate = false)
    }
  }
};
</script>

<style scoped>
.level {
  padding-top: 10px;
  padding-bottom: 10px;
}

.v-centre {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
