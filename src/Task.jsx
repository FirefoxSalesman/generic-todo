export default class Task {
	constructor(name, description, date) {
		this.name = name;
		this.description = description;
		this.date = new Date(date);
	}

	formatDate() {
		return Intl.DateTimeFormat("en-US", { timeZone: "UTC" }).format(this.date);
	}

	exportToOrg() {
		let format = (num) => {
			let realNum = num + 1;
			return realNum < 10 ? `0${realNum}` : realNum;
		};
		let mkDate = () => {
			switch (this.date.getDay()) {
				case 0:
					return 'Mon';
				case 1:
					return 'Tue';
				case 2:
					return 'Wed';
				case 3:
					return 'Thu';
				case 4:
					return 'Fri';
				case 5:
					return 'Sat';
				default:
					return 'Sun';
			}
		}
		return `* TODO ${this.name}\n#+DEADLINE:<${this.date.getFullYear()}-${format(this.date.getMonth())}-${format(this.date.getDate())} ${mkDate()}>\n${this.description}`;
	}

	equals(other) {
		return this.name === other.name && this.description === other.description && this.date === other.date;
	}
}
