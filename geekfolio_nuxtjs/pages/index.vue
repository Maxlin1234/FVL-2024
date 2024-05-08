<template>
    <div>
      <CommonNavbar :curve="true" :noStatic="true" />
      <main class="main-bg">
        <OnePageHeader />
        <!-- <OnePageBlog /> -->
        <OnePageAbout />
        <OnePageMarq />
        <OnePageServices />
        <OnePagePortfolio />
        <OnePageIntro />
        <OnePageTestimonials />
        <OnePageImageSection />
        <OnePageTeam />
        <OnePageContact />
      </main>
      <OnePageFooter />
    </div>
  </template>
  
  <script setup>
  definePageMeta({
  layout: 'preview'
});
  //= Page Head
  useHead({
    titleTemplate: `%s - One Page`,
    bodyAttrs: {
      class: 'sub-bg'
    }
  })
  </script>

   
   <!-- <template>
    <div>
      <CommonNavbar />
      <main>
        <InnerPagesHeader :data="headerMetadata" />
        <InnerPagesAboutStory />
        <InnerPagesAboutServices />
        <InnerPagesAboutIntro />
        <DigitalAgencyTestimonials :mainColor="true" />
        <StartupTeam />
        <InnerPagesAboutClients />
        <StartupCallToAction :innerPageStyle="true" />
      </main>
      <StartupFooter />
    </div>
  </template>
  
  <script setup>
  const headerMetadata = {
    subTitle: "About us",
    title: "關於我們",
    text: "About Us"
  }
  //= Page Head
  useHead({
    titleTemplate: `%s - About`,
    bodyAttrs: {
      class: 'main-bg'
    }
  })
  </script>
   -->