use super::*;

#[wasm_bindgen]
#[derive(Default)]
pub struct MdParser {
    parser: parser::MdParser,
}

#[wasm_bindgen]
impl MdParser {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self::default()
    }

    pub fn set_fence_sequence(mut self, fence_sequence: String) -> Self {
        self.parser.fence_sequence = fence_sequence;
        self
    }

    pub fn fence_sequence(&self) -> String {
        self.parser.fence_sequence.clone()
    }

    pub fn set_block_name_start(mut self, block_name_start: String) -> Self {
        self.parser.block_name_start = block_name_start;
        self
    }

    pub fn block_name_start(&self) -> String {
        self.parser.block_name_start.clone()
    }

    pub fn set_block_name_end(mut self, block_name_end: Option<String>) -> Self {
        self.parser.block_name_end = block_name_end;
        self
    }

    pub fn block_name_end(&self) -> Option<String> {
        self.parser.block_name_end.clone()
    }

    pub fn set_comments_as_aside(mut self, comments_as_aside: bool) -> Self {
        self.parser.comments_as_aside = comments_as_aside;
        self
    }

    pub fn comments_as_aside(&self) -> bool {
        self.parser.comments_as_aside.clone()
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

    /// Tangles a Markdown document
    pub fn tangle(&self, source: &str, entrypoint: Option<String>, language: Option<String>) -> Result<String, JsValue> {
        tangle(&self.parser, source, entrypoint, language)
    }

    /// Weaves a Markdown document
    pub fn weave(&self, source: &str) -> Result<String, JsValue> {
        weave(&self.parser, source)
    }
}
