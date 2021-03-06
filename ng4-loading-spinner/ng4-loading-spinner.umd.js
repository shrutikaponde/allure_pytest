(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/BehaviorSubject')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/BehaviorSubject'], factory) :
	(factory((global['ng4-loading-spinner'] = {}),global.core,global.BehaviorSubject));
}(this, (function (exports,core,BehaviorSubject) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injectable service
 * @export
 */
var Ng4LoadingSpinnerService = (function () {
    /**
     * Creates an instance of Ng4LoadingSpinnerService.
     * @memberof Ng4LoadingSpinnerService
     */
    function Ng4LoadingSpinnerService() {
        /**
         * \@description spinners BehaviorSubject
         * \@memberof Ng4LoadingSpinnerService
         */
        this.spinnerSubject = new BehaviorSubject.BehaviorSubject(false);
    }
    /**
     * To show spinner
     * @memberof Ng4LoadingSpinnerService
     */
    /**
     * To show spinner
     * \@memberof Ng4LoadingSpinnerService
     * @return {?}
     */
    Ng4LoadingSpinnerService.prototype.show = /**
     * To show spinner
     * \@memberof Ng4LoadingSpinnerService
     * @return {?}
     */
    function () {
        this.spinnerSubject.next(true);
    };
    /**
     * To hide spinner
     * @memberof Ng4LoadingSpinnerService
     */
    /**
     * To hide spinner
     * \@memberof Ng4LoadingSpinnerService
     * @return {?}
     */
    Ng4LoadingSpinnerService.prototype.hide = /**
     * To hide spinner
     * \@memberof Ng4LoadingSpinnerService
     * @return {?}
     */
    function () {
        this.spinnerSubject.next(false);
    };
    /**
     * @return {?}
     */
    Ng4LoadingSpinnerService.prototype.getMessage = /**
     * @return {?}
     */
    function () {
        return this.spinnerSubject.asObservable();
    };
    Ng4LoadingSpinnerService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    Ng4LoadingSpinnerService.ctorParameters = function () { return []; };
    return Ng4LoadingSpinnerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@description
 * @author Amit Mahida
 * @export
 */
var Ng4LoadingSpinnerComponent = (function () {
    /**
     * Constructor
     * @param {Ng4LoadingSpinnerService} spinnerService Spinner Service
     * @memberof Ng4LoadingSpinnerComponent
     */
    function Ng4LoadingSpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        /**
         * \@description Default loading spinner template
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._template = "\n  <div style=\"color: #64d6e2\" class=\"la-ball-clip-rotate-multiple la-3x\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>";
        /**
         * \@description Loading text
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._loadingText = '';
        /**
         * \@description Defines threhold for not to diplay if time is less than 500ms
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._threshold = 500;
        /**
         * \@description Defines z-index property of the loading text
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._zIndex = 9999;
        /**
         * \@description Show/hide spinner
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this.showSpinner = false;
        this.createServiceSubscription();
    }
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "zIndex", {
        get: /**
         * \@description returns z-index for input text
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._zIndex;
        },
        set: /**
         * \@description Sets z-index for input text
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "template", {
        get: /**
         * \@description Gives the current template
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._template;
        },
        set: /**
         * \@description Accepts custom template
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._template = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "loadingText", {
        get: /**
         * \@description Gives loading text
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._loadingText;
        },
        set: /**
         * \@description Accepts loading text string
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loadingText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "threshold", {
        get: /**
         * \@description
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._threshold;
        },
        set: /**
         * \@description Accepts external threshold
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._threshold = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy function
     * @memberof Ng4LoadingSpinnerComponent
     */
    /**
     * Destroy function
     * \@memberof Ng4LoadingSpinnerComponent
     * @return {?}
     */
    Ng4LoadingSpinnerComponent.prototype.ngOnDestroy = /**
     * Destroy function
     * \@memberof Ng4LoadingSpinnerComponent
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * Create service subscription
     * @memberof Ng4LoadingSpinnerComponent
     */
    /**
     * Create service subscription
     * \@memberof Ng4LoadingSpinnerComponent
     * @return {?}
     */
    Ng4LoadingSpinnerComponent.prototype.createServiceSubscription = /**
     * Create service subscription
     * \@memberof Ng4LoadingSpinnerComponent
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ timer;
        this.subscription =
            this.spinnerService.getMessage().subscribe(function (show) {
                if (show) {
                    timer = setTimeout(function () {
                        this.showSpinner = show;
                    }.bind(_this), _this.threshold);
                }
                else {
                    clearTimeout(timer);
                    _this.showSpinner = false;
                }
            });
    };
    Ng4LoadingSpinnerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng4-loading-spinner',
                    template: "<div [class]=\"showSpinner ? 'visible spinner center' : 'hidden spinner center'\" [innerHTML]=\"template\">     </div> <h1 [style.zIndex]=\"zIndex\" [class]=\"showSpinner ? 'visible loading-text' : 'hidden loading-text'\"> {{loadingText}} </h1> ",
                    styles: [".spinner { position: fixed; padding: 0px; top: 0; left: 0; height: 100%; width: 100%; z-index: 9998; background: #000; opacity: 0.6; transition: opacity 0.3s linear; } .center { margin: auto; width: 100%; } .loading-text { position: fixed; top: 0; width: 100%; height: 100%; left: 0; padding: 0; margin: 0; color: #333; background: transparent; text-align: center; padding-top: 33%; } .spinner img { position: fixed; top: 0; left: 0; padding: 0px; height: 100%; width: 100%; z-index: 10; background: #000; opacity: 0.6; transition: opacity 0.3s linear; } .hidden { visibility: hidden; opacity: 0; transition: visibility 0s 0.3s, opacity 0.3s linear; } .visible { visibility: visible; } .la-ball-clip-rotate-multiple, .la-ball-clip-rotate-multiple > div { position: relative; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } .la-ball-clip-rotate-multiple { display: block; font-size: 0; color: #fff; } .la-ball-clip-rotate-multiple.la-dark { color: #333; } .la-ball-clip-rotate-multiple > div { display: inline-block; float: none; background-color: currentColor; border: 0 solid currentColor; } .la-ball-clip-rotate-multiple { width: 32px; height: 32px; } .la-ball-clip-rotate-multiple > div { position: absolute; top: 50%; left: 50%; background: transparent; border-style: solid; border-width: 2px; border-radius: 100%; -webkit-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite; -moz-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite; -o-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite; animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite; } .la-ball-clip-rotate-multiple > div:first-child { position: absolute; width: 32px; height: 32px; border-right-color: transparent; border-left-color: transparent; } .la-ball-clip-rotate-multiple > div:last-child { width: 16px; height: 16px; border-top-color: transparent; border-bottom-color: transparent; -webkit-animation-duration: .5s; -moz-animation-duration: .5s; -o-animation-duration: .5s; animation-duration: .5s; -webkit-animation-direction: reverse; -moz-animation-direction: reverse; -o-animation-direction: reverse; animation-direction: reverse; } .la-ball-clip-rotate-multiple.la-sm { width: 16px; height: 16px; } .la-ball-clip-rotate-multiple.la-sm > div { border-width: 1px; } .la-ball-clip-rotate-multiple.la-sm > div:first-child { width: 16px; height: 16px; } .la-ball-clip-rotate-multiple.la-sm > div:last-child { width: 8px; height: 8px; } .la-ball-clip-rotate-multiple.la-2x { width: 64px; height: 64px; } .la-ball-clip-rotate-multiple.la-2x > div { border-width: 4px; } .la-ball-clip-rotate-multiple.la-2x > div:first-child { width: 64px; height: 64px; } .la-ball-clip-rotate-multiple.la-2x > div:last-child { width: 32px; height: 32px; } .la-ball-clip-rotate-multiple.la-3x { width: 96px; height: 96px; top: 40%; left: 46%; } .la-ball-clip-rotate-multiple.la-3x > div { border-width: 6px; } .la-ball-clip-rotate-multiple.la-3x > div:first-child { width: 120px; height: 120px; } .la-ball-clip-rotate-multiple.la-3x > div:last-child { width: 88px; height: 88px; } .la-ball-clip-rotate-multiple.la-3x > div:nth-child(2) { width: 48px; height: 48px; } @-webkit-keyframes ball-clip-rotate-multiple-rotate { 0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); } 50% { -webkit-transform: translate(-50%, -50%) rotate(180deg); transform: translate(-50%, -50%) rotate(180deg); } 100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); } } @-moz-keyframes ball-clip-rotate-multiple-rotate { 0% { -moz-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); } 50% { -moz-transform: translate(-50%, -50%) rotate(180deg); transform: translate(-50%, -50%) rotate(180deg); } 100% { -moz-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); } } @-o-keyframes ball-clip-rotate-multiple-rotate { 0% { -o-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); } 50% { -o-transform: translate(-50%, -50%) rotate(180deg); transform: translate(-50%, -50%) rotate(180deg); } 100% { -o-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); } } @keyframes ball-clip-rotate-multiple-rotate { 0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); -moz-transform: translate(-50%, -50%) rotate(0deg); -o-transform: translate(-50%, -50%) rotate(0deg); transform: translate(-50%, -50%) rotate(0deg); } 50% { -webkit-transform: translate(-50%, -50%) rotate(180deg); -moz-transform: translate(-50%, -50%) rotate(180deg); -o-transform: translate(-50%, -50%) rotate(180deg); transform: translate(-50%, -50%) rotate(180deg); } 100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); -moz-transform: translate(-50%, -50%) rotate(360deg); -o-transform: translate(-50%, -50%) rotate(360deg); transform: translate(-50%, -50%) rotate(360deg); } } "],
                    inputs: ['template', 'loadingText', 'zIndex'],
                    encapsulation: core.ViewEncapsulation.None // Use the native Shadow DOM to encapsulate our CSS
                },] },
    ];
    /** @nocollapse */
    Ng4LoadingSpinnerComponent.ctorParameters = function () { return [
        { type: Ng4LoadingSpinnerService, },
    ]; };
    Ng4LoadingSpinnerComponent.propDecorators = {
        "zIndex": [{ type: core.Input },],
        "template": [{ type: core.Input },],
        "loadingText": [{ type: core.Input },],
        "threshold": [{ type: core.Input },],
    };
    return Ng4LoadingSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng4LoadingSpinnerModule = (function () {
    function Ng4LoadingSpinnerModule() {
    }
    /**
     * @return {?}
     */
    Ng4LoadingSpinnerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: Ng4LoadingSpinnerModule,
            providers: [Ng4LoadingSpinnerService]
        };
    };
    Ng4LoadingSpinnerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [],
                    declarations: [Ng4LoadingSpinnerComponent],
                    exports: [Ng4LoadingSpinnerComponent],
                    providers: [Ng4LoadingSpinnerService]
                },] },
    ];
    /** @nocollapse */
    Ng4LoadingSpinnerModule.ctorParameters = function () { return []; };
    return Ng4LoadingSpinnerModule;
}());

exports.Ng4LoadingSpinnerModule = Ng4LoadingSpinnerModule;
exports.Ng4LoadingSpinnerService = Ng4LoadingSpinnerService;
exports.Ng4LoadingSpinnerComponent = Ng4LoadingSpinnerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
