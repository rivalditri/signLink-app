import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "user",
})
export class Tes extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
})
    label!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    imgLink!: string;
}