mobileNav.onshow=function(){
hmbMenu.clear()
hmbMenu.addItem("Dessert Voting")
hmbMenu.addItem("Describe You")
hmbMenu.addItem("Fav Excersises")
}
hmbMenu.onclick=function(s){
 // add code to check if user clicked the hamburger control to open it 
  if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
          case "Dessert Voting":
            ChangeForm(dessertVoting)
            break
          case "Describe You":
            ChangeForm(describeYou)
            break
          case "Fav Excersises":
            ChangeForm(changeExercises)
            break
            }
            }
            }



