<template>
  <nav
    :class="`navbar navbar-expand-lg ${curve ? 'nav-crev' : ''} ${noStatic ? '' : 'static'} ${mainBg ? 'main-bg' : ''} ${subBg ? 'sub-bg' : ''}`">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <img src="/dark/assets/imgs/LOGO.png" alt="logo" v-if="lightMode" />
        <img src="/dark/assets/imgs/LOGOwhite.png" style="width:160px;height:24px;" alt="logo" v-else />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"><i class="fas fa-bars"  @click="toggleNavbar"></i></span>
      </button>
     
    
         <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" @click="toggleNavbar" >
          <ul class="navbar-nav" >
           <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                 <!-- <a href="/"><span class="rolling-text" style="font-size: 1.5em;">首頁</span></a> -->
                 <NuxtLink class="nav-item" :to="`/${lightMode ? 'light' : 'dark'}/home-onepage`"><span class="rolling-text" style="font-size: 1.5em;">首頁</span></NuxtLink>
            </a>
          </li>
          <!-- -------origin about-------->
           <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
               <NuxtLink class="nav-item" :to="`/${lightMode ? 'light' : 'dark'}/page-about`"><span class="rolling-text" style="font-size: 1.5em;">關於我們</span></NuxtLink>
            </a>
          </li>


          <!-- <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
           <NuxtLink class="nav-item" :to="`/${lightMode ? 'light' : 'dark'}/sessions`"><span class="rolling-text" style="font-size: 1.5em;">四大單元</span></NuxtLink>
            </a> 
          </li> -->


          <!-- <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
          <NuxtLink class="nav-item" :to="`/${lightMode ? 'light' : 'dark'}/schedule`"><span class="rolling-text" style="font-size: 1.5em;">節目場次</span></NuxtLink>
          </a>
          </li> -->

          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
           <NuxtLink class="nav-item" :to="`/${lightMode ? 'light' : 'dark'}/sessionsyear`"><span class="rolling-text" style="font-size: 1.5em;">歷年作品</span></NuxtLink>
            </a> 
          </li>

          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
           <NuxtLink class="nav-item" :to="`/${lightMode ? 'light' : 'dark'}/blog-list`"><span class="rolling-text" style="font-size: 1.5em;">最新消息</span></NuxtLink>
            </a> 
          </li>

        </ul>
      </div>
     
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const { lightMode, mainBg, subBg, noStatic, curve } = defineProps(['lightMode', 'mainBg', 'subBg', 'noStatic', 'curve']);

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector(".navbar");

  if (bodyScroll > 300) navbar.classList.add("nav-scroll");
  else navbar.classList.remove("nav-scroll");
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

function handleDropdownSideMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.add('show');
}

function handleDropdownSideMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
}

function toggleNavbar() {
  document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
}

function toggleSearch() {
  let form = document.querySelector(".navbar .search-form");
  let closeBtn = document.querySelector(".search-form .close-search");

  form.classList.toggle("open");
  if (form.classList.contains('open')) closeBtn.style.display = 'block';
  else closeBtn.style.display = 'none';
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
})
</script>