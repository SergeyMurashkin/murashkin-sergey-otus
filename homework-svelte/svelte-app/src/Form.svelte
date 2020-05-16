<script>
	import { expenseTypes } from './Expense.svelte';
	import { add } from './Store.js';
	
	let date;
	let type = 'Health';
	let amount;
	
	const addExpense = () => {
	
		const exp = {
			date,
			type,
			amount
		}

		add(exp);
	}
	
</script>

<form name="expenses">
	<label for="date">Date:</label>
	<input type="date" id="date" name="date" bind:value={date}>
	
	<label for="type">Type:</label>
	<select id="type" bind:value={type}>
		{#each expenseTypes as type}
			<option value={type}>{type}</option>
        {/each}
	</select>
	
	<label for="amount">Amount:</label>
	<input type="text" id="amount" name="amount" bind:value={amount}>
</form>

<button on:click={addExpense}>Add expense</button>