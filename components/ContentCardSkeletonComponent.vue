<template>
    <!-- Simple card -->
    <el-skeleton  class="card d-block" animated :throttle="500">
        <template slot="template">
            <el-skeleton-item variant="rect" class="card-img-top" style="height: 240px;" />
            <div class="card-body">
                <el-skeleton-item variant="h1" style="width: 30%;" />
                <el-skeleton-item variant="p" />
                <el-skeleton-item variant="p" />
                <el-skeleton-item variant="button" style="width: 30%;" />
            </div>
        </template>
  </el-skeleton>
</template>

<script>
export default {
    name: 'ContentCardSkeletonComponent',
}
</script>