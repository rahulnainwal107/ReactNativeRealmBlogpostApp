import Realm from 'realm';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ViewStyle} from 'react-native';

export type AddBlogProps = {
  title: string;
  description: string;
};

export type BlogFormProps = {
  buttonName: string;
  onPress: (formInput: AddBlogProps) => void;
  initialValue: AddBlogProps;
};

export type BlogProp = {
  _id: Realm.BSON.ObjectId;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
};

export type BlogItemProps = {
  item: BlogProp;
  onPressDelete: () => void;
  updateBlog: () => void;
};

export type UpdateBlogContainerProps = NativeStackScreenProps<
  InitialStackParamList,
  'UpdateBlogContainer'
>;

export type BlogsContainerProps = NativeStackScreenProps<
  InitialStackParamList,
  'Blog'
>;

export type AddBlogContainerProps = NativeStackScreenProps<
  InitialStackParamList,
  'AddBlogContainer'
>;

export type ButtonComponentProps = {
  name: string;
  onPress?: () => void;
  customStyle?: ViewStyle;
};

export type CustomTextInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
};

export type HeaderIconProps = {
  showIcon: boolean;
  onPress?: () => void;
};

export type ListEmptyComponentProps = {
  onPress?: () => void;
};

export type BlogItemProp = {
  _id: Realm.BSON.ObjectId;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
};

export type InitialStackParamList = {
  Blog: undefined;
  AddBlogContainer: undefined;
  UpdateBlogContainer: {
    id: Realm.BSON.ObjectId;
  };
};

export type BlogRenderItemProps = {
  item: BlogItemProp;
  index: number;
};
