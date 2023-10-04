<template lang="">
    <div class="CheckArea" style="display: flex;">
        <div class="d-flex flex-column w-100">
            <label class=" text-white btn btn-primary text-center m-1" for="Guid">Guid
            </label>
            <img class="w-75" src="../../assets/img/step1.png" alt="">
            <img class="w-50" src="../../assets/img/step2.png" alt="">
        </div>
        <div class="w-25"></div>
        <div class="d-flex flex-column w-100">
            <label class="text-white btn btn-primary text-center mb-2" for="InputDesign">Nhập design</label>

            <textarea @input="renderData" class="TrungLH-textarea w-100 h-100 rounded p-4" name="" id="InputDesign" cols="30" rows="40"></textarea>

        </div>
        <div class="w-25"></div>
        <div class="d-flex flex-column w-100">
            <label class="text-white btn btn-primary text-center mb-2" for="OutputText">ListText</label>
            <textarea class="TrungLH-textarea w-100 h-100 rounded p-4" name="" id="OutputText" cols="30" rows="40">{{this.OutputText}}</textarea>

        </div>
    </div>
</template>
<script>
import * as LHTrung_func from "../../assets/LHTrung_package/javascript/function";
import $ from "jquery";
export default{
    data(){
        return{
            InputDesign:'',
            OutputText:'',
            dict:[[]]
        }
    },
    methods:{
        renderData: function(){
            // Loại bỏ các ký tự đặc biệt ',', '(', ')', '<', '>'
            let cleanedData = InputDesign.value.trim();
            
            // Chuyển đoạn dữ liệu thành một mảng bằng cách tách dựa trên dấu '\n'
            let dataArray = cleanedData.split('\n');

            for (let i = 0; i < dataArray.length; i++) {
                dataArray[i] = dataArray[i].trim()
                dataArray[i] = dataArray[i].replace(/[\(\)\<\>,]/g, '');
                InputDesign += dataArray[i] + '\n';

                ListTextMax[i] = dataArray[i].split(' ')[0];
                ListTextMax1[i] = (dataArray[i].split(' ')[1] + '').replace(/\D/g, '');

                dataArray[i] = dataArray[i].split(' ')[1] + '';
                dataArray[i] = dataArray[i].replace(/\D/g, '');

                newArr += dataArray[i] + "\n";
            }

            OutputText.value= dataArray.length;
        }
    }
}
// $(document).ready(function () {
//     init();
//     $("#InputDesign").on('input', function () {
        

//         $("#InputDesign").val(cleanedData);
//         let newArr = [];
//         let ListTextMax = [];
//         let ListTextMax1 = [];
//         let InputDesign = '';
//         for (let i = 0; i < dataArray.length; i++) {
//             dataArray[i] = dataArray[i].trim()
//             dataArray[i] = dataArray[i].replace(/[\(\)\<\>,]/g, '');
//             InputDesign += dataArray[i] + '\n';

//             ListTextMax[i] = dataArray[i].split(' ')[0];
//             ListTextMax1[i] = (dataArray[i].split(' ')[1] + '').replace(/\D/g, '');

//             dataArray[i] = dataArray[i].split(' ')[1] + '';
//             dataArray[i] = dataArray[i].replace(/\D/g, '');

//             newArr += dataArray[i] + "\n";
//         }
//         $('#TextSL').val(newArr);
//         $('#Text_Length_Design').val(newArr);
//         $('#InputDesign').val(InputDesign);

//         let KqListMax = '';
//         for (let x = 0; x < ListTextMax1.length; x++) {
//             let DoDaiMax = ListTextMax1[x];
//             let text = ListTextMax[x];
//             console.log(text);
//             if (DoDaiMax != '') {
//                 let DoDaiBanDau = text.length;
//                 let MangCanLayMax = text.split("");
//                 let textMax = "";
//                 let dem = DoDaiMax;
//                 let demhaha = 0;
//                 for (let i = 0; dem > 0 && demhaha < DoDaiBanDau; i++) {

//                     if (LHTrung_func.isCharacterInAscii(MangCanLayMax[i])) {
//                         dem -= 1;
//                         demhaha++;
//                     }
//                     else {
//                         dem -= 2;
//                         demhaha += 2;
//                     }
//                     if (dem == 0) {
//                         textMax += MangCanLayMax[i];
//                         break;
//                     }
//                     if (dem < 0) {
//                         textMax += "0";
//                     }
//                     else {
//                         textMax += MangCanLayMax[i]
//                         if (i == DoDaiBanDau - 1) {
//                             i = -1;
//                         }
//                     }
//                 }
//                 KqListMax += ',\'' + textMax + '\'' + '\n';
//             }
//             else {
//                 KqListMax += ',\'' + Math.floor(Math.random() * 110) + '\'' + '\n';
//             }
//         }
//         $('#ListTextMax').val(KqListMax);
//     });

// });
// function init() {
//     $('#InputDesign').focus(function () {
//         $('#InputDesign').select();
//     });
//     $('#OutputText').focus(function () {
//         $('#OutputText').select();
//     });
// }
</script>