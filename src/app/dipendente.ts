
export class Dipendente{
    
    constructor(
       public id : number,
       public nome: string,
       public cognome: string,
       public email: string,
       public dataDiNascita: Date

    ){}
    
    public getId() : number {
        return this.id
    }
    
    public setId() {
        this.id = Math.random();
    }
    
    public getNome() : string {
        return this.nome
    }
    
    public setNome(v : string) {
        this.nome = v;
    }
    
    public getCognome() : string {
        return this.cognome
    }
    
    public setCognome(v : string) {
        this.cognome = v;
    }
    
    public getEmail() : string {
        return this.email
    }
    
    public setEmail(v : string) {
        this.email = v;
    }
    
    public getNascita() : Date {
        return this.dataDiNascita
    }
     
    public setNascita(v : Date) {
        this.dataDiNascita = new Date(v);
    }
    
    public getNomeCompleto(){
        return `${this.nome} ${this.cognome}`
    }
    
}