import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;
}

export { Report };
