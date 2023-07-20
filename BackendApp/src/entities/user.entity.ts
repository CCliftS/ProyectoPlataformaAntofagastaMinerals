import { Column, Entity } from "typeorm"
@Entity({
    name: 'users'
})
export class User {
    //Como le digo a typeorm que estoy ocupando una entidad
    @Column({
        primary:true,
    })
        
    correo : string 

    @Column()
    password : string 
    
    @Column()
    admin : boolean 

    validatePassword(password:string):boolean{
        return this.password == password;
    }
    getInfoToken(){
        return{
            correo : this.correo
            //No le puedo pasar datos sensibles
        }
    }
}
