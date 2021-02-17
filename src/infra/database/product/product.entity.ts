import { AutoMap } from "@automapper/classes";
import { AuditColumn } from "src/common/audit-column.entity";
import { Column, Entity } from "typeorm";

@Entity({name:'product'})
export class ProductEntity extends AuditColumn{
    @Column()
    @AutoMap()
    name:string;

    @Column()
    @AutoMap()
    price:number;
    
    @Column()
    @AutoMap()
    description:string;

    public setId(id:string) {
        this.id=id;
    }
}