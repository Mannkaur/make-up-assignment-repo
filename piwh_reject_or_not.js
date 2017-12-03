const promise = new Promise(function(fulfill, reject){
    fulfill('I FIRED')
    reject(Error('I DID NOT FIRE'))
})

function onReject(error){
    console.log(Error.message)
}

promise.then(console.log, onReject)
 