import { AutoMap } from '@automapper/classes';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class WhoColumnEntity {
    @PrimaryGeneratedColumn('uuid')
    @AutoMap()
    id!: string;
    
    @Column({select: false})
    createdBy!: string;

    @Column({select: false})
    updatedBy!: string;

    @Column({select: false})
    createdOn!: Date;

    @Column({select: false})
    updatedOn!: Date;
}