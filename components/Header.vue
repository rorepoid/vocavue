<template>
  <header>
    <nuxt-link to="/">
      <img
        class="nav-logo"
        src="~/assets/images/logo.png"
        alt="VocaDB Client"
      />
    </nuxt-link>
    <div>
      <input type="text" name="search" placeholder="Search" class="search" />
      <nav class="nav">
        <button class="burger">
          <Burger />
        </button>
      </nav>
    </div>
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
  display: flex;
  place-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem;
  background-color: var(--color-first);
  position: sticky;
  top: 0;
}

.header > div {
  display: flex;
  place-items: center;
  gap: 1rem;
}

.nav {
  display: flex;
  width: auto;
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
  margin: 0 auto;
  color: #62d421;
  background: transparent;
  border-radius: 10px;
  border-color: transparent;
}

.burger:hover,
.burger:active {
  background-color: #7aa8ad;
}

.search {
  background-color: white;
  width: 100%;
  margin: 0 0 0 auto;
  padding: 10px;
  height: 2rem;
  border-radius: 0.7rem;
}

.search::placeholder {
  color: var(--color-first);
}

@media (min-width: 50rem) {
  .header {
    display: grid;
    grid-template-columns: subgrid;
    place-items: center;
  }

  .burger {
    display: none;
  }

  .search {
    width: 40rem;
  }

  .nav {
    display: none;
  }
}
</style>
