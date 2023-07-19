import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
@Entity({
    name:'visita'
})
export class Visita{
    @PrimaryColumn({ name: 'correo' })
    correo: string;
    
    @Column({name:'estado'})
    estado : boolean
}