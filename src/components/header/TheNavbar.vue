<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid d-flex justify-content-center">
      <button @click="changeStatus('normal')" class="btn btn-secondary"
        :class="{ 'bg-danger': listStatus.normal }">Normal</button>

      <button @click="changeStatus('validate')" class="btn btn-secondary"
        :class="{ 'bg-danger': listStatus.validate }">Validate</button>

      <button @click="changeStatus('check')" class="btn btn-secondary"
        :class="{ 'bg-danger': listStatus.check }">Check</button>
    </div>
  </nav>
</template>
<style scoped>
.btn {
  margin: 2px;
}
nav{
  background-color: #47d1fd;
}
</style>
<script>
export default {
  data() {
    return {
      listStatus: {
        normal: true,
        validate: false,
        check: false
      }
    }
  },
  methods: {
    changeStatus: function (key) {
      for (var i in this.listStatus) {
        if(i!=key){
          this.listStatus[i]=false;
        }
      }
      this.listStatus[key]=true;
      this.$emit("changeLayoutFunction",key);
    }
  }

}
</script>