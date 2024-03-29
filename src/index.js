// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import Vue from 'vue';
import Badge from './components/Badge.vue';

const version = '1.10.1';

const compatible = (/^2\./).test(Vue.version);
if (!compatible) {
	Vue.util.warn('VueBadge ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

export function install(Vue/* , options */) {
	if (install.installed) {
		return;
	}
	install.installed = true;
	Vue.component('Badge', Badge);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default Badge;
