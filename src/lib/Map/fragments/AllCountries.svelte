<script>
  import GeoJson from "./GeoJSON.svelte";

  export let geometries;
</script>

{#if geometries}
  {#each geometries as country}
    <GeoJson data={country} opacity={0.1} />
  {/each}
{/if}
