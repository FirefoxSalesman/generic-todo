import './index.css'

export default function ViewTasks({ tasks, dispatch }) {
	let id = 0;
	return (
		<div className="mt-5">
			{
				(Array.isArray(tasks) && tasks.length === 0) ? (
					<div className='centered-column'>You don't have any tasks.</div>
				) : (
					<ul className='overflow-y-auto max-h-150 flex-column'>
						{
							tasks.map((t) => {
								return (
									<li className="mx-auto group hover:bg-orange-100 rounded" key={id++}>
										<div className="text-[2em] font-bold">{t.name}</div>
										<div>{t.formatDate()}</div>
										<div>{t.description}</div>
										<button className="not-group-hover:hidden" onClick={() => { dispatch({ type: 'remove', task: t }) }}>Delete</button>
									</li>
								);
							})
						}
					</ul>
				)
			}
		</div>
	);
}
