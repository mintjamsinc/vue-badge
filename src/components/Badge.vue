<!-- Copyright (c) 2021 MintJams Inc. Licensed under MIT License. -->

<template>
	<div class="mi-badge bg-black-50">
		<div v-if="hasAvatar" class="pr-2 d-inline-block"><Avatar :authorizable="authorizable" class="text-white"/></div>
		<div v-if="!hasAvatar" class="pl-3 d-inline-block"></div>

		<div class="label font-weight-semibold text-white text-shadow text-truncate d-inline-block">{{labelText}}</div>

		<div class="pr-3 d-inline-block"><slot></slot></div>
	</div>
</template>

<script>
import Avatar from '@mintjamsinc/vue-avatar';

export default {
	props: {
		'authorizable': {
			'type': Object,
		},
		'label': {
			'type': String,
		},
	},
	components: {
		Avatar,
	},
	data() {
		return {
		};
	},
	computed: {
		authorizableInstance() {
			let vm = this;
			if (vm.authorizable) {
				if (vm.authorizable.$data) {
					return vm.authorizable;
				}
				return window.Webtop.userClient.newAuthorizable(vm.authorizable);
			}
			return undefined;
		},
		hasAvatar() {
			return !!this.authorizable;
		},
		labelText() {
			let vm = this;
			if (vm.label) {
				return vm.label;
			}
			if (vm.authorizable) {
				return vm.authorizableInstance.fullName || vm.authorizableInstance.id;
			}
			return '';
		},
	}
}
</script>
