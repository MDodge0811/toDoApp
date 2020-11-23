const remindersList = document.getElementById('reminders-list');

remindersList.addEventListener('click', (event) => {
	if (event.target.matches('.delete')) {
		event.target.closest('.single-reminder').remove();
	} else if (event.target.matches('.complete')) {
		event.target.closest('.single-reminder').classList.add('completed');
		event.target.remove();
	}
});

document.querySelector('#create').addEventListener('click', (event) => {
	event.preventDefault();

	const reminder = document.getElementById('reminder');
	if (reminder.value.trim() === '') {
		reminder.placeholder = 'Forget something?';
	} else {
		const node = document.createElement('div');
		node.classList.add('single-reminder');
		node.innerHTML = `
	<p>${reminder.value}</p>
	<div>
	<button class='complete btn fas fa-check'></button>
	<button class='delete btn fas fa-trash-alt'></button>
	</div>
	`;

		remindersList.appendChild(node);

		const singleReminderList = document.getElementsByClassName(
			'single-reminder'
		);
		for (const [i, value] of Array.from(singleReminderList).entries()) {
			if (i % 2 == 0) {
				value.classList.add('alt');
			}
		}
	}
});

// Version 2
// const remindersList = document.getElementById('reminders-list');
// let n = 0;

// document.querySelector('#create').addEventListener('click', (event) => {
// 	event.preventDefault();

// 	const reminder = document.querySelector('#reminder').value;
// 	const node = document.createElement('div');
// 	node.classList.add('single-reminder');
// 	node.innerHTML = `
// 		<p>${reminder}</p>
// 		<div>
// 			<button class='complete' id='complete${n}'>Y</button>
// 			<button class='delete' id='delete${n}'>X</button>
// 		</div>
// 	`;

// 	remindersList.appendChild(node);

// 	const complete = document.querySelector(`#complete${n}`);
// 	complete.addEventListener('click', () => {
// 		complete.parentNode.parentNode.remove();
// 		console.log('completed!!');
// 	});
// 	const remove = document.querySelector(`#delete${n}`);
// 	remove.addEventListener('click', () => remove.parentNode.parentNode.remove());

// 	n++;
// });

// Version 1
// document.querySelector('#create').addEventListener('click', (event) => {
// 	event.preventDefault();

// 	const reminder = document.querySelector('#reminder').value;

// 	const reminderText = document.createElement('p');
// 	reminderText.innerText = reminder;

// 	const remove = document.createElement('button');
// 	remove.classList.add('remove');
// 	remove.innerText = 'X';
// 	remove.addEventListener('click', () => remove.parentNode.remove());

// 	const complete = document.createElement('button');
// 	remove.classList.add('remove');
// 	complete.innerText = 'Y';
// 	complete.addEventListener('click', () => complete.parentNode.remove());
// 	const node = document.createElement('div');
// 	node.classList.add('single-reminder');

// 	remindersList.appendChild(node);
// 	node.appendChild(reminderText);
// 	node.appendChild(complete);
// 	node.appendChild(remove);
// });
