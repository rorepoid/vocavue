<template>
  <header>
    <nav class="nav">
      <nuxt-link to="/">
        <img
          class="nav-logo"
          src="~/assets/images/logo.png"
          alt="VocaDB Client"
        />
      </nuxt-link>
      <input type="text" name="search" placeholder="Search" class="search" />
      <button class="burger">
        <Burger />
      </button>
    </nav>
  </header>
</template>

<script>
import Burger from "~/assets/images/burger.svg";

export default {
  components: {
    Burger,
  },
};
</script>

<style scoped>
.header {
  grid-area: header;
  background-color: var(--color-first);
  position: sticky;
  top: 0;
}

.nav {
  padding: 0 1rem;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}

.nav-logo {
  border-radius: 0.25rem;
  width: 3rem;
}

.burger {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0 0 auto;
  color: #62d421;
  background: transparent;
  border-radius: 10px;
  border-color: transparent;
}

.burger:hover,
.burger:active {
  background-color: #5aa6b0;
}

.search {
  background-color: white;
  width: 10rem;
  margin: 0 0 0 auto;
  padding: 10px;
  height: 2rem;
  border-radius: 0.7rem;
}

.search::placeholder {
  color: var(--color-first);
}

@media (min-width: 50rem) {
  .burger {
    display: none;
  }

  .search {
    display: flex;
  }
}
</style>
