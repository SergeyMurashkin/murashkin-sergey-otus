<template>
    <v-app id="menu">
                
        <h1>Привет!</h1>
        <p>Добро пожаловать на {{dayOfTraining}} тренировочный день</p>
        <p>Ваш последний результат - решено {{lastQuantityСompletedTasks}} из {{lastQuantityTasks}}.</p>
        <p>Общая точность {{overallAccuracy}}%</p>

        <div>
            <p>Настройки</p>
            
            <div class="duration">
                <div class="range-slider">
                    <input type="range" v-model="duration" @input='changeDuration' min="1" max="15" range="true"/>
                    <span class="range-value">{{duration}}</span>
                </div>
                <p id="durationValue">Длительность {{duration}} минут</p>
            </div>

            <div class="complexity">
                <input type="range" v-model="complexity" @input='changeСomplexity' range="true" min="1" max="10"/>
                <p id="complexityValue">Сложность {{complexity}}</p>
            </div>

            <ArithmeticOperationTypeList 
                v-bind:arithmeticOperationTypes="arithmeticOperationTypes"
                @change-value="changeValue" />

        </div>
        <router-link :to="{ name: 'game', params: 
            { 
                dayOfTraining,
                lastQuantityСompletedTasks,
                lastQuantityTasks,
                overallAccuracy,
                duration,
                complexity,
                sum: arithmeticOperationTypes.filter((type)=>type.id==='sum')[0].value,
                diff: arithmeticOperationTypes.filter((type)=>type.id==='diff')[0].value,
                multi: arithmeticOperationTypes.filter((type)=>type.id==='multi')[0].value,
                div: arithmeticOperationTypes.filter((type)=>type.id==='div')[0].value,
                expon: arithmeticOperationTypes.filter((type)=>type.id==='expon'[0]).value
            }
            }"><v-btn>Play!</v-btn>
        </router-link>
    </v-app>
</template>

<script>
    import ArithmeticOperationTypeList from '@/components/ArithmeticOperationTypeList'
    
    export default {
        data() { 
            return {
                dayOfTraining: 1,
                lastQuantityСompletedTasks: 0,
                lastQuantityTasks: 0,
                overallAccuracy: 100,
                duration: 1,
                complexity: 1,
                arithmeticOperationTypes: [
                    {
                        id: "sum",
                        type: "summation",
                        value: false,
                        discription: "Суммирование"
                    },
                    {
                        id: "diff",
                        type: "difference",
                        value: false,
                        discription: "Разность"
                    },
                    {
                        id: "multi",
                        type: "multiplication",
                        value: false,
                        discription: "Умножение"
                    },
                    {
                        id: "div",
                        type: "division",
                        value: false,
                        discription: "Деление"
                    },
                    {
                        id: "expon",
                        type: "exponentiation",
                        value: false,
                        discription: "Возведение в степень"
                    }
                ]
            }
        },
        mounted() {
            this.dayOfTraining = localStorage.dayOfTraining ? Number(localStorage.dayOfTraining) : 1;
            this.lastQuantityСompletedTasks = localStorage.lastQuantityСompletedTasks ? Number(localStorage.lastQuantityСompletedTasks) : 0;
            this.lastQuantityTasks = localStorage.lastQuantityTasks ? Number(localStorage.lastQuantityTasks) : 100;
            this.overallAccuracy = localStorage.overallAccuracy ? Number(localStorage.overallAccuracy) : 100;
        },
        methods: {
            changeСomplexity: function(e) {
                this.complexity = Number(e.currentTarget.value);
            },
            changeDuration: function(e) {
                this.duration = Number(e.currentTarget.value);
            },
            changeValue: function(id) {
                const type = this.arithmeticOperationTypes.filter((type)=>type.id===id)[0];
                type.value = !type.value;
            }
        },
        
        components: {
            ArithmeticOperationTypeList
        }
    }
</script>