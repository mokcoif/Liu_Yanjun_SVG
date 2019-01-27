(() => {
	var badge = document.querySelector('#badge');

	// this is a one to many selection (gets a colection of elements)
	var allTheBadges = document.querySelectorAll('.isabadge');

	// what do we want it to do
	function logMyId() {
		// log some stuff to the dev tools
		console.log(this.id)
		//debugger;
	}

		// how do we want to do that?
		// 1 to 1 event handing
	badge.addEventListener("click", logMyId);

	allTheBadges.forEach(currentbadge => currentbadge.addEventListener('click', logMyId));
})();