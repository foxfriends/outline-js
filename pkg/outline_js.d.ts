/* tslint:disable */
export class TexParser {
free(): void;

 constructor();

 set_code_environment(arg0: string): TexParser;

 code_environment(): string;

 set_default_language(arg0: string): TexParser;

 default_language(): string;

 set_comment_start(arg0: string): TexParser;

 comment_start(): string;

 set_interpolation_start(arg0: string): TexParser;

 interpolation_start(): string;

 set_interpolation_end(arg0: string): TexParser;

 interpolation_end(): string;

 set_macro_start(arg0: string): TexParser;

 macro_start(): string;

 set_macro_end(arg0: string): TexParser;

 macro_end(): string;

 tangle(arg0: string, arg1: string, arg2: string): string;

 weave(arg0: string): string;

}
export class BirdParser {
free(): void;

 constructor();

 set_code_marker(arg0: string): BirdParser;

 code_marker(): string;

 set_code_name_marker(arg0: string): BirdParser;

 code_name_marker(): string;

 set_comment_start(arg0: string): BirdParser;

 comment_start(): string;

 set_interpolation_start(arg0: string): BirdParser;

 interpolation_start(): string;

 set_interpolation_end(arg0: string): BirdParser;

 interpolation_end(): string;

 set_macro_start(arg0: string): BirdParser;

 macro_start(): string;

 set_macro_end(arg0: string): BirdParser;

 macro_end(): string;

 tangle(arg0: string, arg1: string, arg2: string): string;

 weave(arg0: string): string;

}
export class MdParser {
free(): void;

 constructor();

 set_fence_sequence(arg0: string): MdParser;

 set_block_name_start(arg0: string): MdParser;

 block_name_start(): string;

 set_block_name_end(arg0: string): MdParser;

 block_name_end(): string;

 set_comments_as_aside(arg0: boolean): MdParser;

 comments_as_aside(): boolean;

 set_default_language(arg0: string): MdParser;

 default_language(): string;

 set_comment_start(arg0: string): MdParser;

 comment_start(): string;

 set_interpolation_start(arg0: string): MdParser;

 interpolation_start(): string;

 set_interpolation_end(arg0: string): MdParser;

 interpolation_end(): string;

 set_macro_start(arg0: string): MdParser;

 macro_start(): string;

 set_macro_end(arg0: string): MdParser;

 macro_end(): string;

 tangle(arg0: string, arg1: string, arg2: string): string;

 weave(arg0: string): string;

}
export class HtmlParser {
free(): void;

 constructor();

 set_code_tag(arg0: string): HtmlParser;

 code_tag(): string;

 set_language_attribute(arg0: string): HtmlParser;

 language_attribute(): string;

 set_name_attribute(arg0: string): HtmlParser;

 name_attribute(): string;

 set_block_class(arg0: string): HtmlParser;

 block_class(): string;

 set_language_class(arg0: string): HtmlParser;

 language_class(): string;

 set_comments_as_aside(arg0: boolean): HtmlParser;

 comments_as_aside(): boolean;

 set_default_language(arg0: string): HtmlParser;

 default_language(): string;

 set_comment_start(arg0: string): HtmlParser;

 comment_start(): string;

 set_interpolation_start(arg0: string): HtmlParser;

 interpolation_start(): string;

 set_interpolation_end(arg0: string): HtmlParser;

 interpolation_end(): string;

 set_macro_start(arg0: string): HtmlParser;

 macro_start(): string;

 set_macro_end(arg0: string): HtmlParser;

 macro_end(): string;

 tangle(arg0: string, arg1: string, arg2: string): string;

 weave(arg0: string): string;

}
