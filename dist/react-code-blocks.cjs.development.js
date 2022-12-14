'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactSyntaxHighlighter = require('react-syntax-highlighter');

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var DEFAULT_THEME_MODE = 'light'; // Resolves the different types of theme objects in the current API

function getTheme(props) {
  // If format not supported (or no theme provided), return standard theme
  return _extends(
    {
      mode: DEFAULT_THEME_MODE,
    },
    props === null || props === void 0 ? void 0 : props.theme
  );
}

function themed(modesOrVariant) {
  var modes = modesOrVariant;
  return function (props) {
    var theme = getTheme(props);
    return modes[theme.mode];
  };
}

var defaultColors = function defaultColors(theme) {
  var rcbTheme = {
    theme: theme,
  };
  return {
    lineNumberColor: themed({
      light: '#383a42',
      dark: '#abb2bf',
    })(rcbTheme),
    lineNumberBgColor: themed({
      light: '#fafafa',
      dark: '#282c34',
    })(rcbTheme),
    backgroundColor: themed({
      light: '#fafafa',
      dark: '#282c34',
    })(rcbTheme),
    textColor: themed({
      light: '#383a42',
      dark: '#abb2bf',
    })(rcbTheme),
    substringColor: themed({
      light: '#e45649',
      dark: '#e06c75',
    })(rcbTheme),
    keywordColor: themed({
      light: '#a626a4',
      dark: '#c678dd',
    })(rcbTheme),
    attributeColor: themed({
      light: '#50a14f',
      dark: '#98c379',
    })(rcbTheme),
    selectorAttributeColor: themed({
      light: '#e45649',
      dark: '#e06c75',
    })(rcbTheme),
    docTagColor: themed({
      light: '#a626a4',
      dark: '#c678dd',
    })(rcbTheme),
    nameColor: themed({
      light: '#e45649',
      dark: '#e06c75',
    })(rcbTheme),
    builtInColor: themed({
      light: '#c18401',
      dark: '#e6c07b',
    })(rcbTheme),
    literalColor: themed({
      light: '#0184bb',
      dark: '#56b6c2',
    })(rcbTheme),
    bulletColor: themed({
      light: '#4078f2',
      dark: '#61aeee',
    })(rcbTheme),
    codeColor: themed({
      light: '#383a42',
      dark: '#abb2bf',
    })(rcbTheme),
    additionColor: themed({
      light: '#50a14f',
      dark: '#98c379',
    })(rcbTheme),
    regexpColor: themed({
      light: '#50a14f',
      dark: '#98c379',
    })(rcbTheme),
    symbolColor: themed({
      light: '#4078f2',
      dark: '#61aeee',
    })(rcbTheme),
    variableColor: themed({
      light: '#986801',
      dark: '#d19a66',
    })(rcbTheme),
    templateVariableColor: themed({
      light: '#986801',
      dark: '#d19a66',
    })(rcbTheme),
    linkColor: themed({
      light: '#4078f2',
      dark: '#61aeee',
    })(rcbTheme),
    selectorClassColor: themed({
      light: '#986801',
      dark: '#d19a66',
    })(rcbTheme),
    typeColor: themed({
      light: '#986801',
      dark: '#d19a66',
    })(rcbTheme),
    stringColor: themed({
      light: '#50a14f',
      dark: '#98c379',
    })(rcbTheme),
    selectorIdColor: themed({
      light: '#4078f2',
      dark: '#61aeee',
    })(rcbTheme),
    quoteColor: themed({
      light: '#a0a1a7',
      dark: '#5c6370',
    })(rcbTheme),
    templateTagColor: themed({
      light: '#383a42',
      dark: '#abb2bf',
    })(rcbTheme),
    deletionColor: themed({
      light: '#e45649',
      dark: '#e06c75',
    })(rcbTheme),
    titleColor: themed({
      light: '#4078f2',
      dark: '#61aeee',
    })(rcbTheme),
    sectionColor: themed({
      light: '#e45649',
      dark: '#e06c75',
    })(rcbTheme),
    commentColor: themed({
      light: '#a0a1a7',
      dark: '#5c6370',
    })(rcbTheme),
    metaKeywordColor: themed({
      light: '#383a42',
      dark: '#abb2bf',
    })(rcbTheme),
    metaColor: themed({
      light: '#4078f2',
      dark: '#61aeee',
    })(rcbTheme),
    functionColor: themed({
      light: '#383a42',
      dark: '#abb2bf',
    })(rcbTheme),
    numberColor: themed({
      light: '#986801',
      dark: '#d19a66',
    })(rcbTheme),
  };
};

var codeFontFamily = 'inherit';
var fontSize = 'inherit';
var codeContainerStyle = {
  fontSize: fontSize,
  fontFamily: codeFontFamily,
  lineHeight: 20 / 12,
  padding: 8,
};

var lineNumberContainerStyle = function lineNumberContainerStyle(theme) {
  return {
    fontSize: fontSize,
    lineHeight: 20 / 14,
    color: theme.lineNumberColor,
    backgroundColor: theme.lineNumberBgColor,
    flexShrink: 0,
    padding: 8,
    textAlign: 'right',
    userSelect: 'none',
  };
};

var sharedCodeStyle = function sharedCodeStyle(theme) {
  return {
    key: {
      color: theme.keywordColor,
      fontWeight: 'bolder',
    },
    keyword: {
      color: theme.keywordColor,
      fontWeight: 'bolder',
    },
    'attr-name': {
      color: theme.attributeColor,
    },
    selector: {
      color: theme.selectorTagColor,
    },
    comment: {
      color: theme.commentColor,
      fontFamily: codeFontFamily,
      fontStyle: 'italic',
    },
    'block-comment': {
      color: theme.commentColor,
      fontFamily: codeFontFamily,
      fontStyle: 'italic',
    },
    'function-name': {
      color: theme.sectionColor,
    },
    'class-name': {
      color: theme.sectionColor,
    },
    doctype: {
      color: theme.docTagColor,
    },
    substr: {
      color: theme.substringColor,
    },
    namespace: {
      color: theme.nameColor,
    },
    builtin: {
      color: theme.builtInColor,
    },
    entity: {
      color: theme.literalColor,
    },
    bullet: {
      color: theme.bulletColor,
    },
    code: {
      color: theme.codeColor,
    },
    addition: {
      color: theme.additionColor,
    },
    regex: {
      color: theme.regexpColor,
    },
    symbol: {
      color: theme.symbolColor,
    },
    variable: {
      color: theme.variableColor,
    },
    url: {
      color: theme.linkColor,
    },
    'selector-attr': {
      color: theme.selectorAttributeColor,
    },
    'selector-pseudo': {
      color: theme.selectorPseudoColor,
    },
    type: {
      color: theme.typeColor,
    },
    string: {
      color: theme.stringColor,
    },
    quote: {
      color: theme.quoteColor,
    },
    tag: {
      color: theme.templateTagColor,
    },
    deletion: {
      color: theme.deletionColor,
    },
    title: {
      color: theme.titleColor,
    },
    section: {
      color: theme.sectionColor,
    },
    'meta-keyword': {
      color: theme.metaKeywordColor,
    },
    meta: {
      color: theme.metaColor,
    },
    italic: {
      fontStyle: 'italic',
    },
    bold: {
      fontWeight: 'bolder',
    },
    function: {
      color: theme.functionColor,
    },
    number: {
      color: theme.numberColor,
    },
  };
};

var codeStyle = function codeStyle(theme) {
  return {
    fontSize: fontSize,
    fontFamily: codeFontFamily,
    background: theme.backgroundColor,
    color: theme.textColor,
    borderRadius: 3,
    display: 'flex',
    lineHeight: 20 / 14,
    overflowX: 'auto',
    whiteSpace: 'pre',
  };
};

var codeBlockStyle = function codeBlockStyle(theme) {
  return _extends(
    {
      'pre[class*="language-"]': codeStyle(theme),
    },
    sharedCodeStyle(theme)
  );
};

var inlineCodeStyle = function inlineCodeStyle(theme) {
  return _extends(
    {
      'pre[class*="language-"]': _extends({}, codeStyle(theme), {
        padding: '2px 4px',
        display: 'inline',
        whiteSpace: 'pre-wrap',
      }),
    },
    sharedCodeStyle(theme)
  );
};

function applyTheme(theme) {
  if (theme === void 0) {
    theme = {
      mode: 'light',
    };
  }

  var newTheme = _extends({}, defaultColors(theme), theme);

  return {
    lineNumberContainerStyle: lineNumberContainerStyle(newTheme),
    codeBlockStyle: codeBlockStyle(newTheme),
    inlineCodeStyle: inlineCodeStyle(newTheme),
    codeContainerStyle: codeContainerStyle,
  };
}

