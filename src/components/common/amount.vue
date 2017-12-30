<template>
    <div class="amount">
        <div @click="sub" class="sub">-</div><div class="val">{{ amount }}</div><div @click="add" class="add">+</div>
    </div>
</template>

<script>
    import communication from '../config/communication.js'
    export default {
        data(){
            return {
                amount: 1
            }
        },
        props: ['max','count','index'],
        created(){
            if(this.count) {
                this.amount = this.count
            }
        },
        methods: {
            sub(){
                if(this.amount <= 1) {
                    return;
                }
                this.amount --
                this.$emit('valchange',this.amount)
                if(this.count) {
                    communication.$emit('changeCart',{type:'sub',index:this.index})
                }               
            },
            add(){
                if(this.amount >= this.max) {
                    return;
                }
                this.amount ++;
                this.$emit('valchange',this.amount)
                if(this.count) {
                    communication.$emit('changeCart',{type:'add',index:this.index})
                }
                
            },  
        }
    }
</script>  

<style scoped>
    .amount {
        display: inline-block;
        text-align: center;
    }
    .amount div {
        display: inline-block;
        width: 30px;
        height: 25px;
        line-height: 25px;
        border: 1px solid #ccc;
    }
    .amount .val {
        border-left: 0px;
        border-right: 0px;
    }
</style>

