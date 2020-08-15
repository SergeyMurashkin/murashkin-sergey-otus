<template>
    <div id="game">
        <button>
            <router-link to="/menu">&times; отмена</router-link>
        </button>
        <div>
           timer
        </div>
        <Calculator />
    </div>
</template>

<script>
import Calculator from '@/components/Calculator'

export default {
    props: {
        dayOfTraining: {
            type: Number,
            default: 1
        },
        lastQuantityСompletedTasks: {
            type: Number,
            default: 0
        },
        lastQuantityTasks: {
            type: Number,
            default: 0
        },
        overallAccuracy: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 0
        },
        complexity: {
            type: Number,
            default: 0
        },
        sum: {
            type: Boolean,
            default: false
        },
        diff: {
            type: Boolean,
            default: false
        },
        multi: {
            type: Boolean,
            default: false
        },
        div: {
            type: Boolean,
            default: false
        },
        expon: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Calculator
    }
}

</script>
