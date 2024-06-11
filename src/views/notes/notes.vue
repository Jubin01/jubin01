<template>
  <div class="notes">
    <h3>Notes</h3>
    <div v-for="(value, index) in notes" :key="index">
      <h6>{{ value.date }}, source: <a :href=value.source target="_blank">
          <img :alt=value.source :src=value.icon height="16" :title=value.source /></a></h6>
      <h4>{{ value.note }} </h4>
      <br />
    </div>

  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import notes from "../../../public/assets/notes.json";
//import notes from "../../../public/assets/notes.json";
export default class Note extends Vue { 
  
  notes: any = [];

  mounted() {
    this.notes = notes.notes;
  }
  
}
</script>