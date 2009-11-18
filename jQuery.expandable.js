/**
 * Copyright 2008 BoFrederiksen/BoFrede ApS
 */

jQuery(document).ready(function () {
	function toggle(elm) {
		jQuery(this).next().toggle();
		if ('none' === jQuery(this).next().css('display')) {
			jQuery(this).removeClass('collapsable');
			jQuery(this).addClass('expandable');
		} else {
			jQuery(this).removeClass('expandable');
			jQuery(this).addClass('collapsable');
		}
	}
	var exps = jQuery('.expandable');
	exps.next().hide();
	exps.click(toggle);
	var cols = jQuery('.collapsable');
	cols.next().show();
	cols.click(toggle);
});