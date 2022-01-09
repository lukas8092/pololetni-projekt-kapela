$(document).ready(function(){  
    var input = $("#year");
    var tableDiv = $(".tableChange");

    var years = [ 
    {year: "2020", places:[
        {town:"Praha",date:"5.7.2020",time:"20:00-24:00",place:"Club Praha"},
        {town:"Brno",date:"10.1.2020",time:"18:00-20:00",place:"Kvetinac"},
        {town:"Ostrava",date:"30.12.2020",time:"21:00-23:00",place:"Cafe"}
    ]},
    {year: "2021", places:[
        {town:"Anchorage",date:"4.3.2021",time:"17:00-20:00",place:"Club SinRock"},
        {town:"Fairbanks",date:"14.3.2021",time:"18:00-21:00",place:"Club Soda"},
        {town:"Kenai",date:"24.3.2021",time:"20:00-23:00",place:"The Bow"},
        {town:"Ketchikan",date:"7.4.2021",time:"19:00-22:00",place:"My Office"},
        {town:"Kotzebue",date:"17.4.2021",time:"20:00-23:00",place:"Lions Club"}
    ]},
    {year: "2022", places:[
        {town:"Cambridge",date:"5.10.2022",time:"15:00-18:00",place:"Club Rock"},
        {town:"London",date:"2.12.2022",time:"18:00-21:00",place:"Club Paper"}
    ]},
    {year: "2023", places:[
        {town:"No concerts",date:"all year",time:" ",place:" "},
    ]}
        
    ]
    
    input.click(function(){
        tableDiv.empty();
        var table = $("<table></table>");
        var tr = $("<tr><th>Town</th><th>Date</th><th>Time</th><th>Place</th></tr>");
        table.append(tr);
        var year;
        for(var x = 0;x < years.length;x++){
            if(input.val() == years[x].year){
                year = years[x];
            }
        }

        for(var x = 0;x < year.places.length;x++){
            var tr = $("<tr></tr>");
            var td = $("<td>"+year.places[x].town+"</td>");
            tr.append(td);
            td = $("<td>"+year.places[x].date+"</td>");
            tr.append(td);
            td = $("<td>"+year.places[x].time+"</td>");
            tr.append(td);
            td = $("<td>"+year.places[x].place+"</td>");
            tr.append(td);
            table.append(tr);
        }
        tableDiv.append(table); 
        calculateToBottom();
    });

    function calculateToBottom(){
        var heightOfScreen = $(window).height();        
        var mainHeight = $("main").height()
        var toEnd = heightOfScreen - mainHeight;
        var footer = $("footer");
        var final = toEnd-footer.height()-68;
        if(final > 1){
        footer.css("margin-top",final + "px");
        }
    }
});