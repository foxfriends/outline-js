use super::*;

#[wasm_bindgen]
#[derive(Default)]
pub struct HtmlParser {
    parser: parser::HtmlParser,
}

#[wasm_bindgen]
impl HtmlParser {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self::default()
    }

    pub fn set_code_tag(mut self, set_code_tag: String) -> Self {
        self.parser.code_tag = set_code_tag;
        self
    }

    pub fn code_tag(&self) -> String {
        self.parser.code_tag.clone()
    }

    pub fn set_language_attribute(mut self, set_language_attribute: String) -> Self {
        self.parser.language_attribute = set_language_attribute;
        self
    }

    pub fn language_attribute(&self) -> String {
        self.parser.language_attribute.clone()
    }

    pub fn set_name_attribute(mut self, set_name_attribute: String) -> Self {
        self.parser.name_attribute = set_name_attribute;
        self
    }

    pub fn name_attribute(&self) -> String {
        self.parser.name_attribute.clone()
    }

    pub fn set_block_class(mut self, set_block_class: String) -> Self {
        self.parser.block_class = set_block_class;
        self
    }

    pub fn block_class(&self) -> String {
        self.parser.block_class.clone()
    }

    pub fn set_language_class(mut self, set_language_class: String) -> Self {
        self.parser.language_class = set_language_class;
        self
    }

    pub fn language_class(&self) -> String {
        self.parser.language_class.clone()
    }

    pub fn set_comments_as_aside(mut self, set_comments_as_aside: bool) -> Self {
        self.parser.comments_as_aside = set_comments_as_aside;
        self
    }

    pub fn comments_as_aside(&self) -> bool {
        self.parser.comments_as_aside.clone()
    }

    pub fn set_default_language(mut self, set_default_language: Option<String>) -> Self {
        self.parser.default_language = set_default_language;
        self
    }

    pub fn default_language(&self) -> Option<String> {
        self.parser.default_language.clone()
    }

    pub fn set_comment_start(mut self, set_comment_start: String) -> Self {
        self.parser.comment_start = set_comment_start;
        self
    }

    pub fn comment_start(&self) -> String {
        self.parser.comment_start.clone()
    }

    pub fn set_interpolation_start(mut self, set_interpolation_start: String) -> Self {
        self.parser.interpolation_start = set_interpolation_start;
        self
    }

    pub fn interpolation_start(&self) -> String {
        self.parser.interpolation_start.clone()
    }

    pub fn set_interpolation_end(mut self, set_interpolation_end: String) -> Self {
        self.parser.interpolation_end = set_interpolation_end;
        self
    }

    pub fn interpolation_end(&self) -> String {
        self.parser.interpolation_end.clone()
    }

    pub fn set_macro_start(mut self, set_macro_start: String) -> Self {
        self.parser.macro_start = set_macro_start;
        self
    }

    pub fn macro_start(&self) -> String {
        self.parser.macro_start.clone()
    }

    pub fn set_macro_end(mut self, set_macro_end: String) -> Self {
        self.parser.macro_end = set_macro_end;
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
