const CONTRACT_ADDRESS = "n1msRrYx5zCHc3qSk5NsnZoxphtfU9dacUk"; //421d691c7f85a8289cbcd41b30f4da95085f2536a8ef6530bad735f3a95600cb

class SmartContractApi {
    constructor(contractAdress) {
        let NebPay = require("nebpay");
        this.nebPay = new NebPay();
        this._contractAdress = contractAdress || CONTRACT_ADDRESS;
    }

    getContractAddress() {
        return this.contractAdress;
    }

    _simulateCall({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.simulateCall(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }

    _call({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.call(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }
}

class EventContract extends SmartContractApi {
    add(date, text, color, cb) {
        this._call({
            callArgs: `[${date}, "${text}", "${color}"]`,
            callFunction: "add",
            callback: cb
        });
    }

    update(eventId, date, text, color, cb) {
        this._call({
            callArgs: `[${eventId}, ${date}, "${text}", "${color}"]`,
            callFunction: "update",
            callback: cb
        });
    }

    delete(noteId, cb) {
        this._call({
            callArgs: `[${noteId}]`,
            callFunction: "delete",
            callback: cb
        });
    }

    getTotalCount(cb) {
        this._simulateCall({
            callFunction: "total",
            callback: cb
        });
    }

    get(limit, offset, cb) {
        this._simulateCall({
            callArgs: `[${limit}, ${offset}]`,
            callFunction: "get",
            callback: cb
        });;
    }

    getByWallet(cb) {
        this._simulateCall({
            callArgs: `[]`,
            callFunction: "getByWallet",
            callback: cb
        });;
    }
}
