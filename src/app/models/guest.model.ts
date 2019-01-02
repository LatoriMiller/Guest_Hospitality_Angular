//Model that represents the data
class Guest {
    _id: string;
    name: string;
    roomSize: string;
    roomNum: string;
    payment: string;
    numNight: string;
    date: Date;
    status: string;
//this creates a blank to do
    constructor(){
        this.name = ""
        this.roomSize = ""
        this.roomNum = ""
        this.payment = ""
        this.numNight = ""
        this.date = new Date()
        this.status = ""
    }
}

export default Guest;