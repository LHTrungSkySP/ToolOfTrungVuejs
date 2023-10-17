
export function isCharacterInAscii(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 0 && charCode <= 255;
}
// check list data have how many char
export function CheckListData(TextKT) {
    let ND_KT = TextKT.trim();
    ND_KT = ND_KT.replace(/[\(\)\<\>,]/g, '');
    ND_KT = ND_KT.replace(/\'/g, '');

    let mang_ND_KQKT = ND_KT.split("\n");

    for (let i = 0; i < mang_ND_KQKT.length; i++) {
        let dem = 0;
        let mang_ki_tu_kt = mang_ND_KQKT[i].split("");
        dem = DemByte(mang_ki_tu_kt);
        mang_ND_KQKT[i] = dem + "\t" + mang_ND_KQKT[i] + "\n";
    }
    $('#TextKQKT').val(mang_ND_KQKT);
    $('#TextKT').val(ND_KT);
}

export function DemByte(mang_ki_tu_kt) {
    let dem = 0;
    for (let j = 0; j < mang_ki_tu_kt.length; j++) {
        if (isCharacterInAscii(mang_ki_tu_kt[j])) {
            dem += 1;
        }
        else {
            dem += 2;
        }
    }
    return dem;
};



// đưa data về dict
export function standarData(arr) {
    let dict = [];
    arr.forEach((item, index) => {
        // Loại bỏ các ký tự đặc biệt ',', '(', ')', '<', '>' trên mỗi phần tử của mảng
        arr[index] = arr[index].trim();
        arr[index] = arr[index].replace(/[\(\)\<\>,]/g, '');

        // đưa về dict
        let arrTemp = arr[index].split(" ");
        dict.push(arrTemp);
    });
    return dict;
}
function getRandomCharacter() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }
export function renderDataNormal(DoDaiMax, text) {
    let KqListMax = '';
    let DoDaiBanDau = text.length;
    let MangCanLayMax = text.split("");
    let textMax = "";
    let dem = DoDaiMax;
    let demhaha = 0;
    if(DoDaiMax==1){
        return getRandomCharacter();
    }
    for (let i = 0; dem > 0 && demhaha < DoDaiBanDau; i++) {

        if (isCharacterInAscii(MangCanLayMax[i])) {
            dem -= 1;
            demhaha++;
        }
        else {
            dem -= 2;
            demhaha += 1;
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
    KqListMax += textMax;
    return KqListMax;
};
export function renderDataMax(DoDaiMax, text) {
    let KqListMax = '';
    for (let x = 0; x < DoDaiMax; x++) {
        let DoDaiBanDau = text.length;
        let MangCanLayMax = text.split("");
        let textMax = "";
        let dem = DoDaiMax;
        for (let i = 0; dem > 0; i++) {
            if (isCharacterInAscii(MangCanLayMax[i])) {
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
        KqListMax=textMax;
    }
    return KqListMax;
};

