<template>
    <div class="text-center mt-5">
        <img src="/images/no-data.png" alt="" class="no-data-img">
        <h3>No data available</h3>
    </div>
</template>

<script>
export default {
    name: 'NoUserDataComponent',
}
</script>

<style scoped>
.no-data-img{
    width: 400px;
    object-fit: contain;
}
</style>
