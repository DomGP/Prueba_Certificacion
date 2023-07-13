import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark:false,
        themes: {
            light: {
                primary: '#E84855',
                secondary: '#403F4C',
                terciary:'#8AA29E',
                info:'#8693AB'
                
            },
            dark: {
                primary: colors.lime.darken2,
            },
        },
    },
});
