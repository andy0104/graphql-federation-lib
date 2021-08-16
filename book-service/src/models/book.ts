import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import BookAuthor from "./book-author";

class Book extends Model {
  book_id!: string;
  book_title!: string;
  book_genre!: string;
  dateDeleted?: Date;
}

Book.init({
  book_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  book_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  book_genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateDeleted: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'book',
  timestamps: true,
  underscored: false
});

Book.hasMany(BookAuthor, {
  foreignKey: 'book_id',
  as: 'book_author'
});

export default Book;