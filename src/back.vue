<template>
    <a @click='historyGo' class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
</template>

<script>
    export default {
        methods: {
            historyGo(){
                history.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>
