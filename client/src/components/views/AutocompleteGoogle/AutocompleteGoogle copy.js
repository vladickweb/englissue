import { useState } from 'react'

import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService'

export const Debounce = ({ a }) => {
	const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } = useGoogle({
		apiKey: process.env.REACT_APP_BASE_URL_GOOGLE
	})
	const [ value, setValue ] = useState('')

	const handleChange = e => {
		getPlacePredictions({ input: e.target.value })
		setValue(e.target.value)
	}

	// const renderList = item => {

	// }

	return (
		<div>
			<div className='form-group'>
				<label>
					<p>Ingresa tu ciudad</p>
					<input
						type='text'
						className='form-control'
						value={value}
						onChange={e => handleChange(e)}
						// loading={isPlacePredictionsLoading}
					/>
				</label>
			</div>
			<div>
				{!isPlacePredictionsLoading && (
					<ul
						datasource={placePredictions}
						renderItem={item => (
							//  TODO:
							<li onClick={() => console.log(item, 'soy item')}> 
								{item.description}
							</li>
						)}
					>
						<li />
					</ul>
				)}
			</div>

			{/* <div>
				{!isPlacePredictionsLoading && (
					<List
						dataSource={placePredictions}
						renderItem={item => (
							<List.Item onClick={() => setValue(item.description)}>
								<List.Item.Meta title={item.description} />
							</List.Item>
						)}
					/>
				)}
			</div>  */}
		</div>
	)
}
