<template>
  <header class="container">
    <router-link to="/">
      <img class="max-lg:w-20" src="/logos/usabidfax.svg" alt="Usa Bid Fax">
    </router-link>
    <nav class="space-x-2 sm:space-x-4">
      <router-link to="/"
                   class="rounded-sm bg-gray-800 px-4 py-2 max-sm:text-sm font-bold text-white hover:bg-gray-900 sm:px-5 sm:py-3">
        Main
      </router-link>
      <router-link to="/contact"
          class="rounded-sm bg-gray-800 px-4 py-2 max-sm:text-sm font-bold text-white hover:bg-gray-900 sm:px-5 sm:py-3">
        Contact
      </router-link>
    </nav>
  </header>
</template>