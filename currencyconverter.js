/* (function(){
    'use strict';

    if (!('indexedDB' in window)) {
        console.log('this browser doesnt support indexdb');
        return;
    } */

    var dbPromise = indexedDB.open('test2', 1, function(upgradeDb){
        console.log('making a new database');
        if (!upgradeDb.objectStoreNames.contains('firstOS')){
            upgradeDb.createObjectStore('firstOS', {keyPath: 'email'});
        }
    });
// })();
/* dbPromise.then(function(db) {
    var tx = db.transaction('store', 'readwrite');
    var store = tx.objectStore('store');
    var item = {
        name: 'sandwich',
        price: 4.99
    };
    store.add(item);
    return tx.complete;
}).then(function(){
    console.log('bullshit');
});
 */


function myfunction() {
    document.getElementById("fromcurrency").classList.toggle("show");
}


