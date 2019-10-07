[Outline]: https://github.com/foxfriends/outline

# Outline JS

This package provides WebAssembly bindings to the Rust library [Outline][].

In particular, it exposes the built in parsers for use in a JavaScript context. For documentation on
anything not specific to the WASM bindings, see the main [Outline][] repo.

## Installation

```bash
npm install --save @oinkiguana/outline
```

## Example Usage

```js
import { MdParser } from '@oinkiguana/outline';

const parser = new MdParser().set_fence_sequence('~~~');
const helloWorld = parser.tangle(`
# Hello world

Here we have the hello world:

~~~
==> Say hello.
~~~

This is how you say hello:

~~~ - Say hello
console.log('Hello world');
~~~
`);

eval(helloWorld); // should log 'Hello world'
```

## Documentation

The package exports just the 4 parsers:
*   `MdParser`
*   `HtmlParser`
*   `TexParser`
*   `BirdParser`

Each follows a very similar API:

`parser.tangle(source[, entrypoint[, language]])`
*   Parses the `source` to produce the tangled (runnable code) output
*   `entrypoint` and `language` are passed along to Outline, and used to choose the entrypoint and
    language to compile
*   If there is an error, it will be thrown (as a string)

`parser.weave(source)`
*   Parses the `source` to produce the weaved documentation output
*   If there is an error, it will be thrown (as a string)

`parser.set_<config_property>(value)`
*   Sets the config property on the parser. See the [Outline][] documentation for information on the
    options for each parser
*   Mutates and returns `this` for chaining

`parser.<config_property>()`
*   Retrieves the current value of the property
