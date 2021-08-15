import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class Genre extends Model {
  genre_id!: string;
  genre_name!: String;
  dateDeleted?: Date;
}

Genre.init({
  genre_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  genre_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateDeleted: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'genre',
  timestamps: true,
  underscored: false
});

export default Genre;