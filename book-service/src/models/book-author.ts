import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class BookAuthor extends Model {
  book_author_id!: string;
  book_id!: string;
  author_id!: string;
  dateDeleted?: Date;
}

BookAuthor.init({
  book_author_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  book_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateDeleted: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'book_author',
  timestamps: false,
  underscored: false
});

export default BookAuthor;