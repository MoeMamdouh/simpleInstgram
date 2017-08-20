import _ from 'lodash';

class RawDataHelper {

    exportArray(arr, key) {
        let tmpArr = [];
        _.each(arr, (item, index) => {
            tmpArr.push(item[key]);
        });
        return tmpArr;
    }

    /**
     * order array of objects
     * @param {*} array 
     */
    dateSort(array, attr) {
		array.sort(function(a,b) { 
			return new Date(a[attr]).getTime() - new Date(b[attr]).getTime() 
		});
		return array;
	}

}

export const rawDataHelper = new RawDataHelper();