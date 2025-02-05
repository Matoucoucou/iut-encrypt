'use strict';
const crypto = require('crypto');

class Encrypt {
    static sha1(data) {
        return crypto.createHash('sha1').update(data).digest('hex');
    }

    static compareSha1(data, hash) {
        return this.sha1(data) === hash;
    }
}

module.exports = Encrypt;