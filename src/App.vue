<template>
  <div class="v-pdf-template">
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import {VarPdf} from '../packages'

import { Options } from '../packages/types';
const op:Options[]= [
  {
    pageWidth: 210,
    pageHeight: 297,
    element:[
      {
        type:"text",
        style:{},
        props:{}
      }
    ]
  }
]
const varPdf =new VarPdf(op)
const pdfPages = varPdf.createTemplates()


onMounted(()=>{
  for (let i = 0; i < pdfPages.length; i++) {
    const element = pdfPages[i];
    document.querySelector('.v-pdf-template')?.appendChild(element)
  }
})

</script>
<style scoped>

</style>
