<template>
    <!-- Simple card -->
    <div class="card d-block">
        <img class="card-img-top" src="/images/gallery/landscape1.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title fw-600">{{title}}</h5>
            <p class="card-text text-gray-600">{{paragraph}}</p>
            <a href="javascript: void(0);" class="btn btn-primary-light">View</a>
        </div> <!-- end card-body-->
    </div> <!-- end card-->
</template>

<script>
export default {
    name: 'ContentCardComponent',
    props:{
        title:{
            type: String,
            default: ''
        },
        paragraph:{
            type: String,
            default: ''
        },
    }
}
</script>