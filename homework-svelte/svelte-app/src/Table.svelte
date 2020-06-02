<script>
	import {expenses, remove} from './Store.js';
	import SvelteTable from "svelte-table"
	
  $: rows = $expenses;
	
  const columns = [
	{
    key: "id",
    title: "ID",
    value: v => v.id,
    sortable: true,
    filterOptions: rows => {
      // generate groupings of 0-10, 10-20 etc...
      let nums = {};
      rows.forEach(row => {
        let num = Math.floor(row.id / 10);
        if (nums[num] === undefined)
          nums[num] = { name: `${num * 10} to ${(num + 1) * 10}`, value: num };
      });
      // fix order
      nums = Object.entries(nums)
        .sort()
        .reduce((o, [k, v]) => ((o[k] = v), o), {});
      return Object.values(nums);
    },
    filterValue: v => Math.floor(v.id / 10),
    headerClass: "text-left"
  },
  {
    key: "type",
    title: "TYPE",
    value: v => v.type,
    sortable: true,
    filterOptions: rows => {
      // use first letter of type to generate filter
      let letrs = {};
      rows.forEach(row => {
        let letr = row.type.charAt(0);
        if (letrs[letr] === undefined)
          letrs[letr] = {
            name: `${letr.toUpperCase()}`,
            value: letr.toLowerCase()
          };
      });
      // fix order
      letrs = Object.entries(letrs)
        .sort()
        .reduce((o, [k, v]) => ((o[k] = v), o), {});
      return Object.values(letrs);
    },
    filterValue: v => v.type.charAt(0).toLowerCase()
  },
  {
    key: "amount",
    title: "AMOUNT",
    value: v => v.amount,
    sortable: true,
    headerClass: "text-left",
  
  },
  {
    key: "remove",
    title: "REMOVE",
    renderValue: v => `<button onclick="remove(123)">remove</button>` // capitalize
  }

    /** columns config (example below) */
  ];
	
</script>

 <SvelteTable columns="{columns}" rows="{rows}"></SvelteTable>
