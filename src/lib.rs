//! WebAssembly wrapper around Outline

use wasm_bindgen::prelude::*;
use outline::parser::{Parser, Printer, self};

fn tangle<P: Parser>(parser: &P, source: &str, entrypoint: Option<String>, language: Option<String>) -> Result<String, JsValue> {
    let document = parser.parse(source)
        .map_err(|err| format!("{}", err))
        .map_err(|string| JsValue::from_str(&string))?;
    document.print_code(entrypoint.as_ref().map(String::as_str), language.as_ref().map(String::as_str))
        .map_err(|err| format!("{}", err))
        .map_err(|string| JsValue::from_str(&string))
}

fn weave<P: Parser + Printer>(parser: &P, source: &str) -> Result<String, JsValue> {
    let document = parser.parse(source)
        .map_err(|err| format!("{}", err))
        .map_err(|string| JsValue::from_str(&string))?;
    Ok(document.print_docs(parser))
}

mod md;
mod html;
mod tex;
mod bird;

pub use self::md::MdParser;
pub use self::html::HtmlParser;
pub use self::tex::TexParser;
pub use self::bird::BirdParser;
