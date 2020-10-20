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
		}

		table.append(td);
		trackTable(td,slots);
	}

	statBar.className = "statBar";
	statBar.innerHTML = "Moves: " + moves;

	body.append(statBar,table);
};

const trackTable = (td,slots) => {
	const lc = td.lastChild;
	if(lc.className === "item"){
		lc.style.cursor = "grab";
		lc.onclick = (e) => pickupItem(td,lc,e);
	}
};

const tdClicked = (td) => {
	return function(){
		var bodyChildren = body.childNodes; 
		console.log(bodyChildren);
	}
};

const pickupItem = (td,lc,e) => {
	lc.style.display = "none";
	followCursor.init(lc,e);
  	document.body.onmousemove = followCursor.run;
}

var followCursor = (function() {
  var s = document.createElement('div');

  s.className = "item";
  s.innerHTML = "&nbsp;";
  s.style.position = 'absolute';
  s.style.border = '1px solid red';

  return {
    init: function(lc,e) {
    	var lcw = lc.style.width,
    		plcw = lcw.split("%"),
    		nplcw = plcw[0] * 4;
 
      	s.style.width = nplcw + "px";
      	s.style.left  = (e.clientX + 15) + 'px';
      	s.style.top = (e.clientY + 15) + 'px';

      	document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      s.style.left  = (e.clientX + 15) + 'px';
      s.style.top = (e.clientY + 15) + 'px';

    }
  };
}());

window.onload = () => { init() };

