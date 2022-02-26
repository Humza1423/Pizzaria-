name_of_student_array=[];
function submit() {
    var names_with_prefix=[];
    for(var i=1;i<=4;i++){
      var student_name=document.getElementById("name_of_the_student_"+i).value;
name_of_student_array.push(student_name);
    }
   console.log(name_of_student_array);
   var length=name_of_student_array.length;
   console.log(length);
   for(var j=0;j<length;j++){
       names_with_prefix.push("<h4>NAME-"+name_of_student_array[j]+"</h4>");
   } 
   console.log(names_with_prefix);
document.getElementById("display_name_with_commas").innerHTML=names_with_prefix;

var remove_commas=names_with_prefix.join("");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}