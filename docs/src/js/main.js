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
	const cn = td.childNodes,
		  lc = td.lastChild;

	for (var v = 0; v < cn.length; v++) {
		cn[v].onclick = null;
		cn[v].style.cursor = "default";

	}

	setTimeout(()=>{
		if(lc.className === "item"){
			lc.style.cursor = "grab";
			lc.onclick = (e) => { return pickupItem(lc,e) };
		}
	},1);
};

const tdClicked = (tds,t) => {
	return function(){
		var bodyChildren = body.childNodes;
		for (var c = 0; c < bodyChildren.length; c++) {
			if(bodyChildren[c].className === "item"){
				var newItem = createEle("div");
				var lcw = bodyChildren[c].style.width,
    				plcw = lcw.split("%"),
    				nplcw = plcw[0] * 3;

				newItem.className = "item";
				newItem.innerHTML = "&nbsp;";
				newItem.style.width = nplcw + "%";
				newItem.style.position = "block";
				newItem.onclick = null;

				tds[t].append(newItem);

				deleteThis(bodyChildren[c]);
			};
		}
		if(!slots){
			var slots = parseLS("slots");
		}

		for (var d = 0; d < tds.length; d++) {
			tds[d].onclick = null;
			trackTable(tds[d],slots);
		}
	}
};

const pickupItem = (lc,e) => {
	var table = byTag("table"),
		tds = table.childNodes;
	
	followCursor.init(lc,e);
  	document.body.onmousemove = followCursor.run;
	setTimeout(() => {
		for (var t = 0; t < tds.length; t++) {
			var tdsCN = tds[t].childNodes;
			
			
			//todo: filter td onlick as null when 'lc' width is higher than the lastChild of each 'td'
			
			
			tds[t].onclick = tdClicked(tds,t);
			deleteThis(lc);
		}
	}, 100);
  	
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
    		nplcw = plcw[0] / 3;
 
      	s.style.width = nplcw + "%";
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

