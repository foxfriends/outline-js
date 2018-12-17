/* tslint:disable */
import * as wasm from './outline_bg';

let cachedTextEncoder = new TextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

let WASM_VECTOR_LEN = 0;

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function freeTexParser(ptr) {

    wasm.__wbg_texparser_free(ptr);
}
/**
*/
export class TexParser {

    static __wrap(ptr) {
        const obj = Object.create(TexParser.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeTexParser(ptr);
    }

    /**
    * @returns {}
    */
    constructor() {
        this.ptr = wasm.texparser_new();
    }
    /**
    * @param {string} arg0
    * @returns {TexParser}
    */
    set_code_environment(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return TexParser.__wrap(wasm.texparser_set_code_environment(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    code_environment() {
        const retptr = globalArgumentPtr();
        wasm.texparser_code_environment(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {TexParser}
    */
    set_default_language(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = isLikeNone(arg0) ? [0, 0] : passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return TexParser.__wrap(wasm.texparser_set_default_language(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    default_language() {
        const retptr = globalArgumentPtr();
        wasm.texparser_default_language(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {TexParser}
    */
    set_comment_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return TexParser.__wrap(wasm.texparser_set_comment_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    comment_start() {
        const retptr = globalArgumentPtr();
        wasm.texparser_comment_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {TexParser}
    */
    set_interpolation_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return TexParser.__wrap(wasm.texparser_set_interpolation_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    interpolation_start() {
        const retptr = globalArgumentPtr();
        wasm.texparser_interpolation_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {TexParser}
    */
    set_interpolation_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return TexParser.__wrap(wasm.texparser_set_interpolation_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    interpolation_end() {
        const retptr = globalArgumentPtr();
        wasm.texparser_interpolation_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {TexParser}
    */
    set_macro_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return TexParser.__wrap(wasm.texparser_set_macro_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    macro_start() {
        const retptr = globalArgumentPtr();
        wasm.texparser_macro_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {TexParser}
    */
    set_macro_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return TexParser.__wrap(wasm.texparser_set_macro_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    macro_end() {
        const retptr = globalArgumentPtr();
        wasm.texparser_macro_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @param {string} arg1
    * @param {string} arg2
    * @returns {string}
    */
    tangle(arg0, arg1, arg2) {
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = isLikeNone(arg1) ? [0, 0] : passStringToWasm(arg1);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = isLikeNone(arg2) ? [0, 0] : passStringToWasm(arg2);
        const len2 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.texparser_tangle(retptr, this.ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} arg0
    * @returns {string}
    */
    weave(arg0) {
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.texparser_weave(retptr, this.ptr, ptr0, len0);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
}

function freeBirdParser(ptr) {

    wasm.__wbg_birdparser_free(ptr);
}
/**
*/
export class BirdParser {

    static __wrap(ptr) {
        const obj = Object.create(BirdParser.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeBirdParser(ptr);
    }

    /**
    * @returns {}
    */
    constructor() {
        this.ptr = wasm.birdparser_new();
    }
    /**
    * @param {string} arg0
    * @returns {BirdParser}
    */
    set_code_marker(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return BirdParser.__wrap(wasm.birdparser_set_code_marker(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    code_marker() {
        const retptr = globalArgumentPtr();
        wasm.birdparser_code_marker(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {BirdParser}
    */
    set_code_name_marker(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return BirdParser.__wrap(wasm.birdparser_set_code_name_marker(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    code_name_marker() {
        const retptr = globalArgumentPtr();
        wasm.birdparser_code_name_marker(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {BirdParser}
    */
    set_comment_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return BirdParser.__wrap(wasm.birdparser_set_comment_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    comment_start() {
        const retptr = globalArgumentPtr();
        wasm.birdparser_comment_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {BirdParser}
    */
    set_interpolation_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return BirdParser.__wrap(wasm.birdparser_set_interpolation_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    interpolation_start() {
        const retptr = globalArgumentPtr();
        wasm.birdparser_interpolation_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {BirdParser}
    */
    set_interpolation_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return BirdParser.__wrap(wasm.birdparser_set_interpolation_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    interpolation_end() {
        const retptr = globalArgumentPtr();
        wasm.birdparser_interpolation_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {BirdParser}
    */
    set_macro_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return BirdParser.__wrap(wasm.birdparser_set_macro_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    macro_start() {
        const retptr = globalArgumentPtr();
        wasm.birdparser_macro_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {BirdParser}
    */
    set_macro_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return BirdParser.__wrap(wasm.birdparser_set_macro_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    macro_end() {
        const retptr = globalArgumentPtr();
        wasm.birdparser_macro_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @param {string} arg1
    * @param {string} arg2
    * @returns {string}
    */
    tangle(arg0, arg1, arg2) {
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = isLikeNone(arg1) ? [0, 0] : passStringToWasm(arg1);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = isLikeNone(arg2) ? [0, 0] : passStringToWasm(arg2);
        const len2 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.birdparser_tangle(retptr, this.ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} arg0
    * @returns {string}
    */
    weave(arg0) {
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.birdparser_weave(retptr, this.ptr, ptr0, len0);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
}

function freeHtmlParser(ptr) {

    wasm.__wbg_htmlparser_free(ptr);
}
/**
*/
export class HtmlParser {

    static __wrap(ptr) {
        const obj = Object.create(HtmlParser.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeHtmlParser(ptr);
    }

    /**
    * @returns {}
    */
    constructor() {
        this.ptr = wasm.htmlparser_new();
    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_code_tag(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_code_tag(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    code_tag() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_code_tag(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_language_attribute(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_language_attribute(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    language_attribute() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_language_attribute(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_name_attribute(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_name_attribute(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    name_attribute() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_name_attribute(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_block_class(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_block_class(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    block_class() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_block_class(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_language_class(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_language_class(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    language_class() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_language_class(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {boolean} arg0
    * @returns {HtmlParser}
    */
    set_comments_as_aside(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        return HtmlParser.__wrap(wasm.htmlparser_set_comments_as_aside(ptr, arg0));
    }
    /**
    * @returns {boolean}
    */
    comments_as_aside() {
        return (wasm.htmlparser_comments_as_aside(this.ptr)) !== 0;
    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_default_language(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = isLikeNone(arg0) ? [0, 0] : passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_default_language(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    default_language() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_default_language(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_comment_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_comment_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    comment_start() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_comment_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_interpolation_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_interpolation_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    interpolation_start() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_interpolation_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_interpolation_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_interpolation_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    interpolation_end() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_interpolation_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_macro_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_macro_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    macro_start() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_macro_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {HtmlParser}
    */
    set_macro_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return HtmlParser.__wrap(wasm.htmlparser_set_macro_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    macro_end() {
        const retptr = globalArgumentPtr();
        wasm.htmlparser_macro_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @param {string} arg1
    * @param {string} arg2
    * @returns {string}
    */
    tangle(arg0, arg1, arg2) {
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = isLikeNone(arg1) ? [0, 0] : passStringToWasm(arg1);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = isLikeNone(arg2) ? [0, 0] : passStringToWasm(arg2);
        const len2 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.htmlparser_tangle(retptr, this.ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} arg0
    * @returns {string}
    */
    weave(arg0) {
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.htmlparser_weave(retptr, this.ptr, ptr0, len0);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
}

function freeMdParser(ptr) {

    wasm.__wbg_mdparser_free(ptr);
}
/**
*/
export class MdParser {

    static __wrap(ptr) {
        const obj = Object.create(MdParser.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeMdParser(ptr);
    }

    /**
    * @returns {}
    */
    constructor() {
        this.ptr = wasm.mdparser_new();
    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_fence_sequence(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_fence_sequence(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    fence_sequence() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_fence_sequence(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_block_name_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_block_name_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    block_name_start() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_block_name_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_block_name_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = isLikeNone(arg0) ? [0, 0] : passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_block_name_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    block_name_end() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_block_name_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {boolean} arg0
    * @returns {MdParser}
    */
    set_comments_as_aside(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        return MdParser.__wrap(wasm.mdparser_set_comments_as_aside(ptr, arg0));
    }
    /**
    * @returns {boolean}
    */
    comments_as_aside() {
        return (wasm.mdparser_comments_as_aside(this.ptr)) !== 0;
    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_default_language(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = isLikeNone(arg0) ? [0, 0] : passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_default_language(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    default_language() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_default_language(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];
        if (rustptr === 0) return;
        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_comment_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_comment_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    comment_start() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_comment_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_interpolation_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_interpolation_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    interpolation_start() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_interpolation_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_interpolation_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_interpolation_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    interpolation_end() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_interpolation_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_macro_start(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_macro_start(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    macro_start() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_macro_start(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * @param {string} arg0
    * @returns {MdParser}
    */
    set_macro_end(arg0) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        return MdParser.__wrap(wasm.mdparser_set_macro_end(ptr, ptr0, len0));
    }
    /**
    * @returns {string}
    */
    macro_end() {
        const retptr = globalArgumentPtr();
        wasm.mdparser_macro_end(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getStringFromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * Tangles a Markdown document
    * @param {string} arg0
    * @param {string} arg1
    * @param {string} arg2
    * @returns {string}
    */
    tangle(arg0, arg1, arg2) {
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = isLikeNone(arg1) ? [0, 0] : passStringToWasm(arg1);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = isLikeNone(arg2) ? [0, 0] : passStringToWasm(arg2);
        const len2 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.mdparser_tangle(retptr, this.ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * Weaves a Markdown document
    * @param {string} arg0
    * @returns {string}
    */
    weave(arg0) {
        const ptr0 = passStringToWasm(arg0);
        const len0 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.mdparser_weave(retptr, this.ptr, ptr0, len0);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

export function __wbindgen_string_new(p, l) {
    return addHeapObject(getStringFromWasm(p, l));
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

export function __wbindgen_rethrow(idx) { throw takeObject(idx); }

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

