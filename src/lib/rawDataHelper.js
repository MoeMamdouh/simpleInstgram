import _ from 'lodash';

class RawDataHelper {

    exportArray(arr, key) {
        let tmpArr = [];
        _.each(arr, (item, index) => {
            tmpArr.push(item[key]);
        });
        return tmpArr;
    }

}

export const rawDataHelper = new RawDataHelper();