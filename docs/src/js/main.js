const init = () => { 
	  const slots = LSinit("slots", slotTemplate);
	  	loadout(); 
	  },
	  loadout = () => { runApp(); };

const runApp = () => {
	const slots = parseLS("slots");
	const statBar = createEle("div"),
		  table = createEle("table");

	for (let i = 0; i < 3; i++) {
		const td = createEle("td"),
			  rod = createEle("div");

		rod.className = "rod";
		rod.innerHTML = "&nbsp;";

	    td.append(rod);

		for (let k = 0; k < 4; k++) {
			if (slots[i][k] === 0) {} else {
				const item = createEle("div");

				let w;

				w = 50 / (slots[i][k] / 1.5);

				item.setAttribute("data-index",slots[i][k]);
				item.className = "item";
				item.innerHTML = "&nbsp;";

				item.style.width = w + "%";

				td.append(item);
			}
			console.log(slots[i][k]);
		}

		table.append(td); 
	}

	statBar.className = "statBar";
	statBar.innerHTML = "Moves: " + moves;

	body.append(statBar,table);
};

const trackTable = (item) => {
	console.log(item);
};

window.onload = () => { init() };