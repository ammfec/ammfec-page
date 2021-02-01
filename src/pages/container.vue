<template>
    <div>
        <HeroPage />
        <Information />
        <SectionWeMake />
        <Contact />
    </div>
</template>

<script>
import HeroPage from './hero'
import Information from './information'
import SectionWeMake from './section-we-make'
import Contact from './contact'

export default {
    components: {
        Contact,
        HeroPage,
        Information,
        SectionWeMake
    }
}
</script>
