/*jslint sloppy: true */
/*global jQuery: false, document: false */
/* Copyright 2008-2013 BoFrederiksen. */

jQuery(document).ready(function () {
    function toggle() {
        jQuery(this).next().toggle();
        if ('none' === jQuery(this).next().css('display')) {
            jQuery(this).removeClass('collapsable');
            jQuery(this).addClass('expandable');
        } else {
            jQuery(this).removeClass('expandable');
            jQuery(this).addClass('collapsable');
        }
    }
    var exps = jQuery('.expandable'),
        cols = jQuery('.collapsable');
    exps.next().hide();
    exps.click(toggle);
    cols.next().show();
    cols.click(toggle);
});