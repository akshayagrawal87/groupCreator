(async () => {
	let data = await fetch(
		"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
	);

	let userData = await data.json();
	console.log(userData);

	let users = document.querySelector(".cardRow");

	for (let i = 0; i < userData.length; i++) {
		//         <div class="form-check">
		//   <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
		// </div>

		let card = document.createElement("div");
		card.classList.add("card");
		card.setAttribute("selected", false);

		let img = document.createElement("img");
		img.classList.add("card-img-top");
		img.setAttribute("src", userData[i].Image);
		img.setAttribute("alt", userData[i].name);

		let cardBody = document.createElement("div");
		cardBody.classList.add("card-body");

		let h5 = document.createElement("div");
		h5.classList.add("card-title");
		h5.innerText = userData[i].name;

		cardBody.appendChild(h5);

		card.appendChild(img);
		card.appendChild(cardBody);

		users.appendChild(card);

		card.addEventListener("click", (e) => {
			e.preventDefault();

			if (card.getAttribute("selected") == "false") {
				card.setAttribute("selected", "true");
				card.classList.add("selected");
			} else {
				card.setAttribute("selected", "false");
				card.classList.remove("selected");
			}
		});
	}

	let reset = document.querySelector(".reset");
	reset.addEventListener("click", (e) => {
		e.preventDefault();
		location.reload();
	});
})();
