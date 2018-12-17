use super::*;

#[wasm_bindgen]
#[derive(Default)]
pub struct TexParser {
    parser: parser::TexParser,
}

#[wasm_bindgen]
impl TexParser {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self::default()
    }

    pub fn set_code_environment(mut self, code_environment: String) -> Self {
        self.parser.code_environment = code_environment;
        self
    }

    pub fn code_environment(&self) -> String {
        self.parser.code_environment.clone()
    }

    pub fn set_default_language(mut self, default_language: Option<String>) -> Self {
        self.parser.default_language = default_language;
        self
    }

    pub fn default_language(&self) -> Option<String> {
        self.parser.default_language.clone()
    }

    pub fn set_comment_start(mut self, comment_start: String) -> Self {
        self.parser.comment_start = comment_start;
        self
    }

    pub fn comment_start(&self) -> String {
        self.parser.comment_start.clone()
    }

    pub fn set_interpolation_start(mut self, interpolation_start: String) -> Self {
        self.parser.interpolation_start = interpolation_start;
        self
    }

    pub fn interpolation_start(&self) -> String {
        self.parser.interpolation_start.clone()
    }

    pub fn set_interpolation_end(mut self, interpolation_end: String) -> Self {
        self.parser.interpolation_end = interpolation_end;
        self
    }

    pub fn interpolation_end(&self) -> String {
        self.parser.interpolation_end.clone()
    }

    pub fn set_macro_start(mut self, macro_start: String) -> Self {
        self.parser.macro_start = macro_start;
        self
    }

    pub fn macro_start(&self) -> String {
        self.parser.macro_start.clone()
    }

    pub fn set_macro_end(mut self, macro_end: String) -> Self {
        self.parser.macro_end = macro_end;
        self
    }

    pub fn macro_end(&self) -> String {
        self.parser.macro_end.clone()
    }

    pub fn tangle(&self, source: &str, entrypoint: Option<String>, language: Option<String>) -> Result<String, JsValue> {
        tangle(&self.parser, source, entrypoint, language)
    }

    pub fn weave(&self, source: &str) -> Result<String, JsValue> {
        weave(&self.parser, source)
    }
}
