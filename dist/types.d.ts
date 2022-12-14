import Color from 'color';
export declare type ThemeColorParam = Color | string | ArrayLike<number> | number;
export interface CodeBlockTheme {
    lineNumberColor?: ThemeColorParam;
    lineNumberBgColor?: ThemeColorParam;
    backgroundColor?: ThemeColorParam;
    textColor?: ThemeColorParam;
    substringColor?: ThemeColorParam;
    keywordColor?: ThemeColorParam;
    attributeColor?: ThemeColorParam;
    selectorTagColor?: ThemeColorParam;
    docTagColor?: ThemeColorParam;
    nameColor?: ThemeColorParam;
    builtInColor?: ThemeColorParam;
    literalColor?: ThemeColorParam;
    bulletColor?: ThemeColorParam;
    codeColor?: ThemeColorParam;
    additionColor?: ThemeColorParam;
    regexpColor?: ThemeColorParam;
    symbolColor?: ThemeColorParam;
    variableColor?: ThemeColorParam;
    templateVariableColor?: ThemeColorParam;
    linkColor?: ThemeColorParam;
    selectorAttributeColor?: ThemeColorParam;
    selectorPseudoColor?: ThemeColorParam;
    typeColor?: ThemeColorParam;
    stringColor?: ThemeColorParam;
    selectorIdColor?: ThemeColorParam;
    selectorClassColor?: ThemeColorParam;
    quoteColor?: ThemeColorParam;
    templateTagColor?: ThemeColorParam;
    deletionColor?: ThemeColorParam;
    titleColor?: ThemeColorParam;
    sectionColor?: ThemeColorParam;
    commentColor?: ThemeColorParam;
    metaKeywordColor?: ThemeColorParam;
    metaColor?: ThemeColorParam;
    functionColor?: ThemeColorParam;
    numberColor?: ThemeColorParam;
}
export declare type ThemeModes = 'light' | 'dark';
export interface Theme extends CodeBlockTheme {
    mode: ThemeModes;
}
export interface GlobalThemeTokens extends Theme {
}
export declare type ThemeProps = CustomThemeProps | NoThemeProps;
export interface CustomThemeProps {
    theme: Theme;
    [index: string]: any;
}
export interface NoThemeProps {
    [index: string]: any;
}
export declare type DefaultValue = string | number;
export declare type ThemedValue<V = DefaultValue> = (props?: ThemeProps) => V | '';
export declare type SupportedLanguages = 'abap' | 'actionscript' | 'ada' | 'arduino' | 'autoit' | 'bash' | 'c' | 'clojure' | 'csharp' | 'c++' | 'cpp' | 'coffeescript' | 'csharp' | 'css' | 'cuda' | 'd' | 'dart' | 'delphi' | 'elixir' | 'elm' | 'erlang' | 'fortran' | 'foxpro' | 'fsharp' | 'go' | 'graphql' | 'gql' | 'groovy' | 'haskell' | 'haxe' | 'html' | 'java' | 'javascript' | 'json' | 'julia' | 'jsx' | 'js' | 'kotlin' | 'latex' | 'lisp' | 'livescript' | 'lua' | 'markup' | 'mathematica' | 'makefile' | 'matlab' | 'objectivec' | 'objective-c' | 'objective-j' | 'objectpascal' | 'ocaml' | 'octave' | 'perl' | 'php' | 'powershell' | 'prolog' | 'puppet' | 'python' | 'qml' | 'r' | 'racket' | 'restructuredtext' | 'rest' | 'ruby' | 'rust' | 'sass' | 'less' | 'scala' | 'scheme' | 'shell' | 'smalltalk' | 'sql' | 'standardml' | 'sml' | 'swift' | 'tcl' | 'tex' | 'text' | 'tsx' | 'ts' | 'typescript' | 'vala' | 'vbnet' | 'verilog' | 'vhdl' | 'xml' | 'xquery';
