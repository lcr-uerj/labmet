<template>
  <div>
    <div class="fundo">
      <div class="flex-wrap flex justify-center container items-center mt-32 mx-auto">
        <h2 class="size-banner">Serviços</h2>
      </div>
    </div>
    <div class="py-10 bg-gray-500">
      <page-title>
        <div class="text-white container mx-auto">
          teste
        </div>
      </page-title>
      <div class="container mx-auto my-10 flex items-center justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Blog Entry 1 -->
          <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <div class="bottom-0 left-0 right-0 p-2.5 h-64 bg-black bg-opacity-50 backdrop-blur text-white rounded-lg">
              <h1 class="text-2xl font-semibold">Soro/Plasma/Urina</h1>
              <p class="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
              <div class="mt-10">
                <button class="py-1.5 px-2.5 my-5 rounded bg-amber-500 hover:bg-amber-200">
                  <a style="text-decoration: none" target="_self" href="/cotacao">Saiba Mais</a>
                </button>
              </div>
            </div>
          </div>

          <!-- Blog Entry 2 -->
          <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <div class="bottom-0 left-0 right-0 p-2.5 h-64 bg-black bg-opacity-50 backdrop-blur text-white rounded-lg">
              <h1 class="text-2xl font-semibold">Cultura celular</h1>
              <p class="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
              <div class="mt-10">
                <button class="py-1.5 px-2.5 my-5 rounded bg-amber-500 hover:bg-amber-200">
                  <a style="text-decoration: none" target="_self" href="/cotacao">Saiba Mais</a>
                </button>
              </div>
            </div>
          </div>

          <!-- Blog Entry 3 -->
          <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <div class=" bottom-0 left-0 p-2.5 right-0 h-64 bg-black bg-opacity-50 backdrop-blur text-white rounded-lg">
              <h1 class="text-2xl font-semibold">Extrato celular</h1>
              <p class="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
              <div class="mt-10">
                <button class="py-1.5 px-2.5 my-5 rounded bg-amber-500 hover:bg-amber-200">
                  <a style="text-decoration: none" target="_self" href="/cotacao">Saiba Mais</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "interact",
})
</script>

<style lang="scss" scoped>

@media (min-width: 1381px) {
  .container {
    max-width: 1381px !important;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1024px !important;
  }
}

</style>
