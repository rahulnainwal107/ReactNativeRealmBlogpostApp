import {Realm} from '@realm/react';

export class Blog extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  description!: string;
  isDeleted!: boolean;
  createdAt!: Date;

  static generate(title: string, description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title,
      description,
      isDeleted: false,
      createdAt: new Date(),
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Blog',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      description: 'string',
      isDeleted: {type: 'bool', default: false},
      createdAt: 'date',
    },
  };
}
