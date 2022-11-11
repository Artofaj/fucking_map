<script>
  import Map from "./lib/Map/Map.svelte";
</script>

<div class={`map`}>
  <Map />
</div>

<style>
  .map {
    width: 100vw;
    height: 100vh;
    inset: 0;
    overflow: hidden;
    transition: transform 200ms linear;
  }
</style>
