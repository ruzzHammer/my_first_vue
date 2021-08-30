<template>
  <div class="projects">
      <div class="projects-nav">
        <button
            v-for="category in categories"
            :key="category"
            :ref="setCatRef"
            :class="
            {   
                reversed: hasWaveInBG,
                active: currentCategory === category, 
            }"
            class="projects-nav__button"
            @click="currentCategory = category"
            >
            {{ $t(`projects.keywords.${category}`) }}
        </button>
      </div>
      <div class="projects-list" v-if="projects.length">
          <projects-list 
          :array="sites" 
          v-if="currentCategory === 'sites'"
          ></projects-list>
          <projects-list 
          :array="apps" 
          v-if="currentCategory === 'apps'"
          ></projects-list>
          <projects-list 
          :array="other" 
          v-if="currentCategory === 'other'"
          ></projects-list>
      </div>
  </div>
</template>

<script>
import ProjectsList from '@/components/ProjectsList.vue';
import json from '@/projects.json'
export default {
    name: "AppProjects",
    data() {
        return {
            currentCategory: 'sites',
            categories: ['sites', 'apps', 'other'],
            catRefs: [],
            projects: json.projects,
        }
    },
    computed: {
        sites() {
            return this.projects.filter(project => project.category === 'sites');
        },
        apps() {
            return this.projects.filter(project => project.category === 'apps');
        },
        other() {
            return this.projects.filter(project => 
                project.category === null || 
                (project.category !== 'sites' && 
                project.category !== 'apps'));
        },
        
    },
    methods: {
        setCatRef(el) {
            if (el) {
                this.catRefs.push(el)
            }
        },
        hasWaveInBG(el) {
            const box = el.getBoundingClientRect();
            const xCenter = (box.left + box.right) / 2;
            const yCenter = (box.top + box.bottom) / 2;
            if (document.elementsFromPoint(xCenter, yCenter).filter(element => 
            element === document.querySelector('.non-home.content-wrap')).length > 1) {
                el.classList.add('reversed')
            }
        }
    },
    mounted() {
    },
    components: {
        ProjectsList,
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/_app.scss';
    .projects {
        max-width: $containerSize;
        margin: 47px auto 0;
        width: 100%;
        transition: .3s ease-in-out;
        &-nav {
            display: grid;
            grid-auto-flow: column;
            gap: 30px;
            padding-bottom: 47px;
            margin-bottom: 50px;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                display: block;
                width: 100%;
                height: 1px;
                background: #E4E4E4;
            }
            &__button {
                position: relative;
                background: rgb(var(--theme-primary-color));
                color: rgb(255, 255, 255);
                font-size: 18px;
                text-transform: uppercase;
                border: none;
                padding: 20px;
                box-shadow: -2px 8px 46px rgba(37, 45, 50, 0.05);
                border-radius: 10px;
                &.reversed {
                    background: rgba(255, 255, 255, 1);
                    color: rgb(30, 30, 30);
                    &::after {
                        border-color: #fff transparent transparent transparent;
                    }
                }
                &.active {
                    &::after {
                        border-width: 93px 97px 0 97px;
                    }
                }
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 97px 0 97px;
                    border-color: rgb(var(--theme-primary-color)) transparent transparent transparent;
                    transition: .3s ease-in-out;
                }
            }
        }
        &-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(290px, 440px));
            gap: 45px 40px;
            justify-content: center;
        }
    }
</style>