/**
 * Class Helper
 */
class Helper {
    load(key) {
        var df = null;
        chrome.storage.local.get(key, function (e) {
            df = e[key];
        })
        let data = window.localStorage[key];
        if (typeof data === "undefined") {
            return null;
        }
        try {
            let x = JSON.parse(data);
            return x;
        } catch (e) {
            return data;
        }
    }

    save(key, data) {
        window.localStorage[key] = JSON.stringify(data);
        let obj = {};
        obj[key] = data;
        chrome.storage.local.set(obj)
        return true;
    }

    getUserID() {
        let uid = this.load('uid');
        if (uid) {
            return uid;
        } else {
            let buf = new Uint32Array(4),
                idx = -1;
            window.crypto.getRandomValues(buf);
            uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                idx++;
                let r = (buf[idx >> 3] >> ((idx % 8) * 4)) & 15,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            this.save('uid', uid);
            return uid;
        }
    }
    playUpgrade(){
        let audio = new Audio("/transfer_complete.mp3");
        audio.play();
    }
}
const Until = new Helper();