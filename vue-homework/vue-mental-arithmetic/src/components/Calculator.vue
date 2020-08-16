<template>
    <div id="calculator">
        <table>
            <td>
               <tr v-for="(button,index) in buttons"
                    v-bind:key="index">
                    <td v-for="(b,i) in button"
                        v-bind:key="i">
                        <v-btn v-if="b!==''"
                            @click="$emit('add',$event.target.value)"
                            :value=b color="orange" fab big class="calculator__operator">
                            {{b}}</v-btn>
                    </td>
                </tr> 
            </td>
            <td>
                <tr v-for="(operator,index) in operators"
                    v-bind:key="index">
                    <td v-for="(o,i) in operator"
                        v-bind:key="i">
                        <v-btn
                            @click="$emit('add',$event.target.value)"
                            :value=o color="grey" fab big class="calculator__operator">{{o}}</v-btn>
                    </td>
                </tr> 
            </td>
        </table>
    </div>
</template>

<script>

export default {
    data() { 
        return {
            buttons: [[1,2,3],[4,5,6],[7,8,9],['',0,'']],
            operators: ['<', '>', '?', '=']
        }
    }
}

</script>

<style scoped>
    .calculator__operator{
        transform-origin: center center;
        margin: 10px
    }
</style>