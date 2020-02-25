function bgChanger() {
	console.log("All systems works normal");
	console.log(this.scrollY);
}

window.addEventListener("scroll", bgChanger);