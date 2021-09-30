const { Schema, model } = require('mongoose')

const teacherSchema = new Schema(
	{
		iban: {
			type: String,
			required: true
		},

		clients: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}, 

		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{
		timestamps: true
	}
)

const Teacher = model('Teacher', teacherSchema)

module.exports = Teacher
