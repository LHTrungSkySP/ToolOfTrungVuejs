<template>
    <div class="bg-info bg-gradient overflow-hidden slogan d-flex">
        <h3 class="text-move test w-fit">Đây là tool của Trung</h3>
        <h3 class="text-move test w-fit">Đây là tool của Trung</h3>
        <h3 class="text-move test w-fit">Đây là tool của Trung</h3>
        <h3 class="text-move test w-fit">Đây là tool của Trung</h3>
        <h3 class="text-move test w-fit">Đây là tool của Trung</h3>
        <h3 class="text-move test w-fit">Đây là tool của Trung</h3>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import * as img from "../../assets/js/img_move.js"
export default {
  name: "TheHeader",
  created() {
    // Dùng onMounted ở đây
    onMounted(() => {
       img.drag_img_left_to_right("text-move")
    });
    // Trả về bất kỳ dữ liệu nào bạn muốn truy cập trong template
    return {};
  }
}
</script>
<style scoped>
.slogan {
    padding: 10px;
    position: relative;
    height: 50px;
}
.text-move{
    position:absolute;
    display: inline-block;
    width: 350px;
    box-sizing:content-box;
}
@-webkit-keyframes my {
    0% {
        color: #F8CD0A;
    }

    50% {
        color: #fff;
    }

    100% {
        color: #F8CD0A;
    }
}

@-moz-keyframes my {
    0% {
        color: #F8CD0A;
    }

    50% {
        color: #fff;
    }

    100% {
        color: #F8CD0A;
    }
}

@-o-keyframes my {
    0% {
        color: #F8CD0A;
    }

    50% {
        color: #fff;
    }

    100% {
        color: #F8CD0A;
    }
}

@keyframes my {
    0% {
        color: #F8CD0A;
    }

    50% {
        color: #fff;
    }

    100% {
        color: #F8CD0A;
    }
}

.test {
    font-size: 24px;
    font-weight: bold;
    -webkit-animation: my 700ms infinite;
    -moz-animation: my 700ms infinite;
    -o-animation: my 700ms infinite;
    animation: my 700ms infinite;
}</style>