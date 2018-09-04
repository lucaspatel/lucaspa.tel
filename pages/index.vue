<template>
  <div>

    <NavBar/>
    <section class="hero">
      <div id="setting">
        <h1 class="has-text-centered is-size-1" id="title"> Lucas Patel </h1>
        <img class="cloud" id="cloud1" src="/svg/cloud1.svg">
        <img class="cloud" id="cloud2" src="/svg/cloud1.svg">
        <img class="cloud" id="cloud3" src="/svg/cloud1.svg">
        <img class="backclouds" id="back1" src="/svg/backclouds1.svg">
        <img id="mountains" src="/svg/mountains1.svg">
      </div>
    </section>
    <section>
      <div id="sea">
        <img class="boat" id="boat1" src="/svg/boat1.svg">
        <img class="boat" id="boat2" src="/svg/boat2.svg">
        
        <section class="section">
        <div class="container">
          <hr>
          <div class="tile notification is-vertical" id="biotile">
            <h1 class="title">Lucas Patel</h1>
            <h2 class="subtitle"> B.S. Biology: Bioinformatics </h2>
            <h5 class=""> University of California, San Diego - 2019</h5>
          </div>
        </div>
      </section>
    </div>
    </section>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang='scss'>
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/utilities/mixins.sass";
@import "bulma/sass/utilities/initial-variables.sass";

$primary-color-1: #CD6374; //red
$primary-color-2: #6B8A8E; //blue
$primary-color-3: #FAF0CC; //sand
$secondary-color-1: #FDFAEC; //ivory
$secondary-color-2: #E6B4B6; //pink
$secondary-color-3: #A8998F; //brown

$cloud-time: 132s;
$backcloud-time: 148s;
$boat-time: 48s;

$backcloud-width-mobile: 400%;
$backcloud-width-tablet: 300%;
$backcloud-width-desktop: 200%;

html {
  font-family: "Open Sans";
  overflow: hidden;
  height: 100%;
}

body { 
  height: 100%;
  margin: 0; 
  overflow-x: hidden;
}

.tile {
  flex-grow: 0;
  color: #69605B;
  background-color: $primary-color-3;
}

#title {
  $darkening: 10%;
  font-family: "Montserrat";
  margin-top: 5vh;
  color: darken(#CD6374,5%) !important;
  font-weight: black;
  text-shadow:  0 1px 0 lighten($primary-color-1, 20%), 
               0 2px 0 lighten($primary-color-1, 17%),
               0 3px 0 lighten($primary-color-1, 14%),
               0 4px 0 lighten($primary-color-1, 11%),
               0 5px 0 lighten($primary-color-1, 8%);
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}

hr {
  position: relative;
  bottom: 2rem;
  width: 100%;
  height: 3px;
  border-radius: 1000px;
  background-color: #FAF0CC;
  margin-left: auto;
  margin-right: auto;
}

// ################################
// SETTING SVG CSS

@mixin animate_boat($width) {
  @keyframes boat_sailing {
    0% { left: -40%; }
    100% { left: 140%; }
  }

  @-webkit-keyframes boat_sailing {
    0% { left: -40%; }
    100% { left: 140%; }
  }

  @-moz-keyframes boat_sailing {
    0% { left: -40%; }
    100% { left: 140%; }
  }

  $offset: random(50);
  animation: boat_sailing $boat-time+$offset infinite;
  -moz-animation: boat_sailing $boat-time+$offset infinite;
  -webkit-animation: boat_sailing $boat-time+$offset infinite;
  animation-timing-function: linear;
}

@mixin animate_cloud($width) {
  $pos_offset: 0;
  @keyframes cloud_floating {
    0% { left: -40%; }
    100% { left: 140%; }
  }

  @-webkit-keyframes cloud_floating {
    0% { left: -40%; }
    100% { left: 140%; }
  }

  @-moz-keyframes cloud_floating {
    0% { left: -40%; }
    100% { left: 140%; }
  }

  $time_offset: random(10);
  animation: cloud_floating $cloud-time+$time_offset infinite;
  -moz-animation: cloud_floating $cloud-time+$time_offset infinite;
  -webkit-animation: cloud_floating $cloud-time+$time_offset infinite;
  animation-timing-function: linear;
}

@mixin animate_backcloud($width) {
  @keyframes backcloud_floating {
    0% { right: 0%; }
    100% { right: -($width/2); }
  }

  @-webkit-keyframes backcloud_floating {
    0% { right: 0%; }
    100% { right: -($width/2); }
  }

  @-moz-keyframes backcloud_floating {
    0% { right: 0%; }
    100% { right: -($width/2); }
  }

  animation: backcloud_floating $backcloud-time infinite;
  -moz-animation: backcloud_floating $backcloud-time infinite;
  -webkit-animation: backcloud_floating $backcloud-time infinite;
  animation-timing-function: linear;
}

.boat {
  margin: 2%;
  width: 20%;
  position: relative;
  z-index: 10;

  @include mobile {
    width: 15%;
  }

  @include tablet {
    width: 12%;
  }

  @include desktop {
    width: 9%;
  }
}

#boat1 {
  bottom: 2rem;
}

#boat2 {
  //
}

@for $i from 1 through 2 {
  #boat#{$i} {
    @include mobile {
      @include animate_boat(400%)
    }

    @include tablet {
      @include animate_boat(300%)
    }

    @include desktop {
      @include animate_boat(200%)
    }
  }
}

.backclouds {
  position: absolute;
  bottom: -0.7px;
  right: 0;
  z-index: 1;

  max-width: 400%;

  @include mobile {
    width: 400%;
    @include animate_backcloud(400%)
  }

  @include tablet {
    width: 300%;
    @include animate_backcloud(300%)
  }

  @include desktop {
    width: 200%;
    @include animate_backcloud(200%)
  }
}

#mountains {
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;

  @include mobile {
    padding-top: 10vh;
    width: 90%;
  }

  @include tablet {
    padding-top: 15vh;
    width: 70%;
  }

  @include desktop {
    padding-top: 7vh;
    width: 50%;
  }
}

.cloud {
  z-index: 5;
  position: relative;
  filter: drop-shadow(0 0 50px #ddd);
}

#cloud1 {
  width: 11%;
  top: 7rem;
}

#cloud2 {
  width: 15%;
  top: 11rem;
}

#cloud3 {
  width: 12%;
  top: 9rem;
}

@for $i from 1 through 3 {
  #cloud#{$i} {
    @include mobile {
      @include animate_cloud(400%)
    }

    @include tablet {
      @include animate_cloud(300%)
    }

    @include desktop {
      @include animate_cloud(200%)
    }
  }
}

#setting {
  display: block;
  position: relative;
  padding-top: 3rem;
  background-color: #FAF0CC;
}

#sea {
  min-height: 150vh;
  background-color: #6B8A8E;
  padding: 0 0;
}
 // ################################


</style>
