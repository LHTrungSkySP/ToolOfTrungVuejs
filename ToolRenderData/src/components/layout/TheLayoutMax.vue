<template lang="">
    <div class="TrungLH-flex">
        <div>
            <div>
                
                <label class="TrungLH-label" for="DoDaiMax">Nhập độ dài max</label>
                <input class="TrungLH-input" type="number" name="" id="DoDaiMax">
            </div>
            <div>
                <label class="TrungLH-label" for="NoiDung">Nhập nội dung</label>
                <input class="TrungLH-input" type="text" name="" id="NoiDung">
            </div>
            <div style="display: flex; margin-left: 300px;">
                <button class="TrungLH-btn" id="CreateMaxText">Render + Copy</button>
    
            </div>
        </div>
        <div>
            <label for="NoiDung">Text Max</label>
            <br>
            <textarea name="" id="TextMax" cols="200" rows="10">
    
            </textarea>
        </div>
    </div>
    <div class="CheckArea" style="display: flex;">
        <div>
            <label for="TextKT">Nhập dữ liệu cần kiểm tra</label>
            <textarea name="" id="TextKT" cols="50" rows="50" >
                
            </textarea>
        </div>
        <div>
            <label for="Text_Length_Design">Design</label>
            <textarea name="" id="Text_Length_Design" cols="5" rows="50" >
                
            </textarea>
        </div>
        <div>
            <label for="TextKQKT">Độ dài kt được</label>
            <textarea name="" id="TextKQKT" cols="50" rows="50" >
                
            </textarea>

        </div>
        <div>
            <label for="TextKQKT">Nhập design</label>

            <textarea name="" id="TextDC" cols="70" rows="50">
                
            </textarea>

        </div>
        <div>
            <label for="ListTextMax">ListTextMax</label>
            <textarea name="" id="ListTextMax" cols="70" rows="50">
    
            </textarea>

        </div>

    </div>
</template>
<script>
import * as LHTrung_func from "../../assets/LHTrung_package/javascript/function";
import $ from "jquery";
$(document).ready(function () {
    init();
    $('#CreateMaxText').on('click', function () {
        debugger
        LHTrung_func.CreateMaxText();
    });
    $('#KTBtn').on('click', function () {
        LHTrung_func.CheckListData($('#TextKT').val());
    });
    $('#NoiDung').on('input', function () {
        let mang_ki_tu_kt = $('#NoiDung').val();
        $('#TextMax').val(LHTrung_func.DemByte(mang_ki_tu_kt));
    });
    // $('#TextKQKT').on('input',function(){
    //     let mang_ki_tu_kt = $('#TextKQKT').val();
    //     mang_ki_tu_kt.match(/[a-zA-Z]+/g);

    // });
    $('#TextKT').on('input', function () {
        LHTrung_func.CheckListData($('#TextKT').val());
    });

    $("#TextDC").on('input', function () {
        // Loại bỏ các ký tự đặc biệt ',', '(', ')', '<', '>'
        let cleanedData = $("#TextDC").val().trim();

        $("#TextDC").val(cleanedData);
        // Chuyển đoạn dữ liệu thành một mảng bằng cách tách dựa trên dấu ','
        let dataArray = cleanedData.split('\n');
        let newArr = [];
        let ListTextMax = [];
        let ListTextMax1 = [];
        let TextDC = '';
        for (let i = 0; i < dataArray.length; i++) {
            dataArray[i] = dataArray[i].trim()
            dataArray[i] = dataArray[i].replace(/[\(\)\<\>,]/g, '');
            TextDC += dataArray[i] + '\n';

            ListTextMax[i] = dataArray[i].split(' ')[0];
            ListTextMax1[i] = (dataArray[i].split(' ')[1] + '').replace(/\D/g, '');

            dataArray[i] = dataArray[i].split(' ')[1] + '';
            dataArray[i] = dataArray[i].replace(/\D/g, '');

            newArr += dataArray[i] + "\n";
        }
        $('#TextSL').val(newArr);
        $('#Text_Length_Design').val(newArr);
        $('#TextDC').val(TextDC);

        let KqListMax = '';
        for (let x = 0; x < ListTextMax1.length; x++) {
            let DoDaiMax = ListTextMax1[x];
            let text = ListTextMax[x];
            console.log(text);
            if (DoDaiMax != '') {
                let DoDaiBanDau = text.length;
                let MangCanLayMax = text.split("");
                let textMax = "";
                let dem = DoDaiMax;
                for (let i = 0; dem > 0; i++) {
                    if (LHTrung_func.isCharacterInAscii(MangCanLayMax[i])) {
                        dem -= 1;
                    }
                    else {
                        dem -= 2;
                    }
                    if (dem == 0) {
                        textMax += MangCanLayMax[i];
                        break;
                    }
                    if (dem < 0) {
                        textMax += "0";
                    }
                    else {
                        textMax += MangCanLayMax[i]
                        if (i == DoDaiBanDau - 1) {
                            i = -1;
                        }
                    }
                }
                KqListMax += ',\'' + textMax + '\'' + '\n';
            }
            else {
                KqListMax += ',\'' + Math.floor(Math.random() * 110) + '\'' + '\n';
            }
        }
        $('#ListTextMax').val(KqListMax);
    });

});
function init() {
    $('#DoDaiMax').focus(function () {
        $('#DoDaiMax').select();
    });
    $('#NoiDung').focus(function () {
        $('#NoiDung').select();
    });
}
</script>