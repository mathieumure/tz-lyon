<style>
    .talk-modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, .5);
    }

    .talk-wrapper {
        width: 800px;
        max-width: 80%;
        max-height: 80%;
        overflow: auto;
        padding-top: 45px;
    }
</style>

<script>
    import Talk from '../talks/talk/Talk.svelte'
    import { eventStore, selectedTalkStore } from "../../stores";

    const { talks } = eventStore;
    const selectedTalk = $talks.find(talk => talk.id === $selectedTalkStore);
    const { abstract, categories, formats, id, language, level, speakers, title } = selectedTalk;

    const handleBackdropClick = () => selectedTalkStore.set('');
</script>

<div class="talk-modal">
    <div class="backdrop" on:click={handleBackdropClick}></div>
    <div class="talk-wrapper">
        <Talk
            hideDetailsButton
            isShortAbstract={false}
            {abstract}
            {categories}
            {formats}
            {id}
            {language}
            {level}
            {speakers}
            {title}
        />
    </div>
</div>
