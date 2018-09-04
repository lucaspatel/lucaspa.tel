<template>
  <div class="header">
    <transition name="fade" mode="out-in" :duration="300">
    <section class="hero" id="menu" >
      <div>
        <div class="content has-addons" v-if=menuIsActive>
          <div class="level is-mobile">
            <div class="level-item">
              <div class="box">
              </div>
            </div>
            <div class="level-item">
              <div class="box">
              </div>
            </div>
            <div class="level-item">
              <div class="box">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </transition>

    <nav class="navbar" id="nav" role="navigation" aria-label="main navigation">
      <div class="navbar-brand has-text-centered">
        <a class="navbar-item in-brand is-hidden-mobile" id="logo">
          <p> LP </p>
        </a>
        <a class="navbar-item in-brand bar is-hidden-mobile">
          <strong> | </strong>
        </a>
        <a class="navbar-item in-brand">
          <strong> About </strong>
        </a>
        <a class="navbar-item in-brand bar">
          <strong> | </strong>
        </a>
        <a class="navbar-item in-brand">
          <strong> Research </strong>
        </a>
        <a class="navbar-item in-brand bar">
          <strong> | </strong>
        </a>
        <a class="navbar-item in-brand">
          <strong> Projects </strong>
        </a>
        <a class="navbar-item in-brand bar is-hidden-tablet is-hidden-desktop" >
          <strong> | </strong>
        </a>
        <a class="navbar-item in-brand is-hidden-tablet is-hidden-desktop" @click=toggleMenu>
          <span class="icon">
            <i class="fa fa-chevron-down"></i>
          </span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item in-brand" v-on:click="toggleMenu()">
            <span class="icon">
              <i class="fa fa-chevron-down"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      menuIsActive: false
    }
  },
  methods: {
    toggleMenu: function() {
      console.log("Yessir");
      this.menuIsActive = !this.menuIsActive;
    }
  }
}
</script>

<style lang='scss'>
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/utilities/mixins.sass";

.header {
  background-color: #FAF0CC;
}

#menu {
  background-color: #E6B4B6;
  overflow: hidden;
  height: auto;
  max-height: 500px;
}

#nav {
  background-color: #FDFAEC !important; //get this in big variables file
  box-shadow: 0 0 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 50px;
  width: 95%;
  left: 0;
  right: 0;
  margin: auto;
  top: 1rem;
  position: relative;
}

.navbar-end.navbar-item:hover {
  background-color: blue;
}

.navbar-item.in-brand {
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
}

.h1 {
  font-size: 8rem;
}

.dropdown-menu {
  max-width: 86.5vw;

  @include mobile {
    width: 86.5vw;
  }
}

.icon {
  color: #CD6374;
}

.dropdown-item {
  text-align: left;
}

#logo {
  margin-top: -0.5vh;
  margin-left: 2vh;
  font-size: 3vh;
  $primary-color-1: #CD6374;
  font-family: "Montserrat";
  color: darken(#CD6374,5%) !important;
  font-weight: black;
  text-shadow:  0 1px 0 lighten($primary-color-1, 20%), 
                 0 2px 0 lighten($primary-color-1, 17%),
                 0 3px 0 lighten($primary-color-1, 14%),
                 0 4px 0 lighten($primary-color-1, 11%),
                 0 5px 0 lighten($primary-color-1, 8%);
}

.bar {
  padding: 0;
}

.level-item {
  flex-direction: row;
}

.box {
  max-width: 70px;
  max-height: 70px;
  border-radius: 9999px;
  margin: 20px;
}

.slide-fade-enter-active {
  transition: all 10s;
}
.slide-fade-leave-active {
  transition: all 10s;
}
.slide-fade-enter {
  height: 0px;
  background-color: blue;
}
.slide-fade-enter-to {
  background-color: blue;
}
.slide-fade-leave {
  background-color: blue;
}
.slide-fade-leave-to {
  max-height: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



</style>