<template>
  <header class="header">
    <nav class="nav">
      <nuxt-link to="/">
        <img class="nav-logo" src="~/assets/aimaina.png" alt="VocaDB Client" />
      </nuxt-link>
      <button class="burger">
        <Burger />
      </button>
      <input
        type="text"
        name="search"
        placeholder="Search"
        class="search"
      />
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
  display: block;
  background-color: #4a5568;
  position: sticky;
  top: 0;
}

.nav {
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  max-width: var(--max-width);
  align-items: center;
}

a {
  max-width: 3rem;
  max-height: 3rem;
  display: flex;
}

img {
  width: 100%;
}

.nav-logo {
  border-radius: 0.25rem;
}

.burger {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0 0 auto;
  color: #62d421;
  background: transparent;
  border: none;
}

.search {
  max-width: 50rem;
  width: 75%;
  display: none;
  margin: 0 0 0 auto;
  height: 2rem;
  border-radius: 9999px;
}

::-webkit-input-placeholder {
  font-size: 1rem;
}

::-moz-placeholder {
  font-size: 1rem;
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
