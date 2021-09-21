<script>
    import Chip from './Chip.svelte';
    import { eventStore, filterStore } from '../../stores';

    const { categories, tracks } = eventStore;
    let isMobileFilterOpen = false;

    const setCategoryId = (categoryId) => {
        if ($filterStore.categoryId === categoryId) {
            filterStore.update(prevFilter => ({ ...prevFilter, categoryId: '' }));
        } else {
            filterStore.update(prevFilter => ({ ...prevFilter, categoryId }));
        }
    }

    const setTrackId = (trackId) => {
        if ($filterStore.trackId === trackId) {
            filterStore.update(prevFilter => ({ ...prevFilter, trackId: '' }));
        } else {
            filterStore.update(prevFilter => ({ ...prevFilter, trackId }));
        }
    }

    const toggleMobileFilter = () => isMobileFilterOpen = !isMobileFilterOpen;
</script>

<style>
    .filters {
        max-height: 0;
        overflow: hidden;
        transition: max-height 500ms ease-in-out;
        margin-bottom: 3em;
    }

    h2 {
        text-align: center;
    }

    .filters--open {
        max-height: 100vh;
    }

    .filter-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        margin: 0 1rem 2rem;
    }

    .filter {
        margin: .5rem;
    }

    .filter-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
    }

    @media only screen and (min-width: 768px) {
       .filters {
            max-height: 100vh;
        }

        .filter-toggle {
            display: none;
        }
    }
</style>

<div class="filter-toggle">
    <Chip label="Filtrer" on:click={toggleMobileFilter} />
</div>

<div class="filters {isMobileFilterOpen ? 'filters--open' : ''}">
    <h2>Tracks</h2>
    <ul class="filter-list">
        {#each $tracks as track (track.id)}
            <li class="filter">
                <Chip label="{track.name} ({track.room})" on:click={() => setTrackId(track.id)} selected={$filterStore.trackId === track.id} />
            </li>
        {/each}
    </ul>

    <h2>Catégories</h2>
    <ul class="filter-list">
        {#each $categories as category (category.id)}
            <li class="filter">
                <Chip label={category.name} on:click={() => setCategoryId(category.id)} selected={$filterStore.categoryId === category.id} />
            </li>
        {/each}
    </ul>
</div>
