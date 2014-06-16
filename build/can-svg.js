/**
 * can-svg - A SVG feature detector for can.js
 * @version v1.0.0
 * @author André König (andre.koenig@konexmedia.com)
 * @license MIT
 *
 */
/*
 * can-svg
 *
 * Copyright(c) 2014 André König <andre.koenig@konexmedia.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@konexmedia.com>
 *
 */

/* global can */

;(function init () {

    'use strict';

    /**
     * Checks if the browser supports referencing
     * SVGs within an <img> DOM node.
     * 
     * Usage:
     * 
     *     can.use('svg:image)
     *
     */
    can.define('svg:image', {
        check : function check () {
            return document.implementation && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        }
    });

})();