<script>
    import Chip from './Chip.svelte';
    import { eventStore, filterStore } from '../../stores';

    const { categories } = eventStore;
    let filter;

    filterStore.subscribe(value => {
        filter = value;
    });

    const handleFilterChange = (categoryId) => {
        if (filter === categoryId) {
            filterStore.set('');
        } else {
            filterStore.set(categoryId);
        }
    }
</script>

<style>
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 8px;
        margin: 0;
    }

    li {
        margin: 8px;
    }
</style>

<ul>
    {#each $categories as category (category.id)}
        <li>
            <Chip label={category.name} onClick={() => handleFilterChange(category.id)} selected={filter === category.id} />
        </li>
    {/each}
</ul>
