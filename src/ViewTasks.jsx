import './index.css'

export default function ViewTasks({ tasks }) {
	let id = 0;
	return (
		<div className="mt-5">
			{
				(Array.isArray(tasks) && tasks.length === 0) ? (
					<div className='centered-column'>You don't have any tasks.</div>
				) : (
					<ul className='overflow-y-auto h-150 centered-column'>
						{
							tasks.map((t) => {
								return (
									<li key={id++}>
										<div className="text-[2em] font-bold">{t.name}</div>
										<div>{t.formatDate()}</div>
										<div>{t.description}</div>
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
