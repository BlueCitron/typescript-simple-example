import Flyable from './Flyable';

class Machine implements Flyable{

    name : string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): void {
        console.log(`${this.name} is operating. Enemies are going to dead.`);
    }
}

export default Machine;