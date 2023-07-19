import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({
    name: 'datos_plan'
})
export class DatosPlan{
    @PrimaryColumn({type:'date'})
    fecha: Date

    @PrimaryColumn()
    rajo:string

    @Column({type:'float'})
    extraccion_mineral : number

    @Column({type:'float'})
    extraccion_oxidos_mixtos : number

    @Column({type:'float'})
    extraccion_lastre : number

    @Column({type:'float'})
    total_extraccion : number

    @Column({type:'float'})
    remanejo : number

    @Column({type:'float'})
    movimiento_total : number

    @Column({type:'float'})
    chancado : number
}
