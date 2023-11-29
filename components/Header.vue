<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Quem Somos', href: '/teams', current: false },
  { name: 'Projetos e pesquisa', href: '/projects', current: false },
  { name: 'Serviços', href: '/service', current: false },
  { name: 'Cotações', href: '/cotacao', current: false },
]
</script>

<template>
  <header>
    <Disclosure as="nav" class="bg-white" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-around rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-around lg:items-stretch lg:justify-around">
            <div class="flex flex-shrink-0 items-center">
              <a href="/" class="text-gray-800 text-2xl font-bold hover:text-gray-700 lg:text-2xl">LABMET</a>
            </div>
            <div class="hidden lg:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-black' : 'text-black hover:text-gray-600', 'rounded-md px-3 py-2 text-lg uppercase font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="bg-black space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="w-full bg-cover bg-center" style="height:41em; background-image: url('/imgs/istockphoto-618067194-1024x1024.jpg');">
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