var SUPPORTED_LANGUAGE_ALIASES = /*#__PURE__*/ Object.freeze([
  {
    name: 'PHP',
    alias: ['php', 'php3', 'php4', 'php5'],
    value: 'php',
  },
  {
    name: 'Java',
    alias: ['java'],
    value: 'java',
  },
  {
    name: 'CSharp',
    alias: ['csharp', 'c#', 'cs'],
    value: 'csharp',
  },
  {
    name: 'Python',
    alias: ['python', 'py'],
    value: 'python',
  },
  {
    name: 'JavaScript',
    alias: ['javascript', 'js'],
    value: 'javascript',
  },
  {
    name: 'XML',
    alias: ['xml'],
    value: 'xml',
  },
  {
    name: 'HTML',
    alias: ['html', 'htm'],
    value: 'markup',
  },
  {
    name: 'C++',
    alias: ['c++', 'cpp', 'clike'],
    value: 'cpp',
  },
  {
    name: 'Ruby',
    alias: ['ruby', 'rb', 'duby'],
    value: 'ruby',
  },
  {
    name: 'Objective-C',
    alias: ['objective-c', 'objectivec', 'obj-c', 'objc'],
    value: 'objectivec',
  },
  {
    name: 'C',
    alias: ['c'],
    value: 'cpp',
  },
  {
    name: 'Swift',
    alias: ['swift'],
    value: 'swift',
  },
  {
    name: 'TeX',
    alias: ['tex', 'latex'],
    value: 'tex',
  },
  {
    name: 'Shell',
    alias: ['shell', 'sh', 'ksh', 'zsh'],
    value: 'bash',
  },
  {
    name: 'Scala',
    alias: ['scala'],
    value: 'scala',
  },
  {
    name: 'Go',
    alias: ['go'],
    value: 'go',
  },
  {
    name: 'ActionScript',
    alias: ['actionscript', 'actionscript3', 'as'],
    value: 'actionscript',
  },
  {
    name: 'ColdFusion',
    alias: ['coldfusion'],
    value: 'xml',
  },
  {
    name: 'JavaFX',
    alias: ['javafx', 'jfx'],
    value: 'java',
  },
  {
    name: 'VbNet',
    alias: ['vbnet', 'vb.net'],
    value: 'vbnet',
  },
  {
    name: 'JSON',
    alias: ['json'],
    value: 'json',
  },
  {
    name: 'MATLAB',
    alias: ['matlab'],
    value: 'matlab',
  },
  {
    name: 'Groovy',
    alias: ['groovy'],
    value: 'groovy',
  },
  {
    name: 'SQL',
    alias: [
      'sql',
      'postgresql',
      'postgres',
      'plpgsql',
      'psql',
      'postgresql-console',
      'postgres-console',
      'tsql',
      't-sql',
      'mysql',
      'sqlite',
    ],
    value: 'sql',
  },
  {
    name: 'R',
    alias: ['r'],
    value: 'r',
  },
  {
    name: 'Perl',
    alias: ['perl', 'pl'],
    value: 'perl',
  },
  {
    name: 'Lua',
    alias: ['lua'],
    value: 'lua',
  },
  {
    name: 'Delphi',
    alias: ['delphi', 'pas', 'pascal', 'objectpascal'],
    value: 'delphi',
  },
  {
    name: 'XML',
    alias: ['xml'],
    value: 'xml',
  },
  {
    name: 'TypeScript',
    alias: ['typescript', 'ts', 'tsx'],
    value: 'typescript',
  },
  {
    name: 'CoffeeScript',
    alias: ['coffeescript', 'coffee-script', 'coffee'],
    value: 'coffeescript',
  },
  {
    name: 'Haskell',
    alias: ['haskell', 'hs'],
    value: 'haskell',
  },
  {
    name: 'Puppet',
    alias: ['puppet'],
    value: 'puppet',
  },
  {
    name: 'Arduino',
    alias: ['arduino'],
    value: 'arduino',
  },
  {
    name: 'Fortran',
    alias: ['fortran'],
    value: 'fortran',
  },
  {
    name: 'Erlang',
    alias: ['erlang', 'erl'],
    value: 'erlang',
  },
  {
    name: 'PowerShell',
    alias: ['powershell', 'posh', 'ps1', 'psm1'],
    value: 'powershell',
  },
  {
    name: 'Haxe',
    alias: ['haxe', 'hx', 'hxsl'],
    value: 'haxe',
  },
  {
    name: 'Elixir',
    alias: ['elixir', 'ex', 'exs'],
    value: 'elixir',
  },
  {
    name: 'Verilog',
    alias: ['verilog', 'v'],
    value: 'verilog',
  },
  {
    name: 'Rust',
    alias: ['rust'],
    value: 'rust',
  },
  {
    name: 'VHDL',
    alias: ['vhdl'],
    value: 'vhdl',
  },
  {
    name: 'Sass',
    alias: ['sass'],
    value: 'less',
  },
  {
    name: 'OCaml',
    alias: ['ocaml'],
    value: 'ocaml',
  },
  {
    name: 'Dart',
    alias: ['dart'],
    value: 'dart',
  },
  {
    name: 'CSS',
    alias: ['css'],
    value: 'css',
  },
  {
    name: 'reStructuredText',
    alias: ['restructuredtext', 'rst', 'rest'],
    value: 'rest',
  },
  {
    name: 'ObjectPascal',
    alias: ['objectpascal'],
    value: 'delphi',
  },
  {
    name: 'Kotlin',
    alias: ['kotlin'],
    value: 'kotlin',
  },
  {
    name: 'D',
    alias: ['d'],
    value: 'd',
  },
  {
    name: 'Octave',
    alias: ['octave'],
    value: 'matlab',
  },
  {
    name: 'QML',
    alias: ['qbs', 'qml'],
    value: 'qml',
  },
  {
    name: 'Prolog',
    alias: ['prolog'],
    value: 'prolog',
  },
  {
    name: 'FoxPro',
    alias: ['foxpro', 'vfp', 'clipper', 'xbase'],
    value: 'vbnet',
  },
  {
    name: 'Scheme',
    alias: ['scheme', 'scm'],
    value: 'scheme',
  },
  {
    name: 'CUDA',
    alias: ['cuda', 'cu'],
    value: 'cpp',
  },
  {
    name: 'Julia',
    alias: ['julia', 'jl'],
    value: 'julia',
  },
  {
    name: 'Racket',
    alias: ['racket', 'rkt'],
    value: 'lisp',
  },
  {
    name: 'Ada',
    alias: ['ada', 'ada95', 'ada2005'],
    value: 'ada',
  },
  {
    name: 'Tcl',
    alias: ['tcl'],
    value: 'tcl',
  },
  {
    name: 'Mathematica',
    alias: ['mathematica', 'mma', 'nb'],
    value: 'mathematica',
  },
  {
    name: 'Autoit',
    alias: ['autoit'],
    value: 'autoit',
  },
  {
    name: 'StandardML',
    alias: ['standardmL', 'sml', 'standardml'],
    value: 'sml',
  },
  {
    name: 'Objective-J',
    alias: ['objective-j', 'objectivej', 'obj-j', 'objj'],
    value: 'objectivec',
  },
  {
    name: 'Smalltalk',
    alias: ['smalltalk', 'squeak', 'st'],
    value: 'smalltalk',
  },
  {
    name: 'Vala',
    alias: ['vala', 'vapi'],
    value: 'vala',
  },
  {
    name: 'ABAP',
    alias: ['abap'],
    value: 'sql',
  },
  {
    name: 'LiveScript',
    alias: ['livescript', 'live-script'],
    value: 'livescript',
  },
  {
    name: 'XQuery',
    alias: ['xquery', 'xqy', 'xq', 'xql', 'xqm'],
    value: 'xquery',
  },
  {
    name: 'PlainText',
    alias: ['text', 'plaintext'],
    value: 'text',
  },
  {
    name: 'Yaml',
    alias: ['yaml', 'yml'],
    value: 'yaml',
  },
  {
    name: 'GraphQL',
    alias: ['graphql', 'gql'],
    value: 'graphql',
  },
]);
var normalizeLanguage = function normalizeLanguage(language) {
  if (!language) {
    return '';
  }

  var match = SUPPORTED_LANGUAGE_ALIASES.find(function (val) {
    return val.name === language || val.alias.includes(language);
  }); // Fallback to plain monospaced text if language passed but not supported

  return match ? match.value : language || 'text';
};

var Code = /*#__PURE__*/ (function (_PureComponent) {
  _inheritsLoose(Code, _PureComponent);

  function Code() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this._isMounted = false;
    return _this;
  }

  var _proto = Code.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
  };

  _proto.getLineOpacity = function getLineOpacity(lineNumber) {
    if (!this.props.highlight) {
      return 1;
    }

    var highlight = this.props.highlight
      .split(',')
      .map(function (num) {
        if (num.indexOf('-') > 0) {
          // We found a line group, e.g. 1-3
          var _num$split$map$sort = num.split('-').map(Number).sort(),
            from = _num$split$map$sort[0],
            to = _num$split$map$sort[1];

          return Array(to + 1)
            .fill(undefined)
            .map(function (_, index) {
              return index;
            })
            .slice(from, to + 1);
        }

        return Number(num);
      })
      .reduce(function (acc, val) {
        return acc.concat(val);
      }, []);

    if (highlight.length === 0) {
      return 1;
    }

    if (highlight.includes(lineNumber)) {
      return 1;
    }

    return 0.3;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _applyTheme = applyTheme(this.props.theme),
      inlineCodeStyle = _applyTheme.inlineCodeStyle;

    var language = normalizeLanguage(this.props.language);
    var props = {
      language: language,
      PreTag: this.props.preTag,
      style: this.props.codeStyle || inlineCodeStyle,
      showLineNumbers: this.props.showLineNumbers,
      startingLineNumber: this.props.startingLineNumber,
      codeTagProps: this.props.codeTagProps,
    };
    return React__default.createElement(
      reactSyntaxHighlighter.PrismAsyncLight,
      Object.assign({}, props, {
        // Wrap lines is needed to set styles on the line.
        // We use this to set opacity if highlight specific lines.
        wrapLines: this.props.highlight.length > 0,
        customStyle: this.props.customStyle,
        // Types are incorrect.
        // @ts-ignore
        lineProps: function lineProps(lineNumber) {
          return {
            style: _extends(
              {
                opacity: _this2.getLineOpacity(lineNumber),
              },
              _this2.props.lineNumberContainerStyle
            ),
          };
        },
      }),
      this.props.text
    );
  };

  return Code;
})(React.PureComponent);
Code.defaultProps = {
  theme: {},
  showLineNumbers: false,
  startingLineNumber: 1,
  lineNumberContainerStyle: {},
  codeTagProps: {},
  preTag: 'span',
  highlight: '',
  customStyle: {},
};

var CodeWithTheme = /*#__PURE__*/ styled.withTheme(Code);
function ThemedCode(props) {
  return React__default.createElement(CodeWithTheme, Object.assign({}, props));
}

var LANGUAGE_FALLBACK = 'text';

var CodeBlock = /*#__PURE__*/ (function (_PureComponent) {
  _inheritsLoose(CodeBlock, _PureComponent);

  function CodeBlock() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this._isMounted = false;

    _this.handleCopy = function (event) {
      /**
       * We don't want to copy the markup after highlighting, but rather the preformatted text in the selection
       */
      var data = event.nativeEvent.clipboardData;

      if (data) {
        event.preventDefault();
        var selection = window.getSelection();

        if (selection === null) {
          return;
        }

        var selectedText = selection.toString();
        var document =
          '<!doctype html><html><head></head><body><pre>' +
          selectedText +
          '</pre></body></html>';
        data.clearData();
        data.setData('text/html', document);
        data.setData('text/plain', selectedText);
      }
    };

    return _this;
  }

  var _proto = CodeBlock.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
  };

  _proto.render = function render() {
    var _this$props, _this$props2, _this$props3, _this$props4;

    var _applyTheme = applyTheme(this.props.theme),
      lineNumberContainerStyle = _applyTheme.lineNumberContainerStyle,
      codeBlockStyle = _applyTheme.codeBlockStyle,
      codeContainerStyle = _applyTheme.codeContainerStyle;

    var props = {
      language: this.props.language || LANGUAGE_FALLBACK,
      codeStyle: _extends(
        {},
        codeBlockStyle,
        (_this$props = this.props) === null || _this$props === void 0
          ? void 0
          : _this$props.codeBlockStyle
      ),
      customStyle:
        (_this$props2 = this.props) === null || _this$props2 === void 0
          ? void 0
          : _this$props2.customStyle,
      showLineNumbers: this.props.showLineNumbers,
      startingLineNumber: this.props.startingLineNumber,
      codeTagProps: {
        style: _extends(
          {},
          codeContainerStyle,
          (_this$props3 = this.props) === null || _this$props3 === void 0
            ? void 0
            : _this$props3.codeContainerStyle
        ),
      },
      lineNumberContainerStyle: _extends(
        {},
        lineNumberContainerStyle,
        (_this$props4 = this.props) === null || _this$props4 === void 0
          ? void 0
          : _this$props4.lineNumberContainerStyle
      ),
      text: this.props.text.toString(),
      highlight: this.props.highlight,
    };
    return React__default.createElement(Code, Object.assign({}, props));
  };

  return CodeBlock;
})(React.PureComponent);
CodeBlock.displayName = 'CodeBlock';
CodeBlock.defaultProps = {
  showLineNumbers: true,
  startingLineNumber: 1,
  language: LANGUAGE_FALLBACK,
  theme: {},
  highlight: '',
  lineNumberContainerStyle: {},
  customStyle: {},
  codeBlockStyle: {},
};

