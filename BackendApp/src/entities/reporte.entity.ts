import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { Rajo } from "./rajo.entity";
import { Fase } from "./fase.entity";
@Entity({
    name:'reporte_diario'
})
export class Reporte{
    @PrimaryColumn({ type: 'date'})
    fecha : Date

    @Column()
    rajo: string;

     @Column()
    fase: string;
    /*
    @ManyToOne(()=>Rajo, {eager:true})
    @JoinColumn({name:'rajo',referencedColumnName:'nombre_rajo'})
    rajo : string;

    @ManyToOne(()=>Fase, {eager:true})
    @JoinColumn({ name:'fase',referencedColumnName:'id_fase'})
    fase : string*/
    
    @Column({type:'float'})
    extraccion_mineral : number

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