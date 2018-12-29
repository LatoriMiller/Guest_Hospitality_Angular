//Model that represents the data
class Guest {
    _id: string;
    name: string;
    roomSize: string;
    roomNum: Number;
    payment: string;
    numNight: Number;
    date: Date;
    status: string;
//this creates a blank to do
    constructor(){
        this.name = ""
        this.roomSize = ""
        this.roomNum = 0
        this.payment = ""
        this.numNight = 0
        this.date = new Date()
        this.status = ""
    }
}

export default Guest;