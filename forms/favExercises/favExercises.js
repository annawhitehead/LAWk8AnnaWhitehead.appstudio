let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]

favExercises.onshow=function(){
 selExercises.clear()
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < exercises.length; i++)
        selExercises.addItem(exercises[i])
         for (i = 0; i < coreExercises.length; i++)
        selExercises.addItem(coreExercises[i])
}

Button1.onclick=function(){
let message = "You chose: "
for (i=0; i<selExercises.text.length; i++)
  message= message + selExercises.text[i] + "," 
  message=message.slice(0,-2)
  Label3.value=(message) + " ." + "those are the two core exercises"
}




/*
Button1.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    selExercises.value = s     // make dropdown show choice the user made
    Label3.value=(`You chose ${s} - those are the two core exercises. `)
  }
}
*/


/*
Button1.onclick=function(){
let message = "You chose: "
for (i=0; i<selExercises.text.length; i++)
  message= message + selExercises.text[i] + "," 
  message=message.slice(0,-2)
  Label3.value=(message) + " ." + "those are the two core exercises"
}
*/