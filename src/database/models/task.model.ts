import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { UUIDTypes } from 'uuid';

@Table({ tableName: 'tasks', timestamps: true })
export class Task extends Model<Task> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id: UUIDTypes;

  @Column
  title: string;

  @Column
  description: string;

  @Column({ defaultValue: false })
  status: boolean;
  
}
