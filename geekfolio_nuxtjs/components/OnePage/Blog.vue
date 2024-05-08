<template>
  <section class="blog-list section-padding sub-bg">
   <div class="container">
     <div class="sec-head mb-80">
       <div class="row">
         <div class="col-lg-8">
           <h6 class="sub-title wow fadeInUp">sessions</h6>
           <h2 class="d-rotate wow">
             <span class="rotate-text">節目場次</span>  
           </h2>
         </div>
         <div class="col-lg-4 d-flex align-items-center">
           <div class="full-width d-flex justify-content-end justify-end">
             <div class="vew-all wow fadeIn">
            
             </div>
           </div>
         </div>
       </div>
     </div>
     <div :class="`item bord-thin-top ${index === data.length - 1 ? 'bord-thin-bottom' : ''} wow fadeInUp`"
       :data-wow-delay="`${index * 0.+ 0}s`" v-for="(item, index) in data" :key="item.id">
       <div class="row">
         <div class="col-lg-3">
           <div class="info md-mb30">
             <div class="d-flex align-items-center">
               <div class="author">
                 <div class="img">
                
                 </div>
               </div>
            
             </div>
           </div>
         </div>
         <div class="col-lg-6">
           <div class="cont">
             <h5 class="mb-10 underline">
               <NuxtLink to="/dark/blog-details">{{ item.title }}</NuxtLink>
             </h5>
             <div class="tags">
               <NuxtLink to="/dark/blog-classic" v-for="(tag, idx) in item.tags" :key="idx">{{ tag }}</NuxtLink>
             </div>
           </div>
         </div>
         <div class="col-lg-3 d-flex align-items-center justify-end">
           <div class="ml-auto">
             <span class="date sub-title fz-13 opacity-8 mb-30">{{ item.date }}</span>
           </div>
         </div>
       </div>
       <div class="background bg-img valign text-center" :data-background="item.image" data-overlay-dark="4">
         <div class="more ontop full-width">
         
         </div>
       </div>
     </div>
   </div>
 </section> 
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Data
import data from '@/data/OnePage/blog.json';

onMounted(() => {
 loadBackgroudImages();
});
</script>