var CodeBlockWithTheme = /*#__PURE__*/ styled.withTheme(CodeBlock);
function ThemedCodeBlock(props) {
  return React__default.createElement(
    CodeBlockWithTheme,
    Object.assign({}, props)
  );
}

var ClipboardListIcon = function ClipboardListIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    props = _objectWithoutPropertiesLoose(_ref, ['size', 'color']);

  return React__default.createElement(
    'svg',
    Object.assign({}, props, {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: color,
    }),
    React__default.createElement('path', {
      d: 'M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z',
    })
  );
};

ClipboardListIcon.displayName = 'ClipboardListIcon';
ClipboardListIcon.defaultProps = {
  size: '16pt',
  color: 'currentcolor',
};

var ClipboardCheckIcon = function ClipboardCheckIcon(_ref2) {
  var size = _ref2.size,
    color = _ref2.color,
    props = _objectWithoutPropertiesLoose(_ref2, ['size', 'color']);

  return React__default.createElement(
    'svg',
    Object.assign({}, props, {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: color,
    }),
    React__default.createElement('path', {
      d: 'M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z',
    })
  );
};

ClipboardCheckIcon.displayName = 'ClipboardCheckIcon';
ClipboardCheckIcon.defaultProps = {
  size: '16pt',
  color: 'currentcolor',
};
function Copy(_ref3) {
  var size = _ref3.size,
    color = _ref3.color,
    copied = _ref3.copied,
    props = _objectWithoutPropertiesLoose(_ref3, ['size', 'color', 'copied']);

  if (copied) {
    return React__default.createElement(
      ClipboardCheckIcon,
      Object.assign(
        {},
        {
          color: color,
          size: size,
        },
        props
      )
    );
  }

  return React__default.createElement(
    ClipboardListIcon,
    Object.assign(
      {},
      {
        color: color,
        size: size,
      },
      props
    )
  );
}

var isBrowser = function isBrowser() {
  return Boolean(
    typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
  );
};

var useSSR = function useSSR() {
  var _useState = React.useState(false),
    browser = _useState[0],
    setBrowser = _useState[1];

  React.useEffect(function () {
    setBrowser(isBrowser());
  }, []);
  return {
    isBrowser: browser,
    isServer: !browser,
  };
};

var getId = function getId() {
  return Math.random().toString(32).slice(2, 10);
};

var createElement = function createElement(id) {
  var el = document.createElement('div');
  el.setAttribute('id', id);
  return el;
};

var usePortal = function usePortal(selectId) {
  if (selectId === void 0) {
    selectId = getId();
  }

  var id = 'zeit-ui-' + selectId;

  var _useSSR = useSSR(),
    isBrowser = _useSSR.isBrowser;

  var _useState = React.useState(isBrowser ? createElement(id) : null),
    elSnapshot = _useState[0],
    setElSnapshot = _useState[1];

  React.useEffect(function () {
    var hasElement = document.querySelector('#' + id);
    var el = hasElement || createElement(id);

    if (!hasElement) {
      document.body.appendChild(el);
    }

    setElSnapshot(el);
  }, []);
  return elSnapshot;
};

var warningStack = {};

var useWarning = function useWarning(message, component) {
  var tag = component ? ' [' + component + ']' : ' ';
  var log = '[Zeit UI]' + tag + ': ' + message;
  if (typeof console === 'undefined') return;
  if (warningStack[log]) return;
  warningStack[log] = true;

  {
    return console.error(log);
  }
};

var defaultOptions = {
  onError: function onError() {
    return useWarning('Failed to copy.', 'use-clipboard');
  },
};

