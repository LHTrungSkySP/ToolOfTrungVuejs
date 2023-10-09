<template lang="">
    <div class="CheckArea" style="display: flex;">
        <!-- <div class="d-flex flex-column w-100">
            <label class=" text-white btn btn-primary text-center m-1" for="Guid">Guid
            </label>
            <img class="w-75" src="../../assets/img/step1.png" alt="">
            <img class="w-50" src="../../assets/img/step2.png" alt="">
        </div> -->
        
        <div class="d-flex flex-column w-100">
            <label class="text-white btn btn-primary text-center mb-2" for="InputDesign">Nhập design</label>

            <textarea @input="renderData" class="TrungLH-textarea w-100 h-100 rounded p-4" name="" id="InputDesign" cols="30" rows="40">{{this.InputDesign}}</textarea>

        </div>
        <div class="w-25"></div>
        <div class="d-flex flex-column w-100">
            <button @click="copyValue('OutputText')" class="text-white btn btn-primary text-center mb-2">ListText</button>
            <textarea class="TrungLH-textarea w-100 h-100 rounded p-4" name="" id="OutputText" cols="30" rows="40">{{this.OutputText}}</textarea>
        </div>
        <div class="w-25"></div>
        <div class="d-flex flex-column w-100">
            <button @click="copyValue('OutputTextMax')" class="text-white btn btn-primary text-center mb-2">ListTextMax</button>
            <textarea class="TrungLH-textarea w-100 h-100 rounded p-4" name="" id="OutputTextMax" cols="30" rows="40">{{this.OutputTextMax}}</textarea>
        </div>
    </div>
</template>
<script>
import * as LHTrung_func from "../../assets/LHTrung_package/javascript/function";
import $ from "jquery";
export default{
    data(){
        return{
            InputDesign:"",
            OutputText:'',
            OutputTextMax:'',
            dict:[]
        }
    },
    methods:{
        renderData: function(){
            // đưa về mảng
            let arr =InputDesign.value.split("\n");
            this.dict=LHTrung_func.standarData(arr);
            
            let listTextNormal="(";
            let listTextMax="(";
            this.dict.forEach((item,index)=>
            {
                if(this.dict[index][0].indexOf("SYS")==-1){
                    let lastChar = "";
                    if(index!=this.dict.length-1){
                        lastChar=",\n";
                    }
                    else{
                        lastChar="";
                    }
                    if(this.dict[index][0]=="拠点コード"){
                        listTextNormal+="'9993273'"+lastChar;
                        listTextMax+="'9993273'"+lastChar;
                    }
                    else if(this.dict[index][1].indexOf("int")!=-1){
                        listTextNormal+="'"+Math.floor(Math.random() * 110)+"'"+lastChar;
                        listTextMax+="'"+Math.floor(Math.random() * 110)+"'"+lastChar;
                    }
                    else if(this.dict[index][1].indexOf("varchar")!=-1){
                        listTextNormal+="'"+LHTrung_func.renderDataNormal(this.dict[index][1].replace("varchar",""),this.dict[index][0])+"'"+lastChar;
                        listTextMax+="'"+LHTrung_func.renderDataMax(this.dict[index][1].replace("varchar",""),this.dict[index][0])+"'"+lastChar;
                    }
                    else{
                        listTextNormal+="'"+"____________________"+"'"+lastChar;
                        listTextMax+="'"+"________________"+"'"+lastChar;
                    }
                }
            });  
            let now = new Date().toLocaleString();
            let tam="'"+now+"',\n'CxcWmsBatch',\n'DEVTRUNGLH',\n'xxx',\n'xxx',\n'xxx',\n'"+now+"',\n'CxcWmsBatch',\n'DEVTRUNGLH',\n'xxx',\n'xxx',\n'xxx')"
            this.OutputText=listTextNormal+tam;
            this.OutputTextMax=listTextMax+tam;
        },
        copyValue: function(id){
            $("#"+id).select();
            document.execCommand("copy");
        }

    }
}
</script>
