<script setup>
import TheNavbar from './components/header/TheNavbar.vue'
import TheHeader from './components/header/TheHeader.vue'
import TheLayoutNormal from './components/layout/TheLayoutNormal.vue'
import TheLayoutMax from './components/layout/TheLayoutMax.vue'
import TheLayoutNoContent from './components/layout/TheLayoutNoContent.vue'
</script>

<template>
  <TheHeader></TheHeader>
  <TheNavbar @changeLayoutFunction="changeLayoutFunction"></TheNavbar>
  <div class="body p-2 h-100 flex-grow-1">
    <TheLayoutNormal v-if="listLayoutFunction.normal"></TheLayoutNormal>
    <TheLayoutMax v-if="listLayoutFunction.max"></TheLayoutMax>
    <TheLayoutNoContent v-if="listLayoutFunction.validate || listLayoutFunction.check"></TheLayoutNoContent>
  </div>
</template>
<script>
export default {
  data(){
    return{
      listLayoutFunction:{
        normal: true,
        max: false,
        validate: false,
        check: false
      }
    }
  },
  methods:{
    changeLayoutFunction: function(key){
      for (var i in this.listLayoutFunction) {
        if(i!=key){
          this.listLayoutFunction[i]=false;
        }
      }
      this.listLayoutFunction[key]=true;
    }
  }
}
</script>
<style scoped>
.body{
  background-color: #60cff3;
background-image: linear-gradient(135deg, #60cff3 0%, #80D0C7 100%);

}
</style>
