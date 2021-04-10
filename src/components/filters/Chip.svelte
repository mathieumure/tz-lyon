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
        padding: 0 16px;
        cursor: pointer;
        color: white;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
        border: 0;
        background: none;
    }

    .chip span {
        position: relative;
        z-index: 2;
    }

    .chip:before, .chip:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }

    .chip:before {
        background: var(--z-grey);
    }

    .chip:after {
        opacity: 0;
        background: #ee2238;
        background: linear-gradient(66deg, #ee2238 0%, #ee2238 50%, #4610df 100%);
        transition: opacity 300ms ease-in-out;
    }

    .chip:hover:after, .chip--selected:after {
        opacity: 1;
    }
</style>

<button class="chip {selected ? 'chip--selected' : ''}" role="button" on:click={handleClick}>
    <span>{label}</span>
</button>
