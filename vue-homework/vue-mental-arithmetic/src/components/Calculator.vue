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
                            type="button" :value=b class="white--text v-btn v-btn--rounded theme--light elevation-8 v-size--small deep-purple accent-4">{{b}}</v-btn>
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
                            type="button" :value=o class="calculator__operator">{{o}}</v-btn>
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

<style>

</style>