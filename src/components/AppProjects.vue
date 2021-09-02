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
      <!-- <div class="projects-list" v-if="projects.length" ref="projectsListWrapper" :style="{height: `${this.$refs.projectsListWrapper.innerHeight}px`}"> -->
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
    mounted() {
        document.querySelector('.projects-list').style.minHeight = `${document.querySelector('.projects-list').clientHeight}px`
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
        margin: 47px auto;
        width: 100%;
        padding: 0 15px;
        transition: .3s ease-in-out;
        &-nav {
            display: grid;
            grid-auto-flow: column;
            gap: 30px;
            padding-bottom: 47px;
            margin-bottom: 50px;
            position: relative;
            @include masm {
                gap: 15px;
                padding-bottom: 30px;
                margin-bottom: 30px;
            }
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
                cursor: pointer;
                @include masm {
                    padding: 10px;
                    font-size: 14px;
                }
                &.reversed {
                    background: rgba(255, 255, 255, 1);
                    color: rgb(30, 30, 30);
                    &::after {
                        border-color: #fff transparent transparent transparent;
                    }
                }
                &.active {
                    &::after {
                        border-width: 70px 80px 0 80px;
                        @include malg {
                            border-width: 35px 40px 0 40px;
                        }
                        @include masm {
                            border-width: 25px 30px 0 30px;
                        }
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
                    border-width: 0 80px 0 80px;
                    border-color: rgb(var(--theme-primary-color)) transparent transparent transparent;
                    transition: .3s ease-in-out;
                    @include malg {
                        border-width: 0 40px 0 40px;
                    }
                    @include masm {
                        border-width: 0 30px 0 30px;
                    }
                }
            }
        }
        &-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(290px, 440px));
            grid-template-rows: 275px;
            gap: 45px 40px;
            justify-content: center;
            position: relative;
            padding-bottom: 75px;
            max-width: 920px;
            margin: 0 auto;
            @include malg {
                gap: 30px;
            }
            @include masm {
                grid-template-columns: 1fr;
                grid-template-rows: 220px;
            }
        }
    }
</style>