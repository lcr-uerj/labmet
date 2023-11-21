<template>
  <div>
    <div class="fundo">
      <div class="flex-wrap flex justify-center container items-center mt-32 mx-auto">
        <h2 class="size-banner">Artigos Publicados</h2>
      </div>
    </div>
    <div>
      <div class="flex-wrap flex my-5 sm:px-0 px-10 aling-pad justify-start container mx-auto">
        <div class="fundo-page px-5 pt-3 w-full container mx-auto">
          <h1 class="size-title5 font-medium text-2xl p-2">
            Enhanced OXPHOS, glutaminolysis and β-oxidation constitute the metastatic phenotype of melanoma cell
          </h1>
          <div class="container mb-5 p-2 text-banner size-text mx-auto">
            <h1 class="text-black text-xl font-bold text-opacity-60">Autores</h1>
            <div class="text-black text-opacity-60">
              Mariana F Rodrigues, Emilie Obre, Fabiana HM de Melo, Gilson C Santos Jr, Antonio Galina, Miriam G Jasiulionis, Rodrigue Rossignol, Franklin D Rumjanek, Nivea D Amoêdo
            </div>
            <div class="flex justify-end container mx-auto">
              <button class="hover:text-amber-300 hover:bg-amber-700 p-3 mt-5 bg-red-700 text-white">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="mt-10 fundo-page px-5 pt-3 w-full">
          <h1 class="size-title5 font-medium text-2xl p-2">
            Metabolomics as a promising tool for early osteoarthritis diagnosis
          </h1>
          <div class="container mb-5 p-2 text-banner size-text mx-auto">
            <h1 class="text-black text-xl font-bold text-opacity-60">Autores</h1>
            <div class="text-black text-opacity-60">
              D.P. Aguiar E.B. de Sousa, G.C. dos Santos Junior, M.E.L. Duarte, V. Moura Neto
            </div>
            <div class="flex justify-end container mx-auto">
              <button class="hover:text-amber-300 hover:bg-amber-700 p-3 mt-5 bg-red-700 text-white">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="mt-10 fundo-page px-5 pt-3 w-full">
          <h1 class="size-title5 font-medium text-2xl p-2">
            Metabolic profile of oral squamous carcinoma cell lines relies on a higher demand of lipid metabolis
          </h1>
          <div class="container mb-5 p-2 text-banner size-text mx-auto">
            <h1 class="text-black text-xl font-bold text-opacity-60">Autores</h1>
            <div class="text-black text-opacity-60">
              Ana Carolina B Sant’Anna-Silva, Gilson C Santos, Samir P Costa Campos, André Marco Oliveira Gomes, Juan Alberto Pérez-Valencia, Franklin David Rumjanek            </div>
            <div class="flex justify-end container mx-auto">
              <button class="hover:text-amber-300 hover:bg-amber-700 p-3 mt-5 bg-red-700 text-white">Saiba Mais</button>
            </div>
          </div>
        </div>
        <div class="mt-10 fundo-page px-5 pt-3 w-full">
          <h1 class="size-title5 font-medium text-2xl p-2">
            Metabolic Adaptations Correlated with Antibody Response after
          </h1>
          <h1 class="text-xl text-black font-medium p-1 text-opacity-70">
            Immunization with Inactivated SARS-CoV-2 in Brazilian Subjects
          </h1>
          <div class="container mb-5 p-2 text-banner size-text mx-auto">
            <h1 class="text-black text-xl font-bold text-opacity-60">Autores</h1>
            <div class="text-black text-opacity-60">
              Jeane de Souza Nogueira, Cíntia Barros Santos-Rebouças, Rafael Mina Piergiorge, Ana Paula Valente, Marcos C. Gama-Almeida, Tatiana El-Bacha, Maria Luiza Lopes Moreira, Bruna Silva Baptista Marques, Jessica Rodrigues de Siqueira, Erika Martins de Carvalho, Orlando da Costa Ferreira Jr., Luís Cristóvão Porto, Tatiana Kelly da Silva Fidalgo, and Gilson Costa dos Santos Jr.            </div>
            <div class="flex justify-end container mx-auto">
              <button class="hover:text-amber-300 hover:bg-amber-700 p-3 mt-5 bg-red-700 text-white">Saiba Mais</button>
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

<style scoped>

.fundo-page {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.texto-link {
  color: #121579 !important;
}
.texto-link:hover {
  color: #0e6d9f !important;
}

.fundo-title2 {
  background-color: #004C78;
  --tw-text-opacity: 1;
  color: #209fe4 !important;
  width: 100%;
  padding-left: 1.5em;
}


@media (max-width: 640px) {
  .aling-pad {
    padding: 5em;
  }
}

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
