<template>
  <div 
    v-for="(project, index) in filteredProjects"
    :key="index"
    class="projects-item">
        <div class="projects-item__header">
            <p class="projects-item__title">{{ $t(project.name) }}</p>     
            <p class="projects-item__time">{{ project.time + $t('projects.keywords.hrs') }}</p>           
        </div>
        <div class="projects-item__body">
            <p class="projects-item__desc">{{ $t(project.desc) }}</p>
        </div>
        <div class="projects-item__footer">
            <div class="projects-item__used">
                <span>{{ $t('projects.keywords.used') }}:</span>
                <span>{{ project.used }}</span>
            </div>
            <p class="projects-item__price">{{ project.price }}</p>
        </div>
        <div class="projects-item__bg">
            <img :src="require(`@/assets/${project.image}`)" alt="">
        </div>
        <a @click.prevent="" href="" class="projects-item__hover">
            <span>{{ $t('projects.keywords.hover') }}</span>
        </a>
    </div>
    <div class="projects-pagination">
        <button 
        @click="page = page - 1"
        v-if="page > 1"
        class="btn-pagination btn-back">&#11114;</button>
        <button 
        v-for="n in pages"
        :key="n"
        @click="page = n"
        :class="{
            active: n === this.page    
        }"
        >{{ n }}</button>
        <button
        @click="page = page + 1"
        v-if="hasNextPage"
        class="btn-pagination btn-next">&#10143;</button>
    </div>
</template>

<script>
export default {
    name: 'ProjectsList',
    data() {
        return {
            page: 1,
        }
    },
    props: {
        array: {
            type: Array,
        }
    },
    computed: {
        startIndex() {
            return (this.page - 1) * 6;
        },
        endIndex() {
            return this.page * 6;
        },
        hasNextPage() {
            return this.array.length > this.endIndex;
        }, 
        pages() {
            return Math.ceil(this.array.length / 6)
        },
        filteredProjects() {
            return this.array.slice(this.startIndex, this.endIndex);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/_app.scss';
    .projects-item {
        border-radius: 10px;
        position: relative;
        box-shadow: -2px 8px 46px rgba(37, 45, 50, 0.05);
        padding: 20px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 275px;
        opacity: 0;
        animation: .5s fadeInUp forwards;
        &:nth-child(2) {
            animation-delay: .2s;
        }
        &:nth-child(3) {
            animation-delay: .4s;
        }
        &:nth-child(4) {
            animation-delay: .6s;
        }
        &:nth-child(5) {
            animation-delay: .8s;
        }
        &:nth-child(6) {
            animation-delay: 1s;
        }
        @include masm {
            max-height: 220px;
            min-height: 220px;
        }
        &:hover {
            .projects-item__hover {
                opacity: 1;
                pointer-events: all;
            }
        }
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(var(--theme-primary-color), .75);
            z-index: -1;
        }
        &__header {
            display: flex;
            justify-content: space-between;
        }
        &__title {
            max-width: 200px;
            color: #fff;
            font-weight: 500;
            font-size: 20px;
            line-height: 1.25;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        &__time {
            font-weight: 500;
            color: #fff;
            margin-bottom: 0;
        }
        &__desc {
            line-height: 1.25;
            max-width: 200px;
            color: #fff;
            font-weight: 500;
            margin-bottom: 70px;
            @include masm {
                margin-bottom: 20px;
                max-width: none;
            }
        }
        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: auto;
        }
        &__used {
            span {
                display: block;
                line-height: 1.25;
                color: #fff;
                font-weight: 500;
            }
        }
        &__price {
            font-weight: 500;
            color: #fff;
            margin: 0;
        }
        &__bg {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -2;
            width: 100%;
            height: 100%;
            opacity: 1;
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__hover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            transition: opacity .3s ease-in-out;
            background: rgba(var(--theme-primary-color), .9);
            pointer-events: none;
            text-decoration: none;
            span {
                font-size: 40px;
                line-height: 1;
                color: #fff;
                font-weight: 700;
                text-decoration: none;
            }
        }
    }
    .projects-pagination {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        gap: 12px;
        button {
            width: 25px;
            height: 25px;
            padding: 0;
            border-radius: 5px;
            background: #fff;
            border: none;
            cursor: pointer;
            transition: .3s ease-in-out;
            border: 1px solid transparent;
            &.active {
                border-color: rgba(var(--theme-primary-color), 1);
                &:hover {
                    border-color: rgba(var(--theme-primary-color), 1);
                }
            }
            &:hover {
                border-color: rgba(var(--theme-primary-color), 0.3);
            }
        }
    }
</style>