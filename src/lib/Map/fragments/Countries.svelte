<script>
  import GeoJson from "./GeoJSON.svelte";

  export let geometries;
  let selectedCountries = [
    "DEU",
    "MEX",
    "HUN",
    "RUS",
    "BLR",
    "UKR",
    "ROU",
    "BGR",
    "COL",
    "ITA",
    "FRA",
    "JPN",
    "KOS",
    "NGA",
    "PHL",
    "BRA",
    "URY",
    "VNM",
    "CHE",
    "GBR",
    "TUR",
    "KOR",
    "CHN",
    "ESP",
  ];
</script>

{#if geometries}
  {#each geometries as country}
    <GeoJson
      data={country}
      selected={selectedCountries.includes(country.properties.ADMIN_GID_0)}
      opacity={0.5}
      clickable={true}
    />
  {/each}
{/if}
