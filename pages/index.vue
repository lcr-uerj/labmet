<template>
  <section class="pt-48 pb-36 relative">
    <div class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed" style="background-image:url(https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/71fe09e2-9320-4f61-8eca-067243e2ef68.jpeg)"></div>
    <h1 class="text-white display-2 text-2xl text-center relative">
      A  Ressonância Magnética Nuclear (RMN) é uma extremamente poderosa no mapeamento de pequenas moléculas
      Podemos mapear o Metabolismo em larga escala de biofluidos, tecidos, células e alimentos através da Metabolômica por RMN
    </h1>
  </section>

  <div class="grid shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0  dark:shadow-slate-700/[.7] dark:divide-gray-600">
    <div class="relative flex flex-col flex-[1_0_0%] bg-white shadow-sm dark:bg-slate-900 dark:shadow-slate-700/[.7]">
      <img class="w-full h-80 imgs-decal" src="../assets/imgs/equipe_labmet.png" alt="Image Description">
      <div class="absolute top-36 start-0 end-0">
        <div class="p-4 grid justify-center items-center md:py-5 px-24">
          <h2 class="text-lg font-bold text-center text-white">
            Equipe
          </h2>
          <p class="mt-1 text-center text-white">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div class="flex justify-center">
          <button class="py-1.5 px-4 rounded bg-amber-500 hover:bg-amber-200">Saiba Mais</button>
        </div>
      </div>
    </div>

    <div class="relative flex flex-col flex-[1_0_0%] bg-white shadow-sm dark:bg-slate-900 dark:shadow-slate-700/[.7]">
      <img class="w-full h-80 imgs-decal" src="../assets/imgs/parcerias_labmet.png" alt="Image Description">
      <div class="absolute top-36 start-0 end-0">
        <div class="p-4 grid justify-center items-center md:py-5 px-24">
          <h2 class="text-lg font-bold text-center text-white">
            Parcerias
          </h2>
          <p class="mt-1 text-center text-white">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div class="flex justify-center">
          <button class="py-1.5 px-4 rounded bg-amber-500 hover:bg-amber-200">Saiba Mais</button>
        </div>
      </div>
    </div>

    <div class="relative flex flex-col flex-[1_0_0%] bg-white shadow-sm dark:bg-slate-900 dark:shadow-slate-700/[.7]">
      <img class="w-full h-80 imgs-decal" src="../assets/imgs/artigos_projetos_labmet.png" alt="Image Description">
      <div class="absolute top-36 start-0 end-0">
        <div class="p-4 grid justify-center items-center md:py-5 px-24">
          <h2 class="text-lg font-bold text-center text-white">
            Artigos e Projetos
          </h2>
          <p class="mt-1 text-center text-white">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div class="flex justify-center">
          <button class="py-1.5 px-4 rounded bg-amber-500 hover:bg-amber-200">Saiba Mais</button>
        </div>
      </div>
    </div>
  </div>
  <!-- component -->
  <div class="w-full  bg-blue-900  bg-no-repeat" style="
  background-blend-mode: multiply;
  background-position: center center;
">
    <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
      <div class=" m-0  p-1  text-3xl  text-white  antialiased  text-center">Mapeamento do Perfil Metabólico em Larga Escala: Metabolômica por RMN</div>
      <div class=" m-0  p-1  text-xl  text-white  antialiased text-opacity-50  text-center">Inscreva-se para receber novidades sobre ofertas especiais, promoções e eventos.</div>
      <div class=" mt-3  flex  flex-row  flex-wrap">
        <input type="text" class=" text-gray-600  w-2/3  p-2  rounded-l-lg" placeholder="EMAIL"/>
        <button class=" p-2  w-1/3  bg-indigo-400  rounded-r-lg  text-white hover:bg-indigo-300 uppercase" type="button">Inscrever-se</button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
.imgs-decal {
  height: 100%;
  opacity: 0.5;
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
