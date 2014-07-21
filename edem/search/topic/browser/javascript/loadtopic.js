"use strict";
// Topic list for the site homepage, modified from 
// https://source.iopen.net/groupserver/gs.search.topic/files/tip/gs/search/topic/browser/javascript/loadtopic.js
//
// Copyright © 2013, 2014 E-Democracy, OnlineGroups.net and Contributors.
// All Rights Reserved.
//
// This software is subject to the provisions of the GNU Public License,
// Version 3 (GPL). http://www.gnu.org/licenses/gpl-3.0.txt
jQuery.noConflict() 

function gs_search_topics_site_homepage () {
    var searchId='#gs-search-topic-site-home-search', topicSearch=null;
    topicSearch = GSSearch(searchId, '/s/search.ajax', 0, 10, {m:'1'},  null);
    jQuery('#gs-site-home-activity-tabs li:first-child a').click();
    topicSearch.load();
}
jQuery(document).ready( function () {
    gsJsLoader.with_module('/++resource++gs-search-base-js-min-20140313.js',
                           gs_search_topics_site_homepage);
});
