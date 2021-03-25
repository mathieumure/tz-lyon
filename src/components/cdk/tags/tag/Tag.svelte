
<script>
    export let tag;
</script>

<style>
    .tag {
        color: var(--ssd-blue);
    }

    b {
        font-size: var(--text-size-s);
    }

    @media (max-width: 600px) {
        ul {
        justify-content: center;
        }

        b {
        text-align: center;
        font-size: var(--text-size-xs);
        }
    }
</style>

<b class="tag">#{tag}&nbsp;</b>