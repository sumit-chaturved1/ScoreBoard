let homeTxt=document.getElementById("home-point-txt")
let guestTxt=document.getElementById("guest-point-txt")
let resultTxt=document.getElementById("result-txt")
resultTxt.textContent="PENDING RESULT"
homeTxt.textContent=0
guestTxt.textContent=0
let result
function plusOneHome(){
	homeTxt.textContent++
}
function plusTwoHome(){
	homeTxt.textContent=Number(homeTxt.textContent)+2
}
function plusThreeHome(){
	homeTxt.textContent=Number(homeTxt.textContent)+3
}
function plusOneGuest(){
	guestTxt.textContent++
}
function plusTwoGuest(){
	guestTxt.textContent=Number(guestTxt.textContent)+2
}
function plusThreeGuest(){
	guestTxt.textContent=Number(guestTxt.textContent)+3
}
function end(){
	let homePoint=Number(homeTxt.textContent)
	let guestPoint=Number(guestTxt.textContent)
	if(homePoint==guestPoint){
		resultTxt.textContent="DRAW"
		return
	}else if(homePoint>guestPoint){
		result="HOME"
		pointDiff=homeTxt.textContent-guestTxt.textContent
	}else{
		result="GUEST"
		pointDiff=guestTxt.textContent-homeTxt.textContent
	}
	//alert(pointDiff)
	resultTxt.textContent=result+" TEAM WON BY "+pointDiff+" POINT"
}
function reset(){
	resultTxt.textContent="PENDING RESULT"
	homeTxt.textContent=0
	guestTxt.textContent=0
}