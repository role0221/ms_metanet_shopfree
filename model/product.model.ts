import { Table, Column, Model, PrimaryKey, DataType, Default, UpdatedAt, CreatedAt, AutoIncrement } from 'sequelize-typescript';
import { ROW_STATUS } from '@/constants/status';

@Table({
    modelName: 'ms_shopfree_product',
    tableName: 'ms_shopfree_product',
},)

export class Product extends Model<Product> {

    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId: number;

    @Column({ type: DataType.STRING(250), allowNull: false })
    productName: string;

    @Default(0)
    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    price: number;

    @Column({ type: DataType.STRING(250), allowNull: true })
    category: string;

    @Default(0)
    @Column({ type: DataType.INTEGER, allowNull: false })
    quantity: number;

    @Default(ROW_STATUS.ACTIVE)
    @Column({ type: DataType.ENUM(...Object.values(ROW_STATUS)) })
    status: ROW_STATUS;

    @Default(null)
    @Column({ type: DataType.STRING(50) })
    updatedBy: string;

    @UpdatedAt
    @Default(null)
    @Column({ type: DataType.DATE })
    updatedAt: Date;

    @Column({ type: DataType.STRING(50) })
    createdBy: string;

    @CreatedAt
    @Column({ type: DataType.DATE, allowNull: false })
    createdAt: Date;

}

export const ProductAttributes = ['productId', 'productName', 'price', 'category', 'quantity', 'status', 'updatedBy', 'updatedAt', 'createdBy', 'createdAt'];
export const FilterProductAttributes = ['productId', 'productName', 'price', 'category', 'quantity'];