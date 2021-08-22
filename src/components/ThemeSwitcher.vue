<template>
  <div class="toggle-theme">
    <input 
        @change="toggleTheme"
        id="toggleTheme"
        type="checkbox"
        class="switch-checkbox"
        />
    <label for="toggleTheme" class="switch-label"
     :class="{ '--checked': userTheme === 'dark-theme'}">
        <svg-icon icon="zombie"></svg-icon>
        <svg-icon icon="sun"></svg-icon>
        <div class="switch-toggle"></div>
    </label>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
export default {
  components: {
    SvgIcon
  },
  mounted() {
    const initUserTheme = localStorage.getItem("user-theme") ? localStorage.getItem("user-theme") : this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },
  methods: {
    setTheme(theme) {
        localStorage.setItem("user-theme", theme);
        this.userTheme = theme;
        document.documentElement.className = theme;
    },
    toggleTheme() {
        const activeTheme = localStorage.getItem("user-theme");
        if (activeTheme === "light-theme") {
            this.setTheme("dark-theme");
        } else {
            this.setTheme("light-theme");
        }
    },
    getMediaPreference() {
        const hasDarkPreference = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        if (hasDarkPreference) {
            return "dark-theme";
        } else {
            return "light-theme";
        }
    },
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/_app.scss';
    .toggle-theme {
      position: relative;
      width: fit-content;
    }
    .switch-checkbox {
        display: none;
    }
    .switch-label {
      display: flex;
      gap: 7px;
      padding: 4px 2px 2px 4px;
      border: 1px solid rgb(var(--border-primary-color));
      border-radius: 15px;
      cursor: pointer;
      .icon {
        position: relative;
        width: 24px;
        height: 24px;
        &:first-of-type {
            opacity: 0;
            top: -1px;
        }
        &:last-of-type {
          top: -1px;
          left: -1px;
        }
      }
      &.--checked {
        .switch-toggle {
          transform: translateX(calc(100% + 2px));
        }
        .icon {
          &:first-of-type {
            opacity: 1;
          }
          &:last-of-type {
            opacity: 0;
          }
        }
      }
    } 
    .switch-toggle {
      position: absolute;
      top: 3px;
      left: 4px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: rgb(var(--border-primary-color));
      transition: $trans;
    }
</style>