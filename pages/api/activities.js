import database from 'database/database';
import ValidateObject from 'libraries/global/Validate';
import ActivitiesSchema from 'models/activities.schema';

export default async function API(req, res) {
	const { method } = req;
	await database();
	switch (method) {
		case 'GET':
			try {
				const activities = await ActivitiesSchema.find();
				res.status(200).json({ data: activities });
			} catch ({ message }) {
				res.status(400).json({ error: message });
			}
			break;
		case 'POST':
			try {
				const body = await ValidateObject(req.body, ['activities']);
				const activities = new ActivitiesSchema(body);
				await activities.save();
				res.status(200).json({ data: activities });
			} catch ({ message }) {
				res.status(400).json({ error: message });
			}
			break;
		case 'PUT':
			try {
				const { _id } = req.body;
				const body = await ValidateObject(req.body, ['activities']);
				const activities = await ActivitiesSchema.findOneAndUpdate({ _id }, body, { 
					new: true, 
				});
				res.status(200).json({ data: activities });
			} catch ({ message }) {
				res.status(400).json({ error: message });
			}
			break;
		case 'DELETE':
			try {
				const { _id } = req.body;
				await ActivitiesSchema.findOneAndDelete({ _id });
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
