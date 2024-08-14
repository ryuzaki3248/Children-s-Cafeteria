document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('js-drawerBtn').addEventListener('click', function() {
			var drawerNav = document.getElementById('drawerNav');
			var isExpanded = this.getAttribute('aria-expanded') === 'true';

			if (isExpanded) {
					drawerNav.classList.remove('show');
					this.setAttribute('aria-expanded', 'false');
			} else {
					drawerNav.classList.add('show');
					this.setAttribute('aria-expanded', 'true');
			}
	});
});
