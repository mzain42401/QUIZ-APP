var indexnumber = 0;
var scor = 0;
var percentage=0; 
var a = [{
    q: "Q No.1- Which Australian bowler took 195 wickets in 36 matches against England _____ ?",
    ca1: "Shane Warne",
    option: ["Brett Lee", "Dennis Lillee", "Shane Warne", "Glenn McGrath"]
},

{
    q: "Q No.2- Who was the only Pakistani who remained not out during Anil Kumble's 10 wicket haul in 1999_____ ?",
    ca2: "Waqar Younis",
    option: ["Shoaib Akhter", "Waqar Younis", "Mushtaq Ahmed", "Wasim Akram"]
},
{
    q: "Q No.3- Which Pakistani cricketer scored 1788 Test runs in 2006 _____ ?",
    ca3: "Mohammad Yousuf",
    option: ["Ijaz Ahmed", "Saeed Anwar", "Inzamam-ul-Haq", "Mohammad Yousuf"]
},
{
    q: "Q No.4- Who became the first batsman to score 100 sixes in Test cricket _____ ?",
    ca4: "Adam Gilchrist",
    option: ["Adam Gilchrist", "Chris Gayle", "Shahid Afridi", "Virender Sehwag"]
},
{
    q: "Q No.5- Who is the only batsman to have scored 300, 400 and 500 runs in first class cricket _____?",
    ca5: "Brian Lara",
    option: ["Sachin Tendulkar", "Brian Lara", "Ricky Ponting", "Azhar Ali"]
},
{
    q: "Q No.6- Who is the only Indian cricketer to be part of both the 300 run partnerships in One Day Internationals_____ ?",
    ca6: "Rahul Dravid",
    option: ["Sachin Tendulkar", "Rahul Dravid", "Virender Sehwag", "Virat Kholi"]
},
{
    q: "Q No.7- Who is the 4th cricketer to score 10,000 runs in the ODI International cricket_____ ?",
    ca7: "Sanath Jayasuriya",
    option: ["Hashim Amla", "Rahul Dravid", "Sanath Jayasuriya", "Sachin Tendulkar"]
},
{
    q: "Q No.8- Name the first person to dismissed by the third umpire _____ ?",
    ca8: "Sachin Tendulkar",
    option: ["Imran Khan", "Rameez Raja", "Sachin Tendulkar", "Javed Miandad"]
},
{
    q: "Q No.9- Who used first DRS in cricket_?",
    ca9: "India",
    option: ["England", "India", "Australia", "Pakistan"]
},
{
    q: "Q No.10- When was the Ashes first played_?",
    ca10: "1882",
    option: ["2015", "1886", "1882", "1998"]
},


]


// sdf.style.display = "none"
var text = document.getElementById("mz")

//function============================================================================

function aaa() {

    text.innerHTML = (`
    <br>
    <h2> QUIZ APPLICATION</h2>
    <h3> MZ DEVELOPER</h3> 
    <br><br>
    <div class='main'>
    <div class="hh"> ${a[indexnumber].q}</div>
    
    <div class="option">
    <div><input class="xx" name="q1" id="za" type="radio"><label for="za">${a[indexnumber].option[0]}</label></div><br>
    <div><input class="xx" name="q1" id="sa" type="radio"><label for="sa">${a[indexnumber].option[1]}</label></div><br>
    <div><input class="xx" name="q1" id="ac" type="radio"><label for="ac">${a[indexnumber].option[2]}</label></div><br>
    <div><input class="xx" name="q1" id="wq" type="radio"><label for="wq">${a[indexnumber].option[3]}</label></div><br>
    </div>
    </div>
    `)
    var sdf = document.getElementById("ff")
    sdf.style.display = "inline"
    var cd = document.getElementById("fz")
    cd.style.display = "none"
    var qqq = document.getElementById("wwww")
    qqq.style.display = "none"




}
// var sdf = document.getElementById("ff")
// sdf.style.display = "none"
//function==================================================================



function aaq() {
indexnumber++
    text.innerHTML = (`
    <br>
    <h2> QUIZ APPLICATION</h2>
    <h3> MZ DEVELOPER</h3> 
    <br><br>
    <div class='main'>
    <div class="hh"> ${a[indexnumber].q}</div>
    
    <div class="option">
    <div><input class="xx" name="q1" id="za" type="radio"><label  for="za">${a[indexnumber].option[0]}</label></div><br>
    <div><input class="xx" name="q1" id="sa" type="radio"><label for="sa">${a[indexnumber].option[1]}</label></div><br>
    <div><input class="xx" name="q1" id="ac" type="radio"><label for="ac">${a[indexnumber].option[2]}</label></div><br>
    <div><input class="xx" name="q1" id="wq" type="radio"><label for="wq">${a[indexnumber].option[3]}</label></div><br>
    </div>
    </div>
    `)
if (indexnumber === 9) {
var w = document.getElementById("fg")
w.style.display = "inline";
var qq = document.getElementById("ff")
qq.style.display = "none";}



   
    if(a[0].option[2].checked==true){
        scor++ 
        alert("zain ali")
    }
    var question2=a[1].option[1];
    if(question2.checked==true){
        scor++ 
      }
    var question3=a[2].option[3];
    if(question3.checked==true){
        scor++ 
    }
    var question4=a[3].option[0];
    if(question4.checked==true){
        scor++ 
    }
    var question5=a[4].option[1];
    if(question5.checked==true){
        scor++ 
    }
    var question6=a[5].option[1];
    if(question6.checked==true){
        scor++ 
    }
    var question7=a[6].option[2];
    if(question7.checked==true){
        scor++ 
    }
    var question8=a[7].option[2];
    if(question8.checked==true){
        scor++ 
    }
    var question9=a[8].option[1];
    if(question9.checked==true){
        scor++ 
    }
    var question10=a[9].option[2];
    if(question10.checked==true){
        scor++ 
        
    }
    percentage = scor/10*100;
}


//score function======================================================================
function abc() {

    
    
    
        Swal.fire({title: 'Your Score is ' + scor + '/10' + " and your percentage is " + percentage + "%",showClass: {popup: 'animate__animated animate__fadeInDown'},hideClass: {popup: 'animate__animated animate__fadeOutUp'}})
        
    }
    
// var aa=document.getElementById("zain")
// if(aa.checked=true){
//     alert("zasik")
// }
