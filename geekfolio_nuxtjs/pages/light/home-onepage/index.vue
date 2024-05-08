<template>
  <div>
    <CommonNavbar :lightMode="true" :curve="true" :noStatic="true" />
    <main class="main-bg">
      <OnePageHeader />
      <OnePageBlog />
      <OnePageAbout />
      <OnePageMarq />
      <OnePageServices :lightMode="true" />
      <OnePagePortfolio />
      <OnePageIntro />
      <OnePageTestimonials />
      <OnePageImageSection />
      <OnePageTeam />
      <OnePageContact />
    </main>
    <OnePageFooter :lightMode="true" />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - One Page`,
  bodyAttrs: {
    class: 'sub-bg'
  }
})
</script>
