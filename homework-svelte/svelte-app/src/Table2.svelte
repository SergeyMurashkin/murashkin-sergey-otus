<script>
	import {expenses, remove} from './Store.js';
    
    $: rows = $expenses;

    const columns = [
        'Date',
        'Type',
        'Amount',
        'Remove'
    ]
    
</script>

<table>
    <tr>
        {#each columns as column}
            <th>{column}</th>
        {/each}
    </tr>
    {#each rows as row}
    <tr>
        <td>{row.date}</td>
        <td>{row.type}</td>
        <td>{row.amount}</td>
        <td><button on:click={remove(row.id)}>remove</button></td>
    </tr>    
    {/each}
</table>
