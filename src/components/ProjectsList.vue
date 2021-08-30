<template>
  <div 
    v-for="(project, index) in array"
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
    </div>
</template>

<script>
export default {
    name: 'ProjectsList',
    props: {
        array: {
            type: Array,
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
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 10px;
            background: rgba(var(--theme-primary-color), .5);
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
    }
</style>