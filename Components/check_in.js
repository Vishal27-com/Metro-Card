class Get_ticket{
    constructor(from,user,type,extra_charge,discount){
        this.USER=user.METRO_CARD_ID;
        this.TYPE=type;
        this.FROM=from;
        this.PRICE=TICKET_PRICE[type]-discount;
        this.EXTRA_CHARGE=extra_charge;
        this.DISCOUNT=discount;
    }
}
const TICKET_PRICE={
    ADULT:200,
    SENIOR_CITIZEN:100,
    KID:50
}

function check_in(id,type,from,users){
    for(let i=0;i<users.length;i++){
        let user=users[i]
        let extra_charge=0;
        let discount=0;
        if(user.METRO_CARD_ID===id){
            if(user.JOURNEY.length && user.JOURNEY.length%2!==0)discount=(TICKET_PRICE[type]*0.5)
            if(user.BALANCE>=TICKET_PRICE[type]){
                let new_ticket=new Get_ticket(from,user,type,extra_charge,discount);
                user.BALANCE=user.BALANCE-TICKET_PRICE[type]+discount
                user.JOURNEY.push(new_ticket);
                return new_ticket;
            }
            else{
                let required_amount=TICKET_PRICE[type]-user.BALANCE-discount;
                extra_charge=(required_amount*0.02)
                let new_ticket=new Get_ticket(from,user,type,extra_charge,discount);
                user.BALANCE=0;
                user.JOURNEY.push(new_ticket);
                return new_ticket;
            }
        }
    }
}



module.exports=check_in;