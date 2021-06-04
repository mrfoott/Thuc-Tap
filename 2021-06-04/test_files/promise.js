const q = require("q");

function show(err, data){
    const defer = q.defer();
    if (err){
        defer.reject("Co loi roi dai vuong oi!");
    }
    else {
        defer.resolve(data);
    }
    return defer.promise;
}

show(false, "data 1")
.then(function(data){
    console.log(data);
    const data2 = "data 2";
    return data2;
})
.then(function(data2){
    console.log(data2);
})
.catch(function(err){
    console.log(err);
})