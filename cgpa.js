
        $(document).ready(function(){
            $("#sub").click(function(){
                $(".main").addClass("hide");
                $(".list").removeClass("hide");
            });
            $(".sub12").click(function(){
                $(".list").addClass("hide");
                $(".result").removeClass("hide");
            });

});
var k,gotsum=0,totsum=0,cgpa=0;
var names=new Array();
var credit=new Array();
var grade=new Array();
var tot=new Array();
var num=new Array();
var subtot=new Array();
        function func(){
k=parseInt(document.getElementById("subcount").value);
for(var i=0;i<k;i++){
    var x = document.createElement("INPUT");
    var y=document.createElement("INPUT");
    var z= document.createElement("INPUT");
    var a = document.createElement("p");
    var b=document.createElement("p");
    var c= document.createElement("p");

    var h="subject"+i;
    var p="credit"+i;
    var j="grade"+i;
x.setAttribute("type", "text");
y.setAttribute("type", "text");
z.setAttribute("type", "text");
x.setAttribute("id",h);
y.setAttribute("id",p);
z.setAttribute("id",j);
x.setAttribute("placeholder","Enter Subject "+(i+1)+" Name");
y.setAttribute("placeholder", "Enter Subject "+(i+1)+" Credits");
z.setAttribute("placeholder", "Enter Subject "+(i+1)+" Grade");
document.getElementById("list").appendChild(x);
document.getElementById("list").appendChild(y);
document.getElementById("list").appendChild(z);

}

var pp=document.createElement("div");
pp.setAttribute("id", "but");
pp.setAttribute("class", "but");
document.getElementById("list").appendChild(pp);
var oo=document.createElement("BUTTON");
var ttt = document.createTextNode("Calculate");
oo.appendChild(ttt); 
oo.setAttribute("value", "calculate");
oo.setAttribute("id", "sub12");
oo.setAttribute("class", "sub12");
oo.setAttribute("onclick", "calc()");
document.getElementById("but").appendChild(oo);
}
function calc(){
   
    for (var i=0;i<k;i++){
        names[i]=document.getElementById("subject"+i).value;
        credit[i]=document.getElementById("credit"+i).value;
        grade[i]=document.getElementById("grade"+i).value;
        tot[i]=parseInt(credit[i])*10;
        if(grade[i]=='s'||grade[i]=='S')
	{
		num[i]=10;
	}
	else if(grade[i]=='a'||grade[i]=='A')
	{
		num[i]=9;
	}
		else if(grade[i]=='b'||grade[i]=='B')
	{
		num[i]=8;
	}
	else if(grade[i]=='c'||grade[i]=='C')
	{
		num[i]=7;
	}
	else if(grade[i]=='d'||grade[i]=='D')
	{
		num[i]=6;
	}	
	else
	{
		num[i]=0;
    }
    subtot[i]=parseInt(credit[i])*num[i];
    tot[i]=10*parseInt(credit[i]);
    }
    for(var i=0;i<k;i++){
        gotsum=subtot[i]+parseInt(gotsum);
        totsum=tot[i]+parseInt(totsum);
    }
    cgpa=(parseInt(gotsum)*10/parseInt(totsum)).toFixed(2);


}
    