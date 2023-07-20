    import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Rajo } from "./rajo.entity"
@Entity({
    name:'factor_carga'
})
export class FactorCarga{
    @PrimaryColumn({ type: 'date'})
    fecha_inicio : Date

    @PrimaryColumn({ type: 'date'})
    fecha_termino : Date

    @ManyToOne( ()=> Rajo, { eager: true })
    @JoinColumn({name:'rajo', referencedColumnName:'nombre_rajo'})
    rajo : string;
    
    @Column({type:'float'})
    tonelaje: number
}