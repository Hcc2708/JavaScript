document.getElementsByClassName("name")[0].innerHTML = "<h1>Hello Hemchand Chandravanshi<br> how are you?<h1>"
    
    document.getElementsByTagName('h1')[0].style.color = "blue"
    document.getElementsByTagName('h1')[0].style.border = "2px solid red"
    document.getElementsByTagName('h1')[0].style.boxShadow = "5px 10px 5px grey"
    document.write("this is content by script")
    //javascript console API
    console.log("console API")
    console.error("this is error")
    console.warn("this is warning")
    // console.clear() will clear the console
    //console.assert(expression, massage)
    console.assert(4==6, "this is not true")
    console.assert(document.getElementById("MyElement"),
            "There is no element with the ID 'MyElement'");
    // console.log("this is working fine")
    //javascript variables : Containers to store data values,
    //identifiers refers to memory where the values are stored
    var number = 26;
    var number2 = 27;
    var number  = 50;
    console.log(number+number2);
    /* Multi
    line
    comment*/

    //DAta types in javascript

    // numbers
    var num = 24;
    var num2 = 27.5;
    console.log(typeof(num), typeof(num2))
    //string 
    var s = "raj"
    var s2 = 'raj'
    // note : there is no character type in javascript only string is there unlike c++, java
    //object
    var obj = {
        1 : "hemchand", 
        2 : "raj",
        3 : "khush"
    }
    console.log(obj)
    // boolean
    // var a = false;
    // var b = true;
    // console.log(a, b);
    // undefined 
    var a;
    console.log(a);
    var b = undefined;
    console.log(b);
    // null
    var c =null;
    console.log(c);
    // arrays

