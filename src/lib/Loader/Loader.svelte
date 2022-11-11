<script>
  import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";
</script>

<div class="wrapper">
  <span class="spinner"><FaSpinner /></span>
  <span class="label"> Loading data </span>
</div>

<style>
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes blink {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
  .wrapper {
    margin: auto;
    display: flex;
    gap: var(--gap-xs);
    align-items: center;
  }

  .label {
    animation: blink alternate 700ms infinite ease-in-out;
  }

  :global(.spinner svg) {
    width: 1.5rem !important;
    height: 1.5rem !important;
    animation: rotate linear 1s infinite;
  }
</style>
