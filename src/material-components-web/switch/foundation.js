/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import * as tslib_1 from "tslib";
import { MDCFoundation } from '../base/foundation';
import { cssClasses, strings } from './constants';
var MDCSwitchFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(MDCSwitchFoundation, _super);
    function MDCSwitchFoundation(adapter) {
        return _super.call(this, tslib_1.__assign({}, MDCSwitchFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCSwitchFoundation, "strings", {
        /** The string constants used by the switch. */
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSwitchFoundation, "cssClasses", {
        /** The CSS classes used by the switch. */
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSwitchFoundation, "defaultAdapter", {
        /** The default Adapter for the switch. */
        get: function () {
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNativeControlChecked: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
                setNativeControlAttr: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the checked state of the switch. */
    MDCSwitchFoundation.prototype.setChecked = function (checked) {
        this.adapter_.setNativeControlChecked(checked);
        this.updateAriaChecked_(checked);
        this.updateCheckedStyling_(checked);
    };
    /** Sets the disabled state of the switch. */
    MDCSwitchFoundation.prototype.setDisabled = function (disabled) {
        this.adapter_.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter_.addClass(cssClasses.DISABLED);
        }
        else {
            this.adapter_.removeClass(cssClasses.DISABLED);
        }
    };
    /** Handles the change event for the switch native control. */
    MDCSwitchFoundation.prototype.handleChange = function (evt) {
        var nativeControl = evt.target;
        this.updateAriaChecked_(nativeControl.checked);
        this.updateCheckedStyling_(nativeControl.checked);
    };
    /** Updates the styling of the switch based on its checked state. */
    MDCSwitchFoundation.prototype.updateCheckedStyling_ = function (checked) {
        if (checked) {
            this.adapter_.addClass(cssClasses.CHECKED);
        }
        else {
            this.adapter_.removeClass(cssClasses.CHECKED);
        }
    };
    MDCSwitchFoundation.prototype.updateAriaChecked_ = function (checked) {
        this.adapter_.setNativeControlAttr(strings.ARIA_CHECKED_ATTR, "" + !!checked);
    };
    return MDCSwitchFoundation;
}(MDCFoundation));
export { MDCSwitchFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCSwitchFoundation;
//# sourceMappingURL=foundation.js.map