const { Schema, model } = require('mongoose')

const userSchema = new Schema(
	{
		googleId: {
			type: String
		},

		name: {
			type: String
			// required: true
		},

		email: {
			type: String,
			// unique: true,
			match: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
			required: true
		},

		password: {
			type: String
			// required: true
		},

		rol: {
			type: String,
			enum: [ 'teacher', 'commonUser', 'unknown' ],
			default: 'unknown',
			required: true
		},

		MessagesGroups: [
			{
				type: Schema.Types.ObjectId,
				ref: 'MessagesGroup'
			}
		],

		image: {
			type: String,
			default:
				'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6'
		},

		balance: {
			type: Number,
			default: 0.0
		},

		direction: {
			country: {
				type: String
				// default: 'unknown'
			},

			city: {
				type: String
				// default: 'unknown'
			}
		},

		iban: {
			type: String
		},

		clients: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		],

		payments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'payment'
			}
		]
	},
	{
		timestamps: true
	}
)

const User = model('User', userSchema)

module.exports = User
