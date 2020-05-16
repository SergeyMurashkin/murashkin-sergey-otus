<script >
    import { onMount } from "svelte";
    import Chart from "chart.js";
    import { expenseTypes } from './Expense.svelte';
    import { expenses } from './Store.js';

    onMount(async () => {
        renderChart();
    });

    $: totalExpenseType = $expenses.reduce( (result, expense) => {
        result[expense.type] = (result[expense.type] || 0)*1 + (expense.amount || 0)*1;
        return result;
    } , {})

    export function renderChart() {

        let ctx = document.getElementById("myExpenseChart").getContext("2d");
        let chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: expenseTypes.sort(),
            datasets: [
            {
                label: "Expenses amount",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: expenseTypes.sort().reduce( (result, expenseType) => {
                    result.push(totalExpenseType[expenseType] || 0);
                    return result;
                } , [])
            }
            ]
        },
        options: {}
        });
    }
    
</script>


<canvas id="myExpenseChart"></canvas>
<button on:click={renderChart}>ReLoad</button>
