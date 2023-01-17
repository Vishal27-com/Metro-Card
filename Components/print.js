function print_summary(tickets){
    let central=station_summary("CENTRAL",tickets)
    console.log("TOTAL_COLLECTION","CENTRAL",central.total,central.discount);
    print_passenger_summary(central.adult,central.kid,central.senior_citizen);
    let airport=station_summary("AIRPORT",tickets)
    console.log("TOTAL_COLLECTION","AIRPORT",airport.total,airport.discount);
    print_passenger_summary(airport.adult,airport.kid,airport.senior_citizen);
}

function station_summary(station,tickets){
    let total=0;
    let discount=0;
    let adult=0;
    let senior_citizen=0;
    let kid=0;
    for(let i=0;i<tickets.length;i++){
        let ticket=tickets[i];
        if(ticket.FROM===station){
            total+=ticket.PRICE+ticket.EXTRA_CHARGE;
            discount+=ticket.DISCOUNT
            if(ticket.TYPE==="ADULT"){
                adult=adult+1;
            }
            if(ticket.TYPE==="SENIOR_CITIZEN"){
                senior_citizen=senior_citizen+1;
            }
            if(ticket.TYPE==="KID"){
                kid=kid+1;
            }
        }
    }

return {
    total,adult,senior_citizen,kid,discount
}
}
function print_passenger_summary(adult,kid,senior_citizen){
    console.log("PASSENGER_TYPE_SUMMARY")
    if(adult){
        console.log("ADULT",adult)
    }
    if(kid){
        console.log("KID",kid)
    }
    if(senior_citizen){
        console.log("SENIOR_CITIZEN",senior_citizen)
    }
}



module.exports=print_summary;