<script>
  let { value, unit, label, onincrement, ondecrement, oninput, disabled = false } = $props();
</script>

<div class="spinner" role="group" aria-label="{label}">
  <button
    class="spinner-btn"
    aria-label="Decrease {label}"
    onclick={ondecrement}
    {disabled}
    type="button"
  >−</button>
  <div class="spinner-input-wrap">
    <input
      type="number"
      min="0"
      max="59"
      {value}
      {disabled}
      aria-label={label}
      oninput={oninput}
    />
    <span class="spinner-unit" aria-hidden="true">{unit}</span>
  </div>
  <button
    class="spinner-btn"
    aria-label="Increase {label}"
    onclick={onincrement}
    {disabled}
    type="button"
  >+</button>
</div>

<style>
  .spinner {
    display: flex;
    align-items: center;
    background: var(--colorNavy);
    border-radius: 9999px;
    padding: 0.3em 0.5em;
    gap: 0.4em;
    transition: background 0.25s ease;
  }

  .spinner-btn {
    background: none;
    border: none;
    color: var(--colorBackground);
    font-size: 1.4em;
    font-family: var(--fontFamilyText);
    font-weight: 700;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s ease, color 0.25s ease;
    flex-shrink: 0;
  }

  .spinner-btn:hover:not(:disabled) {
    background: color-mix(in srgb, var(--colorBackground) 20%, transparent);
  }

  .spinner-btn:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .spinner-input-wrap {
    display: flex;
    align-items: baseline;
    gap: 0.2em;
  }

  input[type="number"] {
    background: none;
    border: none;
    color: var(--colorBackground);
    font-family: var(--fontFamilyDigital);
    font-size: 1.6em;
    font-weight: 700;
    width: 2ch;
    text-align: right;
    outline: none;
    /* Hide browser number spinners */
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: textfield;
    transition: color 0.25s ease;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"]:focus-visible {
    outline: 2px solid var(--colorBackground);
    outline-offset: 2px;
    border-radius: 2px;
  }

  .spinner-unit {
    color: var(--colorBackground);
    font-family: var(--fontFamilyText);
    font-size: 0.9em;
    font-weight: 500;
    transition: color 0.25s ease;
  }

  @media screen and (max-width: 40em) {
    input[type="number"] {
      font-size: 1.3em;
    }

    .spinner-btn {
      font-size: 1.2em;
    }
  }
</style>
