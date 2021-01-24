import ModelImpl from './ModelImpl';

interface AmbulnaceI {

}

class Ambulnace extends ModelImpl<AmbulnaceI>{
    

    ambulnace: AmbulnaceI;

    constructor(ambulnace: AmbulnaceI){
        super();
        this.ambulnace = ambulnace;
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