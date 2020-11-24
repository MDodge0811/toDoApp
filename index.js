const remindersList = document.getElementById('reminders-list');

// Creates an individual reminder and applies CSS markers.
const createReminder = (id, reminderText) => {
	const node = document.createElement('div');
	node.classList.add('single-reminder');
	node.id = id;
	node.innerHTML = /*html*/ `
		<p>${reminderText}</p>
		<div>
			<button class='complete btn fas fa-check'></button>
			<button class='delete btn fas fa-trash-alt'></button>
		</div>
	`;
	remindersList.appendChild(node);

	const singleReminderList = document.getElementsByClassName('single-reminder');
	for (const [i, value] of Array.from(singleReminderList).entries()) {
		if (i % 2 == 0) {
			value.classList.add('alt');
		}
	}
};

// checks localStorage and builds stored reminders on page load.
const buildPage = () => {
	for (let reminder in localStorage) {
		if (reminder.startsWith('#'))
			createReminder(reminder, localStorage.getItem(reminder));
	}
};
buildPage();

// Event Listeners

// Listens for action on existing reminders
remindersList.addEventListener('click', (event) => {
	const singleReminder = event.target.closest('.single-reminder');
	if (event.target.matches('.delete')) {
		singleReminder.remove();
		localStorage.removeItem(singleReminder.id);
		event.target.closest('.single-reminder');
	} else if (event.target.matches('.complete')) {
		singleReminder.classList.add('completed');
		event.target.remove();
		localStorage.removeItem(singleReminder.id);
	}
});

// Listens for creation of new reminders.
document.querySelector('#create').addEventListener('click', (event) => {
	event.preventDefault();

	const reminder = document.getElementById('reminder');
	if (reminder.value.trim() === '') {
		reminder.placeholder = 'Forget something?';
	} else {
		const id = `#${Math.floor(Math.random() * 1000000)}`;
		localStorage.setItem(id, reminder.value);
		createReminder(id, reminder.value);
	}
});
