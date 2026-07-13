import './index.css'
export default function Input({ desc, type, value, handler }) {
	return (
		<div className='my-2'>
			{desc}: <input className='textbox' type={type} value={value} onChange={(e) => handler(e.target.value)} />
		</div>
	)
}
