<template>
    <li>
        <p>
            <input type="checkbox"
                :id=arithmeticOperationType.id 
                :name=arithmeticOperationType.id 
                :value=arithmeticOperationType.value
                v-on:change="$emit('change-value', arithmeticOperationType.id)"
            />
            <label for="sum">{{arithmeticOperationType.discription}}</label>
        </p>      
    </li>
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