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
            <input v-on:keyup.enter="changeKinoid($event.target.value)" type="text" name="" id="inputKinoID">
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
export default {
    data() {
        return {
            InputDesign: "",
            OutputText: '',
            OutputTextMax: '',
            dict: [],
            kinoId: "xxx",
        }
    },
    methods: {
        changeKinoid: function(_kinoid){
            this.OutputText = this.OutputText.split(this.kinoId).join(_kinoid);
            this.kinoId=_kinoid;
        },
        renderData: function () {
            // đưa về mảng
            let arr = InputDesign.value.split("\n");
            this.dict = LHTrung_func.standarData(arr);

            let listTextNormal = "(";
            let listTextMax = "(";
            this.dict.forEach((item, index) => {
                if (this.dict[index][0].indexOf("SYS") == -1) {
                    let lastChar = "";
                    if (index != this.dict.length - 1) {
                        lastChar = ",\n";
                    }
                    else {
                        lastChar = "";
                    }
                    if (this.dict[index][0] == "拠点コード") {
                        listTextNormal += "'9993273'" + lastChar;
                        listTextMax += "'9993273'" + lastChar;
                    }
                    else if (this.dict[index][1].indexOf("int") != -1) {
                        listTextNormal += "'" + Math.floor(Math.random() * 110) + "'" + lastChar;
                        listTextMax += "'" + Math.floor(Math.random() * 110) + "'" + lastChar;
                    }
<<<<<<< HEAD
                    else if (this.dict[index][1].indexOf("float") != -1) {
                        listTextNormal += "'" + (Math.random() * 110).toFixed(2) + "'" + lastChar;
                        listTextMax += "'" + (Math.random() * 110).toFixed(2) + "'" + lastChar;
=======
                    else if(this.dict[index][1].indexOf("float")!=-1){
                        listTextNormal+="'"+ (Math.random()* 110).toFixed(2)+"'"+lastChar;
                        listTextMax+="'"+(Math.random() * 110).toFixed(2)+"'"+lastChar;
                    }
                    else if(this.dict[index][1].indexOf("date")!=-1){
                        let year = new Date().getFullYear();
                        listTextNormal+="'"+ year+"'"+lastChar;
                        listTextMax+="'"+year+"'"+lastChar;
                    }
                    else if(this.dict[index][1].indexOf("varchar")!=-1){
                        listTextNormal+="'"+LHTrung_func.renderDataNormal(this.dict[index][1].replace("varchar",""),this.dict[index][0])+"'"+lastChar;
                        listTextMax+="'"+LHTrung_func.renderDataMax(this.dict[index][1].replace("varchar",""),this.dict[index][0])+"'"+lastChar;
>>>>>>> 5961bef8bffdd65a141f74dc6651a1fa70f74330
                    }
                    else if (this.dict[index][1].indexOf("date") != -1) {
                        let year = new Date().getFullYear();
                        listTextNormal += "'" + year + "'" + lastChar;
                        listTextMax += "'" + year + "'" + lastChar;
                    }
                    else if (this.dict[index][1].indexOf("varchar") != -1) {
                        listTextNormal += "'" + LHTrung_func.renderDataNormal(this.dict[index][1].replace("varchar", ""), this.dict[index][0]) + "'" + lastChar;
                        listTextMax += "'" + LHTrung_func.renderDataMax(this.dict[index][1].replace("varchar", ""), this.dict[index][0]) + "'" + lastChar;
                    }
                    else {
                        listTextNormal += "'" + "____________________" + "'" + lastChar;
                        listTextMax += "'" + "________________" + "'" + lastChar;
                    }
                }
<<<<<<< HEAD
            });
            // Lấy ngày, tháng và năm hiện tại từ đối tượng Date
            let currentDate = new Date();
            let year = currentDate.getFullYear();
            let month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0, nên cần +1 và định dạng 2 chữ số.
            let day = String(currentDate.getDate()).padStart(2, "0");

            // Xây dựng chuỗi với định dạng "yyyy-mm-dd"
            let formattedDate = `${year}-${month}-${day}`;

            let hours = String(currentDate.getHours()).padStart(2, "0"); // Lấy giờ và định dạng 2 chữ số.
            let minutes = String(currentDate.getMinutes()).padStart(2, "0"); // Lấy phút và định dạng 2 chữ số.
            let seconds = String(currentDate.getSeconds()).padStart(2, "0"); // Lấy giây và định dạng 2 chữ let currentTime = `${hours}:${minutes}:${seconds}`;

            let currentTime = `${hours}:${minutes}:${seconds}`;

            let tam = "'" + formattedDate + " " + currentTime + "',\n'CxcWmsBatch',\n'DEVTRUNGLH',\n'xxx',\n'xxx',\n'xxx',\n'" + formattedDate + " " + currentTime + "',\n'CxcWmsBatch',\n'DEVTRUNGLH',\n'xxx',\n'xxx',\n'xxx')"
            this.OutputText = listTextNormal + tam;
            this.OutputTextMax = listTextMax + tam;
=======
            });  
            let now = new Date().toLocaleString().replace("/", '-').replace("/", '-');
            let nowString=[];
            nowString= now.split(" ");


            let tam="'"+nowString[1]+" "+nowString[0]+"',\n'CxcWmsBatch',\n'DEVTRUNGLH',\n'xxx',\n'xxx',\n'xxx',\n'"+nowString[1]+" "+nowString[0]+"',\n'CxcWmsBatch',\n'DEVTRUNGLH',\n'xxx',\n'xxx',\n'xxx')"
            this.OutputText=listTextNormal+tam;
            this.OutputTextMax=listTextMax+tam;
>>>>>>> 5961bef8bffdd65a141f74dc6651a1fa70f74330
        },
        copyValue: function (id) {
            $("#" + id).select();
            document.execCommand("copy");
        }

    }
}
</script>
