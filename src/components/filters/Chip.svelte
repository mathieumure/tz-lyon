<script>
    export let label, selected;
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
        border: none;
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
        background: var(--red-znk);
        background: linear-gradient(66deg, #ee2238 0%, #ee2238 50%, #4610df 100%);
        transition: opacity 200ms ease-in-out;
    }

    .chip:hover:after {
        opacity: .7;
    }

    .chip--selected:after {
        opacity: 1 !important;
    }

    .chip:focus {
        outline: none;
        box-shadow: 0 0 0 2px white;
    }
</style>

<button class="chip {selected ? 'chip--selected' : ''}" role="button" on:click>
    <span>{label}</span>
</button>
