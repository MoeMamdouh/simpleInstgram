import { Platform } from 'react-native';
import Moment from 'moment';
class Date {
	getFullDateFormat(date) {
		var date = Moment(date).format('LLLL'); // Tuesday, February 28, 2017 11:48 AM
		return date
	}
	getDateFormat(date) {
		var date = Moment(date).format('llll'); // Tue, Feb 28, 2017 11:48 AM
		return date
	}
	getDateFormatMedium(date) {
		var date = Moment(date).format('dddd, MMM D'); // Thursday, May 7
		return date
	}
	getDateFormatSmall(date) {
		var date = Moment(date).format('DD.MM.YYYY'); // 05.07.2017 
		return date
	}
	//get day number of month [01-31]
	getDayNo(date) {
		// return new Date(date).getUTCDate();// 1
		return Moment(date).format('DD');// 01
	}
	//get month number [01-12]
	getMonthNo(date) {
		// return new Date(date).getUTCMonth() + 1; // 1
		return Moment(date).format('MM');// 01
	}
	//get month number Name January
	getMonthName(date) {
		return Moment(date).format('MMMM');
	}
	getYear(date) {
		return Moment(date).format('YYYY');
	}
	//get Hours
	getHours(date) {
		return Moment(date).format('HH');
	}
	//get mintes
	getMinutes(date) {
		return Moment(date).format('mm');
	}

	getHourMintes(date) {
		return Moment(date).format('HH:mm');
	}

	getHourMintesMeridiem(date) {
		return Moment(date).format('HH:mm A');
	}

	getSessionDetailsDayForm(date) {
		return Moment(date).format('ddd, MMM D, YYYY');
	}

	randomColor() {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	}

	calendarDateFormatHandler(start_date, end_date) {
		let date = {
			startDate: new Date(),
			endDate: new Date()
		}

		if (Platform.OS = "android") {
			// startDate = Moment(event.start_date);
			// endDate = Moment(event.end_date);
			date.startDate = Moment(start_date);
			date.endDate = Moment(end_date);
		} else {
			date.startDate = Moment(start_date).format("YYYY-MM-DD'T'HH:mm:ss.sssZ");
			date.endDate = Moment(end_date).format("YYYY-MM-DD'T'HH:mm:ss.sssZ");
		}
		return date
	}
	/**
	 * takes two times and get diffrence between them
	 */
	getDiff(start, end, mode) {
		return end.diff(start, mode);
	}

	/**
	 * get diffrence between two times in mintes
	 */
	getDiffMinutes(start, end) {
		return this.getDiff(start, end, 'minutes')
	}

	/**
	 * check if two dates are same
	 */
	isSameDate(date1, data2) {
		return Moment(date1).isSame(data2);
	}

	/**
	 * check if two dates in same day month year
	 */
	isSameDateDay(date1, data2) {
		return this.isSameYear(date1, data2) && this.isSameMonth(date1, data2) && this.isSameDay(date1, data2)
	}

	/**
	 * check if two dates have same year
	 */
	isSameYear(date1, data2) {
		return Moment(date1).isSame(data2, 'year');
	}

	/**
	 * check if two dates have same month
	 */
	isSameMonth(date1, data2) {
		return Moment(date1).isSame(data2, 'month');
	}

	/**
	 * check if two dates have same day
	 */
	isSameDay(date1, data2) {
		return Moment(date1).isSame(data2, 'day');
	}

	/**
	 * 
	 */
	dayNoString(date) {
		return Moment(date).format('ddd, DD');
	}

	/**
	 * 
	 * Thu, 02 of February 2017
	 */
	eventDetailsFullDate(date) {
		return Moment(date).format('ddd, DD of MMMM gggg');
	}

	/**
	 * determine if date in future or in paste
	 */
	isDateInFuture(dataObject) {
		// let date = Moment(dataObject);
		//add 3 days .. to Fix API Issue(in eventList request the ‘end_date_iso’ attribute in event object don’t exist)
		//[5/4/17, 2:54:59 PM] Christian Derwein: if easier add start date + 3days
		//[5/4/17, 2:55:11 PM] Christian Derwein: this is max of event days we ever had
		let date = Moment(dataObject).add(3, 'days');
		let now = Moment();
		if (now < date) {
			return true;
		} else {
			return false;
		}
	}

	duration(date) {
		let now = Moment(); //todays date
		let end = Moment(date)
		let duration = Moment.duration(now.diff(end));
		return duration;
	}
}

export let date = new Date();
