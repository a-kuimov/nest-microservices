import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userId: number;
}
