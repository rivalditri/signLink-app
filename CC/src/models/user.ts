import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "user",
})
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
})
    username!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;
}