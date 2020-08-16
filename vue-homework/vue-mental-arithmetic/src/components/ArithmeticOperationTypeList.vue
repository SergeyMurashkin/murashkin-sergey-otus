<template>
    <v-list>
        <ArithmeticOperationTypeItem 
            v-for="arithmeticOperationType of arithmeticOperationTypes" 
            v-bind:arithmeticOperationType="arithmeticOperationType"
            v-bind:key="arithmeticOperationType.id"
            v-on:change-value="changeValue"
        />
    </v-list>
</template>

<script>
import ArithmeticOperationTypeItem from '@/components/ArithmeticOperationTypeItem' 

export default {
    props: ['arithmeticOperationTypes'],
    components: {
        ArithmeticOperationTypeItem
    },
    methods: {
        changeValue(id) {
            this.$emit('change-value', id)
        }
    }
}
</script>