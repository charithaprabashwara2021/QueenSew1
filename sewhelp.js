/* Coded By Charith.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Charith

*/

function successfullMessage(msg) {
    return "🇱🇰 *Charith bot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🥴 *Charithbot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🐲 *Charithbot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
