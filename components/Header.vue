<script setup>

</script>

<template>
  <header>
    <nav class="bg-white shadow">
      <div class="container mx-auto px-6 py-3 ">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex justify-between items-center">
            <div class="text-xl font-semibold text-gray-700">
              <a href="#" class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">LABMET</a>
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
            <a href="/projects" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 uppercase hover:text-blue-600">Projetos e Pesquisa</a>
            <a href="/service" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 uppercase hover:text-blue-600">Serviços e Cotações</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="w-full bg-cover bg-center" style="height:41em; background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);">
      <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div class="text-center">
          <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
            Laboratório de Metabolômica
          </h1>
          <p class="text-white mt-1">
            A metabolômica é uma ciência ômica central no fluxo da informação da biologia moderna!
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
