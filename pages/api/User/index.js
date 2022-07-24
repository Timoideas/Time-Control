import database from 'database/database';
import ValidateObject from 'libraries/global/Validate';
import UserSchema from 'models/user.schema';

export default async function API(req, res) {
	const { method } = req;
	await database();
	switch (method) {
		case 'GET':
			try {
				const user = await UserSchema.find();
				res.status(200).json({ data: user });
			} catch ({ message }) {
				res.status(400).json({ error: message });
			}
			break;
		case 'POST':
			try {
				const body = await ValidateObject(req.body, ['user']);
				const user = new UserSchema(body);
				await user.save();
				res.status(200).json({ data: user });
			} catch ({ message }) {
				res.status(400).json({ error: message });
			}
			break;
		case 'PUT':
			try {
				const { _id } = req.body;
				const body = await ValidateObject(req.body, ['user']);
				const user = await UserSchema.findOneAndUpdate({ _id }, body, { 
					new: true, 
				});
				res.status(200).json({ data: user });
			} catch ({ message }) {
				res.status(400).json({ error: message });
			}
			break;
		case 'DELETE':
			try {
				const { _id } = req.body;
				await UserSchema.findOneAndDelete({ _id });
				res.status(200).json({ ok: true });
			} catch ({ message }) {
				res.status(400).json({ error: message });
			}
			break;
		default:
			res.status(405).json({
				message: 'Method not allowed',
			});
			break;
	}
}
