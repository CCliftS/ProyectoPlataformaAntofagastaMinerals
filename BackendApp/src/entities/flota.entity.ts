import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
@Entity({
    name:'flota'
})
export class Flota{
    @PrimaryColumn({ name: 'nombre_flota' })
    nombre_flota: string;
}