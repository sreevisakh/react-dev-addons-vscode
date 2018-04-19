const vscode = require('vscode');
const utils = require('./utils');
const pkg = require('./package.json');
const commands = pkg.contributes.commands.map(item => item.command.replace('onCommand:',''))
function activate(context) {
    const editor = vscode.window.activeTextEditor
    const selection = editor.selection
    const text = editor.document.getText(selection);
    const filePath = editor.document.fileName;
    let disposables = commands.map(command => vscode.commands.registerCommand(command, function () {
        utils.addToPropTypes(filePath, text, command.replace('reactaddon.',''))
    }))
    context.subscriptions = context.subscriptions.concat(disposables);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;