<style>
    .talk-lang {
        width: 1.5rem;
        height: 1.5rem;
        text-transform: uppercase;
        font-weight: bold;
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1px;
        background-clip: content-box;
        box-sizing: border-box;
        font-size: .625rem;
    }

    .talk-lang-fr {
        background-color: var(--z-blue);
        border-color: var(--z-red);
    }

    .talk-lang-en {
        background-color: var(--z-red);
        border-color: var(--z-blue);
    }
</style>

<script>
    export let lang, title;
</script>


<span class="talk-lang talk-lang-{lang}" {title}>
{lang}
</span>