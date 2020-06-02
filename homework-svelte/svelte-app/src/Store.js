import { writable } from 'svelte/store';

export let nextFreeId = 1;

export const expenses = writable([]);

export const add = (expence) => {
	let exp = {
		id: nextFreeId,
		...expence
	}

	nextFreeId++;

	expenses.update(n => {
		n.push(exp)
		return n;
	});
}

export const remove = (expenceId) => {
	console.log("ID: " + expenceId)
	expenses.update(n => {
		return n.filter(i => i.id != expenceId);
	});
}
