
function appendDeleteBtn(tr){
	let newTd = document.createElement('td');
	newTd.innerText = 'X';
  newTd.addEventListener("click", (e)=>{
	e.currentTarget.parentNode.remove();
  })

  tr.append(newTd);
}
