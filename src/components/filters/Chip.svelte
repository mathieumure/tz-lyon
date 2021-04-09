<script>
    export let label, selected, onClick;

    const handleClick = () => {
        onClick();
    };
</script>

<style>
    .chip {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.23);
        padding: 0 16px;
        cursor: pointer;
        color: white;
        transition: background-color 300ms ease-in-out;
    }

    .chip:hover {
        background-color: rgba(255, 255, 255, 0.08);
    }

    .chip--selected, .chip--selected:hover {
        background-color: #616161;
    }
</style>

<div class="chip {selected ? 'chip--selected' : ''}" role="button" on:click={handleClick}>
    {label}
</div>
