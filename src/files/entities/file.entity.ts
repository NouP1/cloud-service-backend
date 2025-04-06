import { UserEntity } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum FileType {
    PHOTOS = 'photos',
    TRASH = 'trash',
}

@Entity('files')
export class FileEntity {

    @PrimaryGeneratedColumn()
    id: number;  // Автоинкрементируемый ID

    @Column()
    filename: string;

    @Column()
    originalName: string;

    @Column()
    size: number;

    @Column()
    mimeType: string;

    @ManyToOne(() => UserEntity, user => user.files)  // Исправлено на 'files'
    user: UserEntity;

    @DeleteDateColumn()
    deletedAt?: Date;
}