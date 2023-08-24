let obj = {
    "name": "urviesh1",
    "email": "urvish1@gmail.com",
    // "test=muyname:"test",
    "address": {
        "add": "B/308 tapti avenue",
        "city": "Surat"
    }
}

if (obj.address) {
    let address = {}
    for (const key in obj.address) {
        console.log("---->", key, obj.address[key])
        // address.add= obj.address[key]
        obj[`address.${key}`] = obj.address[key]
    }
}
