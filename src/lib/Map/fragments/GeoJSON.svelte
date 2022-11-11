<script>
  import { getContext, onDestroy, onMount } from "svelte";
  import { selectedCountry } from "../../../stores";
  import L from "leaflet";

  export let data;
  export let selected = true;
  export let opacity;
  export let clickable = false;

  const style = {
    color: "var(--data-color-positive)",
    weight: 1,
    fillOpacity: opacity,
  };

  const geojson = L.geoJSON(null, {
    style,
  });

  const { getMap } = getContext(L);

  const map = getMap();

  $: {
    geojson.clearLayers();
    geojson.addData(data);
    if (selected) {
      geojson.addTo(getMap());
    }
    if (!selected) {
      geojson.removeFrom(getMap());
    }
  }

  const dispatchCountry = () => {
    selectedCountry.set({
      id: data.properties.ADMIN_GID_0,
      name: data.properties.NAME_0,
    });
  };

  const centerCountry = () => {
    const lat = data.properties.CENTROID_LATITUDE;
    const lng = data.properties.CENTROID_LONGITUDE;

    map.panTo(new L.LatLng(lat, lng));
  };

  const handleClick = () => {
    dispatchCountry();
    centerCountry();
  };

  onMount(() => {
    if (clickable) {
      geojson.addEventListener("click", handleClick);
    }
  });

  onDestroy(() => {
    geojson.removeFrom(map);
    if (clickable) {
      geojson.removeEventListener("click", handleClick);
    }
  });
</script>

{#if geojson}
  <slot />
{/if}
