import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class Author extends Model {
  author_id!: string;
  author_name!: String;
  author_email!: String;
  author_phone?: String;
  dateDeleted?: Date;
}

Author.init({
  author_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  author_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateDeleted: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'author',
  timestamps: true,
  underscored: false
});

export default Author;