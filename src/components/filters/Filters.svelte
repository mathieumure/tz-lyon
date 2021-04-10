<script>
    import Chip from './Chip.svelte';
    import FilterIcon from './FilterIcon.svelte';
    import { eventStore, filterStore } from '../../stores';

    const { categories } = eventStore;
    let filter;
    let isMobileFilterOpen = false;

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

    const toggleMobileFilter = () => isMobileFilterOpen = !isMobileFilterOpen;
</script>

<style>
    .filter-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        margin: 8px 16px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 500ms ease-in-out;
    }

    .filter-list--open {
        max-height: 100vh;
    }

    .filter {
        margin: 8px;
    }

    .filter-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 16px;
    }

    .filter-icon-wrapper {
        margin-left: 48px;
    }

    @media only screen and (min-width: 768px) {
       .filter-list {
            max-height: 100vh;
        }

        .filter-toggle {
            display: none;
        }
    }
</style>

<div class="filter-toggle">
    <Chip label="Filtrer" onClick={toggleMobileFilter} />
    <div class="filter-icon-wrapper" on:click={toggleMobileFilter}>
        <FilterIcon />
    </div>
</div>
<ul class="filter-list {isMobileFilterOpen ? 'filter-list--open' : ''}">
    {#each $categories as category (category.id)}
        <li class="filter">
            <Chip label={category.name} onClick={() => handleFilterChange(category.id)} selected={filter === category.id} />
        </li>
    {/each}
</ul>
