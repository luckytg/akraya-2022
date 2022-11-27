
    //  creating companies
    var companies=[
        {  
            "name":"ss constructions",
            "origin":"kochi",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"s and t",
            "origin":"bangalore",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"relaince",
            "origin":"delhi",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"neighborhood creation",
            "origin":"mumbai",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"green concrete builder",
            "origin":"puna",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"My Commercial Construction",
            "origin":"puna",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Quality Building Supplies",
            "origin":"mysore",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Premium Contractors",
            "origin":"bhopal",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Quality Material",
            "origin":"goa",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Sunshine Build Group",
            "origin":"goa",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Remarkable Remodeling ",
            "origin":"khanpur",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Success Construction",
            "origin":"jaipur",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Base Mountain Construction",
            "origin":"delhi",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Boutique Builders",
            "origin":"bangalore",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Green Power Home Builder",
            "origin":"delhi",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Instant Designers",
            "origin":"kochi",
            "description":"we sell x y z materials  contact us at xyz@gmail.comwe sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Dockside Stone",
            "origin":"gao",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Evolution Contractors",
            "origin":"goa",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
        {
            "name":"Refined Homes ",
            "origin":"kochi",
            "description":"we sell x y z materials  contact us at xyz@gmail.com",
            "price":""
        },
    ]
    
// result show 
    function display(n) {
        var res= document.getElementById("search-list");
        if (n<=-1||n>=100) {
            res.style.display="none";
            
        }

        else{
            res.style.display="flex";
            res.style.flexDirection="column";
            res.style.justifyContent="center";
            res.style.padding="30px 0px 0px 0px";
        }
    }


    // adding new element to object 
    var size=19;
    function addnew() {
        var name=document.getElementById("name");
        var addrs=document.getElementById("addrs"); 
        companies[size].name=name;
        companies[size].addrs=addrs;
        console.log(companies[size].name);
        size=size+1;
        console.log("rrtrtr")
    }

    var index;
   function search(){
    var input =document.getElementById("search").value;

    // searching operation
    var searchIndex=-20;
    var searchIndex = companies.findIndex((comp) => comp.name==input);
    display(searchIndex);

    // op
    console.log(`${companies[searchIndex].name}`);
    console.log(`${companies[searchIndex].origin}`);
    console.log(`${companies[searchIndex].description}`);
    console.log(searchIndex);
    index=searchIndex;
    console.log(index);

    
    // op in html 
    document.getElementById("namecmp").innerHTML=companies[index].name;
    document.getElementById("origin").innerHTML=companies[index].origin;
    document.getElementById("description").innerHTML=companies[index].description;
    document.getElementById("###").innerHTML=companies[index].name;
    
   }
   
