<script setup>

</script>

<template>
  <header>
    <nav class="bg-white shadow">
      <div class="container mx-auto px-6 py-3 ">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex justify-between items-center">
            <div class="text-xl font-semibold text-gray-700">
              <a href="#" class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Brand</a>
            </div>

            <!-- Mobile menu button -->
            <div class="flex md:hidden">
              <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div class="hidden -mx-4 md:flex md:items-center">
            <a href="/" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 uppercase hover:text-blue-600">Home</a>
            <a href="/teams" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 uppercase hover:text-blue-600">Quem Somos</a>
            <a href="/projects" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 uppercase hover:text-blue-600">Projetos e pesquisa</a>
            <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 uppercase hover:text-blue-600">Serviços e Cotações</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
