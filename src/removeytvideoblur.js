// Github: https://github.com/WaviestBalloon/RemoveYouTubeVideoBlur
function findTheAnnoyance() {
	const cines = document.querySelectorAll("[id^=cinematics]");
	for (var i in cines) {
		if (cines[i]?.id === "cinematics") {
			console.log("Found it! Removing ElementID cinematics");
			document.getElementById("cinematics").remove();
		}
	}
}

document.addEventListener("load", findTheAnnoyance, true);
findTheAnnoyance();
