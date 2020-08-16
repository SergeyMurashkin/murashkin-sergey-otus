<template>
    <v-list-item>
        <input type="checkbox"
            :id=arithmeticOperationType.id 
            :name=arithmeticOperationType.id 
            :value=arithmeticOperationType.value
            v-on:change="$emit('change-value', arithmeticOperationType.id)"
            class="arithmetic-operation-type"
        />
        <label for="sum">{{arithmeticOperationType.discription}}</label>  
    </v-list-item>
</template>

<script>
export default {
    props: {
        arithmeticOperationType: {
            type: Object
        }
    }
}
</script>

<style scoped>
    .arithmetic-operation-type{
        margin: 0 10px 0 0;
    }
</style>