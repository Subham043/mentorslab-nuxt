<template>
    <div class="slider-nav-button">
        <div class="control">
            <button>
                <i class="el-icon-back"></i>
            </button>
            <button>
                <i class="el-icon-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderNavButtonComponent',
}
</script>

<style scoped>
.slider-nav-button{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    display: grid;
    place-items: center;
    pointer-events: none;
}
.slider-nav-button .control{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.slider-nav-button .control button{
    width: 45px;
    height: 45px;
    line-height: 45px;
    border-radius: 50%;
    font-size: 18px;
    background: #ffffff;
    color: #1b2336;
    box-shadow: 5px 4px 13px 0 rgb(46 63 99 / 15%);
    pointer-events: all;
}
.slider-nav-button .control button:hover{
    background: #0c96e2;
    color: #ffffff;
}
</style>