import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// reach out to our sql database at startup and make sure there is a users table
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}

export { User };
