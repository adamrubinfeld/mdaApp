import ModelImpl from './ModelImpl';

interface AmbulnaceI {

}

class Ambulnace extends ModelImpl<AmbulnaceI>{
    
    ambulance: AmbulnaceI;

    constructor(ambulance: AmbulnaceI){
        super();
        this.ambulance = ambulance;
    }
   
    create(): void {
        throw new Error('Method not implemented.');
    }

    read(): AmbulnaceI {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}