var useClipboard = function useClipboard(options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  var el = usePortal('clipboard');

  var copyText = function copyText(el, text) {
    if (!el || !text) return;
    var selection = window.getSelection();
    if (!selection) return;
    el.style.whiteSpace = 'pre';
    el.textContent = text;
    var range = window.document.createRange();
    selection.removeAllRanges();
    range.selectNode(el);
    selection.addRange(range);

    try {
      window.document.execCommand('copy');
    } catch (e) {
      options.onError && options.onError();
    }

    selection.removeAllRanges();

    if (el) {
      el.textContent = '';
    }
  };

  var copy = React.useCallback(
    function (text) {
      copyText(el, text);
    },
    [el]
  );
  return {
    copy: copy,
  };
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose([
    '\n  position: relative;\n  background: ',
    ';\n  border-radius: 0.25rem;\n  padding: ',
    ';\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([
    '\n  position: absolute;\n  top: 0.5em;\n  right: 0.75em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: ',
    ';\n  margin-top: 0.15rem;\n  border-radius: 0.25rem;\n  max-height: 2rem;\n  max-width: 2rem;\n  padding: 0.25rem;\n  &:hover {\n    opacity: ',
    ';\n  }\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n  .icon {\n    width: 1rem;\n    height: 1rem;\n  }\n',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = /*#__PURE__*/ styled__default.button(
  /*#__PURE__*/ _templateObject(),
  function (p) {
    return p.theme.backgroundColor;
  },
  function (p) {
    return p.copied ? 1 : 0.5;
  }
);
var Snippet = /*#__PURE__*/ styled__default.div(
  /*#__PURE__*/ _templateObject2(),
  function (p) {
    return p.theme.backgroundColor;
  },
  function (p) {
    return p.codeBlock ? '0.25rem 0.5rem 0.25rem 0.25rem' : '0.25rem';
  }
);
function CopyBlock(_ref) {
  var theme = _ref.theme,
    text = _ref.text,
    _ref$codeBlock = _ref.codeBlock,
    codeBlock = _ref$codeBlock === void 0 ? false : _ref$codeBlock,
    _ref$customStyle = _ref.customStyle,
    customStyle = _ref$customStyle === void 0 ? {} : _ref$customStyle,
    onCopy = _ref.onCopy,
    rest = _objectWithoutPropertiesLoose(_ref, [
      'theme',
      'text',
      'codeBlock',
      'customStyle',
      'onCopy',
    ]);

  var _useState = React.useState(false),
    copied = _useState[0],
    toggleCopy = _useState[1];

  var _useClipboard = useClipboard(),
    copy = _useClipboard.copy;

  var handler = function handler() {
    copy(text);
    onCopy ? onCopy() : toggleCopy(!copied);
  };

  return React__default.createElement(
    Snippet,
    Object.assign(
      {},
      {
        codeBlock: codeBlock,
      },
      {
        style: customStyle,
        theme: theme,
      }
    ),
    codeBlock // @ts-ignore
      ? React__default.createElement(
          CodeBlock,
          Object.assign(
            {
              text: text,
              theme: theme,
            },
            rest
          )
        ) // @ts-ignore
      : React__default.createElement(
          Code,
          Object.assign(
            {
              text: text,
              theme: theme,
            },
            rest
          )
        ),
    React__default.createElement(
      Button,
      Object.assign(
        {
          type: 'button',
          onClick: handler,
        },
        {
          theme: theme,
          copied: copied,
        }
      ),
      React__default.createElement(Copy, {
        color: copied ? theme.stringColor : theme.textColor,
        copied: copied,
        className: 'icon',
        size: '16pt',
      })
    )
  );
}

var CopyBlockWithTheme = /*#__PURE__*/ styled.withTheme(CopyBlock);
function ThemedCopyBlock(props) {
  return React__default.createElement(
    CopyBlockWithTheme,
    Object.assign({}, props)
  );
}

var withDefaults = function withDefaults(component, defaultProps) {
  component.defaultProps = defaultProps;
  return component;
};

var getStyles = function getStyles(theme) {
  var styles = {
    color: theme.textColor,
    border: theme.lineNumberBgColor,
    bgColor: theme.backgroundColor,
  };
  return styles;
};

var SnippetIcon = function SnippetIcon() {
  return React__default.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: '22',
      height: '22',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      fill: 'none',
      shapeRendering: 'geometricPrecision',
      style: {
        color: 'currentcolor',
      },
    },
    React__default.createElement('path', {
      d: 'M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z',
    })
  );
};

var SnippetIcon$1 = /*#__PURE__*/ React__default.memo(SnippetIcon);

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose([
    '\n   {\n    position: relative;\n    width: ',
    ';\n    max-width: 100%;\n    padding: 8pt;\n    padding-right: calc(2 * 16pt);\n    color: ',
    ';\n    background-color: ',
    ';\n    border: 1px solid ',
    ';\n    border-radius: 5px;\n  }\n  pre {\n    margin: 0;\n    padding: 0;\n    border: none;\n    background-color: transparent;\n    color: ',
    ";\n    font-size: 0.8125rem;\n  }\n  pre::before {\n    content: '$ ';\n    user-select: none;\n  }\n  pre :global(*) {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n  }\n  .copy {\n    position: absolute;\n    right: 0;\n    top: -2px;\n    transform: translateY(50%);\n    background-color: ",
    ';\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    width: calc(2 * 16pt);\n    color: inherit;\n    transition: opacity 0.2s ease 0s;\n    border-radius: 5px;\n    cursor: pointer;\n    user-select: none;\n  }\n  .copy:hover {\n    opacity: 0.7;\n  }\n',
  ]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var SnippetWrapper = /*#__PURE__*/ styled__default.div(
  /*#__PURE__*/ _templateObject$1(),
  function (_ref) {
    var width = _ref.width;
    return width;
  },
  function (_ref2) {
    var style = _ref2.style;
    return style.color;
  },
  function (_ref3) {
    var style = _ref3.style;
    return style.bgColor;
  },
  function (_ref4) {
    var style = _ref4.style;
    return style.border;
  },
  function (_ref5) {
    var style = _ref5.style;
    return style.color;
  },
  function (_ref6) {
    var style = _ref6.style;
    return style.bgColor;
  }
);
var defaultProps = {
  width: 'initial',
  copy: 'default',
  className: '',
};

var textArrayToString = function textArrayToString(text) {
  return text.reduce(function (pre, current) {
    if (!current) return pre;
    return pre ? pre + '\n' + current : current;
  }, '');
};

var Snippet$1 = function Snippet(_ref7) {
  var children = _ref7.children,
    text = _ref7.text,
    copyType = _ref7.copy,
    className = _ref7.className,
    props = _objectWithoutPropertiesLoose(_ref7, [
      'children',
      'text',
      'width',
      'copy',
      'className',
    ]);

  var _useClipboard = useClipboard(),
    copy = _useClipboard.copy;

  var ref = React.useRef(null);
  var isMultiLine = text && Array.isArray(text);
  var theme = React.useContext(styled.ThemeContext);
  var style = React.useMemo(
    function () {
      return getStyles(theme);
    },
    [theme]
  );
  var showCopyIcon = React.useMemo(
    function () {
      return copyType !== 'prevent';
    },
    [copyType]
  );
  var childText = React.useMemo(
    function () {
      if (isMultiLine) return textArrayToString(text);
      if (!children) return text;
      if (!ref.current) return '';
      return ref.current.textContent;
    },
    [ref.current, children, text]
  );

  var clickHandler = function clickHandler() {
    if (!childText || !showCopyIcon) return;
    copy(childText);
    if (copyType === 'slient') return;
  };

  return React__default.createElement(
    SnippetWrapper,
    Object.assign(
      {
        className: '' + className,
      },
      props,
      {
        style: style,
      }
    ),
    isMultiLine
      ? text.map(function (t, index) {
          return React__default.createElement(
            'pre',
            {
              key: 'snippet-' + index + '-' + t,
            },
            t
          );
        })
      : React__default.createElement(
          'pre',
          {
            ref: ref,
          },
          children || text
        ),
    showCopyIcon &&
      React__default.createElement(
        'div',
        {
          className: 'copy',
          onClick: clickHandler,
        },
        React__default.createElement(SnippetIcon$1, null)
      )
  );
};

var MemoSnippet = /*#__PURE__*/ React__default.memo(Snippet$1);
var Snippet$2 = /*#__PURE__*/ withDefaults(MemoSnippet, defaultProps);

var SnippetWithTheme = /*#__PURE__*/ styled.withTheme(Snippet$2);
function ThemedSnippet(props) {
  return React__default.createElement(
    SnippetWithTheme,
    Object.assign({}, props)
  );
}

var a11yDark = {
  lineNumberColor: '#f8f8f2',
  lineNumberBgColor: '#2b2b2b',
  backgroundColor: '#2b2b2b',
  textColor: '#f8f8f2',
  substringColor: '#f8f8f2',
  keywordColor: '#dcc6e0',
  attributeColor: '#ffd700',
  selectorAttributeColor: '#dcc6e0',
  docTagColor: '#f8f8f2',
  nameColor: '#ffa07a',
  builtInColor: '#f5ab35',
  literalColor: '#f5ab35',
  bulletColor: '#abe338',
  codeColor: '#f8f8f2',
  additionColor: '#abe338',
  regexpColor: '#ffa07a',
  symbolColor: '#abe338',
  variableColor: '#ffa07a',
  templateVariableColor: '#ffa07a',
  linkColor: '#f5ab35',
  selectorClassColor: '#ffa07a',
  typeColor: '#f5ab35',
  stringColor: '#abe338',
  selectorIdColor: '#ffa07a',
  quoteColor: '#d4d0ab',
  templateTagColor: '#f8f8f2',
  deletionColor: '#ffa07a',
  titleColor: '#00e0e0',
  sectionColor: '#00e0e0',
  commentColor: '#d4d0ab',
  metaKeywordColor: '#f8f8f2',
  metaColor: '#f5ab35',
  functionColor: '#f8f8f2',
  numberColor: '#f5ab35',
};

var a11yLight = {
  lineNumberColor: '#545454',
  lineNumberBgColor: '#fefefe',
  backgroundColor: '#fefefe',
  textColor: '#545454',
  substringColor: '#545454',
  keywordColor: '#7928a1',
  attributeColor: '#aa5d00',
  selectorAttributeColor: '#7928a1',
  docTagColor: '#545454',
  nameColor: '#d91e18',
  builtInColor: '#aa5d00',
  literalColor: '#aa5d00',
  bulletColor: '#008000',
  codeColor: '#545454',
  additionColor: '#008000',
  regexpColor: '#d91e18',
  symbolColor: '#008000',
  variableColor: '#d91e18',
  templateVariableColor: '#d91e18',
  linkColor: '#aa5d00',
  selectorClassColor: '#d91e18',
  typeColor: '#aa5d00',
  stringColor: '#008000',
  selectorIdColor: '#d91e18',
  quoteColor: '#696969',
  templateTagColor: '#545454',
  deletionColor: '#d91e18',
  titleColor: '#007faa',
  sectionColor: '#007faa',
  commentColor: '#696969',
  metaKeywordColor: '#545454',
  metaColor: '#aa5d00',
  functionColor: '#545454',
  numberColor: '#aa5d00',
};

var anOldHope = {
  lineNumberColor: '#c0c5ce',
  lineNumberBgColor: '#1C1D21',
  backgroundColor: '#1C1D21',
  textColor: '#c0c5ce',
  substringColor: '#c0c5ce',
  keywordColor: '#B45EA4',
  attributeColor: '#EE7C2B',
  selectorAttributeColor: '#B45EA4',
  docTagColor: '#c0c5ce',
  nameColor: '#EB3C54',
  builtInColor: '#E7CE56',
  literalColor: '#E7CE56',
  bulletColor: '#4FB4D7',
  codeColor: '#c0c5ce',
  additionColor: '#4FB4D7',
  regexpColor: '#EB3C54',
  symbolColor: '#4FB4D7',
  variableColor: '#EB3C54',
  templateVariableColor: '#EB3C54',
  linkColor: '#E7CE56',
  selectorClassColor: '#EB3C54',
  typeColor: '#E7CE56',
  stringColor: '#4FB4D7',
  selectorIdColor: '#EB3C54',
  quoteColor: '#B6B18B',
  templateTagColor: '#c0c5ce',
  deletionColor: '#EB3C54',
  titleColor: '#78BB65',
  sectionColor: '#78BB65',
  commentColor: '#B6B18B',
  metaKeywordColor: '#c0c5ce',
  metaColor: '#E7CE56',
  functionColor: '#c0c5ce',
  numberColor: '#E7CE56',
};

var androidstudio = {
  lineNumberColor: '#a9b7c6',
  lineNumberBgColor: '#282b2e',
  backgroundColor: '#282b2e',
  textColor: '#a9b7c6',
  substringColor: '#a9b7c6',
  keywordColor: '#cc7832',
  attributeColor: '#6A8759',
  selectorAttributeColor: '#cc7832',
  docTagColor: '#a9b7c6',
  nameColor: '#e8bf6a',
  builtInColor: '#a9b7c6',
  literalColor: '#6897BB',
  bulletColor: '#6897BB',
  codeColor: '#a9b7c6',
  additionColor: '#6A8759',
  regexpColor: '#a9b7c6',
  symbolColor: '#6897BB',
  variableColor: '#629755',
  templateVariableColor: '#629755',
  linkColor: '#629755',
  selectorClassColor: '#e8bf6a',
  typeColor: '#ffc66d',
  stringColor: '#6A8759',
  selectorIdColor: '#e8bf6a',
  quoteColor: '#808080',
  templateTagColor: '#a9b7c6',
  deletionColor: '#cc7832',
  titleColor: '#ffc66d',
  sectionColor: '#ffc66d',
  commentColor: '#808080',
  metaKeywordColor: '#a9b7c6',
  metaColor: '#bbb529',
  functionColor: '#a9b7c6',
  numberColor: '#6897BB',
};

var arta = {
  lineNumberColor: '#aaa',
  lineNumberBgColor: '#222',
  backgroundColor: '#222',
  textColor: '#aaa',
  substringColor: '#aaa',
  keywordColor: '#6644aa',
  attributeColor: '#32aaee',
  selectorAttributeColor: '#6644aa',
  docTagColor: undefined,
  nameColor: '#6644aa',
  builtInColor: '#32aaee',
  literalColor: '#32aaee',
  bulletColor: '#ffcc33',
  codeColor: '#aaa',
  additionColor: '#00cc66',
  regexpColor: '#ffcc33',
  symbolColor: '#ffcc33',
  variableColor: '#bb1166',
  templateVariableColor: '#32aaee',
  linkColor: '#32aaee',
  selectorClassColor: '#6644aa',
  typeColor: '#32aaee',
  stringColor: '#ffcc33',
  selectorIdColor: '#6644aa',
  quoteColor: '#444',
  templateTagColor: '#bb1166',
  deletionColor: '#bb1166',
  titleColor: '#bb1166',
  sectionColor: '#fff',
  commentColor: '#444',
  metaKeywordColor: '#aaa',
  metaColor: '#444',
  functionColor: '#aaa',
  numberColor: '#00cc66',
};

var atomOneDark = {
  lineNumberColor: '#abb2bf',
  lineNumberBgColor: '#282c34',
  backgroundColor: '#282c34',
  textColor: '#abb2bf',
  substringColor: '#e06c75',
  keywordColor: '#c678dd',
  attributeColor: '#98c379',
  selectorAttributeColor: '#e06c75',
  docTagColor: '#c678dd',
  nameColor: '#e06c75',
  builtInColor: '#e6c07b',
  literalColor: '#56b6c2',
  bulletColor: '#61aeee',
  codeColor: '#abb2bf',
  additionColor: '#98c379',
  regexpColor: '#98c379',
  symbolColor: '#61aeee',
  variableColor: '#d19a66',
  templateVariableColor: '#d19a66',
  linkColor: '#61aeee',
  selectorClassColor: '#d19a66',
  typeColor: '#d19a66',
  stringColor: '#98c379',
  selectorIdColor: '#61aeee',
  quoteColor: '#5c6370',
  templateTagColor: '#abb2bf',
  deletionColor: '#e06c75',
  titleColor: '#61aeee',
  sectionColor: '#e06c75',
  commentColor: '#5c6370',
  metaKeywordColor: '#abb2bf',
  metaColor: '#61aeee',
  functionColor: '#abb2bf',
  numberColor: '#d19a66',
};

var atomOneLight = {
  lineNumberColor: '#383a42',
  lineNumberBgColor: '#fafafa',
  backgroundColor: '#fafafa',
  textColor: '#383a42',
  substringColor: '#e45649',
  keywordColor: '#a626a4',
  attributeColor: '#50a14f',
  selectorAttributeColor: '#e45649',
  docTagColor: '#a626a4',
  nameColor: '#e45649',
  builtInColor: '#c18401',
  literalColor: '#0184bb',
  bulletColor: '#4078f2',
  codeColor: '#383a42',
  additionColor: '#50a14f',
  regexpColor: '#50a14f',
  symbolColor: '#4078f2',
  variableColor: '#986801',
  templateVariableColor: '#986801',
  linkColor: '#4078f2',
  selectorClassColor: '#986801',
  typeColor: '#986801',
  stringColor: '#50a14f',
  selectorIdColor: '#4078f2',
  quoteColor: '#a0a1a7',
  templateTagColor: '#383a42',
  deletionColor: '#e45649',
  titleColor: '#4078f2',
  sectionColor: '#e45649',
  commentColor: '#a0a1a7',
  metaKeywordColor: '#383a42',
  metaColor: '#4078f2',
  functionColor: '#383a42',
  numberColor: '#986801',
};

var codepen = {
  lineNumberColor: '#fff',
  lineNumberBgColor: '#222',
  backgroundColor: '#222',
  textColor: '#fff',
  substringColor: '#fff',
  keywordColor: '#8f9c6c',
  attributeColor: '#9b869b',
  selectorTagColor: '#8f9c6c',
  docTagColor: '#fff',
  nameColor: '#9b869b',
  builtInColor: '#ab875d',
  literalColor: '#ab875d',
  bulletColor: '#ab875d',
  codeColor: '#fff',
  additionColor: '#8f9c6c',
  regexpColor: '#ab875d',
  symbolColor: '#ab875d',
  variableColor: '#ab875d',
  templateVariableColor: '#ab875d',
  linkColor: '#ab875d',
  selectorAttributeColor: '#fff',
  selectorPseudoColor: '#ff',
  typeColor: '#9b869b',
  stringColor: '#8f9c6c',
  selectorIdColor: '#9b869b',
  selectorClassColor: '#9b869b',
  quoteColor: '#777',
  templateTagColor: '#ab875d',
  deletionColor: '#ab875d',
  titleColor: '#9b869b',
  sectionColor: '#9b869b',
  commentColor: '#777',
  metaKeywordColor: '#ab875d',
  metaColor: '#ab875d',
  functionColor: '#fff',
  numberColor: '#ab875d',
};

var dracula = {
  lineNumberColor: '#6272a4',
  lineNumberBgColor: '#282a36',
  backgroundColor: '#282a36',
  textColor: '#f8f8f2',
  substringColor: '#f1fa8c',
  keywordColor: '#ff79c6',
  attributeColor: '#50fa7b',
  selectorTagColor: '#8be9fd',
  docTagColor: '#f1fa8c',
  nameColor: '#66d9ef',
  builtInColor: '#50fa7b',
  literalColor: '#FF79C6',
  bulletColor: '#8BE9FD',
  codeColor: '#50FA7B',
  additionColor: '#f1fa8c',
  regexpColor: '#F1FA8C',
  symbolColor: '#F1FA8C',
  variableColor: '#F8F8F2',
  templateVariableColor: '#FF79C6',
  linkColor: '#00bcd4',
  selectorAttributeColor: '#FF79C6',
  selectorPseudoColor: '#FF79C6',
  typeColor: '#8BE9FD',
  stringColor: '#F1FA8C',
  selectorIdColor: '#50FA7B',
  selectorClassColor: '#50FA7B',
  quoteColor: '#E9F284',
  templateTagColor: '#FF79C6',
  deletionColor: '#FF79C6',
  titleColor: '#ff555580',
  sectionColor: '#F8F8F2',
  commentColor: '#6272A4',
  metaKeywordColor: '#50FA7B',
  metaColor: '#50FA7B',
  functionColor: '#50FA7B',
  numberColor: '#bd93f9',
};

var far = {
  lineNumberColor: '#0ff',
  lineNumberBgColor: '#000080',
  backgroundColor: '#000080',
  textColor: '#0ff',
  substringColor: '#0ff',
  keywordColor: '#fff',
  attributeColor: '#ff0',
  selectorAttributeColor: '#fff',
  docTagColor: '#888',
  nameColor: '#fff',
  builtInColor: '#ff0',
  literalColor: '#0f0',
  bulletColor: '#ff0',
  codeColor: '#0ff',
  additionColor: '#ff0',
  regexpColor: '#0f0',
  symbolColor: '#ff0',
  variableColor: '#fff',
  templateVariableColor: '#ff0',
  linkColor: '#0f0',
  selectorClassColor: '#fff',
  typeColor: '#fff',
  stringColor: '#ff0',
  selectorIdColor: '#fff',
  quoteColor: '#888',
  templateTagColor: '#ff0',
  deletionColor: '#888',
  titleColor: '#0ff',
  sectionColor: '#fff',
  commentColor: '#888',
  metaKeywordColor: '#0ff',
  metaColor: '#008080',
  functionColor: '#0ff',
  numberColor: '#0f0',
};

var github = {
  lineNumberColor: '#333333',
  lineNumberBgColor: 'white',
  backgroundColor: 'white',
  textColor: '#333333',
  substringColor: '#333333',
  keywordColor: '#a71d5d',
  attributeColor: '#0086b3',
  selectorAttributeColor: '#a71d5d',
  docTagColor: '#333333',
  nameColor: '#63a35c',
  builtInColor: '#333333',
  literalColor: '#0086b3',
  bulletColor: '#0086b3',
  codeColor: '#333333',
  additionColor: '#55a532',
  regexpColor: '#333333',
  symbolColor: '#0086b3',
  variableColor: '#df5000',
  templateVariableColor: '#df5000',
  linkColor: '#0366d6',
  selectorClassColor: '#795da3',
  typeColor: '#a71d5d',
  stringColor: '#df5000',
  selectorIdColor: '#795da3',
  quoteColor: '#df5000',
  templateTagColor: '#333333',
  deletionColor: '#bd2c00',
  titleColor: '#795da3',
  sectionColor: '#63a35c',
  commentColor: '#969896',
  metaKeywordColor: '#333333',
  metaColor: '#969896',
  functionColor: '#333333',
  numberColor: '#333333',
};

var googlecode = {
  lineNumberColor: 'black',
  lineNumberBgColor: 'white',
  backgroundColor: 'white',
  textColor: 'black',
  substringColor: '#000',
  keywordColor: '#008',
  attributeColor: '#000',
  selectorAttributeColor: '#008',
  docTagColor: '#606',
  nameColor: '#008',
  builtInColor: '#606',
  literalColor: '#066',
  bulletColor: '#066',
  codeColor: 'black',
  additionColor: undefined,
  regexpColor: '#080',
  symbolColor: '#066',
  variableColor: '#660',
  templateVariableColor: '#660',
  linkColor: '#066',
  selectorClassColor: '#9B703F',
  typeColor: '#606',
  stringColor: '#080',
  selectorIdColor: '#9B703F',
  quoteColor: '#800',
  templateTagColor: 'black',
  deletionColor: undefined,
  titleColor: '#606',
  sectionColor: '#008',
  commentColor: '#800',
  metaKeywordColor: 'black',
  metaColor: '#066',
  functionColor: 'black',
  numberColor: '#066',
};

var hopscotch = {
  lineNumberColor: '#b9b5b8',
  lineNumberBgColor: '#322931',
  backgroundColor: '#322931',
  textColor: '#b9b5b8',
  substringColor: '#b9b5b8',
  keywordColor: '#c85e7c',
  attributeColor: '#dd464c',
  selectorAttributeColor: '#c85e7c',
  docTagColor: '#b9b5b8',
  nameColor: '#dd464c',
  builtInColor: '#fd8b19',
  literalColor: '#fd8b19',
  bulletColor: '#8fc13e',
  codeColor: '#b9b5b8',
  additionColor: '#8fc13e',
  regexpColor: '#dd464c',
  symbolColor: '#8fc13e',
  variableColor: '#dd464c',
  templateVariableColor: '#dd464c',
  linkColor: '#dd464c',
  selectorClassColor: '#dd464c',
  typeColor: '#fd8b19',
  stringColor: '#8fc13e',
  selectorIdColor: '#dd464c',
  quoteColor: '#989498',
  templateTagColor: '#b9b5b8',
  deletionColor: '#dd464c',
  titleColor: '#1290bf',
  sectionColor: '#1290bf',
  commentColor: '#989498',
  metaKeywordColor: '#b9b5b8',
  metaColor: '#149b93',
  functionColor: '#1290bf',
  numberColor: '#fd8b19',
};

var hybrid = {
  lineNumberColor: '#c5c8c6',
  lineNumberBgColor: '#1d1f21',
  backgroundColor: '#1d1f21',
  textColor: '#c5c8c6',
  substringColor: '#8abeb7',
  keywordColor: '#81a2be',
  attributeColor: '#b294bb',
  selectorAttributeColor: '#81a2be',
  docTagColor: '#b5bd68',
  nameColor: '#f0c674',
  builtInColor: '#de935f',
  literalColor: '#cc6666',
  bulletColor: '#81a2be',
  codeColor: '#b294bb',
  additionColor: '#b5bd68',
  regexpColor: '#b5bd68',
  symbolColor: '#cc6666',
  variableColor: '#8abeb7',
  templateVariableColor: '#8abeb7',
  linkColor: '#cc6666',
  selectorClassColor: '#de935f',
  typeColor: '#de935f',
  stringColor: '#b5bd68',
  selectorIdColor: '#b294bb',
  quoteColor: '#de935f',
  templateTagColor: '#8abeb7',
  deletionColor: '#cc6666',
  titleColor: '#f0c674',
  sectionColor: '#de935f',
  commentColor: '#707880',
  metaKeywordColor: '#c5c8c6',
  metaColor: '#707880',
  functionColor: '#c5c8c6',
  numberColor: '#cc6666',
};

var irBlack = {
  lineNumberColor: '#f8f8f8',
  lineNumberBgColor: '#000',
  backgroundColor: '#000',
  textColor: '#f8f8f8',
  substringColor: '#daefa3',
  keywordColor: '#96cbfe',
  attributeColor: '#ffffb6',
  selectorAttributeColor: '#96cbfe',
  docTagColor: '#ffffb6',
  nameColor: '#96cbfe',
  builtInColor: '#f8f8f8',
  literalColor: '#c6c5fe',
  bulletColor: '#c6c5fe',
  codeColor: '#f8f8f8',
  additionColor: '#a8ff60',
  regexpColor: '#e9c062',
  symbolColor: '#c6c5fe',
  variableColor: '#c6c5fe',
  templateVariableColor: '#c6c5fe',
  linkColor: '#e9c062',
  selectorClassColor: '#f8f8f8',
  typeColor: '#ffffb6',
  stringColor: '#a8ff60',
  selectorIdColor: '#ffffb6',
  quoteColor: '#7c7c7c',
  templateTagColor: '#f8f8f8',
  deletionColor: '#ff73fd',
  titleColor: '#ffffb6',
  sectionColor: '#ffffb6',
  commentColor: '#7c7c7c',
  metaKeywordColor: '#f8f8f8',
  metaColor: '#7c7c7c',
  functionColor: '#f8f8f8',
  numberColor: '#ff73fd',
};

var monoBlue = {
  lineNumberColor: '#00193a',
  lineNumberBgColor: '#eaeef3',
  backgroundColor: '#eaeef3',
  textColor: '#00193a',
  substringColor: '#4c81c9',
  keywordColor: undefined,
  attributeColor: '#4c81c9',
  selectorAttributeColor: undefined,
  docTagColor: undefined,
  nameColor: '#0048ab',
  builtInColor: '#0048ab',
  literalColor: '#0048ab',
  bulletColor: '#4c81c9',
  codeColor: '#00193a',
  additionColor: '#0048ab',
  regexpColor: '#4c81c9',
  symbolColor: '#4c81c9',
  variableColor: '#4c81c9',
  templateVariableColor: '#4c81c9',
  linkColor: '#4c81c9',
  selectorClassColor: '#0048ab',
  typeColor: '#0048ab',
  stringColor: '#0048ab',
  selectorIdColor: '#0048ab',
  quoteColor: '#0048ab',
  templateTagColor: '#00193a',
  deletionColor: '#4c81c9',
  titleColor: '#0048ab',
  sectionColor: '#0048ab',
  commentColor: '#738191',
  metaKeywordColor: '#00193a',
  metaColor: '#4c81c9',
  functionColor: '#00193a',
  numberColor: '#00193a',
};

var monokaiSublime = {
  lineNumberColor: '#f8f8f2',
  lineNumberBgColor: '#23241f',
  backgroundColor: '#23241f',
  textColor: '#f8f8f2',
  substringColor: '#f8f8f2',
  keywordColor: '#f92672',
  attributeColor: '#66d9ef',
  selectorAttributeColor: '#f92672',
  docTagColor: '#f8f8f2',
  nameColor: '#f92672',
  builtInColor: '#e6db74',
  literalColor: '#ae81ff',
  bulletColor: '#ae81ff',
  codeColor: '#a6e22e',
  additionColor: '#e6db74',
  regexpColor: '#ae81ff',
  symbolColor: '#66d9ef',
  variableColor: '#e6db74',
  templateVariableColor: '#e6db74',
  linkColor: '#ae81ff',
  selectorClassColor: '#a6e22e',
  typeColor: '#e6db74',
  stringColor: '#e6db74',
  selectorIdColor: '#e6db74',
  quoteColor: '#ae81ff',
  templateTagColor: '#f8f8f2',
  deletionColor: '#75715e',
  titleColor: '#a6e22e',
  sectionColor: '#a6e22e',
  commentColor: '#75715e',
  metaKeywordColor: '#f8f8f2',
  metaColor: '#75715e',
  functionColor: '#f8f8f2',
  numberColor: '#ae81ff',
};

var monokai = {
  lineNumberColor: '#ddd',
  lineNumberBgColor: '#272822',
  backgroundColor: '#272822',
  textColor: '#ddd',
  substringColor: '#a6e22e',
  keywordColor: '#f92672',
  attributeColor: '#bf79db',
  selectorAttributeColor: '#f92672',
  docTagColor: undefined,
  nameColor: '#f92672',
  builtInColor: '#a6e22e',
  literalColor: '#f92672',
  bulletColor: '#a6e22e',
  codeColor: '#66d9ef',
  additionColor: '#a6e22e',
  regexpColor: '#bf79db',
  symbolColor: '#bf79db',
  variableColor: '#a6e22e',
  templateVariableColor: '#a6e22e',
  linkColor: '#bf79db',
  selectorClassColor: '#ddd',
  typeColor: '#a6e22e',
  stringColor: '#a6e22e',
  selectorIdColor: undefined,
  quoteColor: '#75715e',
  templateTagColor: '#a6e22e',
  deletionColor: '#75715e',
  titleColor: '#a6e22e',
  sectionColor: '#a6e22e',
  commentColor: '#75715e',
  metaKeywordColor: '#ddd',
  metaColor: '#75715e',
  functionColor: '#ddd',
  numberColor: '#ddd',
};

var nord = {
  lineNumberColor: '#D8DEE9',
  lineNumberBgColor: '#2E3440',
  backgroundColor: '#2E3440',
  textColor: '#D8DEE9',
  substringColor: '#D8DEE9',
  keywordColor: '#81A1C1',
  attributeColor: '#D8DEE9',
  selectorAttributeColor: '#81A1C1',
  docTagColor: '#8FBCBB',
  nameColor: '#81A1C1',
  builtInColor: '#8FBCBB',
  literalColor: '#81A1C1',
  bulletColor: '#81A1C1',
  codeColor: '#8FBCBB',
  additionColor: '#a3be8c',
  regexpColor: '#EBCB8B',
  symbolColor: '#81A1C1',
  variableColor: '#D8DEE9',
  templateVariableColor: '#D8DEE9',
  linkColor: '#D8DEE9',
  selectorClassColor: '#8FBCBB',
  typeColor: '#8FBCBB',
  stringColor: '#A3BE8C',
  selectorIdColor: '#8FBCBB',
  quoteColor: '#4C566A',
  templateTagColor: '#5E81AC',
  deletionColor: '#bf616a',
  titleColor: '#8FBCBB',
  sectionColor: '#88C0D0',
  commentColor: '#4C566A',
  metaKeywordColor: '#5E81AC',
  metaColor: '#5E81AC',
  functionColor: '#88C0D0',
  numberColor: '#B48EAD',
};

var obsidian = {
  lineNumberColor: '#e0e2e4',
  lineNumberBgColor: '#282b2e',
  backgroundColor: '#282b2e',
  textColor: '#e0e2e4',
  substringColor: '#8cbbad',
  keywordColor: '#93c763',
  attributeColor: '#668bb0',
  selectorAttributeColor: '#93c763',
  docTagColor: undefined,
  nameColor: '#8cbbad',
  builtInColor: '#8cbbad',
  literalColor: '#93c763',
  bulletColor: '#8cbbad',
  codeColor: 'white',
  additionColor: '#8cbbad',
  regexpColor: '#d39745',
  symbolColor: '#ec7600',
  variableColor: '#8cbbad',
  templateVariableColor: '#8cbbad',
  linkColor: '#d39745',
  selectorClassColor: '#A082BD',
  typeColor: '#8cbbad',
  stringColor: '#ec7600',
  selectorIdColor: '#93c763',
  quoteColor: '#818e96',
  templateTagColor: '#8cbbad',
  deletionColor: '#818e96',
  titleColor: undefined,
  sectionColor: 'white',
  commentColor: '#818e96',
  metaKeywordColor: '#e0e2e4',
  metaColor: '#557182',
  functionColor: '#e0e2e4',
  numberColor: '#ffcd22',
};

var ocean = {
  lineNumberColor: '#c0c5ce',
  lineNumberBgColor: '#2b303b',
  backgroundColor: '#2b303b',
  textColor: '#c0c5ce',
  substringColor: '#c0c5ce',
  keywordColor: '#b48ead',
  attributeColor: '#ebcb8b',
  selectorAttributeColor: '#b48ead',
  docTagColor: '#c0c5ce',
  nameColor: '#bf616a',
  builtInColor: '#d08770',
  literalColor: '#d08770',
  bulletColor: '#a3be8c',
  codeColor: '#c0c5ce',
  additionColor: '#a3be8c',
  regexpColor: '#bf616a',
  symbolColor: '#a3be8c',
  variableColor: '#bf616a',
  templateVariableColor: '#bf616a',
  linkColor: '#d08770',
  selectorClassColor: '#bf616a',
  typeColor: '#d08770',
  stringColor: '#a3be8c',
  selectorIdColor: '#bf616a',
  quoteColor: '#65737e',
  templateTagColor: '#c0c5ce',
  deletionColor: '#bf616a',
  titleColor: '#8fa1b3',
  sectionColor: '#8fa1b3',
  commentColor: '#65737e',
  metaKeywordColor: '#c0c5ce',
  metaColor: '#d08770',
  functionColor: '#c0c5ce',
  numberColor: '#d08770',
};

var paraisoDark = {
  lineNumberColor: '#a39e9b',
  lineNumberBgColor: '#2f1e2e',
  backgroundColor: '#2f1e2e',
  textColor: '#a39e9b',
  substringColor: '#a39e9b',
  keywordColor: '#815ba4',
  attributeColor: '#fec418',
  selectorAttributeColor: '#815ba4',
  docTagColor: '#a39e9b',
  nameColor: '#ef6155',
  builtInColor: '#f99b15',
  literalColor: '#f99b15',
  bulletColor: '#48b685',
  codeColor: '#a39e9b',
  additionColor: '#48b685',
  regexpColor: '#ef6155',
  symbolColor: '#48b685',
  variableColor: '#ef6155',
  templateVariableColor: '#ef6155',
  linkColor: '#ef6155',
  selectorClassColor: '#ef6155',
  typeColor: '#f99b15',
  stringColor: '#48b685',
  selectorIdColor: '#ef6155',
  quoteColor: '#8d8687',
  templateTagColor: '#a39e9b',
  deletionColor: '#f99b15',
  titleColor: '#fec418',
  sectionColor: '#fec418',
  commentColor: '#8d8687',
  metaKeywordColor: '#a39e9b',
  metaColor: '#ef6155',
  functionColor: '#a39e9b',
  numberColor: '#f99b15',
};

var paraisoLight = {
  lineNumberColor: '#4f424c',
  lineNumberBgColor: '#e7e9db',
  backgroundColor: '#e7e9db',
  textColor: '#4f424c',
  substringColor: '#4f424c',
  keywordColor: '#815ba4',
  attributeColor: '#fec418',
  selectorAttributeColor: '#815ba4',
  docTagColor: '#4f424c',
  nameColor: '#ef6155',
  builtInColor: '#f99b15',
  literalColor: '#f99b15',
  bulletColor: '#48b685',
  codeColor: '#4f424c',
  additionColor: '#48b685',
  regexpColor: '#ef6155',
  symbolColor: '#48b685',
  variableColor: '#ef6155',
  templateVariableColor: '#ef6155',
  linkColor: '#ef6155',
  selectorClassColor: '#ef6155',
  typeColor: '#f99b15',
  stringColor: '#48b685',
  selectorIdColor: '#ef6155',
  quoteColor: '#776e71',
  templateTagColor: '#4f424c',
  deletionColor: '#f99b15',
  titleColor: '#fec418',
  sectionColor: '#fec418',
  commentColor: '#776e71',
  metaKeywordColor: '#4f424c',
  metaColor: '#ef6155',
  functionColor: '#4f424c',
  numberColor: '#f99b15',
};

var pojoaque = {
  lineNumberColor: '#dccf8f',
  lineNumberBgColor:
    '#181914 url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==") repeat left top',
  backgroundColor:
    '#181914 url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==") repeat left top',
  textColor: '#dccf8f',
  substringColor: '#cb4b16',
  keywordColor: '#b64926',
  attributeColor: '#b89859',
  selectorAttributeColor: '#b64926',
  docTagColor: '#468966',
  nameColor: '#ffb03b',
  builtInColor: '#ffb03b',
  literalColor: '#b64926',
  bulletColor: '#cb4b16',
  codeColor: '#dccf8f',
  additionColor: '#b64926',
  regexpColor: '#468966',
  symbolColor: '#cb4b16',
  variableColor: '#b58900',
  templateVariableColor: '#b58900',
  linkColor: '#cb4b16',
  selectorClassColor: '#d3a60c',
  typeColor: '#b58900',
  stringColor: '#468966',
  selectorIdColor: '#d3a60c',
  quoteColor: '#586e75',
  templateTagColor: '#dccf8f',
  deletionColor: '#dc322f',
  titleColor: '#ffb03b',
  sectionColor: '#ffb03b',
  commentColor: '#586e75',
  metaKeywordColor: '#dccf8f',
  metaColor: '#cb4b16',
  functionColor: '#dccf8f',
  numberColor: '#468966',
};

var purebasic = {
  lineNumberColor: '#000000',
  lineNumberBgColor: '#FFFFDF',
  backgroundColor: '#FFFFDF',
  textColor: '#000000',
  substringColor: '#000000',
  keywordColor: '#006666',
  attributeColor: '#924B72',
  selectorAttributeColor: '#000000',
  docTagColor: '#000000',
  nameColor: '#000000',
  builtInColor: '#006666',
  literalColor: '#924B72',
  bulletColor: '#000000',
  codeColor: '#006666',
  additionColor: '#00AAAA',
  regexpColor: '#00AAAA',
  symbolColor: '#924B72',
  variableColor: '#006666',
  templateVariableColor: '#000000',
  linkColor: '#924B72',
  selectorClassColor: '#006666',
  typeColor: '#000000',
  stringColor: '#0080FF',
  selectorIdColor: '#924B72',
  quoteColor: '#000000',
  templateTagColor: '#000000',
  deletionColor: '#924B72',
  titleColor: '#006666',
  sectionColor: '#00AAAA',
  commentColor: '#00AAAA',
  metaKeywordColor: '#006666',
  metaColor: '#924B72',
  functionColor: '#000000',
  numberColor: '#000000',
};

var railscast = {
  lineNumberColor: '#e6e1dc',
  lineNumberBgColor: '#232323',
  backgroundColor: '#232323',
  textColor: '#e6e1dc',
  substringColor: '#519f50',
  keywordColor: '#c26230',
  attributeColor: '#cda869',
  selectorAttributeColor: '#c26230',
  docTagColor: '#e6e1dc',
  nameColor: '#e8bf6a',
  builtInColor: '#6d9cbe',
  literalColor: '#e6e1dc',
  bulletColor: '#6d9cbe',
  codeColor: '#e6e1dc',
  additionColor: '#e6e1dc',
  regexpColor: '#a5c261',
  symbolColor: '#6d9cbe',
  variableColor: '#a5c261',
  templateVariableColor: '#a5c261',
  linkColor: '#6d9cbe',
  selectorClassColor: '#9b703f',
  typeColor: '#da4939',
  stringColor: '#a5c261',
  selectorIdColor: '#8b98ab',
  quoteColor: '#bc9458',
  templateTagColor: '#e6e1dc',
  deletionColor: '#e6e1dc',
  titleColor: '#ffc66d',
  sectionColor: '#ffc66d',
  commentColor: '#bc9458',
  metaKeywordColor: '#e6e1dc',
  metaColor: '#9b859d',
  functionColor: '#e6e1dc',
  numberColor: '#a5c261',
};

var rainbow = {
  lineNumberColor: '#d1d9e1',
  lineNumberBgColor: '#474949',
  backgroundColor: '#474949',
  textColor: '#d1d9e1',
  substringColor: '#f99157',
  keywordColor: '#cc99cc',
  attributeColor: '#81a2be',
  selectorAttributeColor: '#cc99cc',
  docTagColor: '#8abeb7',
  nameColor: '#b5bd68',
  builtInColor: '#b5bd68',
  literalColor: '#cc99cc',
  bulletColor: '#f99157',
  codeColor: '#d1d9e1',
  additionColor: '#cc99cc',
  regexpColor: '#8abeb7',
  symbolColor: '#f99157',
  variableColor: '#ffcc66',
  templateVariableColor: '#ffcc66',
  linkColor: '#f99157',
  selectorClassColor: '#d1d9e1',
  typeColor: '#cc99cc',
  stringColor: '#8abeb7',
  selectorIdColor: '#ffcc66',
  quoteColor: '#969896',
  templateTagColor: '#d1d9e1',
  deletionColor: '#dc322f',
  titleColor: '#b5bd68',
  sectionColor: '#b5bd68',
  commentColor: '#969896',
  metaKeywordColor: '#d1d9e1',
  metaColor: '#f99157',
  functionColor: '#d1d9e1',
  numberColor: '#f99157',
};

var shadesOfPurple = {
  lineNumberColor: '#e3dfff',
  lineNumberBgColor: '#2d2b57',
  backgroundColor: '#2d2b57',
  textColor: '#e3dfff',
  substringColor: '#e3dfff',
  keywordColor: '#fb9e00',
  attributeColor: '#4cd213',
  selectorAttributeColor: '#fb9e00',
  docTagColor: '#e3dfff',
  nameColor: '#a1feff',
  builtInColor: '#fb9e00',
  literalColor: '#fa658d',
  bulletColor: '#4cd213',
  codeColor: '#4cd213',
  additionColor: '#4cd213',
  regexpColor: '#4cd213',
  symbolColor: '#4cd213',
  variableColor: '#e3dfff',
  templateVariableColor: '#e3dfff',
  linkColor: '#e3dfff',
  selectorClassColor: '#4cd213',
  typeColor: '#e3dfff',
  stringColor: '#4cd213',
  selectorIdColor: '#e3dfff',
  quoteColor: '#4cd213',
  templateTagColor: '#4cd213',
  deletionColor: '#4cd213',
  titleColor: '#fad000',
  sectionColor: '#fb9e00',
  commentColor: '#ac65ff',
  metaKeywordColor: '#e3dfff',
  metaColor: '#fb9e00',
  functionColor: '#e3dfff',
  numberColor: '#fa658d',
};

var solarizedDark = {
  lineNumberColor: '#839496',
  lineNumberBgColor: '#002b36',
  backgroundColor: '#002b36',
  textColor: '#839496',
  substringColor: '#cb4b16',
  keywordColor: '#859900',
  attributeColor: '#b58900',
  selectorAttributeColor: '#859900',
  docTagColor: '#2aa198',
  nameColor: '#268bd2',
  builtInColor: '#dc322f',
  literalColor: '#2aa198',
  bulletColor: '#cb4b16',
  codeColor: '#839496',
  additionColor: '#859900',
  regexpColor: '#2aa198',
  symbolColor: '#cb4b16',
  variableColor: '#b58900',
  templateVariableColor: '#b58900',
  linkColor: '#cb4b16',
  selectorClassColor: '#268bd2',
  typeColor: '#b58900',
  stringColor: '#2aa198',
  selectorIdColor: '#268bd2',
  quoteColor: '#586e75',
  templateTagColor: '#839496',
  deletionColor: '#dc322f',
  titleColor: '#268bd2',
  sectionColor: '#268bd2',
  commentColor: '#586e75',
  metaKeywordColor: '#839496',
  metaColor: '#cb4b16',
  functionColor: '#839496',
  numberColor: '#2aa198',
};

var solarizedLight = {
  lineNumberColor: '#657b83',
  lineNumberBgColor: '#fdf6e3',
  backgroundColor: '#fdf6e3',
  textColor: '#657b83',
  substringColor: '#cb4b16',
  keywordColor: '#859900',
  attributeColor: '#b58900',
  selectorAttributeColor: '#859900',
  docTagColor: '#2aa198',
  nameColor: '#268bd2',
  builtInColor: '#dc322f',
  literalColor: '#2aa198',
  bulletColor: '#cb4b16',
  codeColor: '#657b83',
  additionColor: '#859900',
  regexpColor: '#2aa198',
  symbolColor: '#cb4b16',
  variableColor: '#b58900',
  templateVariableColor: '#b58900',
  linkColor: '#cb4b16',
  selectorClassColor: '#268bd2',
  typeColor: '#b58900',
  stringColor: '#2aa198',
  selectorIdColor: '#268bd2',
  quoteColor: '#93a1a1',
  templateTagColor: '#657b83',
  deletionColor: '#dc322f',
  titleColor: '#268bd2',
  sectionColor: '#268bd2',
  commentColor: '#93a1a1',
  metaKeywordColor: '#657b83',
  metaColor: '#cb4b16',
  functionColor: '#657b83',
  numberColor: '#2aa198',
};

var sunburst = {
  lineNumberColor: '#f8f8f8',
  lineNumberBgColor: '#000',
  backgroundColor: '#000',
  textColor: '#f8f8f8',
  substringColor: '#daefa3',
  keywordColor: '#e28964',
  attributeColor: '#cda869',
  selectorAttributeColor: '#e28964',
  docTagColor: undefined,
  nameColor: '#89bdff',
  builtInColor: '#f8f8f8',
  literalColor: '#f8f8f8',
  bulletColor: '#3387cc',
  codeColor: '#f8f8f8',
  additionColor: '#f8f8f8',
  regexpColor: '#e9c062',
  symbolColor: '#3387cc',
  variableColor: '#3e87e3',
  templateVariableColor: '#3e87e3',
  linkColor: '#e9c062',
  selectorClassColor: '#9b703f',
  typeColor: '#e28964',
  stringColor: '#65b042',
  selectorIdColor: '#8b98ab',
  quoteColor: '#aeaeae',
  templateTagColor: '#f8f8f8',
  deletionColor: '#f8f8f8',
  titleColor: '#89bdff',
  sectionColor: '#89bdff',
  commentColor: '#aeaeae',
  metaKeywordColor: '#f8f8f8',
  metaColor: '#8996a8',
  functionColor: '#f8f8f8',
  numberColor: '#3387cc',
};

var tomorrowNightBlue = {
  lineNumberColor: 'white',
  lineNumberBgColor: '#002451',
  backgroundColor: '#002451',
  textColor: 'white',
  substringColor: 'white',
  keywordColor: '#ebbbff',
  attributeColor: '#ffeead',
  selectorAttributeColor: '#ebbbff',
  docTagColor: 'white',
  nameColor: '#ff9da4',
  builtInColor: '#ffc58f',
  literalColor: '#ffc58f',
  bulletColor: '#d1f1a9',
  codeColor: 'white',
  additionColor: '#d1f1a9',
  regexpColor: '#ff9da4',
  symbolColor: '#d1f1a9',
  variableColor: '#ff9da4',
  templateVariableColor: '#ff9da4',
  linkColor: '#ffc58f',
  selectorClassColor: '#ff9da4',
  typeColor: '#ffc58f',
  stringColor: '#d1f1a9',
  selectorIdColor: '#ff9da4',
  quoteColor: '#7285b7',
  templateTagColor: 'white',
  deletionColor: '#ff9da4',
  titleColor: '#bbdaff',
  sectionColor: '#bbdaff',
  commentColor: '#7285b7',
  metaKeywordColor: 'white',
  metaColor: '#ffc58f',
  functionColor: 'white',
  numberColor: '#ffc58f',
};

var tomorrowNightBright = {
  lineNumberColor: '#eaeaea',
  lineNumberBgColor: 'black',
  backgroundColor: 'black',
  textColor: '#eaeaea',
  substringColor: '#eaeaea',
  keywordColor: '#c397d8',
  attributeColor: '#e7c547',
  selectorAttributeColor: '#c397d8',
  docTagColor: '#eaeaea',
  nameColor: '#d54e53',
  builtInColor: '#e78c45',
  literalColor: '#e78c45',
  bulletColor: '#b9ca4a',
  codeColor: '#eaeaea',
  additionColor: '#b9ca4a',
  regexpColor: '#d54e53',
  symbolColor: '#b9ca4a',
  variableColor: '#d54e53',
  templateVariableColor: '#d54e53',
  linkColor: '#e78c45',
  selectorClassColor: '#d54e53',
  typeColor: '#e78c45',
  stringColor: '#b9ca4a',
  selectorIdColor: '#d54e53',
  quoteColor: '#969896',
  templateTagColor: '#eaeaea',
  deletionColor: '#d54e53',
  titleColor: '#7aa6da',
  sectionColor: '#7aa6da',
  commentColor: '#969896',
  metaKeywordColor: '#eaeaea',
  metaColor: '#e78c45',
  functionColor: '#eaeaea',
  numberColor: '#e78c45',
};

var tomorrowNightEighties = {
  lineNumberColor: '#cccccc',
  lineNumberBgColor: '#2d2d2d',
  backgroundColor: '#2d2d2d',
  textColor: '#cccccc',
  substringColor: '#cccccc',
  keywordColor: '#cc99cc',
  attributeColor: '#ffcc66',
  selectorAttributeColor: '#cc99cc',
  docTagColor: '#cccccc',
  nameColor: '#f2777a',
  builtInColor: '#f99157',
  literalColor: '#f99157',
  bulletColor: '#99cc99',
  codeColor: '#cccccc',
  additionColor: '#99cc99',
  regexpColor: '#f2777a',
  symbolColor: '#99cc99',
  variableColor: '#f2777a',
  templateVariableColor: '#f2777a',
  linkColor: '#f99157',
  selectorClassColor: '#f2777a',
  typeColor: '#f99157',
  stringColor: '#99cc99',
  selectorIdColor: '#f2777a',
  quoteColor: '#999999',
  templateTagColor: '#cccccc',
  deletionColor: '#f2777a',
  titleColor: '#6699cc',
  sectionColor: '#6699cc',
  commentColor: '#999999',
  metaKeywordColor: '#cccccc',
  metaColor: '#f99157',
  functionColor: '#cccccc',
  numberColor: '#f99157',
};

var tomorrowNight = {
  lineNumberColor: '#c5c8c6',
  lineNumberBgColor: '#1d1f21',
  backgroundColor: '#1d1f21',
  textColor: '#c5c8c6',
  substringColor: '#c5c8c6',
  keywordColor: '#b294bb',
  attributeColor: '#f0c674',
  selectorAttributeColor: '#b294bb',
  docTagColor: '#c5c8c6',
  nameColor: '#cc6666',
  builtInColor: '#de935f',
  literalColor: '#de935f',
  bulletColor: '#b5bd68',
  codeColor: '#c5c8c6',
  additionColor: '#b5bd68',
  regexpColor: '#cc6666',
  symbolColor: '#b5bd68',
  variableColor: '#cc6666',
  templateVariableColor: '#cc6666',
  linkColor: '#de935f',
  selectorClassColor: '#cc6666',
  typeColor: '#de935f',
  stringColor: '#b5bd68',
  selectorIdColor: '#cc6666',
  quoteColor: '#969896',
  templateTagColor: '#c5c8c6',
  deletionColor: '#cc6666',
  titleColor: '#81a2be',
  sectionColor: '#81a2be',
  commentColor: '#969896',
  metaKeywordColor: '#c5c8c6',
  metaColor: '#de935f',
  functionColor: '#c5c8c6',
  numberColor: '#de935f',
};

var tomorrow = {
  lineNumberColor: '#4d4d4c',
  lineNumberBgColor: 'white',
  backgroundColor: 'white',
  textColor: '#4d4d4c',
  substringColor: '#4d4d4c',
  keywordColor: '#8959a8',
  attributeColor: '#eab700',
  selectorAttributeColor: '#8959a8',
  docTagColor: '#4d4d4c',
  nameColor: '#c82829',
  builtInColor: '#f5871f',
  literalColor: '#f5871f',
  bulletColor: '#718c00',
  codeColor: '#4d4d4c',
  additionColor: '#718c00',
  regexpColor: '#c82829',
  symbolColor: '#718c00',
  variableColor: '#c82829',
  templateVariableColor: '#c82829',
  linkColor: '#f5871f',
  selectorClassColor: '#c82829',
  typeColor: '#f5871f',
  stringColor: '#718c00',
  selectorIdColor: '#c82829',
  quoteColor: '#8e908c',
  templateTagColor: '#4d4d4c',
  deletionColor: '#c82829',
  titleColor: '#4271ae',
  sectionColor: '#4271ae',
  commentColor: '#8e908c',
  metaKeywordColor: '#4d4d4c',
  metaColor: '#f5871f',
  functionColor: '#4d4d4c',
  numberColor: '#f5871f',
};

var vs2015 = {
  lineNumberColor: '#DCDCDC',
  lineNumberBgColor: '#1E1E1E',
  backgroundColor: '#1E1E1E',
  textColor: '#DCDCDC',
  substringColor: '#DCDCDC',
  keywordColor: '#569CD6',
  attributeColor: '#9CDCFE',
  selectorAttributeColor: '#D7BA7D',
  docTagColor: '#608B4E',
  nameColor: '#569CD6',
  builtInColor: '#4EC9B0',
  literalColor: '#569CD6',
  bulletColor: '#D7BA7D',
  codeColor: '#DCDCDC',
  additionColor: undefined,
  regexpColor: '#9A5334',
  symbolColor: '#569CD6',
  variableColor: '#BD63C5',
  templateVariableColor: '#BD63C5',
  linkColor: '#569CD6',
  selectorClassColor: '#D7BA7D',
  typeColor: '#4EC9B0',
  stringColor: '#D69D85',
  selectorIdColor: '#D7BA7D',
  quoteColor: '#57A64A',
  templateTagColor: '#9A5334',
  deletionColor: undefined,
  titleColor: '#DCDCDC',
  sectionColor: 'gold',
  commentColor: '#57A64A',
  metaKeywordColor: '#9B9B9B',
  metaColor: '#9B9B9B',
  functionColor: '#DCDCDC',
  numberColor: '#B8D7A3',
};

var xt256 = {
  lineNumberColor: '#eaeaea',
  lineNumberBgColor: '#000',
  backgroundColor: '#000',
  textColor: '#eaeaea',
  substringColor: '#eaeaea',
  keywordColor: '#fff000',
  attributeColor: '#ff00ff',
  selectorAttributeColor: '#000fff',
  docTagColor: '#eaeaea',
  nameColor: '#ff0000',
  builtInColor: '#ff00ff',
  literalColor: '#ff0000',
  bulletColor: '#00ff00',
  codeColor: '#eaeaea',
  additionColor: '#eaeaea',
  regexpColor: '#ff00ff',
  symbolColor: '#fff000',
  variableColor: '#00ffff',
  templateVariableColor: '#00ffff',
  linkColor: '#ff00ff',
  selectorClassColor: '#fff000',
  typeColor: '#eaeaea',
  stringColor: '#00ff00',
  selectorIdColor: '#00ffff',
  quoteColor: '#00ffff',
  templateTagColor: '#eaeaea',
  deletionColor: '#eaeaea',
  titleColor: '#00ffff',
  sectionColor: '#000fff',
  commentColor: '#969896',
  metaKeywordColor: '#eaeaea',
  metaColor: '#fff',
  functionColor: '#eaeaea',
  numberColor: '#ff0000',
};

var zenburn = {
  lineNumberColor: '#dcdcdc',
  lineNumberBgColor: '#3f3f3f',
  backgroundColor: '#3f3f3f',
  textColor: '#dcdcdc',
  substringColor: '#8f8f8f',
  keywordColor: '#e3ceab',
  attributeColor: '#efdcbc',
  selectorAttributeColor: '#e3ceab',
  docTagColor: '#dcdcdc',
  nameColor: '#efef8f',
  builtInColor: '#cc9393',
  literalColor: '#efefaf',
  bulletColor: '#dca3a3',
  codeColor: '#dcdcdc',
  additionColor: '#7f9f7f',
  regexpColor: '#dcdcdc',
  symbolColor: '#dca3a3',
  variableColor: '#efdcbc',
  templateVariableColor: '#efdcbc',
  linkColor: '#dca3a3',
  selectorClassColor: '#efef8f',
  typeColor: '#efef8f',
  stringColor: '#cc9393',
  selectorIdColor: '#efef8f',
  quoteColor: '#7f9f7f',
  templateTagColor: '#dcdcdc',
  deletionColor: '#cc9393',
  titleColor: '#efef8f',
  sectionColor: '#efef8f',
  commentColor: '#7f9f7f',
  metaKeywordColor: '#dcdcdc',
  metaColor: '#7f9f7f',
  functionColor: '#dcdcdc',
  numberColor: '#8cd0d3',
};

exports.Code = ThemedCode;
exports.CodeBlock = ThemedCodeBlock;
exports.CopyBlock = ThemedCopyBlock;
exports.Snippet = ThemedSnippet;
exports.a11yDark = a11yDark;
exports.a11yLight = a11yLight;
exports.anOldHope = anOldHope;
exports.androidstudio = androidstudio;
exports.arta = arta;
exports.atomOneDark = atomOneDark;
exports.atomOneLight = atomOneLight;
exports.codepen = codepen;
exports.dracula = dracula;
exports.far = far;
exports.github = github;
exports.googlecode = googlecode;
exports.hopscotch = hopscotch;
exports.hybrid = hybrid;
exports.irBlack = irBlack;
exports.monoBlue = monoBlue;
exports.monokai = monokai;
exports.monokaiSublime = monokaiSublime;
exports.nord = nord;
exports.obsidian = obsidian;
exports.ocean = ocean;
exports.paraisoDark = paraisoDark;
exports.paraisoLight = paraisoLight;
exports.pojoaque = pojoaque;
exports.purebasic = purebasic;
exports.railscast = railscast;
exports.rainbow = rainbow;
exports.shadesOfPurple = shadesOfPurple;
exports.solarizedDark = solarizedDark;
exports.solarizedLight = solarizedLight;
exports.sunburst = sunburst;
exports.tomorrow = tomorrow;
exports.tomorrowNight = tomorrowNight;
exports.tomorrowNightBlue = tomorrowNightBlue;
exports.tomorrowNightBright = tomorrowNightBright;
exports.tomorrowNightEighties = tomorrowNightEighties;
exports.vs2015 = vs2015;
exports.xt256 = xt256;
exports.zenburn = zenburn;
//# sourceMappingURL=react-code-blocks.cjs.development.js.map
