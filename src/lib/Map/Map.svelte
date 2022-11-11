<script>
  import { onMount } from "svelte";
  import { LeafletMap } from "svelte-leafletjs";
  import { fetchGADM0Geometries } from "../../api";
  import Loader from "../Loader/Loader.svelte";
  import AllCountries from "./fragments/AllCountries.svelte";
  import Countries from "./fragments/Countries.svelte";

  let map;

  const mapOptions = {
    center: { lat: 49, lng: 12 },
    bounds: [
      [-90, -180],
      [90, 180],
    ],
    zoom: 4,
    attributionControl: false,
    zoomControl: false,
  };

  let geometries;

  onMount(() =>
    fetchGADM0Geometries().then(({ features }) => (geometries = features))
  );
</script>

{#if !geometries}
  <div class="wrapper">
    <Loader />
  </div>
{/if}

<LeafletMap bind:this={map} options={mapOptions}>
  <AllCountries {geometries} />
  <Countries {geometries} />
</LeafletMap>

<style>
  .wrapper {
    position: absolute;
    inset: 0;
    background-color: var(--overlay-bg);
    z-index: 999;
    display: flex;
  }
</style>
