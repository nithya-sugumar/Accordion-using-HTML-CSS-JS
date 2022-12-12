    function myFunction()
    {
                    var x = document.getElementById("myDIV");
                    var y = document.getElementById("myDIV2");
                    var z = document.getElementById("myDIV3");
                    var a=document.getElementById("img_first");
                    var b=document.getElementById("img_second");
                    var c=document.getElementById("img_third");

                    if (x.style.display === "none"){
                        x.style.display = "block";
                        a.style.display="block";

                        y.style.display="none";
                        b.style.display="none";
                        c.style.display="none";
                        z.style.display="none";
                    }
                    else {
                        x.style.display = "none";
                      }

    }


    function fun_non_veg() {
                      var y = document.getElementById("myDIV2");
                      var x = document.getElementById("myDIV");
                    var z = document.getElementById("myDIV3");
                        var a=document.getElementById("img_first");
                        var b=document.getElementById("img_second");
                    var c=document.getElementById("img_third");

                      if (y.style.display === "none") {
                        y.style.display = "block";
                        b.style.display="block";
                        x.style.display= "none";
                        a.style.display="none";
                        c.style.display="none";
                        z.style.display="none";


                      } else {
                        y.style.display = "none";
                      }
                    }


    function fun_burger() {
                      var x = document.getElementById("myDIV");
                      var y = document.getElementById("myDIV2");
                    var z = document.getElementById("myDIV3");
                        var a=document.getElementById("img_first");
                        var b=document.getElementById("img_second");
                    var c=document.getElementById("img_third");

                      if (z.style.display === "none") {
                        z.style.display="block";
                        c.style.display="block";
                        x.style.display = "none";
                        y.style.display="none";
                        a.style.display="none";
                        b.style.display="none";
                        } else {
                        z.style.display = "none";
                      }
                    }