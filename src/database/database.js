import { allWay } from "../component/constant";

export function addRecord(name, money, type, from, to, time) {
    const recordList = 'RecordList';
    const newData = { name: name, money: money, type: type, from: from, to: to, time: time };
    firebase.database().ref(recordList).push(newData)
        .then(() => {
            return Promise.all([
                cntRemaining(money, from),
                cntRemaining(-money, to)

            ]);
        })

}

export function addAnalysis(money, type, time) {
    const newData = { money: money, time: time };
    const AnaList = 'AnalysisList/';
    return firebase.database().ref(AnaList + type).push(newData);
}

function cntRemaining(money, way) {
    if (!way) return;
    const totalList = 'TotalList/';
    return firebase.database().ref(totalList + way + '/money').once('value')
        .then(snapshot => snapshot.val())
        .then(rem => {
            if (rem !== null) {
                return firebase.database().ref(totalList + way).update({ money: rem - money });
            } else {
                return Promise.reject(`No money data found for way: ${way}`);
            }
        })
        .catch(err => console.error(err));
}

export function getTotalMoney(callback) {
    const totalList = 'TotalList/';
    let ret = {};
    console.log('start get total money');
    allWay.forEach((ele) => {
        const eng = ele.eng;
        console.log('ref:', totalList + eng + '/money');
        firebase.database().ref(totalList + eng + '/money').on('value', (snapshot) => {
            console.log(eng + ':', snapshot.val());
            ret[eng] = Number(snapshot.val());
            if (typeof callback === 'function') {
                callback(ret); // Provide updated `ret` object to the callback
            }
        }, (error) => {
            console.error(`Error retrieving money for ${eng}:`, error);
        });
    });
    return () => {
        allWay.forEach((ele) => {
            firebase.database().ref(totalList + ele.eng + '/money').off();
        });
    };
}