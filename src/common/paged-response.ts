import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { SortingDirection } from './sorting-direction';
export class PagedResponse {
    @ApiProperty()
    @AutoMap()
    readonly pageNumber: number;

    @ApiProperty()
    @AutoMap()
    readonly pageSize: number;

    @ApiProperty()
    @AutoMap()
    readonly itemCount: number;

    @ApiProperty()
    @AutoMap()
    readonly pageCount: number;

    @ApiProperty()
    @AutoMap()
    readonly orderBy: string | SortingDirection;

    @ApiProperty()
    @AutoMap()
    readonly orderByPropertyName: string;
    @AutoMap()
    readonly items: any[];

    constructor(pageNumber:number,pageSize:number,orderBy:string|SortingDirection.DESC,orderByPropertyName:string,itemCount:number,items:any[]) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.itemCount = itemCount;
        this.orderBy=orderBy;
        this.orderByPropertyName=orderByPropertyName;
        this.pageCount = Math.ceil(itemCount / this.pageSize);
        this.items=items;
    }


}