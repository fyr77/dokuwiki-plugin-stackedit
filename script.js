/* DOKUWIKI:include stackedit.min.js */

function openStackedit() {
	const el = document.querySelector('textarea');
	const stackedit = new Stackedit();
	stackedit.openFile({
		content: {
			text: el.value
		}
	});
	stackedit.on('fileChange', (file) => {
		el.value = file.content.text;
	});
}
function addBtnActionClick($btn, props, edid) {
    $btn.click(function() {
		openStackedit();
        return false;
    });
 
    return 'click';
}
if (typeof window.toolbar !== 'undefined') {
    window.toolbar[window.toolbar.length] = {
        type: "Click",
        title: "StackEdit",
        icon: "../../plugins/stackedit/stackedit.png"
    };
}