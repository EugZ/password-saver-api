import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { RecordModel } from '../record/record.model';

export interface UserModel extends Base {}
export class UserModel extends TimeStamps {
	@prop({ unique: true })
	email: string;

	@prop()
	password: string;
}