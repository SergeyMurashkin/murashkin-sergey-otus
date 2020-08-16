<template>
    <v-app id="game">
        <router-link to="/menu">
            <v-btn @click="stopTimer">&times; отмена</v-btn>
        </router-link>
        <div>
           {{timer}}
        </div>
        <Calculator />
    </v-app>
</template>

<script>
import Calculator from '@/components/Calculator'

export default {
    data() {
        return {
            timer: 0,
            intervalId: 0
        }
    },

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
            default: 1
        },
        complexity: {
            type: Number,
            default: 1
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
    },

    mounted() {
        this.timer = this.duration*60
        this.startGame();
    },

    methods: {
        startGame: function() {
            console.log('game start')
            this.startTimer();

        },
        startTimer: function() {
            console.log('timer start')
            this.intervalId = setInterval(()=>{
                        this.timer--;
                        console.log(this.timer);  
                    },1000)
        },
        stopTimer: function() {
            clearInterval(this.intervalId)
            console.log('stop timer')
        }
    }

}

</script>
