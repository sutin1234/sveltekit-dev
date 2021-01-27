<script>
  import Counter from "@/components/Counter.svelte";
  const {MODE, NODE_ENV, SSR, SNOWPACK_PUBLIC_KANYE_API} = import.meta.env
</script>

<main> 
  <h1>Hello world!</h1>
  <div>
    MODE: {MODE}
    ENV: {NODE_ENV}
    SSR: {SSR}
    GW_API: {SNOWPACK_PUBLIC_KANYE_API}
  </div>

  <Counter />
  <p>
    Visit the <a class="bg-red-300" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>
</main>

<style>
  :root {
    @apply font-sans;
  }

  main {
    @apply text-center;
    @apply p-4;
    @apply mx-auto;
  }

  h1 {
    @apply text-red-600;
    @apply uppercase;
    @apply text-6xl;
    @apply font-thin;
    @apply leading-tight;
    @apply my-16 mx-auto;
    @apply max-w-xs;
  }

  p {
    @apply max-w-xs;
    @apply my-8 mx-auto;
    @apply leading-snug;
  }

  @screen sm {
    h1 {
      @apply max-w-none;
    }

    p {
      @apply max-w-none;
    }
  }
</style>
