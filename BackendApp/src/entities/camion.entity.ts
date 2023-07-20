import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
@Entity({
    name:'camion'
})
export class Camion{
    @PrimaryColumn({ name: 'flota' })
    flota: string;

    @PrimaryColumn({name:'id_fase'})
    id_camion : string
}