document.getElementById('result').onclick = getresult;
getresult();
function getresult() {
	let ice = document.getElementsByClassName('ice');
	let cost = 0;
	let weight = 0;
	for (let i = 0; i<ice.length; i++) {
		if (ice[i].checked) {
			cost += parseFloat(ice[i].getAttribute('data-cost'));
			weight += parseFloat(ice[i].getAttribute('data-weight'));
		}
	}
	document.getElementById('sum').innerHTML = cost;
	document.getElementById('weight').innerHTML = weight;

	var addcup = " ";
	if (weight>200){
			addcup = "Рекомендуем взять еще один стаканчик";
		};
	document.getElementById('big').innerHTML = addcup;
}
