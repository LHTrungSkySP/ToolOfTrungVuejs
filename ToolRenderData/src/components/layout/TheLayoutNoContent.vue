<template lang="">
    <div>
        <button @click="GetComputerName()">asdasd</button>
    </div>
</template>
<script>
export default {
    methods:{
        GetComputerName: function () {
            const computerName = navigator.userAgent;
console.log("Tên máy tính:", computerName);

    }
    }
}
</script>
<style lang="">
    
</style>