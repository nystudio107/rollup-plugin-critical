//#region node_modules/rolldown/dist/shared/logging-BSNejiLS.d.mts
//#region src/log/logging.d.ts
/** @inline */
type LogLevel = "info" | "debug" | "warn";
/** @inline */
type LogLevelOption = LogLevel | "silent";
/** @inline */
type LogLevelWithError = LogLevel | "error";
interface RolldownLog {
  binding?: string;
  cause?: unknown;
  /**
  * The log code for this log object.
  * @example 'PLUGIN_ERROR'
  */
  code?: string;
  exporter?: string;
  frame?: string;
  hook?: string;
  id?: string;
  ids?: string[];
  loc?: {
    column: number;
    file?: string;
    line: number;
  };
  /**
  * The message for this log object.
  * @example 'The "transform" hook used by the output plugin "rolldown-plugin-foo" is a build time hook and will not be run for that plugin. Either this plugin cannot be used as an output plugin, or it should have an option to configure it as an output plugin.'
  */
  message: string;
  meta?: any;
  names?: string[];
  plugin?: string;
  pluginCode?: unknown;
  pos?: number;
  reexporter?: string;
  stack?: string;
  url?: string;
}
/** @inline */
type RolldownLogWithString = RolldownLog | string;
/** @category Plugin APIs */
interface RolldownError extends RolldownLog {
  name?: string;
  stack?: string;
  watchFiles?: string[];
}
type LogOrStringHandler = (level: LogLevelWithError, log: RolldownLogWithString) => void; //#endregion
//#endregion
//#region node_modules/@oxc-project/types/types.d.ts
// Auto-generated code, DO NOT EDIT DIRECTLY!
// To edit this generated file you have to edit `tasks/ast_tools/src/generators/typescript.rs`.
interface Program extends Span {
  type: "Program";
  body: Array<Directive | Statement>;
  sourceType: ModuleKind;
  hashbang: Hashbang | null;
  parent?: null;
}
type Expression = BooleanLiteral | NullLiteral | NumericLiteral | BigIntLiteral | RegExpLiteral | StringLiteral | TemplateLiteral | IdentifierReference | MetaProperty | Super | ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AwaitExpression | BinaryExpression | CallExpression | ChainExpression | Class | ConditionalExpression | Function | ImportExpression | LogicalExpression | NewExpression | ObjectExpression | ParenthesizedExpression | SequenceExpression | TaggedTemplateExpression | ThisExpression | UnaryExpression | UpdateExpression | YieldExpression | PrivateInExpression | JSXElement | JSXFragment | TSAsExpression | TSSatisfiesExpression | TSTypeAssertion | TSNonNullExpression | TSInstantiationExpression | V8IntrinsicExpression | MemberExpression;
interface IdentifierName extends Span {
  type: "Identifier";
  decorators?: [];
  name: string;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface IdentifierReference extends Span {
  type: "Identifier";
  decorators?: [];
  name: string;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface BindingIdentifier extends Span {
  type: "Identifier";
  decorators?: [];
  name: string;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface LabelIdentifier extends Span {
  type: "Identifier";
  decorators?: [];
  name: string;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface ThisExpression extends Span {
  type: "ThisExpression";
  parent?: Node;
}
interface ArrayExpression extends Span {
  type: "ArrayExpression";
  elements: Array<ArrayExpressionElement>;
  parent?: Node;
}
type ArrayExpressionElement = SpreadElement | null | Expression;
interface ObjectExpression extends Span {
  type: "ObjectExpression";
  properties: Array<ObjectPropertyKind>;
  parent?: Node;
}
type ObjectPropertyKind = ObjectProperty | SpreadElement;
interface ObjectProperty extends Span {
  type: "Property";
  kind: PropertyKind;
  key: PropertyKey;
  value: Expression;
  method: boolean;
  shorthand: boolean;
  computed: boolean;
  optional?: false;
  parent?: Node;
}
type PropertyKey = IdentifierName | PrivateIdentifier | Expression;
type PropertyKind = "init" | "get" | "set";
interface TemplateLiteral extends Span {
  type: "TemplateLiteral";
  quasis: Array<TemplateElement>;
  expressions: Array<Expression>;
  parent?: Node;
}
interface TaggedTemplateExpression extends Span {
  type: "TaggedTemplateExpression";
  tag: Expression;
  typeArguments?: TSTypeParameterInstantiation | null;
  quasi: TemplateLiteral;
  parent?: Node;
}
interface TemplateElement extends Span {
  type: "TemplateElement";
  value: TemplateElementValue;
  tail: boolean;
  parent?: Node;
}
interface TemplateElementValue {
  raw: string;
  cooked: string | null;
}
type MemberExpression = ComputedMemberExpression | StaticMemberExpression | PrivateFieldExpression;
interface ComputedMemberExpression extends Span {
  type: "MemberExpression";
  object: Expression;
  property: Expression;
  optional: boolean;
  computed: true;
  parent?: Node;
}
interface StaticMemberExpression extends Span {
  type: "MemberExpression";
  object: Expression;
  property: IdentifierName;
  optional: boolean;
  computed: false;
  parent?: Node;
}
interface PrivateFieldExpression extends Span {
  type: "MemberExpression";
  object: Expression;
  property: PrivateIdentifier;
  optional: boolean;
  computed: false;
  parent?: Node;
}
interface CallExpression extends Span {
  type: "CallExpression";
  callee: Expression;
  typeArguments?: TSTypeParameterInstantiation | null;
  arguments: Array<Argument>;
  optional: boolean;
  parent?: Node;
}
interface NewExpression extends Span {
  type: "NewExpression";
  callee: Expression;
  typeArguments?: TSTypeParameterInstantiation | null;
  arguments: Array<Argument>;
  parent?: Node;
}
interface MetaProperty extends Span {
  type: "MetaProperty";
  meta: IdentifierName;
  property: IdentifierName;
  parent?: Node;
}
interface SpreadElement extends Span {
  type: "SpreadElement";
  argument: Expression;
  parent?: Node;
}
type Argument = SpreadElement | Expression;
interface UpdateExpression extends Span {
  type: "UpdateExpression";
  operator: UpdateOperator;
  prefix: boolean;
  argument: SimpleAssignmentTarget;
  parent?: Node;
}
interface UnaryExpression extends Span {
  type: "UnaryExpression";
  operator: UnaryOperator;
  argument: Expression;
  prefix: true;
  parent?: Node;
}
interface BinaryExpression extends Span {
  type: "BinaryExpression";
  left: Expression;
  operator: BinaryOperator;
  right: Expression;
  parent?: Node;
}
interface PrivateInExpression extends Span {
  type: "BinaryExpression";
  left: PrivateIdentifier;
  operator: "in";
  right: Expression;
  parent?: Node;
}
interface LogicalExpression extends Span {
  type: "LogicalExpression";
  left: Expression;
  operator: LogicalOperator;
  right: Expression;
  parent?: Node;
}
interface ConditionalExpression extends Span {
  type: "ConditionalExpression";
  test: Expression;
  consequent: Expression;
  alternate: Expression;
  parent?: Node;
}
interface AssignmentExpression extends Span {
  type: "AssignmentExpression";
  operator: AssignmentOperator;
  left: AssignmentTarget;
  right: Expression;
  parent?: Node;
}
type AssignmentTarget = SimpleAssignmentTarget | AssignmentTargetPattern;
type SimpleAssignmentTarget = IdentifierReference | TSAsExpression | TSSatisfiesExpression | TSNonNullExpression | TSTypeAssertion | MemberExpression;
type AssignmentTargetPattern = ArrayAssignmentTarget | ObjectAssignmentTarget;
interface ArrayAssignmentTarget extends Span {
  type: "ArrayPattern";
  decorators?: [];
  elements: Array<AssignmentTargetMaybeDefault | AssignmentTargetRest | null>;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface ObjectAssignmentTarget extends Span {
  type: "ObjectPattern";
  decorators?: [];
  properties: Array<AssignmentTargetProperty | AssignmentTargetRest>;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface AssignmentTargetRest extends Span {
  type: "RestElement";
  decorators?: [];
  argument: AssignmentTarget;
  optional?: false;
  typeAnnotation?: null;
  value?: null;
  parent?: Node;
}
type AssignmentTargetMaybeDefault = AssignmentTargetWithDefault | AssignmentTarget;
interface AssignmentTargetWithDefault extends Span {
  type: "AssignmentPattern";
  decorators?: [];
  left: AssignmentTarget;
  right: Expression;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
type AssignmentTargetProperty = AssignmentTargetPropertyIdentifier | AssignmentTargetPropertyProperty;
interface AssignmentTargetPropertyIdentifier extends Span {
  type: "Property";
  kind: "init";
  key: IdentifierReference;
  value: IdentifierReference | AssignmentTargetWithDefault;
  method: false;
  shorthand: true;
  computed: false;
  optional?: false;
  parent?: Node;
}
interface AssignmentTargetPropertyProperty extends Span {
  type: "Property";
  kind: "init";
  key: PropertyKey;
  value: AssignmentTargetMaybeDefault;
  method: false;
  shorthand: false;
  computed: boolean;
  optional?: false;
  parent?: Node;
}
interface SequenceExpression extends Span {
  type: "SequenceExpression";
  expressions: Array<Expression>;
  parent?: Node;
}
interface Super extends Span {
  type: "Super";
  parent?: Node;
}
interface AwaitExpression extends Span {
  type: "AwaitExpression";
  argument: Expression;
  parent?: Node;
}
interface ChainExpression extends Span {
  type: "ChainExpression";
  expression: ChainElement;
  parent?: Node;
}
type ChainElement = CallExpression | TSNonNullExpression | MemberExpression;
interface ParenthesizedExpression extends Span {
  type: "ParenthesizedExpression";
  expression: Expression;
  parent?: Node;
}
type Statement = BlockStatement | BreakStatement | ContinueStatement | DebuggerStatement | DoWhileStatement | EmptyStatement | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | WhileStatement | WithStatement | Declaration | ModuleDeclaration;
interface Directive extends Span {
  type: "ExpressionStatement";
  expression: StringLiteral;
  directive: string;
  parent?: Node;
}
interface Hashbang extends Span {
  type: "Hashbang";
  value: string;
  parent?: Node;
}
interface BlockStatement extends Span {
  type: "BlockStatement";
  body: Array<Statement>;
  parent?: Node;
}
type Declaration = VariableDeclaration | Function | Class | TSTypeAliasDeclaration | TSInterfaceDeclaration | TSEnumDeclaration | TSModuleDeclaration | TSGlobalDeclaration | TSImportEqualsDeclaration;
interface VariableDeclaration extends Span {
  type: "VariableDeclaration";
  kind: VariableDeclarationKind;
  declarations: Array<VariableDeclarator>;
  declare?: boolean;
  parent?: Node;
}
type VariableDeclarationKind = "var" | "let" | "const" | "using" | "await using";
interface VariableDeclarator extends Span {
  type: "VariableDeclarator";
  id: BindingPattern;
  init: Expression | null;
  definite?: boolean;
  parent?: Node;
}
interface EmptyStatement extends Span {
  type: "EmptyStatement";
  parent?: Node;
}
interface ExpressionStatement extends Span {
  type: "ExpressionStatement";
  expression: Expression;
  directive?: string | null;
  parent?: Node;
}
interface IfStatement extends Span {
  type: "IfStatement";
  test: Expression;
  consequent: Statement;
  alternate: Statement | null;
  parent?: Node;
}
interface DoWhileStatement extends Span {
  type: "DoWhileStatement";
  body: Statement;
  test: Expression;
  parent?: Node;
}
interface WhileStatement extends Span {
  type: "WhileStatement";
  test: Expression;
  body: Statement;
  parent?: Node;
}
interface ForStatement extends Span {
  type: "ForStatement";
  init: ForStatementInit | null;
  test: Expression | null;
  update: Expression | null;
  body: Statement;
  parent?: Node;
}
type ForStatementInit = VariableDeclaration | Expression;
interface ForInStatement extends Span {
  type: "ForInStatement";
  left: ForStatementLeft;
  right: Expression;
  body: Statement;
  parent?: Node;
}
type ForStatementLeft = VariableDeclaration | AssignmentTarget;
interface ForOfStatement extends Span {
  type: "ForOfStatement";
  await: boolean;
  left: ForStatementLeft;
  right: Expression;
  body: Statement;
  parent?: Node;
}
interface ContinueStatement extends Span {
  type: "ContinueStatement";
  label: LabelIdentifier | null;
  parent?: Node;
}
interface BreakStatement extends Span {
  type: "BreakStatement";
  label: LabelIdentifier | null;
  parent?: Node;
}
interface ReturnStatement extends Span {
  type: "ReturnStatement";
  argument: Expression | null;
  parent?: Node;
}
interface WithStatement extends Span {
  type: "WithStatement";
  object: Expression;
  body: Statement;
  parent?: Node;
}
interface SwitchStatement extends Span {
  type: "SwitchStatement";
  discriminant: Expression;
  cases: Array<SwitchCase>;
  parent?: Node;
}
interface SwitchCase extends Span {
  type: "SwitchCase";
  test: Expression | null;
  consequent: Array<Statement>;
  parent?: Node;
}
interface LabeledStatement extends Span {
  type: "LabeledStatement";
  label: LabelIdentifier;
  body: Statement;
  parent?: Node;
}
interface ThrowStatement extends Span {
  type: "ThrowStatement";
  argument: Expression;
  parent?: Node;
}
interface TryStatement extends Span {
  type: "TryStatement";
  block: BlockStatement;
  handler: CatchClause | null;
  finalizer: BlockStatement | null;
  parent?: Node;
}
interface CatchClause extends Span {
  type: "CatchClause";
  param: BindingPattern | null;
  body: BlockStatement;
  parent?: Node;
}
interface DebuggerStatement extends Span {
  type: "DebuggerStatement";
  parent?: Node;
}
type BindingPattern = BindingIdentifier | ObjectPattern | ArrayPattern | AssignmentPattern;
interface AssignmentPattern extends Span {
  type: "AssignmentPattern";
  decorators?: [];
  left: BindingPattern;
  right: Expression;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface ObjectPattern extends Span {
  type: "ObjectPattern";
  decorators?: [];
  properties: Array<BindingProperty | BindingRestElement>;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface BindingProperty extends Span {
  type: "Property";
  kind: "init";
  key: PropertyKey;
  value: BindingPattern;
  method: false;
  shorthand: boolean;
  computed: boolean;
  optional?: false;
  parent?: Node;
}
interface ArrayPattern extends Span {
  type: "ArrayPattern";
  decorators?: [];
  elements: Array<BindingPattern | BindingRestElement | null>;
  optional?: false;
  typeAnnotation?: null;
  parent?: Node;
}
interface BindingRestElement extends Span {
  type: "RestElement";
  decorators?: [];
  argument: BindingPattern;
  optional?: false;
  typeAnnotation?: null;
  value?: null;
  parent?: Node;
}
interface Function extends Span {
  type: FunctionType;
  id: BindingIdentifier | null;
  generator: boolean;
  async: boolean;
  declare?: boolean;
  typeParameters?: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType?: TSTypeAnnotation | null;
  body: FunctionBody | null;
  expression: false;
  parent?: Node;
}
type ParamPattern = FormalParameter | TSParameterProperty | FormalParameterRest;
type FunctionType = "FunctionDeclaration" | "FunctionExpression" | "TSDeclareFunction" | "TSEmptyBodyFunctionExpression";
interface FormalParameterRest extends Span {
  type: "RestElement";
  argument: BindingPattern;
  decorators?: [];
  optional?: boolean;
  typeAnnotation?: TSTypeAnnotation | null;
  value?: null;
  parent?: Node;
}
type FormalParameter = {
  decorators?: Array<Decorator>;
} & BindingPattern;
interface TSParameterProperty extends Span {
  type: "TSParameterProperty";
  accessibility: TSAccessibility | null;
  decorators: Array<Decorator>;
  override: boolean;
  parameter: FormalParameter;
  readonly: boolean;
  static: boolean;
  parent?: Node;
}
interface FunctionBody extends Span {
  type: "BlockStatement";
  body: Array<Directive | Statement>;
  parent?: Node;
}
interface ArrowFunctionExpression extends Span {
  type: "ArrowFunctionExpression";
  expression: boolean;
  async: boolean;
  typeParameters?: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType?: TSTypeAnnotation | null;
  body: FunctionBody | Expression;
  id: null;
  generator: false;
  parent?: Node;
}
interface YieldExpression extends Span {
  type: "YieldExpression";
  delegate: boolean;
  argument: Expression | null;
  parent?: Node;
}
interface Class extends Span {
  type: ClassType;
  decorators: Array<Decorator>;
  id: BindingIdentifier | null;
  typeParameters?: TSTypeParameterDeclaration | null;
  superClass: Expression | null;
  superTypeArguments?: TSTypeParameterInstantiation | null;
  implements?: Array<TSClassImplements>;
  body: ClassBody;
  abstract?: boolean;
  declare?: boolean;
  parent?: Node;
}
type ClassType = "ClassDeclaration" | "ClassExpression";
interface ClassBody extends Span {
  type: "ClassBody";
  body: Array<ClassElement>;
  parent?: Node;
}
type ClassElement = StaticBlock | MethodDefinition | PropertyDefinition | AccessorProperty | TSIndexSignature;
interface MethodDefinition extends Span {
  type: MethodDefinitionType;
  decorators: Array<Decorator>;
  key: PropertyKey;
  value: Function;
  kind: MethodDefinitionKind;
  computed: boolean;
  static: boolean;
  override?: boolean;
  optional?: boolean;
  accessibility?: TSAccessibility | null;
  parent?: Node;
}
type MethodDefinitionType = "MethodDefinition" | "TSAbstractMethodDefinition";
interface PropertyDefinition extends Span {
  type: PropertyDefinitionType;
  decorators: Array<Decorator>;
  key: PropertyKey;
  typeAnnotation?: TSTypeAnnotation | null;
  value: Expression | null;
  computed: boolean;
  static: boolean;
  declare?: boolean;
  override?: boolean;
  optional?: boolean;
  definite?: boolean;
  readonly?: boolean;
  accessibility?: TSAccessibility | null;
  parent?: Node;
}
type PropertyDefinitionType = "PropertyDefinition" | "TSAbstractPropertyDefinition";
type MethodDefinitionKind = "constructor" | "method" | "get" | "set";
interface PrivateIdentifier extends Span {
  type: "PrivateIdentifier";
  name: string;
  parent?: Node;
}
interface StaticBlock extends Span {
  type: "StaticBlock";
  body: Array<Statement>;
  parent?: Node;
}
type ModuleDeclaration = ImportDeclaration | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | TSExportAssignment | TSNamespaceExportDeclaration;
type AccessorPropertyType = "AccessorProperty" | "TSAbstractAccessorProperty";
interface AccessorProperty extends Span {
  type: AccessorPropertyType;
  decorators: Array<Decorator>;
  key: PropertyKey;
  typeAnnotation?: TSTypeAnnotation | null;
  value: Expression | null;
  computed: boolean;
  static: boolean;
  override?: boolean;
  definite?: boolean;
  accessibility?: TSAccessibility | null;
  declare?: false;
  optional?: false;
  readonly?: false;
  parent?: Node;
}
interface ImportExpression extends Span {
  type: "ImportExpression";
  source: Expression;
  options: Expression | null;
  phase: ImportPhase | null;
  parent?: Node;
}
interface ImportDeclaration extends Span {
  type: "ImportDeclaration";
  specifiers: Array<ImportDeclarationSpecifier>;
  source: StringLiteral;
  phase: ImportPhase | null;
  attributes: Array<ImportAttribute>;
  importKind?: ImportOrExportKind;
  parent?: Node;
}
type ImportPhase = "source" | "defer";
type ImportDeclarationSpecifier = ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier;
interface ImportSpecifier extends Span {
  type: "ImportSpecifier";
  imported: ModuleExportName;
  local: BindingIdentifier;
  importKind?: ImportOrExportKind;
  parent?: Node;
}
interface ImportDefaultSpecifier extends Span {
  type: "ImportDefaultSpecifier";
  local: BindingIdentifier;
  parent?: Node;
}
interface ImportNamespaceSpecifier extends Span {
  type: "ImportNamespaceSpecifier";
  local: BindingIdentifier;
  parent?: Node;
}
interface ImportAttribute extends Span {
  type: "ImportAttribute";
  key: ImportAttributeKey;
  value: StringLiteral;
  parent?: Node;
}
type ImportAttributeKey = IdentifierName | StringLiteral;
interface ExportNamedDeclaration extends Span {
  type: "ExportNamedDeclaration";
  declaration: Declaration | null;
  specifiers: Array<ExportSpecifier>;
  source: StringLiteral | null;
  exportKind?: ImportOrExportKind;
  attributes: Array<ImportAttribute>;
  parent?: Node;
}
interface ExportDefaultDeclaration extends Span {
  type: "ExportDefaultDeclaration";
  declaration: ExportDefaultDeclarationKind;
  exportKind?: "value";
  parent?: Node;
}
interface ExportAllDeclaration extends Span {
  type: "ExportAllDeclaration";
  exported: ModuleExportName | null;
  source: StringLiteral;
  attributes: Array<ImportAttribute>;
  exportKind?: ImportOrExportKind;
  parent?: Node;
}
interface ExportSpecifier extends Span {
  type: "ExportSpecifier";
  local: ModuleExportName;
  exported: ModuleExportName;
  exportKind?: ImportOrExportKind;
  parent?: Node;
}
type ExportDefaultDeclarationKind = Function | Class | TSInterfaceDeclaration | Expression;
type ModuleExportName = IdentifierName | IdentifierReference | StringLiteral;
interface V8IntrinsicExpression extends Span {
  type: "V8IntrinsicExpression";
  name: IdentifierName;
  arguments: Array<Argument>;
  parent?: Node;
}
interface BooleanLiteral extends Span {
  type: "Literal";
  value: boolean;
  raw: string | null;
  parent?: Node;
}
interface NullLiteral extends Span {
  type: "Literal";
  value: null;
  raw: "null" | null;
  parent?: Node;
}
interface NumericLiteral extends Span {
  type: "Literal";
  value: number;
  raw: string | null;
  parent?: Node;
}
interface StringLiteral extends Span {
  type: "Literal";
  value: string;
  raw: string | null;
  parent?: Node;
}
interface BigIntLiteral extends Span {
  type: "Literal";
  value: bigint;
  raw: string | null;
  bigint: string;
  parent?: Node;
}
interface RegExpLiteral extends Span {
  type: "Literal";
  value: RegExp | null;
  raw: string | null;
  regex: {
    pattern: string;
    flags: string;
  };
  parent?: Node;
}
interface JSXElement extends Span {
  type: "JSXElement";
  openingElement: JSXOpeningElement;
  children: Array<JSXChild>;
  closingElement: JSXClosingElement | null;
  parent?: Node;
}
interface JSXOpeningElement extends Span {
  type: "JSXOpeningElement";
  name: JSXElementName;
  typeArguments?: TSTypeParameterInstantiation | null;
  attributes: Array<JSXAttributeItem>;
  selfClosing: boolean;
  parent?: Node;
}
interface JSXClosingElement extends Span {
  type: "JSXClosingElement";
  name: JSXElementName;
  parent?: Node;
}
interface JSXFragment extends Span {
  type: "JSXFragment";
  openingFragment: JSXOpeningFragment;
  children: Array<JSXChild>;
  closingFragment: JSXClosingFragment;
  parent?: Node;
}
interface JSXOpeningFragment extends Span {
  type: "JSXOpeningFragment";
  attributes?: [];
  selfClosing?: false;
  parent?: Node;
}
interface JSXClosingFragment extends Span {
  type: "JSXClosingFragment";
  parent?: Node;
}
type JSXElementName = JSXIdentifier | JSXNamespacedName | JSXMemberExpression;
interface JSXNamespacedName extends Span {
  type: "JSXNamespacedName";
  namespace: JSXIdentifier;
  name: JSXIdentifier;
  parent?: Node;
}
interface JSXMemberExpression extends Span {
  type: "JSXMemberExpression";
  object: JSXMemberExpressionObject;
  property: JSXIdentifier;
  parent?: Node;
}
type JSXMemberExpressionObject = JSXIdentifier | JSXMemberExpression;
interface JSXExpressionContainer extends Span {
  type: "JSXExpressionContainer";
  expression: JSXExpression;
  parent?: Node;
}
type JSXExpression = JSXEmptyExpression | Expression;
interface JSXEmptyExpression extends Span {
  type: "JSXEmptyExpression";
  parent?: Node;
}
type JSXAttributeItem = JSXAttribute | JSXSpreadAttribute;
interface JSXAttribute extends Span {
  type: "JSXAttribute";
  name: JSXAttributeName;
  value: JSXAttributeValue | null;
  parent?: Node;
}
interface JSXSpreadAttribute extends Span {
  type: "JSXSpreadAttribute";
  argument: Expression;
  parent?: Node;
}
type JSXAttributeName = JSXIdentifier | JSXNamespacedName;
type JSXAttributeValue = StringLiteral | JSXExpressionContainer | JSXElement | JSXFragment;
interface JSXIdentifier extends Span {
  type: "JSXIdentifier";
  name: string;
  parent?: Node;
}
type JSXChild = JSXText | JSXElement | JSXFragment | JSXExpressionContainer | JSXSpreadChild;
interface JSXSpreadChild extends Span {
  type: "JSXSpreadChild";
  expression: Expression;
  parent?: Node;
}
interface JSXText extends Span {
  type: "JSXText";
  value: string;
  raw: string | null;
  parent?: Node;
}
interface TSThisParameter extends Span {
  type: "Identifier";
  decorators: [];
  name: "this";
  optional: false;
  typeAnnotation: TSTypeAnnotation | null;
  parent?: Node;
}
interface TSEnumDeclaration extends Span {
  type: "TSEnumDeclaration";
  id: BindingIdentifier;
  body: TSEnumBody;
  const: boolean;
  declare: boolean;
  parent?: Node;
}
interface TSEnumBody extends Span {
  type: "TSEnumBody";
  members: Array<TSEnumMember>;
  parent?: Node;
}
interface TSEnumMember extends Span {
  type: "TSEnumMember";
  id: TSEnumMemberName;
  initializer: Expression | null;
  computed: boolean;
  parent?: Node;
}
type TSEnumMemberName = IdentifierName | StringLiteral | TemplateLiteral;
interface TSTypeAnnotation extends Span {
  type: "TSTypeAnnotation";
  typeAnnotation: TSType;
  parent?: Node;
}
interface TSLiteralType extends Span {
  type: "TSLiteralType";
  literal: TSLiteral;
  parent?: Node;
}
type TSLiteral = BooleanLiteral | NumericLiteral | BigIntLiteral | StringLiteral | TemplateLiteral | UnaryExpression;
type TSType = TSAnyKeyword | TSBigIntKeyword | TSBooleanKeyword | TSIntrinsicKeyword | TSNeverKeyword | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSStringKeyword | TSSymbolKeyword | TSUndefinedKeyword | TSUnknownKeyword | TSVoidKeyword | TSArrayType | TSConditionalType | TSConstructorType | TSFunctionType | TSImportType | TSIndexedAccessType | TSInferType | TSIntersectionType | TSLiteralType | TSMappedType | TSNamedTupleMember | TSTemplateLiteralType | TSThisType | TSTupleType | TSTypeLiteral | TSTypeOperator | TSTypePredicate | TSTypeQuery | TSTypeReference | TSUnionType | TSParenthesizedType | JSDocNullableType | JSDocNonNullableType | JSDocUnknownType;
interface TSConditionalType extends Span {
  type: "TSConditionalType";
  checkType: TSType;
  extendsType: TSType;
  trueType: TSType;
  falseType: TSType;
  parent?: Node;
}
interface TSUnionType extends Span {
  type: "TSUnionType";
  types: Array<TSType>;
  parent?: Node;
}
interface TSIntersectionType extends Span {
  type: "TSIntersectionType";
  types: Array<TSType>;
  parent?: Node;
}
interface TSParenthesizedType extends Span {
  type: "TSParenthesizedType";
  typeAnnotation: TSType;
  parent?: Node;
}
interface TSTypeOperator extends Span {
  type: "TSTypeOperator";
  operator: TSTypeOperatorOperator;
  typeAnnotation: TSType;
  parent?: Node;
}
type TSTypeOperatorOperator = "keyof" | "unique" | "readonly";
interface TSArrayType extends Span {
  type: "TSArrayType";
  elementType: TSType;
  parent?: Node;
}
interface TSIndexedAccessType extends Span {
  type: "TSIndexedAccessType";
  objectType: TSType;
  indexType: TSType;
  parent?: Node;
}
interface TSTupleType extends Span {
  type: "TSTupleType";
  elementTypes: Array<TSTupleElement>;
  parent?: Node;
}
interface TSNamedTupleMember extends Span {
  type: "TSNamedTupleMember";
  label: IdentifierName;
  elementType: TSTupleElement;
  optional: boolean;
  parent?: Node;
}
interface TSOptionalType extends Span {
  type: "TSOptionalType";
  typeAnnotation: TSType;
  parent?: Node;
}
interface TSRestType extends Span {
  type: "TSRestType";
  typeAnnotation: TSType;
  parent?: Node;
}
type TSTupleElement = TSOptionalType | TSRestType | TSType;
interface TSAnyKeyword extends Span {
  type: "TSAnyKeyword";
  parent?: Node;
}
interface TSStringKeyword extends Span {
  type: "TSStringKeyword";
  parent?: Node;
}
interface TSBooleanKeyword extends Span {
  type: "TSBooleanKeyword";
  parent?: Node;
}
interface TSNumberKeyword extends Span {
  type: "TSNumberKeyword";
  parent?: Node;
}
interface TSNeverKeyword extends Span {
  type: "TSNeverKeyword";
  parent?: Node;
}
interface TSIntrinsicKeyword extends Span {
  type: "TSIntrinsicKeyword";
  parent?: Node;
}
interface TSUnknownKeyword extends Span {
  type: "TSUnknownKeyword";
  parent?: Node;
}
interface TSNullKeyword extends Span {
  type: "TSNullKeyword";
  parent?: Node;
}
interface TSUndefinedKeyword extends Span {
  type: "TSUndefinedKeyword";
  parent?: Node;
}
interface TSVoidKeyword extends Span {
  type: "TSVoidKeyword";
  parent?: Node;
}
interface TSSymbolKeyword extends Span {
  type: "TSSymbolKeyword";
  parent?: Node;
}
interface TSThisType extends Span {
  type: "TSThisType";
  parent?: Node;
}
interface TSObjectKeyword extends Span {
  type: "TSObjectKeyword";
  parent?: Node;
}
interface TSBigIntKeyword extends Span {
  type: "TSBigIntKeyword";
  parent?: Node;
}
interface TSTypeReference extends Span {
  type: "TSTypeReference";
  typeName: TSTypeName;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}
type TSTypeName = IdentifierReference | TSQualifiedName | ThisExpression;
interface TSQualifiedName extends Span {
  type: "TSQualifiedName";
  left: TSTypeName;
  right: IdentifierName;
  parent?: Node;
}
interface TSTypeParameterInstantiation extends Span {
  type: "TSTypeParameterInstantiation";
  params: Array<TSType>;
  parent?: Node;
}
interface TSTypeParameter extends Span {
  type: "TSTypeParameter";
  name: BindingIdentifier;
  constraint: TSType | null;
  default: TSType | null;
  in: boolean;
  out: boolean;
  const: boolean;
  parent?: Node;
}
interface TSTypeParameterDeclaration extends Span {
  type: "TSTypeParameterDeclaration";
  params: Array<TSTypeParameter>;
  parent?: Node;
}
interface TSTypeAliasDeclaration extends Span {
  type: "TSTypeAliasDeclaration";
  id: BindingIdentifier;
  typeParameters: TSTypeParameterDeclaration | null;
  typeAnnotation: TSType;
  declare: boolean;
  parent?: Node;
}
type TSAccessibility = "private" | "protected" | "public";
interface TSClassImplements extends Span {
  type: "TSClassImplements";
  expression: IdentifierReference | ThisExpression | MemberExpression;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}
interface TSInterfaceDeclaration extends Span {
  type: "TSInterfaceDeclaration";
  id: BindingIdentifier;
  typeParameters: TSTypeParameterDeclaration | null;
  extends: Array<TSInterfaceHeritage>;
  body: TSInterfaceBody;
  declare: boolean;
  parent?: Node;
}
interface TSInterfaceBody extends Span {
  type: "TSInterfaceBody";
  body: Array<TSSignature>;
  parent?: Node;
}
interface TSPropertySignature extends Span {
  type: "TSPropertySignature";
  computed: boolean;
  optional: boolean;
  readonly: boolean;
  key: PropertyKey;
  typeAnnotation: TSTypeAnnotation | null;
  accessibility: null;
  static: false;
  parent?: Node;
}
type TSSignature = TSIndexSignature | TSPropertySignature | TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSMethodSignature;
interface TSIndexSignature extends Span {
  type: "TSIndexSignature";
  parameters: Array<TSIndexSignatureName>;
  typeAnnotation: TSTypeAnnotation;
  readonly: boolean;
  static: boolean;
  accessibility: null;
  parent?: Node;
}
interface TSCallSignatureDeclaration extends Span {
  type: "TSCallSignatureDeclaration";
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation | null;
  parent?: Node;
}
type TSMethodSignatureKind = "method" | "get" | "set";
interface TSMethodSignature extends Span {
  type: "TSMethodSignature";
  key: PropertyKey;
  computed: boolean;
  optional: boolean;
  kind: TSMethodSignatureKind;
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation | null;
  accessibility: null;
  readonly: false;
  static: false;
  parent?: Node;
}
interface TSConstructSignatureDeclaration extends Span {
  type: "TSConstructSignatureDeclaration";
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation | null;
  parent?: Node;
}
interface TSIndexSignatureName extends Span {
  type: "Identifier";
  decorators: [];
  name: string;
  optional: false;
  typeAnnotation: TSTypeAnnotation;
  parent?: Node;
}
interface TSInterfaceHeritage extends Span {
  type: "TSInterfaceHeritage";
  expression: Expression;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}
interface TSTypePredicate extends Span {
  type: "TSTypePredicate";
  parameterName: TSTypePredicateName;
  asserts: boolean;
  typeAnnotation: TSTypeAnnotation | null;
  parent?: Node;
}
type TSTypePredicateName = IdentifierName | TSThisType;
interface TSModuleDeclaration extends Span {
  type: "TSModuleDeclaration";
  id: BindingIdentifier | StringLiteral | TSQualifiedName;
  body: TSModuleBlock | null;
  kind: TSModuleDeclarationKind;
  declare: boolean;
  global: false;
  parent?: Node;
}
type TSModuleDeclarationKind = "module" | "namespace";
interface TSGlobalDeclaration extends Span {
  type: "TSModuleDeclaration";
  id: IdentifierName;
  body: TSModuleBlock;
  kind: "global";
  declare: boolean;
  global: true;
  parent?: Node;
}
interface TSModuleBlock extends Span {
  type: "TSModuleBlock";
  body: Array<Directive | Statement>;
  parent?: Node;
}
interface TSTypeLiteral extends Span {
  type: "TSTypeLiteral";
  members: Array<TSSignature>;
  parent?: Node;
}
interface TSInferType extends Span {
  type: "TSInferType";
  typeParameter: TSTypeParameter;
  parent?: Node;
}
interface TSTypeQuery extends Span {
  type: "TSTypeQuery";
  exprName: TSTypeQueryExprName;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}
type TSTypeQueryExprName = TSImportType | TSTypeName;
interface TSImportType extends Span {
  type: "TSImportType";
  source: StringLiteral;
  options: ObjectExpression | null;
  qualifier: TSImportTypeQualifier | null;
  typeArguments: TSTypeParameterInstantiation | null;
  parent?: Node;
}
type TSImportTypeQualifier = IdentifierName | TSImportTypeQualifiedName;
interface TSImportTypeQualifiedName extends Span {
  type: "TSQualifiedName";
  left: TSImportTypeQualifier;
  right: IdentifierName;
  parent?: Node;
}
interface TSFunctionType extends Span {
  type: "TSFunctionType";
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation;
  parent?: Node;
}
interface TSConstructorType extends Span {
  type: "TSConstructorType";
  abstract: boolean;
  typeParameters: TSTypeParameterDeclaration | null;
  params: ParamPattern[];
  returnType: TSTypeAnnotation;
  parent?: Node;
}
interface TSMappedType extends Span {
  type: "TSMappedType";
  key: BindingIdentifier;
  constraint: TSType;
  nameType: TSType | null;
  typeAnnotation: TSType | null;
  optional: TSMappedTypeModifierOperator | false;
  readonly: TSMappedTypeModifierOperator | null;
  parent?: Node;
}
type TSMappedTypeModifierOperator = true | "+" | "-";
interface TSTemplateLiteralType extends Span {
  type: "TSTemplateLiteralType";
  quasis: Array<TemplateElement>;
  types: Array<TSType>;
  parent?: Node;
}
interface TSAsExpression extends Span {
  type: "TSAsExpression";
  expression: Expression;
  typeAnnotation: TSType;
  parent?: Node;
}
interface TSSatisfiesExpression extends Span {
  type: "TSSatisfiesExpression";
  expression: Expression;
  typeAnnotation: TSType;
  parent?: Node;
}
interface TSTypeAssertion extends Span {
  type: "TSTypeAssertion";
  typeAnnotation: TSType;
  expression: Expression;
  parent?: Node;
}
interface TSImportEqualsDeclaration extends Span {
  type: "TSImportEqualsDeclaration";
  id: BindingIdentifier;
  moduleReference: TSModuleReference;
  importKind: ImportOrExportKind;
  parent?: Node;
}
type TSModuleReference = TSExternalModuleReference | IdentifierReference | TSQualifiedName;
interface TSExternalModuleReference extends Span {
  type: "TSExternalModuleReference";
  expression: StringLiteral;
  parent?: Node;
}
interface TSNonNullExpression extends Span {
  type: "TSNonNullExpression";
  expression: Expression;
  parent?: Node;
}
interface Decorator extends Span {
  type: "Decorator";
  expression: Expression;
  parent?: Node;
}
interface TSExportAssignment extends Span {
  type: "TSExportAssignment";
  expression: Expression;
  parent?: Node;
}
interface TSNamespaceExportDeclaration extends Span {
  type: "TSNamespaceExportDeclaration";
  id: IdentifierName;
  parent?: Node;
}
interface TSInstantiationExpression extends Span {
  type: "TSInstantiationExpression";
  expression: Expression;
  typeArguments: TSTypeParameterInstantiation;
  parent?: Node;
}
type ImportOrExportKind = "value" | "type";
interface JSDocNullableType extends Span {
  type: "TSJSDocNullableType";
  typeAnnotation: TSType;
  postfix: boolean;
  parent?: Node;
}
interface JSDocNonNullableType extends Span {
  type: "TSJSDocNonNullableType";
  typeAnnotation: TSType;
  postfix: boolean;
  parent?: Node;
}
interface JSDocUnknownType extends Span {
  type: "TSJSDocUnknownType";
  parent?: Node;
}
type ModuleKind = "script" | "module" | "commonjs";
interface Span {
  start: number;
  end: number;
  range?: [number, number];
}
type AssignmentOperator = "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "**=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=" | "||=" | "&&=" | "??=";
type BinaryOperator = "==" | "!=" | "===" | "!==" | "<" | "<=" | ">" | ">=" | "+" | "-" | "*" | "/" | "%" | "**" | "<<" | ">>" | ">>>" | "|" | "^" | "&" | "in" | "instanceof";
type LogicalOperator = "||" | "&&" | "??";
type UnaryOperator = "+" | "-" | "!" | "~" | "typeof" | "void" | "delete";
type UpdateOperator = "++" | "--";
type Node = Program | IdentifierName | IdentifierReference | BindingIdentifier | LabelIdentifier | ThisExpression | ArrayExpression | ObjectExpression | ObjectProperty | TemplateLiteral | TaggedTemplateExpression | TemplateElement | ComputedMemberExpression | StaticMemberExpression | PrivateFieldExpression | CallExpression | NewExpression | MetaProperty | SpreadElement | UpdateExpression | UnaryExpression | BinaryExpression | PrivateInExpression | LogicalExpression | ConditionalExpression | AssignmentExpression | ArrayAssignmentTarget | ObjectAssignmentTarget | AssignmentTargetRest | AssignmentTargetWithDefault | AssignmentTargetPropertyIdentifier | AssignmentTargetPropertyProperty | SequenceExpression | Super | AwaitExpression | ChainExpression | ParenthesizedExpression | Directive | Hashbang | BlockStatement | VariableDeclaration | VariableDeclarator | EmptyStatement | ExpressionStatement | IfStatement | DoWhileStatement | WhileStatement | ForStatement | ForInStatement | ForOfStatement | ContinueStatement | BreakStatement | ReturnStatement | WithStatement | SwitchStatement | SwitchCase | LabeledStatement | ThrowStatement | TryStatement | CatchClause | DebuggerStatement | AssignmentPattern | ObjectPattern | BindingProperty | ArrayPattern | BindingRestElement | Function | FunctionBody | ArrowFunctionExpression | YieldExpression | Class | ClassBody | MethodDefinition | PropertyDefinition | PrivateIdentifier | StaticBlock | AccessorProperty | ImportExpression | ImportDeclaration | ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportAttribute | ExportNamedDeclaration | ExportDefaultDeclaration | ExportAllDeclaration | ExportSpecifier | V8IntrinsicExpression | BooleanLiteral | NullLiteral | NumericLiteral | StringLiteral | BigIntLiteral | RegExpLiteral | JSXElement | JSXOpeningElement | JSXClosingElement | JSXFragment | JSXOpeningFragment | JSXClosingFragment | JSXNamespacedName | JSXMemberExpression | JSXExpressionContainer | JSXEmptyExpression | JSXAttribute | JSXSpreadAttribute | JSXIdentifier | JSXSpreadChild | JSXText | TSThisParameter | TSEnumDeclaration | TSEnumBody | TSEnumMember | TSTypeAnnotation | TSLiteralType | TSConditionalType | TSUnionType | TSIntersectionType | TSParenthesizedType | TSTypeOperator | TSArrayType | TSIndexedAccessType | TSTupleType | TSNamedTupleMember | TSOptionalType | TSRestType | TSAnyKeyword | TSStringKeyword | TSBooleanKeyword | TSNumberKeyword | TSNeverKeyword | TSIntrinsicKeyword | TSUnknownKeyword | TSNullKeyword | TSUndefinedKeyword | TSVoidKeyword | TSSymbolKeyword | TSThisType | TSObjectKeyword | TSBigIntKeyword | TSTypeReference | TSQualifiedName | TSTypeParameterInstantiation | TSTypeParameter | TSTypeParameterDeclaration | TSTypeAliasDeclaration | TSClassImplements | TSInterfaceDeclaration | TSInterfaceBody | TSPropertySignature | TSIndexSignature | TSCallSignatureDeclaration | TSMethodSignature | TSConstructSignatureDeclaration | TSIndexSignatureName | TSInterfaceHeritage | TSTypePredicate | TSModuleDeclaration | TSGlobalDeclaration | TSModuleBlock | TSTypeLiteral | TSInferType | TSTypeQuery | TSImportType | TSImportTypeQualifiedName | TSFunctionType | TSConstructorType | TSMappedType | TSTemplateLiteralType | TSAsExpression | TSSatisfiesExpression | TSTypeAssertion | TSImportEqualsDeclaration | TSExternalModuleReference | TSNonNullExpression | Decorator | TSExportAssignment | TSNamespaceExportDeclaration | TSInstantiationExpression | JSDocNullableType | JSDocNonNullableType | JSDocUnknownType | ParamPattern;
//#endregion
//#region node_modules/rolldown/dist/shared/binding-B1q9aYT-.d.mts
interface CodegenOptions {
  /**
   * Remove whitespace.
   *
   * @default true
   */
  removeWhitespace?: boolean;
  /**
   * How to handle legal comments (comments containing `@license`, `@preserve`, or starting with `//!`/`/*!`).
   *
   * * `"none"` - Do not preserve any legal comments.
   * * `"inline"` - Preserve all legal comments inline.
   * * `"eof"` - Move all legal comments to the end of the file.
   * * `"external"` - Extract legal comments without linking.
   * * `{ linked: "path/to/legal.txt" }` - Extract legal comments and add a link comment to the given path.
   *
   * @default "none" (when minifying)
   */
  legalComments?: 'none' | 'inline' | 'eof' | 'external' | {
    linked: string;
  };
}
interface CompressOptions {
  /**
   * Set desired EcmaScript standard version for output.
   *
   * Set `esnext` to enable all target highering.
   *
   * Example:
   *
   * * `'es2015'`
   * * `['es2020', 'chrome58', 'edge16', 'firefox57', 'node12', 'safari11']`
   *
   * @default 'esnext'
   *
   * @see [oxc#target](https://oxc.rs/docs/guide/usage/transformer/lowering#target)
   */
  target?: string | Array<string>;
  /**
   * Pass true to discard calls to `console.*`.
   *
   * @default false
   */
  dropConsole?: boolean;
  /**
   * Remove `debugger;` statements.
   *
   * @default true
   */
  dropDebugger?: boolean;
  /**
   * Pass `true` to drop unreferenced functions and variables.
   *
   * Simple direct variable assignments do not count as references unless set to `keep_assign`.
   * @default true
   */
  unused?: boolean | 'keep_assign';
  /** Keep function / class names. */
  keepNames?: CompressOptionsKeepNames;
  /**
   * Join consecutive var, let and const statements.
   *
   * @default true
   */
  joinVars?: boolean;
  /**
   * Join consecutive simple statements using the comma operator.
   *
   * `a; b` -> `a, b`
   *
   * @default true
   */
  sequences?: boolean;
  /**
   * Set of label names to drop from the code.
   *
   * Labeled statements matching these names will be removed during minification.
   *
   * @default []
   */
  dropLabels?: Array<string>;
  /** Limit the maximum number of iterations for debugging purpose. */
  maxIterations?: number;
  /** Treeshake options. */
  treeshake?: TreeShakeOptions;
}
interface CompressOptionsKeepNames {
  /**
   * Keep function names so that `Function.prototype.name` is preserved.
   *
   * This does not guarantee that the `undefined` name is preserved.
   *
   * @default false
   */
  function: boolean;
  /**
   * Keep class names so that `Class.prototype.name` is preserved.
   *
   * This does not guarantee that the `undefined` name is preserved.
   *
   * @default false
   */
  class: boolean;
}
interface MangleOptions {
  /**
   * Pass `true` to mangle names declared in the top level scope.
   *
   * @default true for modules and commonjs, otherwise false
   */
  toplevel?: boolean;
  /**
   * Preserve `name` property for functions and classes.
   *
   * @default false
   */
  keepNames?: boolean | MangleOptionsKeepNames;
  /** Debug mangled names. */
  debug?: boolean;
}
interface MangleOptionsKeepNames {
  /**
   * Preserve `name` property for functions.
   *
   * @default false
   */
  function: boolean;
  /**
   * Preserve `name` property for classes.
   *
   * @default false
   */
  class: boolean;
}
interface MinifyOptions$1 {
  /** Use when minifying an ES module. */
  module?: boolean;
  compress?: boolean | CompressOptions;
  mangle?: boolean | MangleOptions;
  codegen?: boolean | CodegenOptions;
  sourcemap?: boolean;
}
interface TreeShakeOptions {
  /**
   * Whether to respect the pure annotations.
   *
   * Pure annotations are comments that mark an expression as pure.
   * For example: @__PURE__ or #__NO_SIDE_EFFECTS__.
   *
   * @default true
   */
  annotations?: boolean;
  /**
   * Whether to treat this function call as pure.
   *
   * This function is called for normal function calls, new calls, and
   * tagged template calls.
   */
  manualPureFunctions?: Array<string>;
  /**
   * Whether property read accesses have side effects.
   *
   * @default 'always'
   */
  propertyReadSideEffects?: boolean | 'always';
  /**
   * Whether property write accesses (assignments to member expressions) have side effects.
   *
   * When false, assignments like `obj.prop = value` are considered side-effect-free
   * (assuming the object and value expressions themselves are side-effect-free).
   *
   * @default true
   */
  propertyWriteSideEffects?: boolean;
  /**
   * Whether accessing a global variable has side effects.
   *
   * Accessing a non-existing global variable will throw an error.
   * Global variable may be a getter that has side effects.
   *
   * @default true
   */
  unknownGlobalSideEffects?: boolean;
  /**
   * Whether invalid import statements have side effects.
   *
   * Accessing a non-existing import name will throw an error.
   * Also import statements that cannot be resolved will throw an error.
   *
   * @default true
   */
  invalidImportSideEffects?: boolean;
}
interface ParserOptions {
  /** Treat the source text as `js`, `jsx`, `ts`, `tsx` or `dts`. */
  lang?: 'js' | 'jsx' | 'ts' | 'tsx' | 'dts';
  /** Treat the source text as `script` or `module` code. */
  sourceType?: 'script' | 'module' | 'commonjs' | 'unambiguous' | undefined;
  /**
   * Return an AST which includes TypeScript-related properties, or excludes them.
   *
   * `'js'` is default for JS / JSX files.
   * `'ts'` is default for TS / TSX files.
   * The type of the file is determined from `lang` option, or extension of provided `filename`.
   */
  astType?: 'js' | 'ts';
  /**
   * Controls whether the `range` property is included on AST nodes.
   * The `range` property is a `[number, number]` which indicates the start/end offsets
   * of the node in the file contents.
   *
   * @default false
   */
  range?: boolean;
  /**
   * Emit `ParenthesizedExpression` and `TSParenthesizedType` in AST.
   *
   * If this option is true, parenthesized expressions are represented by
   * (non-standard) `ParenthesizedExpression` and `TSParenthesizedType` nodes that
   * have a single `expression` property containing the expression inside parentheses.
   *
   * @default true
   */
  preserveParens?: boolean;
  /**
   * Produce semantic errors with an additional AST pass.
   * Semantic errors depend on symbols and scopes, where the parser does not construct.
   * This adds a small performance overhead.
   *
   * @default false
   */
  showSemanticErrors?: boolean;
}
interface CompilerAssumptions {
  ignoreFunctionLength?: boolean;
  noDocumentAll?: boolean;
  objectRestNoSymbols?: boolean;
  pureGetters?: boolean;
  /**
   * When using public class fields, assume that they don't shadow any getter in the current class,
   * in its subclasses or in its superclass. Thus, it's safe to assign them rather than using
   * `Object.defineProperty`.
   *
   * For example:
   *
   * Input:
   * ```js
   * class Test {
   *  field = 2;
   *
   *  static staticField = 3;
   * }
   * ```
   *
   * When `set_public_class_fields` is `true`, the output will be:
   * ```js
   * class Test {
   *  constructor() {
   *    this.field = 2;
   *  }
   * }
   * Test.staticField = 3;
   * ```
   *
   * Otherwise, the output will be:
   * ```js
   * import _defineProperty from "@oxc-project/runtime/helpers/defineProperty";
   * class Test {
   *   constructor() {
   *     _defineProperty(this, "field", 2);
   *   }
   * }
   * _defineProperty(Test, "staticField", 3);
   * ```
   *
   * NOTE: For TypeScript, if you wanted behavior is equivalent to `useDefineForClassFields: false`, you should
   * set both `set_public_class_fields` and [`crate::TypeScriptOptions::remove_class_fields_without_initializer`]
   * to `true`.
   */
  setPublicClassFields?: boolean;
}
interface DecoratorOptions {
  /**
   * Enables experimental support for decorators, which is a version of decorators that predates the TC39 standardization process.
   *
   * Decorators are a language feature which hasn’t yet been fully ratified into the JavaScript specification.
   * This means that the implementation version in TypeScript may differ from the implementation in JavaScript when it it decided by TC39.
   *
   * @see https://www.typescriptlang.org/tsconfig/#experimentalDecorators
   * @default false
   */
  legacy?: boolean;
  /**
   * Enables emitting decorator metadata.
   *
   * This option the same as [emitDecoratorMetadata](https://www.typescriptlang.org/tsconfig/#emitDecoratorMetadata)
   * in TypeScript, and it only works when `legacy` is true.
   *
   * @see https://www.typescriptlang.org/tsconfig/#emitDecoratorMetadata
   * @default false
   */
  emitDecoratorMetadata?: boolean;
  /**
   * Aligns nullable-union `design:type` emission with `--strictNullChecks`.
   *
   * When `true` (default), `T | null` and `T | undefined` emit `Object`, matching tsc strict.
   * When `false`, `null` and `undefined` are elided from the union so the underlying
   * primitive constructor is emitted, matching tsc with `--strictNullChecks=false`
   * and `babel-plugin-transform-typescript-metadata`.
   *
   * @see https://www.typescriptlang.org/tsconfig/#strictNullChecks
   * @default true
   */
  strictNullChecks?: boolean;
}
type HelperMode =
/**
* Runtime mode (default): Helper functions are imported from a runtime package.
*
* Example:
*
* ```js
* import helperName from "@oxc-project/runtime/helpers/helperName";
* helperName(...arguments);
* ```
*/
'Runtime' |
/**
 * External mode: Helper functions are accessed from a global `babelHelpers` object.
 *
 * Example:
 *
 * ```js
 * babelHelpers.helperName(...arguments);
 * ```
 */
'External';
interface Helpers {
  mode?: HelperMode;
}
/**
 * TypeScript Isolated Declarations for Standalone DTS Emit (async)
 *
 * Note: This function can be slower than `isolatedDeclarationSync` due to the overhead of spawning a thread.
 */
interface IsolatedDeclarationsOptions {
  /**
   * Do not emit declarations for code that has an @internal annotation in its JSDoc comment.
   * This is an internal compiler option; use at your own risk, because the compiler does not check that the result is valid.
   *
   * Default: `false`
   *
   * See <https://www.typescriptlang.org/tsconfig/#stripInternal>
   */
  stripInternal?: boolean;
  sourcemap?: boolean;
}
/**
 * Configure how TSX and JSX are transformed.
 *
 * @see {@link https://oxc.rs/docs/guide/usage/transformer/jsx}
 */
interface JsxOptions {
  /**
   * Decides which runtime to use.
   *
   * - 'automatic' - auto-import the correct JSX factories
   * - 'classic' - no auto-import
   *
   * @default 'automatic'
   */
  runtime?: 'classic' | 'automatic';
  /**
   * Emit development-specific information, such as `__source` and `__self`.
   *
   * @default false
   */
  development?: boolean;
  /**
   * Toggles whether or not to throw an error if an XML namespaced tag name
   * is used.
   *
   * Though the JSX spec allows this, it is disabled by default since React's
   * JSX does not currently have support for it.
   *
   * @default true
   */
  throwIfNamespace?: boolean;
  /**
   * Mark JSX elements and top-level React method calls as pure for tree shaking.
   *
   * @default true
   */
  pure?: boolean;
  /**
   * Replaces the import source when importing functions.
   *
   * @default 'react'
   */
  importSource?: string;
  /**
   * Replace the function used when compiling JSX expressions. It should be a
   * qualified name (e.g. `React.createElement`) or an identifier (e.g.
   * `createElement`).
   *
   * Only used for `classic` {@link runtime}.
   *
   * @default 'React.createElement'
   */
  pragma?: string;
  /**
   * Replace the component used when compiling JSX fragments. It should be a
   * valid JSX tag name.
   *
   * Only used for `classic` {@link runtime}.
   *
   * @default 'React.Fragment'
   */
  pragmaFrag?: string;
  /**
   * Enable React Fast Refresh .
   *
   * Conforms to the implementation in {@link https://github.com/facebook/react/tree/v18.3.1/packages/react-refresh}
   *
   * @default false
   */
  refresh?: boolean | ReactRefreshOptions;
}
/**
 * Transform JavaScript code to a Vite Node runnable module.
 *
 * @param filename The name of the file being transformed.
 * @param sourceText the source code itself
 * @param options The options for the transformation. See {@link
 * ModuleRunnerTransformOptions} for more information.
 *
 * @returns an object containing the transformed code, source maps, and any
 * errors that occurred during parsing or transformation.
 *
 * Note: This function can be slower than `moduleRunnerTransformSync` due to the overhead of spawning a thread.
 *
 * @deprecated Only works for Vite.
 */
interface PluginsOptions {
  styledComponents?: StyledComponentsOptions;
  taggedTemplateEscape?: boolean;
}
interface ReactRefreshOptions {
  /**
   * Specify the identifier of the refresh registration variable.
   *
   * @default `$RefreshReg$`.
   */
  refreshReg?: string;
  /**
   * Specify the identifier of the refresh signature variable.
   *
   * @default `$RefreshSig$`.
   */
  refreshSig?: string;
  emitFullSignatures?: boolean;
}
/**
 * Configure how styled-components are transformed.
 *
 * @see {@link https://oxc.rs/docs/guide/usage/transformer/plugins#styled-components}
 */
interface StyledComponentsOptions {
  /**
   * Enhances the attached CSS class name on each component with richer output to help
   * identify your components in the DOM without React DevTools.
   *
   * @default true
   */
  displayName?: boolean;
  /**
   * Controls whether the `displayName` of a component will be prefixed with the filename
   * to make the component name as unique as possible.
   *
   * @default true
   */
  fileName?: boolean;
  /**
   * Adds a unique identifier to every styled component to avoid checksum mismatches
   * due to different class generation on the client and server during server-side rendering.
   *
   * @default true
   */
  ssr?: boolean;
  /**
   * Transpiles styled-components tagged template literals to a smaller representation
   * than what Babel normally creates, helping to reduce bundle size.
   *
   * Disabled by default because Oxc does not down-level template literals, so this
   * transform only increases output size.
   *
   * @default false
   */
  transpileTemplateLiterals?: boolean;
  /**
   * Minifies CSS content by removing all whitespace and comments from your CSS,
   * keeping valuable bytes out of your bundles.
   *
   * @default true
   */
  minify?: boolean;
  /**
   * Enables transformation of JSX `css` prop when using styled-components.
   *
   * **Note: This feature is not yet implemented in oxc.**
   *
   * @default true
   */
  cssProp?: boolean;
  /**
   * Enables "pure annotation" to aid dead code elimination by bundlers.
   *
   * @default false
   */
  pure?: boolean;
  /**
   * Adds a namespace prefix to component identifiers to ensure class names are unique.
   *
   * Example: With `namespace: "my-app"`, generates `componentId: "my-app__sc-3rfj0a-1"`
   */
  namespace?: string;
  /**
   * List of file names that are considered meaningless for component naming purposes.
   *
   * When the `fileName` option is enabled and a component is in a file with a name
   * from this list, the directory name will be used instead of the file name for
   * the component's display name.
   *
   * @default `["index"]`
   */
  meaninglessFileNames?: Array<string>;
  /**
   * Import paths to be considered as styled-components imports at the top level.
   *
   * **Note: This feature is not yet implemented in oxc.**
   */
  topLevelImportPaths?: Array<string>;
}
/**
 * Options for transforming a JavaScript or TypeScript file.
 *
 * Options are listed in evaluation order: the source is parsed (`lang`,
 * `sourceType`), declarations are emitted (`typescript.declaration`), then
 * transforms run (`typescript`, `decorator`, `plugins`,
 * `jsx`, `target`), followed by the `inject` and `define` plugins, and
 * finally codegen (`sourcemap`). `helpers` configures the runtime helpers
 * the transforms emit.
 *
 * @see {@link transform}
 */
interface TransformOptions$1 {
  /** Treat the source text as `js`, `jsx`, `ts`, `tsx`, or `dts`. */
  lang?: 'js' | 'jsx' | 'ts' | 'tsx' | 'dts';
  /** Treat the source text as `script` or `module` code. */
  sourceType?: 'script' | 'module' | 'commonjs' | 'unambiguous' | undefined;
  /**
   * The current working directory. Used to resolve relative paths in other
   * options.
   */
  cwd?: string;
  /** Set assumptions in order to produce smaller output. */
  assumptions?: CompilerAssumptions;
  /**
   * Configure how TypeScript is transformed.
   *
   * `typescript.declaration` is evaluated before all transforms.
   *
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/typescript}
   */
  typescript?: TypeScriptOptions;
  /** Decorator plugin */
  decorator?: DecoratorOptions;
  /**
   * Third-party plugins to use.
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/plugins}
   */
  plugins?: PluginsOptions;
  /**
   * Configure how TSX and JSX are transformed.
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/jsx}
   */
  jsx?: 'preserve' | JsxOptions;
  /**
   * Sets the target environment for the generated JavaScript.
   *
   * The lowest target is `es2015`.
   *
   * Example:
   *
   * * `'es2015'`
   * * `['es2020', 'chrome58', 'edge16', 'firefox57', 'node12', 'safari11']`
   *
   * @default `esnext` (No transformation)
   *
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/lowering#target}
   */
  target?: string | Array<string>;
  /** Behaviour for runtime helpers. */
  helpers?: Helpers;
  /**
   * Inject Plugin
   *
   * Runs after all transforms.
   *
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/global-variable-replacement#inject}
   */
  inject?: Record<string, string | [string, string]>;
  /**
   * Define Plugin
   *
   * Runs after the inject plugin.
   *
   * @see {@link https://oxc.rs/docs/guide/usage/transformer/global-variable-replacement#define}
   */
  define?: Record<string, string>;
  /**
   * Enable source map generation.
   *
   * When `true`, the `sourceMap` field of transform result objects will be populated.
   *
   * @default false
   *
   * @see {@link SourceMap}
   */
  sourcemap?: boolean;
}
interface TypeScriptOptions {
  jsxPragma?: string;
  jsxPragmaFrag?: string;
  onlyRemoveTypeImports?: boolean;
  allowNamespaces?: boolean;
  /**
   * When enabled, type-only class fields are only removed if they are prefixed with the declare modifier:
   *
   * @deprecated
   *
   * Allowing `declare` fields is built-in support in Oxc without any option. If you want to remove class fields
   * without initializer, you can use `remove_class_fields_without_initializer: true` instead.
   */
  allowDeclareFields?: boolean;
  /**
   * When enabled, class fields without initializers are removed.
   *
   * For example:
   * ```ts
   * class Foo {
   *    x: number;
   *    y: number = 0;
   * }
   * ```
   * // transform into
   * ```js
   * class Foo {
   *    x: number;
   * }
   * ```
   *
   * The option is used to align with the behavior of TypeScript's `useDefineForClassFields: false` option.
   * When you want to enable this, you also need to set [`crate::CompilerAssumptions::set_public_class_fields`]
   * to `true`. The `set_public_class_fields: true` + `remove_class_fields_without_initializer: true` is
   * equivalent to `useDefineForClassFields: false` in TypeScript.
   *
   * When `set_public_class_fields` is true and class-properties plugin is enabled, the above example transforms into:
   *
   * ```js
   * class Foo {
   *   constructor() {
   *     this.y = 0;
   *   }
   * }
   * ```
   *
   * Defaults to `false`.
   */
  removeClassFieldsWithoutInitializer?: boolean;
  /**
   * When true, optimize const enums by inlining their values at usage sites
   * and removing the enum declaration.
   *
   * @default false
   */
  optimizeConstEnums?: boolean;
  /**
   * When true, optimize regular (non-const) enums by inlining their member
   * accesses at usage sites when the member value is statically known.
   *
   * Non-exported enum declarations are also removed when all members are
   * evaluable and no references to the enum as a runtime value exist
   * (e.g., `console.log(Foo)`, `typeof Foo`, or passing the enum as an argument).
   *
   * @default false
   */
  optimizeEnums?: boolean;
  /**
   * Also generate a `.d.ts` declaration file for TypeScript files.
   *
   * The source file must be compliant with all
   * [`isolatedDeclarations`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#isolated-declarations)
   * requirements.
   *
   * @default false
   */
  declaration?: IsolatedDeclarationsOptions;
  /**
   * Rewrite or remove TypeScript import/export declaration extensions.
   *
   * - When set to `rewrite`, it will change `.ts`, `.mts`, `.cts` extensions to `.js`, `.mjs`, `.cjs` respectively.
   * - When set to `remove`, it will remove `.ts`/`.mts`/`.cts`/`.tsx` extension entirely.
   * - When set to `true`, it's equivalent to `rewrite`.
   * - When set to `false` or omitted, no changes will be made to the extensions.
   *
   * @default false
   */
  rewriteImportExtensions?: 'rewrite' | 'remove' | boolean;
}
/** A decoded source map with mappings as an array of arrays instead of VLQ-encoded string. */
declare class BindingDecodedMap {
  /** The source map version (always 3). */
  get version(): number;
  /** The generated file name. */
  get file(): string | null;
  /** The list of original source files. */
  get sources(): Array<string>;
  /** The original source contents (if `includeContent` was true). */
  get sourcesContent(): Array<string | undefined | null>;
  /** The list of symbol names used in mappings. */
  get names(): Array<string>;
  /**
   * The decoded mappings as an array of line arrays.
   * Each line is an array of segments, where each segment is [generatedColumn, sourceIndex, originalLine, originalColumn, nameIndex?].
   */
  get mappings(): Array<Array<Array<number>>>;
  /** The list of source indices that should be excluded from debugging. */
  get x_google_ignoreList(): Array<number> | null;
}
declare class BindingMagicString {
  constructor(source: string, options?: BindingMagicStringOptions | undefined | null);
  get original(): string;
  get filename(): string | null;
  get indentExclusionRanges(): Array<Array<number>> | Array<number> | null;
  get ignoreList(): boolean;
  get offset(): number;
  set offset(offset: number);
  replace(from: string, to: string): this;
  replaceAll(from: string, to: string): this;
  /**
   * Returns the UTF-16 offset past the last match, or -1 if no match was found.
   * The JS wrapper uses this to update `lastIndex` on the caller's RegExp.
   * Global/sticky behavior is derived from the regex's own flags.
   */
  replaceRegex(from: RegExp, to: string): number;
  prepend(content: string): this;
  append(content: string): this;
  prependLeft(index: number, content: string): this;
  prependRight(index: number, content: string): this;
  appendLeft(index: number, content: string): this;
  appendRight(index: number, content: string): this;
  overwrite(start: number, end: number, content: string, options?: BindingOverwriteOptions | undefined | null): this;
  toString(): string;
  hasChanged(): boolean;
  length(): number;
  isEmpty(): boolean;
  remove(start: number, end: number): this;
  update(start: number, end: number, content: string, options?: BindingUpdateOptions | undefined | null): this;
  relocate(start: number, end: number, to: number): this;
  /**
   * Alias for `relocate` to match the original magic-string API.
   * Moves the characters from `start` to `end` to `index`.
   * Returns `this` for method chaining.
   */
  move(start: number, end: number, index: number): this;
  indent(indentor?: string | undefined | null, options?: BindingIndentOptions | undefined | null): this;
  /** Trims whitespace or specified characters from the start and end. */
  trim(charType?: string | undefined | null): this;
  /** Trims whitespace or specified characters from the start. */
  trimStart(charType?: string | undefined | null): this;
  /** Trims whitespace or specified characters from the end. */
  trimEnd(charType?: string | undefined | null): this;
  /** Trims newlines from the start and end. */
  trimLines(): this;
  /**
   * Deprecated method that throws an error directing users to use prependRight or appendLeft.
   * This matches the original magic-string API which deprecated this method.
   */
  insert(index: number, content: string): void;
  /** Returns a clone of the MagicString instance. */
  clone(): BindingMagicString;
  /** Returns the last character of the generated string, or an empty string if empty. */
  lastChar(): string;
  /** Returns the content after the last newline in the generated string. */
  lastLine(): string;
  /** Returns the guessed indentation string, or `\t` if none is found. */
  getIndentString(): string;
  /** Returns a clone with content outside the specified range removed. */
  snip(start: number, end: number): BindingMagicString;
  /**
   * Resets the portion of the string from `start` to `end` to its original content.
   * This undoes any modifications made to that range.
   * Supports negative indices (counting from the end).
   */
  reset(start: number, end: number): this;
  /**
   * Returns the content between the specified UTF-16 code unit positions (JS string indices).
   * Supports negative indices (counting from the end).
   *
   * When an index falls in the middle of a surrogate pair, the lone surrogate is
   * included in the result (matching the original magic-string / JS behavior).
   * This is done by returning a UTF-16 encoded JS string via `napi_create_string_utf16`.
   */
  slice(start?: number | undefined | null, end?: number | undefined | null): string;
  /**
   * Generates a source map for the transformations applied to this MagicString.
   * Returns a BindingSourceMap object with version, file, sources, sourcesContent, names, mappings.
   */
  generateMap(options?: BindingSourceMapOptions | undefined | null): BindingSourceMap;
  /**
   * Generates a decoded source map for the transformations applied to this MagicString.
   * Returns a BindingDecodedMap object with mappings as an array of arrays.
   */
  generateDecodedMap(options?: BindingSourceMapOptions | undefined | null): BindingDecodedMap;
}
declare class BindingRenderedChunk {
  get name(): string;
  get isEntry(): boolean;
  get isDynamicEntry(): boolean;
  get facadeModuleId(): string | null;
  get moduleIds(): Array<string>;
  get exports(): Array<string>;
  get fileName(): string;
  get modules(): BindingModules;
  get imports(): Array<string>;
  get dynamicImports(): Array<string>;
}
declare class BindingRenderedModule {
  get code(): string | null;
  get renderedExports(): Array<string>;
}
/** A source map object with properties matching the SourceMap V3 specification. */
declare class BindingSourceMap {
  /** The source map version (always 3). */
  get version(): number;
  /** The generated file name. */
  get file(): string | null;
  /** The list of original source files. */
  get sources(): Array<string>;
  /** The original source contents (if `includeContent` was true). */
  get sourcesContent(): Array<string | undefined | null>;
  /** The list of symbol names used in mappings. */
  get names(): Array<string>;
  /** The VLQ-encoded mappings string. */
  get mappings(): string;
  /** The list of source indices that should be excluded from debugging. */
  get x_google_ignoreList(): Array<number> | null;
  /** Returns the source map as a JSON string. */
  toString(): string;
  /** Returns the source map as a base64-encoded data URL. */
  toUrl(): string;
}
/**
 * Minimal wrapper around a `BundleHandle` for watcher events.
 * This is returned from watcher event data to allow calling `result.close()`.
 */
type BindingBuiltinPluginName = 'builtin:bundle-analyzer' | 'builtin:esm-external-require' | 'builtin:isolated-declaration' | 'builtin:replace' | 'builtin:vite-alias' | 'builtin:vite-build-import-analysis' | 'builtin:vite-dynamic-import-vars' | 'builtin:vite-import-glob' | 'builtin:vite-json' | 'builtin:vite-load-fallback' | 'builtin:vite-manifest' | 'builtin:vite-module-preload-polyfill' | 'builtin:vite-react-refresh-wrapper' | 'builtin:vite-reporter' | 'builtin:vite-resolve' | 'builtin:vite-transform' | 'builtin:vite-web-worker-post' | 'builtin:oxc-runtime';
interface BindingHookResolveIdExtraArgs {
  custom?: number;
  isEntry: boolean;
  /**
   * - `import-statement`: `import { foo } from './lib.js';`
   * - `dynamic-import`: `import('./lib.js')`
   * - `require-call`: `require('./lib.js')`
   * - `import-rule`: `@import 'bg-color.css'`
   * - `url-token`: `url('./icon.png')`
   * - `new-url`: `new URL('./worker.js', import.meta.url)`
   * - `hot-accept`: `import.meta.hot.accept('./lib.js', () => {})`
   */
  kind: 'import-statement' | 'dynamic-import' | 'require-call' | 'import-rule' | 'url-token' | 'new-url' | 'hot-accept';
}
interface BindingIndentOptions {
  exclude?: Array<Array<number>> | Array<number>;
}
interface BindingMagicStringOptions {
  filename?: string;
  offset?: number;
  indentExclusionRanges?: Array<Array<number>> | Array<number>;
  ignoreList?: boolean;
}
interface BindingModules {
  values: Array<BindingRenderedModule>;
  keys: Array<string>;
}
interface BindingOverwriteOptions {
  contentOnly?: boolean;
}
interface BindingPluginContextResolveOptions {
  /**
   * - `import-statement`: `import { foo } from './lib.js';`
   * - `dynamic-import`: `import('./lib.js')`
   * - `require-call`: `require('./lib.js')`
   * - `import-rule`: `@import 'bg-color.css'`
   * - `url-token`: `url('./icon.png')`
   * - `new-url`: `new URL('./worker.js', import.meta.url)`
   * - `hot-accept`: `import.meta.hot.accept('./lib.js', () => {})`
   */
  importKind?: 'import-statement' | 'dynamic-import' | 'require-call' | 'import-rule' | 'url-token' | 'new-url' | 'hot-accept';
  isEntry?: boolean;
  skipSelf?: boolean;
  custom?: number;
  vitePluginCustom?: BindingVitePluginCustom;
}
interface BindingSourceMapOptions {
  /** The filename for the generated file (goes into `map.file`) */
  file?: string;
  /** The filename of the original source (goes into `map.sources`) */
  source?: string;
  includeContent?: boolean;
  /**
   * Accepts boolean or string: true, false, "boundary"
   * - true: high-resolution sourcemaps (character-level)
   * - false: low-resolution sourcemaps (line-level) - default
   * - "boundary": high-resolution only at word boundaries
   */
  hires?: boolean | string;
}
interface BindingTransformHookExtraArgs {
  moduleType: string;
}
interface BindingUpdateOptions {
  overwrite?: boolean;
}
interface BindingVitePluginCustom {
  'vite:import-glob'?: ViteImportGlobMeta;
}
interface ExternalMemoryStatus {
  freed: boolean;
  reason?: string;
}
/** Error emitted from native side, it only contains kind and message, no stack trace. */
interface PreRenderedChunk {
  /** The name of this chunk, which is used in naming patterns. */
  name: string;
  /** Whether this chunk is a static entry point. */
  isEntry: boolean;
  /** Whether this chunk is a dynamic entry point. */
  isDynamicEntry: boolean;
  /** The id of a module that this chunk corresponds to. */
  facadeModuleId?: string;
  /** The list of ids of modules included in this chunk. */
  moduleIds: Array<string>;
  /** Exported variable names from this chunk. */
  exports: Array<string>;
}
interface ViteImportGlobMeta {
  isSubImportsPattern?: boolean;
} //#endregion
//#endregion
//#region node_modules/@rolldown/pluginutils/dist/filter/index.d.mts
//#region src/filter/composable-filters.d.ts
type StringOrRegExp$1 = string | RegExp;
type PluginModuleType = 'js' | 'jsx' | 'ts' | 'tsx' | 'json' | 'text' | 'base64' | 'dataurl' | 'binary' | 'empty' | (string & {});
type FilterExpression = And | Or | Not | Id | ImporterId | ModuleType$1 | Code | Query;
type TopLevelFilterExpression = Include | Exclude$1;
declare class And {
  kind: 'and';
  args: FilterExpression[];
  constructor(...args: FilterExpression[]);
}
declare class Or {
  kind: 'or';
  args: FilterExpression[];
  constructor(...args: FilterExpression[]);
}
declare class Not {
  kind: 'not';
  expr: FilterExpression;
  constructor(expr: FilterExpression);
}
interface IdParams {
  cleanUrl?: boolean;
}
declare class Id {
  kind: 'id';
  pattern: StringOrRegExp$1;
  params: IdParams;
  constructor(pattern: StringOrRegExp$1, params?: IdParams);
}
declare class ImporterId {
  kind: 'importerId';
  pattern: StringOrRegExp$1;
  params: IdParams;
  constructor(pattern: StringOrRegExp$1, params?: IdParams);
}
declare class ModuleType$1 {
  kind: 'moduleType';
  pattern: PluginModuleType;
  constructor(pattern: PluginModuleType);
}
declare class Code {
  kind: 'code';
  pattern: StringOrRegExp$1;
  constructor(expr: StringOrRegExp$1);
}
declare class Query {
  kind: 'query';
  key: string;
  pattern: StringOrRegExp$1 | boolean;
  constructor(key: string, pattern: StringOrRegExp$1 | boolean);
}
declare class Include {
  kind: 'include';
  expr: FilterExpression;
  constructor(expr: FilterExpression);
}
declare class Exclude$1 {
  kind: 'exclude';
  expr: FilterExpression;
  constructor(expr: FilterExpression);
}
//#endregion
//#region node_modules/rolldown/dist/shared/define-config-sxBscJ3M.d.mts
//#region src/types/misc.d.ts
/** @inline */
type SourcemapPathTransformOption = (relativeSourcePath: string, sourcemapPath: string) => string;
/** @inline */
type SourcemapIgnoreListOption = (relativeSourcePath: string, sourcemapPath: string) => boolean; //#endregion
//#region src/types/module-info.d.ts
/** @category Plugin APIs */
interface ModuleInfo extends ModuleOptions {
  /**
  * @hidden Not supported by Rolldown
  */
  ast: any;
  /**
  * The source code of the module.
  *
  * `null` if external or not yet available.
  */
  code: string | null;
  /**
  * The id of the module for convenience
  */
  id: string;
  /**
  * The ids of all modules that statically import this module.
  */
  importers: string[];
  /**
  * The ids of all modules that dynamically import this module.
  */
  dynamicImporters: string[];
  /**
  * The module ids statically imported by this module.
  */
  importedIds: string[];
  /**
  * The module ids dynamically imported by this module.
  */
  dynamicallyImportedIds: string[];
  /**
  * All exported variables
  */
  exports: string[];
  /**
  * Whether this module is a user- or plugin-defined entry point.
  */
  isEntry: boolean;
  /**
  * The detected format of the module, based on both its syntax and module definition
  * metadata (such as `package.json` `type` and file extensions like `.mjs`/`.cjs`/`.mts`/`.cts`).
  * - "esm" for ES modules (has `import`/`export` statements or is defined as ESM by module metadata)
  * - "cjs" for CommonJS modules (uses `module.exports`, `exports`, top-level `return`, or is defined as CommonJS by module metadata)
  * - "unknown" when the format could not be determined from either syntax or module definition metadata
  *
  * @experimental
  */
  inputFormat: "es" | "cjs" | "unknown";
} //#endregion
//#region src/utils/asset-source.d.ts
/** @inline */
type AssetSource = string | Uint8Array; //#endregion
//#region src/types/external-memory-handle.d.ts
declare const symbolForExternalMemoryHandle: "__rolldown_external_memory_handle__";
/**
* Interface for objects that hold external memory that can be explicitly freed.
*/
interface ExternalMemoryHandle {
  /**
  * Frees the external memory held by this object.
  * @param keepDataAlive - If true, evaluates all lazy fields before freeing memory.
  *   This will take time but prevents errors when accessing properties after freeing.
  * @returns Status object with `freed` boolean and optional `reason` string.
  * @internal
  */
  [symbolForExternalMemoryHandle]: (keepDataAlive?: boolean) => ExternalMemoryStatus;
}
/**
* Frees the external memory held by the given handle.
*
* This is useful when you want to manually release memory held by Rust objects
* (like `OutputChunk` or `OutputAsset`) before they are garbage collected.
*
* @param handle - The object with external memory to free
* @param keepDataAlive - If true, evaluates all lazy fields before freeing memory (default: false).
*   This will take time to copy data from Rust to JavaScript, but prevents errors
*   when accessing properties after the memory is freed.
* @returns Status object with `freed` boolean and optional `reason` string.
*   - `{ freed: true }` if memory was successfully freed
*   - `{ freed: false, reason: "..." }` if memory couldn't be freed (e.g., already freed or other references exist)
*
* @example
* ```typescript
* import { freeExternalMemory } from 'rolldown/experimental';
*
* const output = await bundle.generate();
* const chunk = output.output[0];
*
* // Use the chunk...
*
* // Manually free the memory (fast, but accessing properties after will throw)
* const status = freeExternalMemory(chunk); // { freed: true }
* const statusAgain = freeExternalMemory(chunk); // { freed: false, reason: "Memory has already been freed" }
*
* // Keep data alive before freeing (slower, but data remains accessible)
* freeExternalMemory(chunk, true); // Evaluates all lazy fields first
* console.log(chunk.code); // OK - data was copied to JavaScript before freeing
*
* // Without keepDataAlive, accessing chunk properties after freeing will throw an error
* ```
*/
//#endregion
//#region src/types/rolldown-output.d.ts
/**
* The information about an asset in the generated bundle.
*
* @category Plugin APIs
*/
interface OutputAsset extends ExternalMemoryHandle {
  type: "asset";
  /** The file name of this asset. */
  fileName: string;
  /** @deprecated Use {@linkcode originalFileNames} instead. */
  originalFileName: string | null;
  /** The list of the absolute paths to the original file of this asset. */
  originalFileNames: string[];
  /** The content of this asset. */
  source: AssetSource;
  /** @deprecated Use {@linkcode names} instead. */
  name: string | undefined;
  names: string[];
}
/** @category Plugin APIs */
interface SourceMap {
  file: string;
  mappings: string;
  names: string[];
  sources: string[];
  sourcesContent: string[];
  version: number;
  debugId?: string;
  x_google_ignoreList?: number[];
  toString(): string;
  toUrl(): string;
}
/** @category Plugin APIs */
interface RenderedModule {
  /**
  * The rendered code of this module.
  *
  * The unused variables and functions are removed.
  */
  readonly code: string | null;
  /**
  * The length of the rendered code of this module.
  */
  renderedLength: number;
  /**
  * The list of exported names from this module.
  *
  * The names that are not used are not included.
  */
  renderedExports: string[];
}
/**
* The information about the chunk being rendered.
*
* Unlike {@link OutputChunk}, `code` and `map` are not set as the chunk has not been rendered yet.
* All referenced chunk file names in each property that would contain hashes will contain hash placeholders instead.
*
* @category Plugin APIs
*/
interface RenderedChunk extends Omit<BindingRenderedChunk, "modules"> {
  type: "chunk";
  /** Information about the modules included in this chunk. */
  modules: {
    [id: string]: RenderedModule;
  };
  /** The name of this chunk, which is used in naming patterns. */
  name: string;
  /** Whether this chunk is a static entry point. */
  isEntry: boolean;
  /** Whether this chunk is a dynamic entry point. */
  isDynamicEntry: boolean;
  /** The id of a module that this chunk corresponds to. */
  facadeModuleId: string | null;
  /** The list of ids of modules included in this chunk. */
  moduleIds: Array<string>;
  /** Exported variable names from this chunk. */
  exports: Array<string>;
  /** The preliminary file name of this chunk with hash placeholders. */
  fileName: string;
  /** External modules imported statically by this chunk. */
  imports: Array<string>;
  /** External modules imported dynamically by this chunk. */
  dynamicImports: Array<string>;
}
/**
* The information about a chunk in the generated bundle.
*
* @category Plugin APIs
*/
interface OutputChunk extends ExternalMemoryHandle {
  type: "chunk";
  /** The generated code of this chunk. */
  code: string;
  /** The name of this chunk, which is used in naming patterns. */
  name: string;
  /** Whether this chunk is a static entry point. */
  isEntry: boolean;
  /** Exported variable names from this chunk. */
  exports: string[];
  /** The file name of this chunk. */
  fileName: string;
  /** Information about the modules included in this chunk. */
  modules: {
    [id: string]: RenderedModule;
  };
  /** External modules imported statically by this chunk. */
  imports: string[];
  /** External modules imported dynamically by this chunk. */
  dynamicImports: string[];
  /** The id of a module that this chunk corresponds to. */
  facadeModuleId: string | null;
  /** Whether this chunk is a dynamic entry point. */
  isDynamicEntry: boolean;
  moduleIds: string[];
  /** The source map of this chunk if present. */
  map: SourceMap | null;
  sourcemapFileName: string | null;
  /** The preliminary file name of this chunk with hash placeholders. */
  preliminaryFileName: string;
}
/**
* The generated bundle output.
*
* @category Programmatic APIs
*/
//#endregion
//#region src/types/utils.d.ts
type MaybePromise<T> = T | Promise<T>;
/** @inline */
type NullValue<T = void> = T | undefined | null | void;
type PartialNull<T> = { [P in keyof T]: T[P] | null };
type MakeAsync<Function_> = Function_ extends ((this: infer This, ...parameters: infer Arguments) => infer Return) ? (this: This, ...parameters: Arguments) => Return | Promise<Return> : never;
type MaybeArray<T> = T | T[];
/** @inline */
type StringOrRegExp = string | RegExp; //#endregion
//#region src/options/output-options.d.ts
type GeneratedCodePreset = "es5" | "es2015";
interface GeneratedCodeOptions {
  /**
  * Whether to use Symbol.toStringTag for namespace objects.
  * @default false
  */
  symbols?: boolean;
  /**
  * Allows choosing one of the presets listed above while overriding some options.
  *
  * ```js
  * export default {
  *   output: {
  *     generatedCode: {
  *       preset: 'es2015',
  *       symbols: false
  *     }
  *   }
  * };
  * ```
  *
  * @default 'es2015'
  */
  preset?: GeneratedCodePreset;
  /**
  * Whether to add readable names to internal variables for profiling purposes.
  *
  * When enabled, generated code will use descriptive variable names that correspond
  * to the original module names, making it easier to profile and debug the bundled code.
  *
  * @default false
  *
  *
  */
  profilerNames?: boolean;
}
/** @inline */
type ModuleFormat = "es" | "cjs" | "esm" | "module" | "commonjs" | "iife" | "umd";
/** @inline */
type AddonFunction = (chunk: RenderedChunk) => string | Promise<string>;
/** @inline */
type ChunkFileNamesFunction = (chunkInfo: PreRenderedChunk) => string;
/** @inline */
type SanitizeFileNameFunction = (name: string) => string;
/** @category Plugin APIs */
interface PreRenderedAsset {
  type: "asset";
  /** @deprecated Use {@linkcode names} instead. */
  name?: string;
  names: string[];
  /** @deprecated Use {@linkcode originalFileNames} instead. */
  originalFileName?: string;
  /** The list of the absolute paths to the original file of this asset. */
  originalFileNames: string[];
  /** The content of this asset. */
  source: AssetSource;
}
/** @inline */
type AssetFileNamesFunction = (chunkInfo: PreRenderedAsset) => string;
/** @inline */
type PathsFunction$1 = (id: string) => string;
/** @inline */
type ManualChunksFunction = (moduleId: string, meta: {
  getModuleInfo: (moduleId: string) => ModuleInfo | null;
}) => string | NullValue;
/** @inline */
type GlobalsFunction = (name: string) => string;
/** @category Plugin APIs */
type CodeSplittingNameFunction = (moduleId: string, ctx: ChunkingContext) => string | NullValue;
/** @inline */
type CodeSplittingTestFunction = (id: string) => boolean | undefined | void;
type MinifyOptions = Omit<MinifyOptions$1, "module" | "sourcemap">;
interface CommentsOptions {
  /**
  * Comments that contain `@license`, `@preserve` or start with `//!` or `/*!`
  */
  legal?: boolean;
  /**
  * Comments that contain `@__PURE__`, `@__NO_SIDE_EFFECTS__` or `@vite-ignore`
  */
  annotation?: boolean;
  /**
  * JSDoc comments
  */
  jsdoc?: boolean;
}
/** @inline */
interface ChunkingContext {
  getModuleInfo(moduleId: string): ModuleInfo | null;
}
interface OutputOptions {
  /**
  * The directory in which all generated chunks are placed.
  *
  * The {@linkcode file | output.file} option can be used instead if only a single chunk is generated.
  *
  *
  *
  * @default 'dist'
  */
  dir?: string;
  /**
  * The file path for the single generated chunk.
  *
  * The {@linkcode dir | output.dir} option should be used instead if multiple chunks are generated.
  */
  file?: string;
  /**
  * Which exports mode to use.
  *
  *
  *
  * @default 'auto'
  */
  exports?: "auto" | "named" | "default" | "none";
  /**
  * Specify the character set that Rolldown is allowed to use in file hashes.
  *
  * - `'base64'`: Uses url-safe base64 characters (0-9, a-z, A-Z, -, _). This will produce the shortest hashes.
  * - `'base36'`: Uses alphanumeric characters (0-9, a-z)
  * - `'hex'`: Uses hexadecimal characters (0-9, a-f)
  *
  * @default 'base64'
  */
  hashCharacters?: "base64" | "base36" | "hex";
  /**
  * Expected format of generated code.
  *
  * - `'es'`, `'esm'` and `'module'` are the same format, all stand for ES module.
  * - `'cjs'` and `'commonjs'` are the same format, all stand for CommonJS module.
  * - `'iife'` stands for [Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).
  * - `'umd'` stands for [Universal Module Definition](https://github.com/umdjs/umd).
  *
  * @default 'es'
  *
  *
  */
  format?: ModuleFormat;
  /**
  * Whether to generate sourcemaps.
  *
  * - `false`: No sourcemap will be generated.
  * - `true`: A separate sourcemap file will be generated.
  * - `'inline'`: The sourcemap will be appended to the output file as a data URL.
  * - `'hidden'`: A separate sourcemap file will be generated, but the link to the sourcemap (`//# sourceMappingURL` comment) will not be included in the output file.
  *
  * @default false
  */
  sourcemap?: boolean | "inline" | "hidden";
  /**
  * The base URL for the links to the sourcemap file in the output file.
  *
  * By default, relative URLs are generated. If this option is set, an absolute URL with that base URL will be generated. This is useful when deploying source maps to a different location than your code, such as a CDN or separate debugging server.
  */
  sourcemapBaseUrl?: string;
  /**
  * Whether to include [debug IDs](https://github.com/tc39/ecma426/blob/main/proposals/debug-id.md) in the sourcemap.
  *
  * When `true`, a unique debug ID will be emitted in source and sourcemaps which streamlines identifying sourcemaps across different builds.
  *
  * @default false
  */
  sourcemapDebugIds?: boolean;
  /**
  * Control which source files are included in the sourcemap ignore list.
  *
  * Files in the ignore list are excluded from debugger stepping and error stack traces.
  *
  * - `false`: Include no source files in the ignore list
  * - `true`: Include all source files in the ignore list
  * - `string`: Files containing this string in their path will be included in the ignore list
  * - `RegExp`: Files matching this regular expression will be included in the ignore list
  * - `function`: Custom function to determine if a source should be ignored
  *
  * :::tip Performance
  * Using static values (`boolean`, `string`, or `RegExp`) is significantly more performant than functions.
  * Calling JavaScript functions from Rust has extremely high overhead, so prefer static patterns when possible.
  * :::
  *
  * @example
  * ```js
  * // ✅ Preferred: Use RegExp for better performance
  * sourcemapIgnoreList: /node_modules/
  *
  * // ✅ Preferred: Use string pattern for better performance
  * sourcemapIgnoreList: "vendor"
  *
  * // ! Use sparingly: Function calls have high overhead
  * sourcemapIgnoreList: (source, sourcemapPath) => {
  *   return source.includes('node_modules') || source.includes('.min.');
  * }
  * ```
  *
  * @default /node_modules/
  */
  sourcemapIgnoreList?: boolean | SourcemapIgnoreListOption | StringOrRegExp;
  /**
  * A transformation to apply to each path in a sourcemap.
  *
  * @example
  * ```js
  * export default defineConfig({
  *   output: {
  *     sourcemap: true,
  *     sourcemapPathTransform: (source, sourcemapPath) => {
  *       // Remove 'src/' prefix from all source paths
  *       return source.replace(/^src\//, '');
  *     },
  *   },
  * });
  * ```
  */
  sourcemapPathTransform?: SourcemapPathTransformOption;
  /**
  * Whether to exclude the original source code from sourcemaps.
  *
  * When `true`, the `sourcesContent` field is omitted from the generated sourcemap,
  * reducing the sourcemap file size. The sourcemap will still contain source file paths
  * and mappings, so debugging works if the original files are available.
  *
  * @default false
  */
  sourcemapExcludeSources?: boolean;
  /**
  * A string to prepend to the bundle before {@linkcode Plugin.renderChunk | renderChunk} hook.
  *
  * See {@linkcode intro | output.intro}, {@linkcode postBanner | output.postBanner} as well.
  *
  *
  */
  banner?: string | AddonFunction;
  /**
  * A string to append to the bundle before {@linkcode Plugin.renderChunk | renderChunk} hook.
  *
  * See {@linkcode outro | output.outro}, {@linkcode postFooter | output.postFooter} as well.
  *
  *
  */
  footer?: string | AddonFunction;
  /**
  * A string to prepend to the bundle after {@linkcode Plugin.renderChunk | renderChunk} hook and minification.
  *
  * See {@linkcode banner | output.banner}, {@linkcode intro | output.intro} as well.
  *
  *
  */
  postBanner?: string | AddonFunction;
  /**
  * A string to append to the bundle after {@linkcode Plugin.renderChunk | renderChunk} hook and minification.
  *
  * See {@linkcode footer | output.footer}, {@linkcode outro | output.outro} as well.
  *
  *
  */
  postFooter?: string | AddonFunction;
  /**
  * A string to prepend inside any {@link OutputOptions.format | format}-specific wrapper.
  *
  * See {@linkcode banner | output.banner}, {@linkcode postBanner | output.postBanner} as well.
  *
  *
  */
  intro?: string | AddonFunction;
  /**
  * A string to append inside any {@link OutputOptions.format | format}-specific wrapper.
  *
  * See {@linkcode footer | output.footer}, {@linkcode postFooter | output.postFooter} as well.
  *
  *
  */
  outro?: string | AddonFunction;
  /**
  * Whether to extend the global variable defined by the {@linkcode OutputOptions.name | name} option in `umd` or `iife` {@link OutputOptions.format | formats}.
  *
  * When `true`, the global variable will be defined as `global.name = global.name || {}`.
  * When `false`, the global defined by name will be overwritten like `global.name = {}`.
  *
  * @default false
  */
  extend?: boolean;
  /**
  * Whether to add a `__esModule: true` property when generating exports for non-ES {@link OutputOptions.format | formats}.
  *
  * This property signifies that the exported value is the namespace of an ES module and that the default export of this module corresponds to the `.default` property of the exported object.
  *
  * - `true`: Always add the property when using {@link OutputOptions.exports | named exports mode}, which is similar to what other tools do.
  * - `"if-default-prop"`: Only add the property when using {@link OutputOptions.exports | named exports mode} and there also is a default export. The subtle difference is that if there is no default export, consumers of the CommonJS version of your library will get all named exports as default export instead of an error or `undefined`.
  * - `false`: Never add the property even if the default export would become a property `.default`.
  *
  * @default 'if-default-prop'
  *
  *
  */
  esModule?: boolean | "if-default-prop";
  /**
  * The pattern to use for naming custom emitted assets to include in the build output, or a function that is called per asset with {@linkcode PreRenderedAsset} to return such a pattern.
  *
  * Patterns support the following placeholders:
  * - `[extname]`: The file extension of the asset including a leading dot, e.g. `.css`.
  * - `[ext]`: The file extension without a leading dot, e.g. css.
  * - `[hash]`: A hash based on the content of the asset. You can also set a specific hash length via e.g. `[hash:10]`. By default, it will create a base-64 hash. If you need a reduced character set, see {@linkcode hashCharacters | output.hashCharacters}.
  * - `[name]`: The file name of the asset excluding any extension.
  *
  * Forward slashes (`/`) can be used to place files in sub-directories.
  *
  * See also {@linkcode chunkFileNames | output.chunkFileNames}, {@linkcode entryFileNames | output.entryFileNames}.
  *
  * @default 'assets/[name]-[hash][extname]'
  */
  assetFileNames?: string | AssetFileNamesFunction;
  /**
  * The pattern to use for chunks created from entry points, or a function that is called per entry chunk with {@linkcode PreRenderedChunk} to return such a pattern.
  *
  * Patterns support the following placeholders:
  * - `[format]`: The rendering format defined in the output options. The value is any of {@linkcode InternalModuleFormat}.
  * - `[hash]`: A hash based only on the content of the final generated chunk, including transformations in `renderChunk` and any referenced file hashes. You can also set a specific hash length via e.g. `[hash:10]`. By default, it will create a base-64 hash. If you need a reduced character set, see {@linkcode hashCharacters | output.hashCharacters}.
  * - `[name]`: The file name (without extension) of the entry point, unless the object form of input was used to define a different name.
  *
  * Forward slashes (`/`) can be used to place files in sub-directories. This pattern will also be used for every file when setting the {@linkcode preserveModules | output.preserveModules} option.
  *
  * See also {@linkcode assetFileNames | output.assetFileNames}, {@linkcode chunkFileNames | output.chunkFileNames}.
  *
  * @default '[name].js'
  */
  entryFileNames?: string | ChunkFileNamesFunction;
  /**
  * The pattern to use for naming shared chunks created when code-splitting, or a function that is called per chunk with {@linkcode PreRenderedChunk} to return such a pattern.
  *
  * Patterns support the following placeholders:
  * - `[format]`: The rendering format defined in the output options. The value is any of {@linkcode InternalModuleFormat}.
  * - `[hash]`: A hash based only on the content of the final generated chunk, including transformations in `renderChunk` and any referenced file hashes. You can also set a specific hash length via e.g. `[hash:10]`. By default, it will create a base-64 hash. If you need a reduced character set, see {@linkcode hashCharacters | output.hashCharacters}.
  * - `[name]`: The name of the chunk. This can be explicitly set via the {@linkcode codeSplitting | output.codeSplitting} option or when the chunk is created by a plugin via `this.emitFile`. Otherwise, it will be derived from the chunk contents.
  *
  * Forward slashes (`/`) can be used to place files in sub-directories.
  *
  * See also {@linkcode assetFileNames | output.assetFileNames}, {@linkcode entryFileNames | output.entryFileNames}.
  *
  * @default '[name]-[hash].js'
  */
  chunkFileNames?: string | ChunkFileNamesFunction;
  /**
  * Whether to enable chunk name sanitization (removal of non-URL-safe characters like `\0`, `?` and `*`).
  *
  * Set `false` to disable the sanitization. You can also provide a custom sanitization function.
  *
  * @default true
  */
  sanitizeFileName?: boolean | SanitizeFileNameFunction;
  /**
  * Control code minification
  *
  * Rolldown uses Oxc Minifier under the hood. See Oxc's [minification documentation](https://oxc.rs/docs/guide/usage/minifier#features) for more details.
  *
  * - `true`: Enable full minification including code compression and dead code elimination
  * - `false`: Disable minification
  * - `'dce-only'`: Only perform dead code elimination without code compression (default)
  * - `MinifyOptions`: Fine-grained control over minification settings
  *
  * @default 'dce-only'
  */
  minify?: boolean | "dce-only" | MinifyOptions;
  /**
  * Specifies the global variable name that contains the exports of `umd` / `iife` {@link OutputOptions.format | formats}.
  *
  * @example
  * ```js
  * export default defineConfig({
  *   output: {
  *     format: 'iife',
  *     name: 'MyBundle',
  *   }
  * });
  * ```
  * ```js
  * // output
  * var MyBundle = (function () {
  *   // ...
  * })();
  * ```
  *
  *
  */
  name?: string;
  /**
  * Specifies `id: variableName` pairs necessary for {@link InputOptions.external | external} imports in `umd` / `iife` {@link OutputOptions.format | formats}.
  *
  * @example
  * ```js
  * export default defineConfig({
  *   external: ['jquery'],
  *   output: {
  *     format: 'iife',
  *     name: 'MyBundle',
  *     globals: {
  *       jquery: '$',
  *     }
  *   }
  * });
  * ```
  * ```js
  * // input
  * import $ from 'jquery';
  * ```
  * ```js
  * // output
  * var MyBundle = (function ($) {
  *   // ...
  * })($);
  * ```
  */
  globals?: Record<string, string> | GlobalsFunction;
  /**
  * Maps {@link InputOptions.external | external} module IDs to paths.
  *
  * Allows customizing the path used when importing external dependencies.
  * This is particularly useful for loading dependencies from CDNs or custom locations.
  *
  * - Object form: Maps module IDs to their replacement paths
  * - Function form: Takes a module ID and returns its replacement path
  *
  * @example
  * ```js
  * {
  *   paths: {
  *     'd3': 'https://cdn.jsdelivr.net/npm/d3@7'
  *   }
  * }
  * ```
  *
  * @example
  * ```js
  * {
  *   paths: (id) => {
  *     if (id.startsWith('lodash')) {
  *       return `https://cdn.jsdelivr.net/npm/${id}`
  *     }
  *     return id
  *   }
  * }
  * ```
  */
  paths?: Record<string, string> | PathsFunction$1;
  /**
  * Which language features Rolldown can safely use in generated code.
  *
  * This will not transpile any user code but only change the code Rolldown uses in wrappers and helpers.
  */
  generatedCode?: Partial<GeneratedCodeOptions>;
  /**
  * Whether to generate code to support live bindings for {@link InputOptions.external | external} imports.
  *
  * With the default value of `true`, Rolldown will generate code to support live bindings for external imports.
  *
  * When set to `false`, Rolldown will assume that exports from external modules do not change. This will allow Rolldown to generate smaller code. Note that this can cause issues when there are circular dependencies involving an external dependency.
  *
  * @default true
  *
  *
  */
  externalLiveBindings?: boolean;
  /**
  * @deprecated Please use `codeSplitting: false` instead.
  *
  * Whether to inline dynamic imports instead of creating new chunks to create a single bundle.
  *
  * This option can be used only when a single input is provided.
  *
  * @default false
  */
  inlineDynamicImports?: boolean;
  /**
  * Whether to keep external dynamic imports as `import(...)` expressions in CommonJS output.
  *
  * If set to `false`, external dynamic imports will be rewritten to use `require(...)` calls.
  * This may be necessary to support environments that do not support dynamic `import()` in CommonJS modules like old Node.js versions.
  *
  * @default true
  */
  dynamicImportInCjs?: boolean;
  /**
  * Allows you to do manual chunking. Provided for Rollup compatibility.
  *
  * You could use this option for migration purpose. Under the hood,
  *
  * ```js
  * {
  *   manualChunks: (moduleId, meta) => {
  *     if (moduleId.includes('node_modules')) {
  *       return 'vendor';
  *     }
  *     return null;
  *   }
  * }
  * ```
  *
  * will be transformed to
  *
  * ```js
  * {
  *   codeSplitting: {
  *     groups: [
  *       {
  *         name(moduleId) {
  *           if (moduleId.includes('node_modules')) {
  *             return 'vendor';
  *           }
  *           return null;
  *         },
  *       },
  *     ],
  *   }
  * }
  *
  * ```
  *
  * Note that unlike Rollup, object form is not supported.
  *
  * @deprecated
  * Please use {@linkcode codeSplitting | output.codeSplitting} instead.
  *
  * :::warning
  * If `manualChunks` and `codeSplitting` are both specified, `manualChunks` option will be ignored.
  * :::
  */
  manualChunks?: ManualChunksFunction;
  /**
  * Controls how code splitting is performed.
  *
  * - `true`: Default behavior, automatic code splitting. **(default)**
  * - `false`: Inline all dynamic imports into a single bundle (equivalent to deprecated `inlineDynamicImports: true`).
  * - `object`: Advanced manual code splitting configuration.
  *
  * For deeper understanding, please refer to the in-depth [documentation](https://rolldown.rs/in-depth/manual-code-splitting).
  *
  *
  *
  * @example
  * **Basic vendor chunk**
  * ```js
  * export default defineConfig({
  *   output: {
  *     codeSplitting: {
  *       minSize: 20000,
  *       groups: [
  *         {
  *           name: 'vendor',
  *           test: /node_modules/,
  *         },
  *       ],
  *     },
  *   },
  * });
  * ```
  *
  *
  * @default true
  */
  codeSplitting?: boolean | CodeSplittingOptions;
  /**
  * @deprecated Please use {@linkcode codeSplitting | output.codeSplitting} instead.
  *
  * Allows you to do manual chunking.
  *
  * :::warning
  * If `advancedChunks` and `codeSplitting` are both specified, `advancedChunks` option will be ignored.
  * :::
  */
  advancedChunks?: {
    includeDependenciesRecursively?: boolean;
    minSize?: number;
    maxSize?: number;
    maxModuleSize?: number;
    minModuleSize?: number;
    minShareCount?: number;
    groups?: CodeSplittingGroup[];
  };
  /**
  * Controls how legal comments are preserved in the output.
  *
  * - `none`: no legal comments
  * - `inline`: preserve legal comments that contain `@license`, `@preserve` or starts with `//!` `/*!`
  *
  * @deprecated Use `comments.legal` instead. When both `legalComments` and `comments.legal` are set, `comments.legal` takes priority.
  */
  legalComments?: "none" | "inline";
  /**
  * Control which comments are preserved in the output.
  *
  * - `true`: Preserve legal, annotation, and JSDoc comments (default)
  * - `false`: Strip all comments
  * - Object: Granular control over comment categories
  *
  * Note: Regular line and block comments without these markers
  * are always removed regardless of this option.
  *
  * When both `legalComments` and `comments.legal` are set, `comments.legal` takes priority.
  *
  * @default true
  */
  comments?: boolean | CommentsOptions;
  /**
  * The list of plugins to use only for this output.
  *
  * @see {@linkcode InputOptions.plugins | plugins}
  */
  plugins?: RolldownOutputPluginOption;
  /**
  * Whether to add a polyfill for `require()` function in non-CommonJS formats.
  *
  * This option is useful when you want to inject your own `require` implementation.
  *
  * @default true
  */
  polyfillRequire?: boolean;
  /**
  * This option is not implemented yet.
  * @hidden
  */
  hoistTransitiveImports?: false;
  /**
  * Whether to use preserve modules mode.
  *
  *
  *
  * @default false
  */
  preserveModules?: boolean;
  /**
  * Specifies the directory name for "virtual" files that might be emitted by plugins when using {@link OutputOptions.preserveModules | preserve modules mode}.
  *
  * @default '_virtual'
  */
  virtualDirname?: string;
  /**
  * A directory path to input modules that should be stripped away from {@linkcode dir | output.dir} when using {@link OutputOptions.preserveModules | preserve modules mode}.
  *
  *
  */
  preserveModulesRoot?: string;
  /**
  * Whether to convert top-level `let` and `const` declarations into `var` declarations.
  *
  * Enabling this option can improve runtime performance of the generated code in
  * certain environments by avoiding Temporal Dead Zone (TDZ) checks. Only declarations
  * in the module's top-level scope are rewritten — declarations inside nested scopes
  * (functions, blocks, etc.) are left as-is.
  *
  * Note:
  * - Top-level `class X {}` declarations are always emitted as `var X = class {}` so
  *   rolldown can hoist them alongside other top-level bindings; this transform is
  *   independent of `topLevelVar`.
  * - Top-level `function` declarations are never rewritten.
  *
  * @default false
  *
  *
  */
  topLevelVar?: boolean;
  /**
  * Whether to minify internal exports as single letter variables to allow for better minification.
  *
  * @default
  * `true` for format `es` or if `output.minify` is `true` or object, `false` otherwise
  *
  *
  */
  minifyInternalExports?: boolean;
  /**
  * Clean output directory ({@linkcode dir | output.dir}) before emitting output.
  *
  * @default false
  *
  *
  */
  cleanDir?: boolean;
  /**
  * Keep `name` property of functions and classes after bundling.
  *
  * When enabled, the bundler will preserve the original `name` property value of functions and
  * classes in the output. This is useful for debugging and some frameworks that rely on it for
  * registration and binding purposes.
  *
  *
  *
  * @default false
  */
  keepNames?: boolean;
  /**
  * Lets modules be executed in the order they are declared.
  *
  * This is done by injecting runtime helpers to ensure that modules are executed in the order they are imported. External modules won't be affected.
  *
  * > [!WARNING]
  * > Enabling this option may negatively increase bundle size. It is recommended to use this option only when absolutely necessary.
  * @default false
  */
  strictExecutionOrder?: boolean;
  /**
  * Whether to always output `"use strict"` directive in non-ES module outputs.
  *
  * - `true` - Always emit `"use strict"` at the top of the output (not applicable for ESM format since ESM is always strict).
  * - `false` - Never emit `"use strict"` in the output.
  * - `'auto'` - Respect the `"use strict"` directives from the source code.
  *
  * See [In-depth directive guide](https://rolldown.rs/in-depth/directives) for more details.
  *
  * @default 'auto'
  */
  strict?: boolean | "auto";
}
/**
* Built-in module tag names computed by rolldown.
*
* - `'$initial'` — the module is statically imported by at least one user-defined entry point, or is part of its static dependency chain.
*/
type BuiltinModuleTag = "$initial";
type CodeSplittingGroup = {
  /**
  * Name of the group. It will be also used as the name of the chunk and replace the `[name]` placeholder in the {@linkcode OutputOptions.chunkFileNames | output.chunkFileNames} option.
  *
  * For example,
  *
  * ```js
  * import { defineConfig } from 'rolldown';
  *
  * export default defineConfig({
  *   output: {
  *     codeSplitting: {
  *       groups: [
  *         {
  *           name: 'libs',
  *           test: /node_modules/,
  *         },
  *       ],
  *     },
  *   },
  * });
  * ```
  * will create a chunk named `libs-[hash].js` in the end.
  *
  * It's ok to have the same name for different groups. Rolldown will deduplicate the chunk names if necessary.
  *
  * #### Dynamic `name()`
  *
  * If `name` is a function, it will be called with the module id as the argument. The function should return a string or `null`. If it returns `null`, the module will be ignored by this group.
  *
  * Notice, each returned new name will be treated as a separate group.
  *
  * For example,
  *
  * ```js
  * import { defineConfig } from 'rolldown';
  *
  * export default defineConfig({
  *   output: {
  *     codeSplitting: {
  *       groups: [
  *         {
  *           name: (moduleId) => moduleId.includes('node_modules') ? 'libs' : 'app',
  *           minSize: 100 * 1024,
  *         },
  *       ],
  *     },
  *   },
  * });
  * ```
  *
  * :::warning
  * Constraints like `minSize`, `maxSize`, etc. are applied separately for different names returned by the function.
  * :::
  */
  name: string | CodeSplittingNameFunction;
  /**
  * Controls which modules are captured in this group.
  *
  * - If `test` is a string, the module whose id contains the string will be captured.
  * - If `test` is a regular expression, the module whose id matches the regular expression will be captured.
  * - If `test` is a function, modules for which `test(id)` returns `true` will be captured.
  * - If `test` is empty, any module will be considered as matched.
  *
  * :::warning
  * When using regular expression, it's recommended to use `[\\/]` to match the path separator instead of `/` to avoid potential issues on Windows.
  * - ✅ Recommended: `/node_modules[\\/]react/`
  * - ❌ Not recommended: `/node_modules/react/`
  * :::
  */
  test?: StringOrRegExp | CodeSplittingTestFunction;
  /**
  * Priority of the group. Group with higher priority will be chosen first to match modules and create chunks. When converting the group to a chunk, modules of that group will be removed from other groups.
  *
  * If two groups have the same priority, the group whose index is smaller will be chosen.
  *
  * @example
  * ```js
  * import { defineConfig } from 'rolldown';
  *
  * export default defineConfig({
  *   output: {
  *     codeSplitting: {
  *       groups: [
  *         {
  *           name: 'react',
  *           test: /node_modules[\\/]react/,
  *           priority: 2,
  *         },
  *         {
  *           name: 'other-libs',
  *           test: /node_modules/,
  *           priority: 1,
  *         },
  *       ],
  *     },
  *   },
  * });
  * ```
  *
  * @default 0
  */
  priority?: number;
  /**
  * Minimum size in bytes of the desired chunk. If the accumulated size of the captured modules by this group is smaller than this value, it will be ignored. Modules in this group will fall back to the `automatic chunking` if they are not captured by any other group.
  *
  * @default 0
  */
  minSize?: number;
  /**
  * Controls if a module should be captured based on how many entry chunks reference it.
  *
  * @default 1
  */
  minShareCount?: number;
  /**
  * If the accumulated size in bytes of the captured modules by this group is larger than this value, this group will be split into multiple groups that each has size close to this value.
  *
  * @default Infinity
  */
  maxSize?: number;
  /**
  * Controls whether a module can only be captured if its size in bytes is smaller than or equal to this value.
  *
  * @default Infinity
  */
  maxModuleSize?: number;
  /**
  * Controls whether a module can only be captured if its size in bytes is larger than or equal to this value.
  *
  * @default 0
  */
  minModuleSize?: number;
  /**
  * When `false` (default), all matching modules are merged into a single chunk.
  * Every entry that uses any of these modules must load the entire chunk — even
  * modules it doesn't need.
  *
  * When `true`, matching modules are grouped by which entries actually import them.
  * Modules shared by the same set of entries go into the same chunk, while modules
  * shared by a different set go into a separate chunk. This way, each entry only
  * loads the code it actually uses.
  *
  * Example: entries A, B, C all match a `"vendor"` group.
  * - `moduleX` is used by A, B, C
  * - `moduleY` is used by A, B only
  *
  * With `entriesAware: false` → one `vendor.js` chunk with both modules; C loads `moduleY` unnecessarily.
  * With `entriesAware: true`  → `vendor.js` (moduleX, loaded by all) + `vendor2.js` (moduleY, loaded by A and B only).
  *
  * @default false
  */
  entriesAware?: boolean;
  /**
  * Size threshold in bytes for merging small `entriesAware` subgroups into the
  * closest neighboring subgroup.
  *
  * This option only works when {@linkcode CodeSplittingGroup.entriesAware | entriesAware}
  * is `true`. Set to `0` to disable subgroup merging.
  *
  * @default 0
  */
  entriesAwareMergeThreshold?: number;
  /**
  * Whether to include captured modules' dependencies.
  *
  * Enabling this option reduces the chance of generating circular chunks.
  *
  * If you want to disable this behavior, it's recommended to both set
  * - {@linkcode InputOptions.preserveEntrySignatures | preserveEntrySignatures}: `false | 'allow-extension'`
  * - {@linkcode OutputOptions.strictExecutionOrder | strictExecutionOrder}: `true`
  *
  * to avoid generating invalid chunks.
  *
  * @default true
  */
  includeDependenciesRecursively?: boolean;
  /**
  * Filter modules by tags. Only modules that have **all** specified tags
  * are captured by this group. Combines with `test` and other filters —
  * a module must match all criteria.
  *
  * Built-in tags: `'$initial'` (module is statically imported by a user-defined entry or part of its dependency chain).
  *
  * @see {@link https://rolldown.rs/in-depth/manual-code-splitting | Manual Code Splitting}
  *
  * @example
  * ```js
  * { name: 'initial-deps', tags: ['$initial'], maxSize: 1048576 }
  * ```
  */
  tags?: BuiltinModuleTag[];
};
/**
* Alias for {@linkcode CodeSplittingGroup}. Use this type for the `codeSplitting.groups` option.
*
* @deprecated Please use {@linkcode CodeSplittingGroup} instead.
*/
/**
* Configuration options for advanced code splitting.
*/
type CodeSplittingOptions = {
  /**
  * Global fallback of {@linkcode CodeSplittingGroup.includeDependenciesRecursively | group.includeDependenciesRecursively}, if it's not specified in the group.
  */
  includeDependenciesRecursively?: boolean;
  /**
  * Global fallback of {@linkcode CodeSplittingGroup.minSize | group.minSize}, if it's not specified in the group.
  */
  minSize?: number;
  /**
  * Global fallback of {@linkcode CodeSplittingGroup.maxSize | group.maxSize}, if it's not specified in the group.
  */
  maxSize?: number;
  /**
  * Global fallback of {@linkcode CodeSplittingGroup.maxModuleSize | group.maxModuleSize}, if it's not specified in the group.
  */
  maxModuleSize?: number;
  /**
  * Global fallback of {@linkcode CodeSplittingGroup.minModuleSize | group.minModuleSize}, if it's not specified in the group.
  */
  minModuleSize?: number;
  /**
  * Global fallback of {@linkcode CodeSplittingGroup.minShareCount | group.minShareCount}, if it's not specified in the group.
  */
  minShareCount?: number;
  /**
  * Groups to be used for code splitting.
  */
  groups?: CodeSplittingGroup[];
};
/**
* Alias for {@linkcode CodeSplittingOptions}. Use this type for the `codeSplitting` option.
*
* @deprecated Please use {@linkcode CodeSplittingOptions} instead.
*/
//#endregion
//#region src/binding-magic-string.d.ts
interface RolldownMagicString extends BindingMagicString {
  readonly isRolldownMagicString: true;
  /** Accepts a string or RegExp pattern. RegExp supports `$&`, `$$`, and `$N` substitutions. */
  replace(from: string | RegExp, to: string): this;
  /** Accepts a string or RegExp pattern. RegExp must have the global (`g`) flag. */
  replaceAll(from: string | RegExp, to: string): this;
}
type RolldownMagicStringConstructor = Omit<typeof BindingMagicString, "prototype"> & {
  new (...args: ConstructorParameters<typeof BindingMagicString>): RolldownMagicString;
  prototype: RolldownMagicString;
};
/**
* A native MagicString implementation powered by Rust.
*
* @experimental
*/
declare const RolldownMagicString: RolldownMagicStringConstructor; //#endregion
//#region src/log/log-handler.d.ts
type LoggingFunction = (log: RolldownLog | string | (() => RolldownLog | string)) => void;
type LoggingFunctionWithPosition = (log: RolldownLog | string | (() => RolldownLog | string), pos?: number | {
  column: number;
  line: number;
}) => void;
//#endregion
//#region src/options/generated/checks-options.d.ts
interface ChecksOptions {
  /**
  * Whether to emit warnings when detecting circular dependency.
  *
  * Circular dependencies lead to a bigger bundle size and sometimes cause execution order issues and are better to avoid.
  *
  *
  * @default false
  * */
  circularDependency?: boolean;
  /**
  * Whether to emit warnings when detecting uses of direct `eval`s.
  *
  * See [Avoiding Direct `eval` in Troubleshooting page](https://rolldown.rs/guide/troubleshooting#avoiding-direct-eval) for more details.
  * @default true
  * */
  eval?: boolean;
  /**
  * Whether to emit warnings when the `output.globals` option is missing when needed.
  *
  * See [`output.globals`](https://rolldown.rs/reference/OutputOptions.globals).
  * @default true
  * */
  missingGlobalName?: boolean;
  /**
  * Whether to emit warnings when the `output.name` option is missing when needed.
  *
  * See [`output.name`](https://rolldown.rs/reference/OutputOptions.name).
  * @default true
  * */
  missingNameOptionForIifeExport?: boolean;
  /**
  * Whether to emit warnings when a `#__PURE__` / `@__PURE__` annotation has no effect due to its position.
  *
  * Annotations placed where they cannot annotate a call expression (e.g. before a non-call expression,
  * before a statement declaration, or between an identifier and `=` in a variable declarator) are
  * ignored by the parser. Matches Rollup's `INVALID_ANNOTATION` log code.
  * @default true
  * */
  invalidAnnotation?: boolean;
  /**
  * Whether to emit warnings when the way to export values is ambiguous.
  *
  * See [`output.exports`](https://rolldown.rs/reference/OutputOptions.exports).
  * @default true
  * */
  mixedExports?: boolean;
  /**
  * Whether to emit warnings when an entrypoint cannot be resolved.
  * @default true
  * */
  unresolvedEntry?: boolean;
  /**
  * Whether to emit warnings when an import cannot be resolved.
  * @default true
  * */
  unresolvedImport?: boolean;
  /**
  * Whether to emit warnings when files generated have the same name with different contents.
  *
  *
  * @default true
  * */
  filenameConflict?: boolean;
  /**
  * Whether to emit warnings when a CommonJS variable is used in an ES module.
  *
  * CommonJS variables like `module` and `exports` are treated as global variables in ES modules and may not work as expected.
  *
  *
  * @default true
  * */
  commonJsVariableInEsm?: boolean;
  /**
  * Whether to emit warnings when an imported variable is not exported.
  *
  * If the code is importing a variable that is not exported by the imported module, the value will always be `undefined`. This might be a mistake in the code.
  *
  *
  * @default true
  * */
  importIsUndefined?: boolean;
  /**
  * Whether to emit warnings when `import.meta` is not supported with the output format and is replaced with an empty object (`{}`).
  *
  * See [`import.meta` in Non-ESM Output Formats page](https://rolldown.rs/in-depth/non-esm-output-formats#import-meta) for more details.
  * @default true
  * */
  emptyImportMeta?: boolean;
  /**
  * Whether to emit warnings when detecting tolerated transform.
  * @default true
  * */
  toleratedTransform?: boolean;
  /**
  * Whether to emit warnings when a namespace is called as a function.
  *
  * A module namespace object is an object and not a function. Calling it as a function will cause a runtime error.
  *
  *
  * @default true
  * */
  cannotCallNamespace?: boolean;
  /**
  * Whether to emit warnings when a config value is overridden by another config value with a higher priority.
  *
  *
  * @default true
  * */
  configurationFieldConflict?: boolean;
  /**
  * Whether to emit warnings when a plugin that is covered by a built-in feature is used.
  *
  * Using built-in features is generally more performant than using plugins.
  * @default true
  * */
  preferBuiltinFeature?: boolean;
  /**
  * Whether to emit warnings when Rolldown could not clean the output directory.
  *
  * See [`output.cleanDir`](https://rolldown.rs/reference/OutputOptions.cleanDir).
  * @default true
  * */
  couldNotCleanDirectory?: boolean;
  /**
  * Whether to emit warnings when plugins take significant time during the build process.
  *
  *
  * @default true
  * */
  pluginTimings?: boolean;
  /**
  * Whether to emit warnings when both the code and postBanner contain shebang
  *
  * Having multiple shebangs in a file is a syntax error.
  * @default true
  * */
  duplicateShebang?: boolean;
  /**
  * Whether to emit warnings when a tsconfig option or combination of options is not supported.
  * @default true
  * */
  unsupportedTsconfigOption?: boolean;
  /**
  * Whether to emit warnings when a module is dynamically imported but also statically imported, making the dynamic import ineffective for code splitting.
  * @default true
  * */
  ineffectiveDynamicImport?: boolean;
  /**
  * Whether to emit info logs when a barrel module has a very large number of re-exports (more than 5000).
  *
  * Such modules can significantly slow down module resolution. Consider using
  * [`@rolldown/plugin-transform-imports`](https://github.com/rolldown/plugins/tree/main/packages/transform-imports)
  * to rewrite barrel imports at the source level so the barrel file is never loaded.
  *
  * See [Large barrel modules](https://rolldown.rs/in-depth/lazy-barrel-optimization#large-barrel-modules) for more details.
  * @default true
  * */
  largeBarrelModules?: boolean;
  /**
  * Whether to emit warnings when a plugin transforms code without generating a sourcemap.
  * @default true
  * */
  sourcemapBroken?: boolean;
} //#endregion
//#region src/options/transform-options.d.ts
interface TransformOptions extends Omit<TransformOptions$1, "sourceType" | "lang" | "cwd" | "sourcemap" | "define" | "inject" | "jsx"> {
  /**
  * Replace global variables or [property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) with the provided values.
  *
  * See Oxc's [`define` option](https://oxc.rs/docs/guide/usage/transformer/global-variable-replacement.html#define) for more details.
  *
  * @example
  * **Replace the global variable `IS_PROD` with `true`**
  * ```js [rolldown.config.js]
  * export default defineConfig({
  *   transform: { define: { IS_PROD: 'true' } }
  * })
  * ```
  * Result:
  * ```js
  * // Input
  * if (IS_PROD) {
  *   console.log('Production mode')
  * }
  *
  * // After bundling
  * if (true) {
  *   console.log('Production mode')
  * }
  * ```
  *
  * **Replace the property accessor `process.env.NODE_ENV` with `'production'`**
  * ```js [rolldown.config.js]
  * export default defineConfig({
  *   transform: { define: { 'process.env.NODE_ENV': "'production'" } }
  * })
  * ```
  * Result:
  * ```js
  * // Input
  * if (process.env.NODE_ENV === 'production') {
  *   console.log('Production mode')
  * }
  *
  * // After bundling
  * if ('production' === 'production') {
  *   console.log('Production mode')
  * }
  * ```
  */
  define?: Record<string, string>;
  /**
  * Inject import statements on demand.
  *
  * The API is aligned with `@rollup/plugin-inject`.
  *
  * See Oxc's [`inject` option](https://oxc.rs/docs/guide/usage/transformer/global-variable-replacement.html#inject) for more details.
  *
  * #### Supported patterns
  * ```js
  * {
  *   // import { Promise } from 'es6-promise'
  *   Promise: ['es6-promise', 'Promise'],
  *
  *   // import { Promise as P } from 'es6-promise'
  *   P: ['es6-promise', 'Promise'],
  *
  *   // import $ from 'jquery'
  *   $: 'jquery',
  *
  *   // import * as fs from 'node:fs'
  *   fs: ['node:fs', '*'],
  *
  *   // Inject shims for property access pattern
  *   'Object.assign': path.resolve( 'src/helpers/object-assign.js' ),
  * }
  * ```
  */
  inject?: Record<string, string | [string, string]>;
  /**
  * Remove labeled statements with these label names.
  *
  * Labeled statements are JavaScript statements prefixed with a label identifier.
  * This option allows you to strip specific labeled statements from the output,
  * which is useful for removing debug-only code in production builds.
  *
  * @example
  * ```js rolldown.config.js
  * export default defineConfig({
  *   transform: { dropLabels: ['DEBUG', 'DEV'] }
  * })
  * ```
  * Result:
  * ```js
  * // Input
  * DEBUG: console.log('Debug info');
  * DEV: {
  *   console.log('Development mode');
  * }
  * console.log('Production code');
  *
  * // After bundling
  * console.log('Production code');
  * ```
  */
  dropLabels?: string[];
  /**
  * Controls how JSX syntax is transformed.
  *
  * - If set to `false`, an error will be thrown if JSX syntax is encountered.
  * - If set to `'react'`, JSX syntax will be transformed to classic runtime React code.
  * - If set to `'react-jsx'`, JSX syntax will be transformed to automatic runtime React code.
  * - If set to `'preserve'`, JSX syntax will be preserved as-is.
  */
  jsx?: false | "react" | "react-jsx" | "preserve" | JsxOptions;
} //#endregion
//#region src/options/normalized-input-options.d.ts
/** @category Plugin APIs */
interface NormalizedInputOptions {
  /** @see {@linkcode InputOptions.input | input} */
  input: string[] | Record<string, string>;
  /** @see {@linkcode InputOptions.cwd | cwd} */
  cwd: string;
  /** @see {@linkcode InputOptions.platform | platform} */
  platform: InputOptions["platform"];
  /** @see {@linkcode InputOptions.shimMissingExports | shimMissingExports} */
  shimMissingExports: boolean;
  /** @see {@linkcode InputOptions.context | context} */
  context: string;
  /** @see {@linkcode InputOptions.plugins | plugins} */
  plugins: RolldownPlugin[];
} //#endregion
//#region src/options/normalized-output-options.d.ts
type PathsFunction = (id: string) => string;
/**
* A normalized version of {@linkcode ModuleFormat}.
* @category Plugin APIs
*/
type InternalModuleFormat = "es" | "cjs" | "iife" | "umd";
/** @category Plugin APIs */
interface NormalizedOutputOptions {
  /** @see {@linkcode OutputOptions.name | name} */
  name: string | undefined;
  /** @see {@linkcode OutputOptions.file | file} */
  file: string | undefined;
  /** @see {@linkcode OutputOptions.dir | dir} */
  dir: string | undefined;
  /** @see {@linkcode OutputOptions.entryFileNames | entryFileNames} */
  entryFileNames: string | ChunkFileNamesFunction;
  /** @see {@linkcode OutputOptions.chunkFileNames | chunkFileNames} */
  chunkFileNames: string | ChunkFileNamesFunction;
  /** @see {@linkcode OutputOptions.assetFileNames | assetFileNames} */
  assetFileNames: string | AssetFileNamesFunction;
  /** @see {@linkcode OutputOptions.format | format} */
  format: InternalModuleFormat;
  /** @see {@linkcode OutputOptions.exports | exports} */
  exports: NonNullable<OutputOptions["exports"]>;
  /** @see {@linkcode OutputOptions.sourcemap | sourcemap} */
  sourcemap: boolean | "inline" | "hidden";
  /** @see {@linkcode OutputOptions.sourcemapBaseUrl | sourcemapBaseUrl} */
  sourcemapBaseUrl: string | undefined;
  /** @see {@linkcode OutputOptions.codeSplitting | codeSplitting} */
  codeSplitting: boolean;
  /** @deprecated Use `codeSplitting` instead. */
  inlineDynamicImports: boolean;
  /** @see {@linkcode OutputOptions.dynamicImportInCjs | dynamicImportInCjs} */
  dynamicImportInCjs: boolean;
  /** @see {@linkcode OutputOptions.externalLiveBindings | externalLiveBindings} */
  externalLiveBindings: boolean;
  /** @see {@linkcode OutputOptions.banner | banner} */
  banner: AddonFunction;
  /** @see {@linkcode OutputOptions.footer | footer} */
  footer: AddonFunction;
  /** @see {@linkcode OutputOptions.postBanner | postBanner} */
  postBanner: AddonFunction;
  /** @see {@linkcode OutputOptions.postFooter | postFooter} */
  postFooter: AddonFunction;
  /** @see {@linkcode OutputOptions.intro | intro} */
  intro: AddonFunction;
  /** @see {@linkcode OutputOptions.outro | outro} */
  outro: AddonFunction;
  /** @see {@linkcode OutputOptions.esModule | esModule} */
  esModule: boolean | "if-default-prop";
  /** @see {@linkcode OutputOptions.extend | extend} */
  extend: boolean;
  /** @see {@linkcode OutputOptions.globals | globals} */
  globals: Record<string, string> | GlobalsFunction;
  /** @see {@linkcode OutputOptions.paths | paths} */
  paths: Record<string, string> | PathsFunction | undefined;
  /** @see {@linkcode OutputOptions.hashCharacters | hashCharacters} */
  hashCharacters: "base64" | "base36" | "hex";
  /** @see {@linkcode OutputOptions.sourcemapDebugIds | sourcemapDebugIds} */
  sourcemapDebugIds: boolean;
  /** @see {@linkcode OutputOptions.sourcemapExcludeSources | sourcemapExcludeSources} */
  sourcemapExcludeSources: boolean;
  /** @see {@linkcode OutputOptions.sourcemapIgnoreList | sourcemapIgnoreList} */
  sourcemapIgnoreList: boolean | SourcemapIgnoreListOption | StringOrRegExp | undefined;
  /** @see {@linkcode OutputOptions.sourcemapPathTransform | sourcemapPathTransform} */
  sourcemapPathTransform: SourcemapPathTransformOption | undefined;
  /** @see {@linkcode OutputOptions.minify | minify} */
  minify: false | MinifyOptions | "dce-only";
  /**
  * @deprecated Use `comments.legal` instead.
  * @see {@linkcode OutputOptions.legalComments | legalComments}
  */
  legalComments: "none" | "inline";
  /** @see {@linkcode OutputOptions.comments | comments} */
  comments: Required<CommentsOptions>;
  /** @see {@linkcode OutputOptions.polyfillRequire | polyfillRequire} */
  polyfillRequire: boolean;
  /** @see {@linkcode OutputOptions.plugins | plugins} */
  plugins: RolldownPlugin[];
  /** @see {@linkcode OutputOptions.preserveModules | preserveModules} */
  preserveModules: boolean;
  /** @see {@linkcode OutputOptions.virtualDirname | virtualDirname} */
  virtualDirname: string;
  /** @see {@linkcode OutputOptions.preserveModulesRoot | preserveModulesRoot} */
  preserveModulesRoot?: string;
  /** @see {@linkcode OutputOptions.topLevelVar | topLevelVar} */
  topLevelVar?: boolean;
  /** @see {@linkcode OutputOptions.minifyInternalExports | minifyInternalExports} */
  minifyInternalExports?: boolean;
} //#endregion
//#region src/plugin/fs.d.ts
/** @category Plugin APIs */
interface RolldownFsModule {
  appendFile(path: string, data: string | Uint8Array, options?: {
    encoding?: BufferEncoding | null;
    mode?: string | number;
    flag?: string | number;
  }): Promise<void>;
  copyFile(source: string, destination: string, mode?: string | number): Promise<void>;
  mkdir(path: string, options?: {
    recursive?: boolean;
    mode?: string | number;
  }): Promise<void>;
  mkdtemp(prefix: string): Promise<string>;
  readdir(path: string, options?: {
    withFileTypes?: false;
  }): Promise<string[]>;
  readdir(path: string, options?: {
    withFileTypes: true;
  }): Promise<RolldownDirectoryEntry[]>;
  readFile(path: string, options?: {
    encoding?: null;
    flag?: string | number;
    signal?: AbortSignal;
  }): Promise<Uint8Array>;
  readFile(path: string, options?: {
    encoding: BufferEncoding;
    flag?: string | number;
    signal?: AbortSignal;
  }): Promise<string>;
  realpath(path: string): Promise<string>;
  rename(oldPath: string, newPath: string): Promise<void>;
  rmdir(path: string, options?: {
    recursive?: boolean;
  }): Promise<void>;
  stat(path: string): Promise<RolldownFileStats>;
  lstat(path: string): Promise<RolldownFileStats>;
  unlink(path: string): Promise<void>;
  writeFile(path: string, data: string | Uint8Array, options?: {
    encoding?: BufferEncoding | null;
    mode?: string | number;
    flag?: string | number;
  }): Promise<void>;
}
/** @category Plugin APIs */
type BufferEncoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "base64" | "base64url" | "latin1" | "binary" | "hex";
/** @category Plugin APIs */
interface RolldownDirectoryEntry {
  isFile(): boolean;
  isDirectory(): boolean;
  isSymbolicLink(): boolean;
  name: string;
}
/** @category Plugin APIs */
interface RolldownFileStats {
  isFile(): boolean;
  isDirectory(): boolean;
  isSymbolicLink(): boolean;
  size: number;
  mtime: Date;
  ctime: Date;
  atime: Date;
  birthtime: Date;
} //#endregion
//#region src/plugin/hook-filter.d.ts
/** @category Plugin APIs */
type GeneralHookFilter<Value = StringOrRegExp> = MaybeArray<Value> | {
  include?: MaybeArray<Value>;
  exclude?: MaybeArray<Value>;
};
interface FormalModuleTypeFilter {
  include?: ModuleType[];
}
/** @category Plugin APIs */
type ModuleTypeFilter = ModuleType[] | FormalModuleTypeFilter;
/**
* A filter to be used to do a pre-test to determine whether the hook should be called.
*
* See [Plugin Hook Filters page](https://rolldown.rs/apis/plugin-api/hook-filters) for more details.
*
* @category Plugin APIs
*/
interface HookFilter {
  /**
  * A filter based on the module `id`.
  *
  * If the value is a string, it is treated as a glob pattern.
  * The string type is not available for {@linkcode Plugin.resolveId | resolveId} hook.
  *
  * @example
  * Include all `id`s that contain `node_modules` in the path.
  * ```js
  * { id: '**'+'/node_modules/**' }
  * ```
  * @example
  * Include all `id`s that contain `node_modules` or `src` in the path.
  * ```js
  * { id: ['**'+'/node_modules/**', '**'+'/src/**'] }
  * ```
  * @example
  * Include all `id`s that start with `http`
  * ```js
  * { id: /^http/ }
  * ```
  * @example
  * Exclude all `id`s that contain `node_modules` in the path.
  * ```js
  * { id: { exclude: '**'+'/node_modules/**' } }
  * ```
  * @example
  * Formal pattern to define includes and excludes.
  * ```js
  * { id : {
  *   include: ['**'+'/foo/**', /bar/],
  *   exclude: ['**'+'/baz/**', /qux/]
  * }}
  * ```
  */
  id?: GeneralHookFilter;
  /**
  * A filter based on the module's `moduleType`.
  *
  * Only available for {@linkcode Plugin.transform | transform} hook.
  */
  moduleType?: ModuleTypeFilter;
  /**
  * A filter based on the module's code.
  *
  * Only available for {@linkcode Plugin.transform | transform} hook.
  */
  code?: GeneralHookFilter;
} //#endregion
//#region src/plugin/minimal-plugin-context.d.ts
/** @category Plugin APIs */
interface PluginContextMeta {
  /**
  * A property for Rollup compatibility. A dummy value is set by Rolldown.
  * @example `'4.23.0'`
  */
  rollupVersion: string;
  /**
  * The currently running version of Rolldown.
  * @example `'1.0.0'`
  */
  rolldownVersion: string;
  /**
  * Whether Rolldown was started via {@linkcode watch | rolldown.watch()} or
  * from the command line with `--watch`.
  */
  watchMode: boolean;
}
/** @category Plugin APIs */
interface MinimalPluginContext {
  /**
  * Similar to {@linkcode warn | this.warn}, except that it will also abort
  * the bundling process with an error.
  *
  * If an Error instance is passed, it will be used as-is, otherwise a new Error
  * instance will be created with the given error message and all additional
  * provided properties.
  *
  * In all hooks except the {@linkcode Plugin.onLog | onLog} hook, the error will
  * be augmented with {@linkcode RolldownLog.code | code: "PLUGIN_ERROR"} and
  * {@linkcode RolldownLog.plugin | plugin: plugin.name} properties.
  * If a `code` property already exists and the code does not start with `PLUGIN_`,
  * it will be renamed to {@linkcode RolldownLog.pluginCode | pluginCode}.
  *
  * @group Logging Methods
  */
  error: (e: RolldownError | string) => never;
  /**
  * Generate a `"info"` level log.
  *
  * {@linkcode RolldownLog.code | code} will be set to `"PLUGIN_LOG"` by Rolldown.
  * As these logs are displayed by default, use them for information that is not a warning
  * but makes sense to display to all users on every build.
  *
  *
  *
  * @inlineType LoggingFunction
  * @group Logging Methods
  */
  info: LoggingFunction;
  /**
  * Generate a `"warn"` level log.
  *
  * Just like internally generated warnings, these logs will be first passed to and
  * filtered by plugin {@linkcode Plugin.onLog | onLog} hooks before they are forwarded
  * to custom {@linkcode InputOptions.onLog | onLog} or
  * {@linkcode InputOptions.onwarn | onwarn} handlers or printed to the console.
  *
  * We encourage you to use objects with a {@linkcode RolldownLog.pluginCode | pluginCode}
  * property as that will allow users to easily filter for those logs in an `onLog` handler.
  *
  *
  *
  * @inlineType LoggingFunction
  * @group Logging Methods
  */
  warn: LoggingFunction;
  /**
  * Generate a `"debug"` level log.
  *
  * {@linkcode RolldownLog.code | code} will be set to `"PLUGIN_LOG"` by Rolldown.
  * Make sure to add a distinctive {@linkcode RolldownLog.pluginCode | pluginCode} to
  * those logs for easy filtering.
  *
  *
  *
  * @inlineType LoggingFunction
  * @group Logging Methods
  */
  debug: LoggingFunction;
  /** An object containing potentially useful metadata. */
  meta: PluginContextMeta;
} //#endregion
//#region src/plugin/parallel-plugin.d.ts
type ParallelPlugin = {
  _parallel: {
    fileUrl: string;
    options: unknown;
  };
};
/** @internal */
//#endregion
//#region src/plugin/plugin-context.d.ts
/**
* Either a {@linkcode name} or a {@linkcode fileName} can be supplied.
* If a {@linkcode fileName} is provided, it will be used unmodified as the name
* of the generated file, throwing an error if this causes a conflict.
* Otherwise, if a {@linkcode name} is supplied, this will be used as substitution
* for `[name]` in the corresponding
* {@linkcode OutputOptions.assetFileNames | output.assetFileNames} pattern, possibly
* adding a unique number to the end of the file name to avoid conflicts.
* If neither a {@linkcode name} nor {@linkcode fileName} is supplied, a default name will be used.
*
* @category Plugin APIs
*/
interface EmittedAsset {
  type: "asset";
  name?: string;
  fileName?: string;
  /**
  * An absolute path to the original file if this asset corresponds to a file on disk.
  *
  * This property will be passed on to subsequent plugin hooks that receive a
  * {@linkcode PreRenderedAsset} or an {@linkcode OutputAsset} like
  * {@linkcode Plugin.generateBundle | generateBundle}.
  * In watch mode, Rolldown will also automatically watch this file for changes and
  * trigger a rebuild if it changes. Therefore, it is not necessary to call
  * {@linkcode PluginContext.addWatchFile | this.addWatchFile} for this file.
  */
  originalFileName?: string;
  source: AssetSource;
}
/**
* Either a {@linkcode name} or a {@linkcode fileName} can be supplied.
* If a {@linkcode fileName} is provided, it will be used unmodified as the name
* of the generated file, throwing an error if this causes a conflict.
* Otherwise, if a {@linkcode name} is supplied, this will be used as substitution
* for `[name]` in the corresponding
* {@linkcode OutputOptions.chunkFileNames | output.chunkFileNames} pattern, possibly
* adding a unique number to the end of the file name to avoid conflicts.
* If neither a {@linkcode name} nor {@linkcode fileName} is supplied, a default name will be used.
*
* @category Plugin APIs
*/
interface EmittedChunk {
  type: "chunk";
  name?: string;
  fileName?: string;
  /**
  * When provided, this will override
  * {@linkcode InputOptions.preserveEntrySignatures | preserveEntrySignatures} for this particular
  * chunk.
  */
  preserveSignature?: "strict" | "allow-extension" | "exports-only" | false;
  /**
  * The module id of the entry point of the chunk.
  *
  * It will be passed through build hooks just like regular entry points,
  * starting with {@linkcode Plugin.resolveId | resolveId}.
  */
  id: string;
  /**
  * The value to be passed to {@linkcode Plugin.resolveId | resolveId}'s {@linkcode importer} parameter when resolving the entry point.
  * This is important to properly resolve relative paths. If it is not provided,
  * paths will be resolved relative to the current working directory.
  */
  importer?: string;
}
/** @category Plugin APIs */
interface EmittedPrebuiltChunk {
  type: "prebuilt-chunk";
  fileName: string;
  /**
  * A semantic name for the chunk. If not provided, `fileName` will be used.
  */
  name?: string;
  /**
  * The code of this chunk.
  */
  code: string;
  /**
  * The list of exported variable names from this chunk.
  *
  * This should be provided if the chunk exports any variables.
  */
  exports?: string[];
  /**
  * The corresponding source map for this chunk.
  */
  map?: SourceMap;
  sourcemapFileName?: string;
  /**
  * The module id of the facade module for this chunk, if any.
  */
  facadeModuleId?: string;
  /**
  * Whether this chunk corresponds to an entry point.
  */
  isEntry?: boolean;
  /**
  * Whether this chunk corresponds to a dynamic entry point.
  */
  isDynamicEntry?: boolean;
}
/** @inline @category Plugin APIs */
type EmittedFile = EmittedAsset | EmittedChunk | EmittedPrebuiltChunk;
/** @category Plugin APIs */
interface PluginContextResolveOptions {
  /**
  * The value for {@linkcode ResolveIdExtraOptions.kind | kind} passed to
  * {@linkcode Plugin.resolveId | resolveId} hooks.
  */
  kind?: BindingPluginContextResolveOptions["importKind"];
  /**
  * The value for {@linkcode ResolveIdExtraOptions.isEntry | isEntry} passed to
  * {@linkcode Plugin.resolveId | resolveId} hooks.
  *
  * @default `false` if there's an importer, `true` otherwise.
  */
  isEntry?: boolean;
  /**
  * Whether the {@linkcode Plugin.resolveId | resolveId} hook of the plugin from
  * which {@linkcode PluginContext.resolve | this.resolve} is called will be skipped
  * when resolving.
  *
  *
  *
  * @default true
  */
  skipSelf?: boolean;
  /**
  * Plugin-specific options.
  *
  * See [Custom resolver options section](https://rolldown.rs/apis/plugin-api/inter-plugin-communication#custom-resolver-options) for more details.
  */
  custom?: CustomPluginOptions;
}
/** @inline */
type GetModuleInfo = (moduleId: string) => ModuleInfo | null;
/** @category Plugin APIs */
interface PluginContext extends MinimalPluginContext {
  /**
  * Provides abstract access to the file system.
  */
  fs: RolldownFsModule;
  /**
  * Emits a new file that is included in the build output.
  * You can emit chunks, prebuilt chunks or assets.
  *
  *
  *
  * @returns A `referenceId` for the emitted file that can be used in various places to reference the emitted file.
  */
  emitFile(file: EmittedFile): string;
  /**
  * Get the file name of a chunk or asset that has been emitted via
  * {@linkcode emitFile | this.emitFile}.
  *
  * @returns The file name of the emitted file. Relative to {@linkcode OutputOptions.dir | output.dir}.
  */
  getFileName(referenceId: string): string;
  /**
  * Get all module ids in the current module graph.
  *
  * @returns
  * An iterator of module ids. It can be iterated via
  * ```js
  * for (const moduleId of this.getModuleIds()) {
  *   // ...
  * }
  * ```
  * or converted into an array via `Array.from(this.getModuleIds())`.
  */
  getModuleIds(): IterableIterator<string>;
  /**
  * Get additional information about the module in question.
  *
  *
  *
  * @returns Module information for that module. `null` if the module could not be found.
  * @group Methods
  */
  getModuleInfo: GetModuleInfo;
  /**
  * Adds additional files to be monitored in watch mode so that changes to these files will trigger rebuilds.
  *
  *
  */
  addWatchFile(id: string): void;
  /**
  * Loads and parses the module corresponding to the given id, attaching additional
  * meta information to the module if provided. This will trigger the same
  * {@linkcode Plugin.load | load}, {@linkcode Plugin.transform | transform} and
  * {@linkcode Plugin.moduleParsed | moduleParsed} hooks as if the module was imported
  * by another module.
  *
  *
  */
  load(options: {
    id: string;
    resolveDependencies?: boolean;
  } & Partial<PartialNull<ModuleOptions>>): Promise<ModuleInfo>;
  /**
  * Use Rolldown's internal parser to parse code to an [ESTree-compatible](https://github.com/estree/estree) AST.
  */
  parse(input: string, options?: ParserOptions | null): Program;
  /**
  * Resolve imports to module ids (i.e. file names) using the same plugins that Rolldown uses,
  * and determine if an import should be external.
  *
  * When calling this function from a {@linkcode Plugin.resolveId | resolveId} hook, you should
  * always check if it makes sense for you to pass along the
  * {@link PluginContextResolveOptions | options}.
  *
  * @returns
  * If `Promise<null>` is returned, the import could not be resolved by Rolldown or any plugin
  * but was not explicitly marked as external by the user.
  * If an absolute external id is returned that should remain absolute in the output either
  * via the
  * {@linkcode InputOptions.makeAbsoluteExternalsRelative | makeAbsoluteExternalsRelative}
  * option or by explicit plugin choice in the {@linkcode Plugin.resolveId | resolveId} hook,
  * `external` will be `"absolute"` instead of `true`.
  */
  resolve(source: string, importer?: string, options?: PluginContextResolveOptions): Promise<ResolvedId | null>;
} //#endregion
//#region src/plugin/transform-plugin-context.d.ts
/** @category Plugin APIs */
interface TransformPluginContext extends PluginContext {
  /**
  * Same as {@linkcode PluginContext.debug}, but a `position` param can be supplied.
  *
  * @inlineType LoggingFunctionWithPosition
  * @group Logging Methods
  */
  debug: LoggingFunctionWithPosition;
  /**
  * Same as {@linkcode PluginContext.info}, but a `position` param can be supplied.
  *
  * @inlineType LoggingFunctionWithPosition
  * @group Logging Methods
  */
  info: LoggingFunctionWithPosition;
  /**
  * Same as {@linkcode PluginContext.warn}, but a `position` param can be supplied.
  *
  * @inlineType LoggingFunctionWithPosition
  * @group Logging Methods
  */
  warn: LoggingFunctionWithPosition;
  /**
  * Same as {@linkcode PluginContext.error}, but the `id` of the current module will
  * also be added and a `position` param can be supplied.
  */
  error(e: RolldownError | string, pos?: number | {
    column: number;
    line: number;
  }): never;
  /**
  * Get the combined source maps of all previous plugins.
  */
  getCombinedSourcemap(): SourceMap;
} //#endregion
//#region src/types/module-side-effects.d.ts
interface ModuleSideEffectsRule {
  test?: RegExp;
  external?: boolean;
  sideEffects: boolean;
}
type ModuleSideEffectsOption = boolean | readonly string[] | ModuleSideEffectsRule[] | ((id: string, external: boolean) => boolean | undefined) | "no-external";
/**
* When passing an object, you can fine-tune the tree-shaking behavior.
*/
type TreeshakingOptions = {
  /**
  * **Values:**
  *
  * - **`true`**: All modules are assumed to have side effects and will be included in the bundle even if none of their exports are used.
  * - **`false`**: No modules have side effects. This enables aggressive tree-shaking, removing any modules whose exports are not used.
  * - **`string[]`**: Array of module IDs that have side effects. Only modules in this list will be preserved if unused; all others can be tree-shaken when their exports are unused.
  * - **`'no-external'`**: Assumes no external modules have side effects while preserving the default behavior for local modules.
  * - **`ModuleSideEffectsRule[]`**: Array of rules with `test`, `external`, and `sideEffects` properties for fine-grained control.
  * - **`function`**: Function that receives `(id, external)` and returns whether the module has side effects.
  *
  * **Important:** Setting this to `false` or using an array/string assumes that your modules and their dependencies have no side effects other than their exports. Only use this if you're certain that removing unused modules won't break your application.
  *
  * > [!NOTE]
  * > **Performance: Prefer `ModuleSideEffectsRule[]` over functions**
  * >
  * > When possible, use rule-based configuration instead of functions. Rules are processed entirely in Rust, while JavaScript functions require runtime calls between Rust and JavaScript, which can hurt CPU utilization during builds.
  * >
  * > **Functions should be a last resort**: Only use the function signature when your logic cannot be expressed with patterns or simple string matching.
  * >
  * > **Rule advantages**: `ModuleSideEffectsRule[]` provides better performance by avoiding Rust-JavaScript runtime calls, clearer intent, and easier maintenance.
  *
  * @example
  * ```js
  * // Assume no modules have side effects (aggressive tree-shaking)
  * treeshake: {
  *   moduleSideEffects: false
  * }
  *
  * // Only specific modules have side effects (string array)
  * treeshake: {
  *   moduleSideEffects: [
  *     'lodash',
  *     'react-dom',
  *   ]
  * }
  *
  * // Use rules for pattern matching and granular control
  * treeshake: {
  *   moduleSideEffects: [
  *     { test: /^node:/, sideEffects: true },
  *     { test: /\.css$/, sideEffects: true },
  *     { test: /some-package/, sideEffects: false, external: false },
  *   ]
  * }
  *
  * // Custom function to determine side effects
  * treeshake: {
  *   moduleSideEffects: (id, external) => {
  *     if (external) return false; // external modules have no side effects
  *     return id.includes('/side-effects/') || id.endsWith('.css');
  *   }
  * }
  *
  * // Assume no external modules have side effects
  * treeshake: {
  *   moduleSideEffects: 'no-external',
  * }
  * ```
  *
  * **Common Use Cases:**
  * - **CSS files**: `{ test: /\.css$/, sideEffects: true }` - preserve CSS imports
  * - **Polyfills**: Add specific polyfill modules to the array
  * - **Plugins**: Modules that register themselves globally on import
  * - **Library development**: Set to `false` for libraries where unused exports should be removed
  *
  * @default true
  */
  moduleSideEffects?: ModuleSideEffectsOption;
  /**
  * Whether to respect `/*@__PURE__*\/` annotations and other tree-shaking hints in the code.
  *
  * See [related Oxc documentation](https://oxc.rs/docs/guide/usage/minifier/dead-code-elimination#pure-annotations) for more details.
  *
  * @default true
  */
  annotations?: boolean;
  /**
  * Array of function names that should be considered pure (no side effects) even if they can't be automatically detected as pure.
  *
  * See [related Oxc documentation](https://oxc.rs/docs/guide/usage/minifier/dead-code-elimination#define-pure-functions) for more details.
  *
  * @example
  * ```js
  * treeshake: {
  *   manualPureFunctions: ['console.log', 'debug.trace']
  * }
  * ```
  * @default []
  */
  manualPureFunctions?: readonly string[];
  /**
  * Whether to assume that accessing unknown global properties might have side effects.
  *
  * See [related Oxc documentation](https://oxc.rs/docs/guide/usage/minifier/dead-code-elimination#ignoring-global-variable-access-side-effects) for more details.
  *
  * @default true
  */
  unknownGlobalSideEffects?: boolean;
  /**
  * Whether to assume that invalid import statements might have side effects.
  *
  * See [related Oxc documentation](https://oxc.rs/docs/guide/usage/minifier/dead-code-elimination#ignoring-invalid-import-statement-side-effects) for more details.
  *
  * @default false
  */
  invalidImportSideEffects?: boolean;
  /**
  * Whether to enable tree-shaking for CommonJS modules. When `true`, unused exports from CommonJS modules can be eliminated from the bundle, similar to ES modules. When disabled, CommonJS modules will always be included in their entirety.
  *
  * This option allows rolldown to analyze `exports.property` assignments in CommonJS modules and remove unused exports while preserving the module's side effects.
  *
  * @example
  * ```js
  * // source.js (CommonJS)
  * exports.used = 'This will be kept';
  * exports.unused = 'This will be tree-shaken away';
  *
  * // main.js
  * import { used } from './source.js';
  * // With commonjs: true, only the 'used' export is included in the bundle
  * // With commonjs: false, both exports are included
  * ```
  * @default true
  */
  commonjs?: boolean;
  /**
  * Controls whether reading properties from objects is considered to have side effects.
  *
  * Set to `false` for more aggressive tree-shaking behavior.
  *
  * See [related Oxc documentation](https://oxc.rs/docs/guide/usage/minifier/dead-code-elimination#ignoring-property-read-side-effects) for more details.
  *
  * @default 'always'
  */
  propertyReadSideEffects?: false | "always";
  /**
  * Controls whether writing properties to objects is considered to have side effects.
  *
  * Set to `false` for more aggressive behavior.
  *
  * @default 'always'
  */
  propertyWriteSideEffects?: false | "always";
}; //#endregion
//#region src/types/output-bundle.d.ts
/** @category Plugin APIs */
interface OutputBundle {
  [fileName: string]: OutputAsset | OutputChunk;
} //#endregion
//#region src/types/sourcemap.d.ts
/** @category Plugin APIs */
interface ExistingRawSourceMap {
  file?: string | null;
  mappings: string;
  names?: string[];
  sources?: (string | null)[];
  sourcesContent?: (string | null | undefined)[];
  sourceRoot?: string;
  version?: number;
  x_google_ignoreList?: number[];
}
/** @inline @category Plugin APIs */
type SourceMapInput = ExistingRawSourceMap | string | null; //#endregion
//#region src/utils/error.d.ts
/**
* The error type that is thrown by Rolldown for the whole build.
*/
//#endregion
//#region src/builtin-plugin/utils.d.ts
declare class BuiltinPlugin {
  name: BindingBuiltinPluginName;
  _options?: unknown;
  /** Vite-specific option to control plugin ordering */
  enforce?: "pre" | "post";
  constructor(name: BindingBuiltinPluginName, _options?: unknown);
} //#endregion
//#region src/constants/plugin.d.ts
declare const ENUMERATED_INPUT_PLUGIN_HOOK_NAMES: readonly ["options", "buildStart", "resolveId", "load", "transform", "moduleParsed", "buildEnd", "onLog", "resolveDynamicImport", "closeBundle", "closeWatcher", "watchChange"];
declare const ENUMERATED_OUTPUT_PLUGIN_HOOK_NAMES: readonly ["augmentChunkHash", "outputOptions", "renderChunk", "renderStart", "renderError", "writeBundle", "generateBundle"];
declare const ENUMERATED_PLUGIN_HOOK_NAMES: [...typeof ENUMERATED_INPUT_PLUGIN_HOOK_NAMES, ...typeof ENUMERATED_OUTPUT_PLUGIN_HOOK_NAMES, "footer", "banner", "intro", "outro"];
/**
* Names of all defined hooks. It's like
* ```ts
* type DefinedHookNames = {
*   options: 'options',
*   buildStart: 'buildStart',
*   ...
* }
* ```
*/
type DefinedHookNames = { readonly [K in (typeof ENUMERATED_PLUGIN_HOOK_NAMES)[number]]: K };
/**
* Names of all defined hooks. It's like
* ```js
* const DEFINED_HOOK_NAMES ={
*   options: 'options',
*   buildStart: 'buildStart',
*   ...
* }
* ```
*/
declare const DEFINED_HOOK_NAMES: DefinedHookNames; //#endregion
//#region src/plugin/with-filter.d.ts
//#endregion
//#region src/plugin/index.d.ts
type ModuleSideEffects = boolean | "no-treeshake" | null;
/** @category Plugin APIs */
type ModuleType = "js" | "jsx" | "ts" | "tsx" | "json" | "text" | "base64" | "dataurl" | "binary" | "empty" | (string & {});
/** @category Plugin APIs */
/** @category Plugin APIs */
interface CustomPluginOptions {
  [plugin: string]: any;
}
/** @category Plugin APIs */
interface ModuleOptions {
  moduleSideEffects: ModuleSideEffects;
  /** See [Custom module meta-data section](https://rolldown.rs/apis/plugin-api/inter-plugin-communication#custom-module-meta-data) for more details. */
  meta: CustomPluginOptions;
  invalidate?: boolean;
  packageJsonPath?: string;
}
/** @category Plugin APIs */
interface ResolvedId extends ModuleOptions {
  external: boolean | "absolute";
  id: string;
}
interface SpecifiedModuleOptions {
  /**
  * Indicates whether the module has side effects to Rolldown.
  *
  * - If `false` is set and no other module imports anything from this module, then this module will not be included in the bundle even if the module would have side effects.
  * - If `true` is set, Rolldown will use its default algorithm to include all statements in the module that has side effects.
  * - If `"no-treeshake"` is set, treeshaking will be disabled for this module, and this module will be included in one of the chunks even if it is empty.
  *
  * The precedence of this option is as follows (highest to lowest):
  * 1. {@linkcode Plugin.transform | transform} hook's returned `moduleSideEffects` option
  * 2. {@linkcode Plugin.load | load} hook's returned `moduleSideEffects` option
  * 3. {@linkcode Plugin.resolveId | resolveId} hook's returned `moduleSideEffects` option
  * 4. {@linkcode TreeshakingOptions.moduleSideEffects | treeshake.moduleSideEffects} option
  * 5. `sideEffects` field in the `package.json` file
  * 6. `true` (default)
  */
  moduleSideEffects?: ModuleSideEffects | null;
}
/** @category Plugin APIs */
interface PartialResolvedId extends SpecifiedModuleOptions, Partial<PartialNull<ModuleOptions>> {
  /**
  * Whether this id should be treated as external.
  *
  * Relative external ids, i.e. ids starting with `./` or `../`, will not be internally
  * converted to an absolute id and converted back to a relative id in the output,
  * but are instead included in the output unchanged.
  * If you want relative ids to be re-normalized and deduplicated instead, return
  * an absolute file system location as id and choose `external: "relative"`.
  *
  * - If `true`, absolute ids will be converted to relative ids based on the user's choice for the {@linkcode InputOptions.makeAbsoluteExternalsRelative | makeAbsoluteExternalsRelative} option.
  * - If `'relative'`, absolute ids will always be converted to relative ids.
  * - If `'absolute'`, absolute ids will always be kept as absolute ids.
  */
  external?: boolean | "absolute" | "relative";
  id: string;
}
/** @category Plugin APIs */
interface SourceDescription extends SpecifiedModuleOptions, Partial<PartialNull<ModuleOptions>> {
  code: string;
  /**
  * The source map for the transformation.
  *
  * If the transformation does not move code, you can preserve existing sourcemaps by setting this to `null`.
  *
  * See [Source Code Transformations section](https://rolldown.rs/apis/plugin-api/transformations#source-code-transformations) for more details.
  */
  map?: SourceMapInput;
  moduleType?: ModuleType;
}
/** @inline */
interface ResolveIdExtraOptions {
  /**
  * Plugin-specific options.
  *
  * See [Custom resolver options section](https://rolldown.rs/apis/plugin-api/inter-plugin-communication#custom-resolver-options) for more details.
  */
  custom?: CustomPluginOptions;
  /**
  * Whether this is resolution for an entry point.
  *
  *
  */
  isEntry: boolean;
  /**
  * The kind of import being resolved.
  *
  * - `import-statement`: `import { foo } from './lib.js';`
  * - `dynamic-import`: `import('./lib.js')`
  * - `require-call`: `require('./lib.js')`
  * - `import-rule`: `@import 'bg-color.css'` (experimental)
  * - `url-token`: `url('./icon.png')` (experimental)
  * - `new-url`: `new URL('./worker.js', import.meta.url)` (experimental)
  * - `hot-accept`: `import.meta.hot.accept('./lib.js', () => {})` (experimental)
  */
  kind: BindingHookResolveIdExtraArgs["kind"];
}
/** @inline @category Plugin APIs */
type ResolveIdResult = string | NullValue | false | PartialResolvedId;
/** @inline @category Plugin APIs */
type LoadResult = NullValue | string | SourceDescription;
/** @inline @category Plugin APIs */
type TransformResult = NullValue | string | (Omit<SourceDescription, "code"> & {
  code?: string | RolldownMagicString;
});
type RenderedChunkMeta = {
  /**
  * Contains information about all chunks that are being rendered.
  * This is useful to explore the entire chunk graph.
  */
  chunks: Record<string, RenderedChunk>;
  /**
  * A lazily-created MagicString instance for the chunk's code.
  * Use this to perform string transformations with automatic source map support.
  * This is only available when `experimental.nativeMagicString` is enabled.
  */
  magicString?: RolldownMagicString;
};
/** @category Plugin APIs */
interface FunctionPluginHooks {
  /**
  * A function that receives and filters logs and warnings generated by Rolldown and
  * plugins before they are passed to the {@linkcode InputOptions.onLog | onLog} option
  * or printed to the console.
  *
  * If `false` is returned, the log will be filtered out.
  * Otherwise, the log will be handed to the `onLog` hook of the next plugin,
  * the {@linkcode InputOptions.onLog | onLog} option, or printed to the console.
  * Plugins can also change the log level of a log or turn a log into an error by passing
  * the `log` object to {@linkcode MinimalPluginContext.error | this.error},
  * {@linkcode MinimalPluginContext.warn | this.warn},
  * {@linkcode MinimalPluginContext.info | this.info} or
  * {@linkcode MinimalPluginContext.debug | this.debug} and returning `false`.
  *
  *
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.onLog]: (this: MinimalPluginContext, level: LogLevel, log: RolldownLog) => NullValue | boolean;
  /**
  * Replaces or manipulates the options object passed to {@linkcode rolldown | rolldown()}.
  *
  * Returning `null` does not replace anything.
  *
  * If you just need to read the options, it is recommended to use
  * the {@linkcode buildStart} hook as that hook has access to the options
  * after the transformations from all `options` hooks have been taken into account.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.options]: (this: MinimalPluginContext, options: InputOptions) => NullValue | InputOptions;
  /**
  * Replaces or manipulates the output options object passed to
  * {@linkcode RolldownBuild.generate | bundle.generate()} or
  * {@linkcode RolldownBuild.write | bundle.write()}.
  *
  * Returning null does not replace anything.
  *
  * If you just need to read the output options, it is recommended to use
  * the {@linkcode renderStart} hook as this hook has access to the output options
  * after the transformations from all `outputOptions` hooks have been taken into account.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.outputOptions]: (this: MinimalPluginContext, options: OutputOptions) => NullValue | OutputOptions;
  /**
  * Called on each {@linkcode rolldown | rolldown()} build.
  *
  * This is the recommended hook to use when you need access to the options passed to {@linkcode rolldown | rolldown()} as it takes the transformations by all options hooks into account and also contains the right default values for unset options.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.buildStart]: (this: PluginContext, options: NormalizedInputOptions) => void;
  /**
  * Defines a custom resolver.
  *
  * A resolver can be useful for e.g. locating third-party dependencies.
  *
  * Returning `null` defers to other `resolveId` hooks and eventually the default resolution behavior.
  * Returning `false` signals that `source` should be treated as an external module and not included in the bundle. If this happens for a relative import, the id will be renormalized the same way as when the {@linkcode InputOptions.external} option is used.
  * If you return an object, then it is possible to resolve an import to a different id while excluding it from the bundle at the same time.
  *
  * Note that while `resolveId` will be called for each import of a module and can therefore
  * resolve to the same `id` many times, values for `external`, `meta` or `moduleSideEffects`
  * can only be set once before the module is loaded. The reason is that after this call,
  * Rolldown will continue with the {@linkcode load} and {@linkcode transform} hooks for that
  * module that may override these values and should take precedence if they do so.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.resolveId]: (this: PluginContext, source: string, importer: string | undefined, extraOptions: ResolveIdExtraOptions) => ResolveIdResult;
  /**
  * Defines a custom resolver for dynamic imports.
  *
  * @deprecated
  * This hook exists only for Rollup compatibility. Please use {@linkcode resolveId} instead.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.resolveDynamicImport]: (this: PluginContext, source: string, importer: string | undefined) => ResolveIdResult;
  /**
  * Defines a custom loader.
  *
  * Returning `null` defers to other `load` hooks or the built-in loading mechanism.
  *
  * You can use {@linkcode PluginContext.getModuleInfo | this.getModuleInfo()} to find out the previous values of `meta`, `moduleSideEffects` inside this hook.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.load]: (this: PluginContext, id: string) => MaybePromise<LoadResult>;
  /**
  * Can be used to transform individual modules.
  *
  * Note that it's possible to return only properties and no code transformations.
  *
  * You can use {@linkcode PluginContext.getModuleInfo | this.getModuleInfo()} to find out the previous values of `meta`, `moduleSideEffects` inside this hook.
  *
  *
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.transform]: (this: TransformPluginContext, code: string, id: string, meta: BindingTransformHookExtraArgs & {
    moduleType: ModuleType;
    magicString?: RolldownMagicString;
    ast?: Program;
  }) => TransformResult;
  /**
  * This hook is called each time a module has been fully parsed by Rolldown.
  *
  * This hook will wait until all imports are resolved so that the information in
  * {@linkcode ModuleInfo.importedIds | moduleInfo.importedIds},
  * {@linkcode ModuleInfo.dynamicallyImportedIds | moduleInfo.dynamicallyImportedIds}
  * are complete and accurate. Note however that information about importing modules
  * may be incomplete as additional importers could be discovered later.
  * If you need this information, use the {@linkcode buildEnd} hook.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.moduleParsed]: (this: PluginContext, moduleInfo: ModuleInfo) => void;
  /**
  * Called when Rolldown has finished bundling, but before Output Generation Hooks.
  * If an error occurred during the build, it is passed on to this hook.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.buildEnd]: (this: PluginContext, err?: Error) => void;
  /**
  * Called initially each time {@linkcode RolldownBuild.generate | bundle.generate()} or
  * {@linkcode RolldownBuild.write | bundle.write()} is called.
  *
  * To get notified when generation has completed, use the {@linkcode generateBundle} and
  * {@linkcode renderError} hooks.
  *
  * This is the recommended hook to use when you need access to the output options passed to
  * {@linkcode RolldownBuild.generate | bundle.generate()} or
  * {@linkcode RolldownBuild.write | bundle.write()} as it takes the transformations by all outputOptions hooks into account and also contains the right default values for unset options.
  *
  * It also receives the input options passed to {@linkcode rolldown | rolldown()} so that
  * plugins that can be used as output plugins, i.e. plugins that only use generate phase hooks,
  * can get access to them.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.renderStart]: (this: PluginContext, outputOptions: NormalizedOutputOptions, inputOptions: NormalizedInputOptions) => void;
  /**
  * Can be used to transform individual chunks. Called for each Rolldown output chunk file.
  *
  * Returning null will apply no transformations. If you change code in this hook and want to support source maps, you need to return a map describing your changes, see [Source Code Transformations section](https://rolldown.rs/apis/plugin-api/transformations#source-code-transformations).
  *
  * `chunk` is mutable and changes applied in this hook will propagate to other plugins and
  * to the generated bundle.
  * That means if you add or remove imports or exports in this hook, you should update
  * {@linkcode RenderedChunk.imports | imports}, {@linkcode RenderedChunk.importedBindings | importedBindings} and/or {@linkcode RenderedChunk.exports | exports} accordingly.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.renderChunk]: (this: PluginContext, code: string, chunk: RenderedChunk, outputOptions: NormalizedOutputOptions, meta: RenderedChunkMeta) => NullValue | string | RolldownMagicString | {
    code: string | RolldownMagicString;
    map?: SourceMapInput;
  };
  /**
  * Can be used to augment the hash of individual chunks. Called for each Rolldown output chunk.
  *
  * Returning a falsy value will not modify the hash.
  * Truthy values will be used as an additional source for hash calculation.
  *
  *
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.augmentChunkHash]: (this: PluginContext, chunk: RenderedChunk) => string | void;
  /**
  * Called when Rolldown encounters an error during
  * {@linkcode RolldownBuild.generate | bundle.generate()} or
  * {@linkcode RolldownBuild.write | bundle.write()}.
  *
  * To get notified when generation completes successfully, use the
  * {@linkcode generateBundle} hook.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.renderError]: (this: PluginContext, error: Error) => void;
  /**
  * Called at the end of {@linkcode RolldownBuild.generate | bundle.generate()} or
  * immediately before the files are written in
  * {@linkcode RolldownBuild.write | bundle.write()}.
  *
  * To modify the files after they have been written, use the {@linkcode writeBundle} hook.
  *
  *
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.generateBundle]: (this: PluginContext, outputOptions: NormalizedOutputOptions, bundle: OutputBundle, isWrite: boolean) => void;
  /**
  * Called only at the end of {@linkcode RolldownBuild.write | bundle.write()} once
  * all files have been written.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.writeBundle]: (this: PluginContext, outputOptions: NormalizedOutputOptions, bundle: OutputBundle) => void;
  /**
  * Can be used to clean up any external service that may be running.
  *
  * Rolldown's CLI will make sure this hook is called after each run, but it is the responsibility
  * of users of the JavaScript API to manually call
  * {@linkcode RolldownBuild.close | bundle.close()} once they are done generating bundles.
  * For that reason, any plugin relying on this feature should carefully mention this in
  * its documentation.
  *
  * If a plugin wants to retain resources across builds in watch mode, they can check for
  * {@linkcode PluginContextMeta.watchMode | this.meta.watchMode} in this hook and perform
  * the necessary cleanup for watch mode in closeWatcher.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.closeBundle]: (this: PluginContext, error?: Error) => void;
  /**
  * Notifies a plugin whenever Rolldown has detected a change to a monitored file in watch mode.
  *
  * If a build is currently running, this hook is called once the build finished.
  * It will be called once for every file that changed.
  *
  * This hook cannot be used by output plugins.
  *
  * If you need to be notified immediately when a file changed, you can use the {@linkcode WatcherOptions.onInvalidate | watch.onInvalidate} option.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.watchChange]: (this: PluginContext, id: string, event: {
    event: ChangeEvent;
  }) => void;
  /**
  * Notifies a plugin when the watcher process will close so that all open resources can be closed too.
  *
  * This hook cannot be used by output plugins.
  *
  * @group Build Hooks
  */
  [DEFINED_HOOK_NAMES.closeWatcher]: (this: PluginContext) => void;
}
type ChangeEvent = "create" | "update" | "delete";
type PluginOrder = "pre" | "post" | null;
/** @inline */
type ObjectHookMeta = {
  order?: PluginOrder;
};
/**
* A hook in a function or an object form with additional properties.
*
* @typeParam T - The type of the hook function.
* @typeParam O - Additional properties that are specific to some hooks.
*
*
*
* @category Plugin APIs
*/
type ObjectHook<T, O = {}> = T | ({
  handler: T;
} & ObjectHookMeta & O);
type SyncPluginHooks = DefinedHookNames["augmentChunkHash" | "onLog" | "outputOptions"];
/** @category Plugin APIs */
type AsyncPluginHooks = Exclude<keyof FunctionPluginHooks, SyncPluginHooks>;
type FirstPluginHooks = DefinedHookNames["load" | "resolveDynamicImport" | "resolveId"];
type SequentialPluginHooks = DefinedHookNames["augmentChunkHash" | "generateBundle" | "onLog" | "options" | "outputOptions" | "renderChunk" | "transform"];
interface AddonHooks {
  /**
  * A hook equivalent to {@linkcode OutputOptions.banner | output.banner} option.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.banner]: AddonHook;
  /**
  * A hook equivalent to {@linkcode OutputOptions.footer | output.footer} option.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.footer]: AddonHook;
  /**
  * A hook equivalent to {@linkcode OutputOptions.intro | output.intro} option.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.intro]: AddonHook;
  /**
  * A hook equivalent to {@linkcode OutputOptions.outro | output.outro} option.
  *
  * @group Output Generation Hooks
  */
  [DEFINED_HOOK_NAMES.outro]: AddonHook;
}
type OutputPluginHooks = DefinedHookNames["augmentChunkHash" | "generateBundle" | "outputOptions" | "renderChunk" | "renderError" | "renderStart" | "writeBundle"];
/** @internal */
type ParallelPluginHooks = Exclude<keyof FunctionPluginHooks | keyof AddonHooks, FirstPluginHooks | SequentialPluginHooks>;
/** @category Plugin APIs */
type HookFilterExtension<K extends keyof FunctionPluginHooks> = K extends "transform" ? {
  filter?: HookFilter | TopLevelFilterExpression[];
} : K extends "load" ? {
  filter?: Pick<HookFilter, "id"> | TopLevelFilterExpression[];
} : K extends "resolveId" ? {
  filter?: {
    id?: GeneralHookFilter<RegExp>;
  } | TopLevelFilterExpression[];
} : K extends "renderChunk" ? {
  filter?: Pick<HookFilter, "code"> | TopLevelFilterExpression[];
} : {};
type PluginHooks = { [K in keyof FunctionPluginHooks]: ObjectHook<K extends AsyncPluginHooks ? MakeAsync<FunctionPluginHooks[K]> : FunctionPluginHooks[K], HookFilterExtension<K> & (K extends ParallelPluginHooks ? {
  /**
  * @deprecated
  * this is only for rollup Plugin type compatibility.
  * hooks always work as `sequential: true`.
  */
  sequential?: boolean;
} : {})> };
type AddonHookFunction = (this: PluginContext, chunk: RenderedChunk) => string | Promise<string>;
type AddonHook = string | AddonHookFunction;
interface OutputPlugin extends Partial<{ [K in keyof PluginHooks as K & OutputPluginHooks]: PluginHooks[K] }>, Partial<{ [K in keyof AddonHooks]: ObjectHook<AddonHook> }> {
  /** The name of the plugin, for use in error messages and logs. */
  name: string;
  /** The version of the plugin, for use in inter-plugin communication scenarios. */
  version?: string;
}
/**
* The Plugin interface.
*
* See [Plugin API document](https://rolldown.rs/apis/plugin-api) for details.
*
* @typeParam A - The type of the {@link Plugin.api | api} property.
*
* @category Plugin APIs
*/
interface Plugin<A = any> extends OutputPlugin, Partial<PluginHooks> {
  /**
  * Used for inter-plugin communication.
  */
  api?: A;
}
type RolldownPlugin<A = any> = Plugin<A> | BuiltinPlugin | ParallelPlugin;
type RolldownPluginOption<A = any> = MaybePromise<NullValue<RolldownPlugin<A>> | {
  name: string;
} | false | RolldownPluginOption[]>;
type RolldownOutputPlugin = OutputPlugin | BuiltinPlugin;
type RolldownOutputPluginOption = MaybePromise<NullValue<RolldownOutputPlugin> | {
  name: string;
} | false | RolldownOutputPluginOption[]>; //#endregion
//#region src/options/input-options.d.ts
/**
* @inline
*/
type InputOption = string | string[] | Record<string, string>;
/**
* @param id The id of the module being checked.
* @param parentId The id of the module importing the id being checked.
* @param isResolved Whether the id has been resolved.
* @returns Whether the module should be treated as external.
*/
type ExternalOptionFunction = (id: string, parentId: string | undefined, isResolved: boolean) => NullValue<boolean>;
/** @inline */
type ExternalOption = StringOrRegExp | StringOrRegExp[] | ExternalOptionFunction;
interface ChunkOptimizationOptions {
  /**
  * Merge common chunks into existing entry chunks when it is safe.
  *
  * This can reduce the number of emitted chunks by moving shared/common modules
  * into an entry chunk that already depends on them. Rolldown only applies the
  * merge when it does not create a circular chunk dependency or change strict
  * entry export signatures. This pass also covers safe empty-facade cleanup.
  *
  * @default true
  */
  mergeCommonChunks?: boolean;
  /**
  * Avoid emitting redundant chunk loads for dynamic entries.
  *
  * This pass can reduce dynamic-entry dependent chunks when the shared modules
  * are guaranteed to be loaded by every importer of that dynamic entry.
  *
  * @default true
  */
  avoidRedundantChunkLoads?: boolean;
}
type ModuleTypes = Record<string, "js" | "jsx" | "ts" | "tsx" | "json" | "text" | "base64" | "dataurl" | "binary" | "empty" | "css" | "asset" | "copy">;
interface WatcherFileWatcherOptions {
  /**
  * Whether to use polling-based file watching instead of native OS events.
  *
  * Polling is useful for environments where native FS events are unreliable,
  * such as network mounts, Docker volumes, or WSL2.
  *
  * @default false
  */
  usePolling?: boolean;
  /**
  * Interval between each poll in milliseconds.
  *
  * This option is only used when {@linkcode usePolling} is `true`.
  *
  * @default 100
  */
  pollInterval?: number;
  /**
  * Whether to compare file contents for poll-based watchers.
  * When enabled, poll watchers will check file contents to determine if they actually changed.
  *
  * This option is only used when {@linkcode usePolling} is `true`.
  *
  * @default false
  */
  compareContentsForPolling?: boolean;
  /**
  * Whether to use debounced event delivery at the filesystem level.
  * This coalesces rapid filesystem events before they reach the build coordinator.
  * @default false
  */
  useDebounce?: boolean;
  /**
  * Debounce delay in milliseconds for fs-level debounced watchers.
  * Only used when {@linkcode useDebounce} is `true`.
  * @default 10
  */
  debounceDelay?: number;
  /**
  * Tick rate in milliseconds for the debouncer's internal polling.
  * Only used when {@linkcode useDebounce} is `true`.
  * When undefined, auto-selects 1/4 of debounceDelay.
  */
  debounceTickRate?: number;
}
interface WatcherOptions {
  /**
  * Whether to skip the {@linkcode RolldownBuild.write | bundle.write()} step when a rebuild is triggered.
  * @default false
  */
  skipWrite?: boolean;
  /**
  * Configures how long Rolldown will wait for further changes until it triggers
  * a rebuild in milliseconds.
  *
  * Even if this value is set to 0, there's a small debounce timeout configured
  * in the file system watcher. Setting this to a value greater than 0 will mean
  * that Rolldown will only trigger a rebuild if there was no change for the
  * configured number of milliseconds. If several configurations are watched,
  * Rolldown will use the largest configured build delay.
  *
  * This option is useful if you use a tool that regenerates multiple source files
  * very slowly. Rebuilding immediately after the first change could cause Rolldown
  * to generate a broken intermediate build before generating a successful final
  * build, which can be confusing and distracting.
  *
  * @default 0
  */
  buildDelay?: number;
  /**
  * File watcher options for configuring how file changes are detected.
  */
  watcher?: WatcherFileWatcherOptions;
  /**
  * @deprecated Use {@linkcode watcher} instead.
  */
  notify?: WatcherFileWatcherOptions;
  /**
  * Filter to limit the file-watching to certain files.
  *
  * Strings are treated as glob patterns.
  * Note that this only filters the module graph but does not allow adding
  * additional watch files.
  *
  * @example
  * ```js
  * export default defineConfig({
  *   watch: {
  *     include: 'src/**',
  *   },
  * })
  * ```
  * @default []
  */
  include?: StringOrRegExp | StringOrRegExp[];
  /**
  * Filter to prevent files from being watched.
  *
  * Strings are treated as glob patterns.
  *
  * @example
  * ```js
  * export default defineConfig({
  *   watch: {
  *     exclude: 'node_modules/**',
  *   },
  * })
  * ```
  * @default []
  */
  exclude?: StringOrRegExp | StringOrRegExp[];
  /**
  * An optional function that will be called immediately every time
  * a module changes that is part of the build.
  *
  * This is different from the {@linkcode Plugin.watchChange | watchChange} plugin hook, which is
  * only called once the running build has finished. This may for
  * instance be used to prevent additional steps from being performed
  * if we know another build will be started anyway once the current
  * build finished. This callback may be called multiple times per
  * build as it tracks every change.
  *
  * @param id The id of the changed module.
  */
  onInvalidate?: (id: string) => void;
  /**
  * Whether to clear the screen when a rebuild is triggered.
  * @default true
  */
  clearScreen?: boolean;
}
/** @inline */
type MakeAbsoluteExternalsRelative = boolean | "ifRelativeSource";
type DevModeOptions = boolean | {
  host?: string;
  port?: number;
  implement?: string;
  lazy?: boolean;
};
type OptimizationOptions = {
  /**
  * Inline imported constant values during bundling instead of preserving variable references.
  *
  * When enabled, constant values from imported modules will be inlined at their usage sites,
  * potentially reducing bundle size and improving runtime performance by eliminating variable lookups.
  *
  * **Options:**
  * - `true`: equivalent to `{ mode: 'all', pass: 1 }`, enabling constant inlining for all eligible constants with a single pass.
  * - `false`: Disable constant inlining
  * - `{ mode: 'smart' | 'all', pass?: number }`:
  *   - `mode: 'smart'`: Only inline constants in specific scenarios where it is likely to reduce bundle size and improve performance.
  *     Smart mode inlines constants in these specific scenarios:
  *     1. `if (test) {} else {}` - condition expressions in if statements
  *     2. `test ? a : b` - condition expressions in ternary operators
  *     3. `test1 || test2` - logical OR expressions
  *     4. `test1 && test2` - logical AND expressions
  *     5. `test1 ?? test2` - nullish coalescing expressions
  *  - `mode: 'all'`: Inline all imported constants wherever they are used.
  *  - `pass`: Number of passes to perform for inlining constants.
  *
  * @example
  * ```js
  * // Input files:
  * // constants.js
  * export const API_URL = 'https://api.example.com';
  *
  * // main.js
  * import { API_URL } from './constants.js';
  * console.log(API_URL);
  *
  * // With inlineConst: true, the bundled output becomes:
  * console.log('https://api.example.com');
  *
  * // Instead of:
  * const API_URL = 'https://api.example.com';
  * console.log(API_URL);
  * ```
  *
  * @default { mode: 'smart', pass: 1 }
  */
  inlineConst?: boolean | {
    mode?: "all" | "smart";
    pass?: number;
  };
  /**
  * Use PIFE pattern for module wrappers.
  *
  * Enabling this option improves the start up performance of the generated bundle with the cost of a slight increase in bundle size.
  *
  *
  *
  * @default true
  */
  pifeForModuleWrappers?: boolean;
};
/** @inline */
type AttachDebugOptions = "none" | "simple" | "full";
/** @inline */
type ChunkModulesOrder = "exec-order" | "module-id";
/** @inline */
type OnLogFunction = (level: LogLevel, log: RolldownLog, defaultHandler: LogOrStringHandler) => void;
/** @inline */
type OnwarnFunction = (warning: RolldownLog, defaultHandler: (warning: RolldownLogWithString | (() => RolldownLogWithString)) => void) => void;
interface InputOptions {
  /**
  * Defines entries and location(s) of entry modules for the bundle. Relative paths are resolved based on the {@linkcode cwd} option.
  *
  */
  input?: InputOption;
  /**
  * The list of plugins to use.
  *
  * Falsy plugins will be ignored, which can be used to easily activate or deactivate plugins. Nested plugins will be flattened. Async plugins will be awaited and resolved.
  *
  * See [Plugin API document](https://rolldown.rs/apis/plugin-api) for more details about creating plugins.
  *
  * @example
  * ```js
  * import { defineConfig } from 'rolldown'
  *
  * export default defineConfig({
  *   plugins: [
  *     examplePlugin1(),
  *     // Conditional plugins
  *     process.env.ENV1 && examplePlugin2(),
  *     // Nested plugins arrays are flattened
  *     [examplePlugin3(), examplePlugin4()],
  *   ]
  * })
  * ```
  */
  plugins?: RolldownPluginOption;
  /**
  * Specifies which modules should be treated as external and not bundled. External modules will be left as import statements in the output.
  *
  */
  external?: ExternalOption;
  /**
  * Options for built-in module resolution feature.
  */
  resolve?: {
    /**
    * Substitute one package for another.
    *
    * One use case for this feature is replacing a node-only package with a browser-friendly package in third-party code that you don't control.
    *
    * @example
    * ```js
    * resolve: {
    *   alias: {
    *     '@': '/src',
    *     'utils': './src/utils',
    *   }
    * }
    * ```
    * > [!WARNING]
    * > `resolve.alias` will not call [`resolveId`](/reference/Interface.Plugin#resolveid) hooks of other plugin.
    * > If you want to call `resolveId` hooks of other plugin, use `viteAliasPlugin` from `rolldown/experimental` instead.
    * > You could find more discussion in [this issue](https://github.com/rolldown/rolldown/issues/3615)
    */
    alias?: Record<string, string[] | string | false>;
    /**
    * Fields in package.json to check for aliased paths.
    *
    * This option is expected to be used for `browser` field support.
    *
    * @default
    * - `[['browser']]` for `browser` platform
    * - `[]` for other platforms
    */
    aliasFields?: string[][];
    /**
    * Condition names to use when resolving exports in package.json.
    *
    * @default
    * Defaults based on platform and import kind:
    * - `browser` platform
    *   - `["import", "browser", "default"]` for import statements
    *   - `["require", "browser", "default"]` for require() calls
    * - `node` platform
    *   - `["import", "node", "default"]` for import statements
    *   - `["require", "node", "default"]` for require() calls
    * - `neutral` platform
    *   - `["import", "default"]` for import statements
    *   - `["require", "default"]` for require() calls
    */
    conditionNames?: string[];
    /**
    * Map of extensions to alternative extensions.
    *
    * With writing `import './foo.js'` in a file, you want to resolve it to `foo.ts` instead of `foo.js`.
    * You can achieve this by setting: `extensionAlias: { '.js': ['.ts', '.js'] }`.
    */
    extensionAlias?: Record<string, string[]>;
    /**
    * Fields in package.json to check for exports.
    *
    * @default `[['exports']]`
    */
    exportsFields?: string[][];
    /**
    * Extensions to try when resolving files. These are tried in order from first to last.
    *
    * @default `['.tsx', '.ts', '.jsx', '.js', '.json']`
    */
    extensions?: string[];
    /**
    * Fields in package.json to check for entry points.
    *
    * @default
    * Defaults based on platform:
    * - `node` platform: `['main', 'module']`
    * - `browser` platform: `['browser', 'module', 'main']`
    * - `neutral` platform: `[]`
    */
    mainFields?: string[];
    /**
    * Filenames to try when resolving directories.
    * @default ['index']
    */
    mainFiles?: string[];
    /**
    * Directories to search for modules.
    * @default ['node_modules']
    */
    modules?: string[];
    /**
    * Whether to follow symlinks when resolving modules.
    * @default true
    */
    symlinks?: boolean;
    /**
    * @deprecated Use the top-level {@linkcode tsconfig} option instead.
    */
    tsconfigFilename?: string;
  };
  /**
  * The working directory to use when resolving relative paths in the configuration.
  * @default process.cwd()
  */
  cwd?: string;
  /**
  * Expected platform where the code run.
  *
  *  When the platform is set to neutral:
  *    - When bundling is enabled the default output format is set to esm, which uses the export syntax introduced with ECMAScript 2015 (i.e. ES6). You can change the output format if this default is not appropriate.
  *    - The main fields setting is empty by default. If you want to use npm-style packages, you will likely have to configure this to be something else such as main for the standard main field used by node.
  *    - The conditions setting does not automatically include any platform-specific values.
  *
  * @default
  * - `'node'` if the format is `'cjs'`
  * - `'browser'` for other formats
  *
  */
  platform?: "node" | "browser" | "neutral";
  /**
  * When `true`, creates shim variables for missing exports instead of throwing an error.
  * @default false
  *
  */
  shimMissingExports?: boolean;
  /**
  * Controls tree-shaking (dead code elimination).
  *
  * See the [In-depth Dead Code Elimination Guide](https://rolldown.rs/in-depth/dead-code-elimination) for more details.
  *
  * When `false`, tree-shaking will be disabled.
  * When `true`, it is equivalent to setting each options to the default value.
  *
  * @default true
  */
  treeshake?: boolean | TreeshakingOptions;
  /**
  * Controls the verbosity of console logging during the build.
  *
  *
  *
  * @default 'info'
  */
  logLevel?: LogLevelOption;
  /**
  * A function that intercepts log messages. If not supplied, logs are printed to the console.
  *
  *
  *
  * @example
  * ```js
  * export default defineConfig({
  *   onLog(level, log, defaultHandler) {
  *     if (log.code === 'CIRCULAR_DEPENDENCY') {
  *       return; // Ignore circular dependency warnings
  *     }
  *     if (level === 'warn') {
  *       defaultHandler('error', log); // turn other warnings into errors
  *     } else {
  *       defaultHandler(level, log); // otherwise, just print the log
  *     }
  *   }
  * })
  * ```
  */
  onLog?: OnLogFunction;
  /**
  * A function that will intercept warning messages.
  *
  *
  *
  * @deprecated
  * This is a legacy API. Consider using {@linkcode onLog} instead for better control over all log types.
  *
  *
  */
  onwarn?: OnwarnFunction;
  /**
  * Maps file patterns to module types, controlling how files are processed.
  *
  * This is conceptually similar to [esbuild's `loader`](https://esbuild.github.io/api/#loader) option, allowing you to specify how each file extensions should be handled.
  *
  * See [the In-Depth Guide](https://rolldown.rs/in-depth/module-types) for more details.
  *
  * @example
  * ```js
  * import { defineConfig } from 'rolldown'
  *
  * export default defineConfig({
  *   moduleTypes: {
  *     '.frag': 'text',
  *   }
  * })
  * ```
  */
  moduleTypes?: ModuleTypes;
  /**
  * Experimental features that may change in future releases and can introduce behavior change without a major version bump.
  * @experimental
  */
  experimental?: {
    /**
    * Enable Vite compatible mode.
    * @default false
    * @hidden This option is only meant to be used by Vite. It is not recommended to use this option directly.
    */
    viteMode?: boolean;
    /**
    * When enabled, `new URL()` calls will be transformed to a stable asset URL which includes the updated name and content hash.
    * It is necessary to pass `import.meta.url` as the second argument to the
    * `new URL` constructor, otherwise no transform will be applied.
    * :::warning
    * JavaScript and TypeScript files referenced via `new URL('./file.js', import.meta.url)` or `new URL('./file.ts', import.meta.url)` will **not** be transformed or bundled. The file will be copied as-is, meaning TypeScript files remain untransformed and dependencies are not resolved.
    *
    * The expected behavior for JS/TS files is still being discussed and may
    * change in future releases. See [#7258](https://github.com/rolldown/rolldown/issues/7258) for more context.
    * :::
    * @example
    * ```js
    * // main.js
    * const url = new URL('./styles.css', import.meta.url);
    * console.log(url);
    *
    * // Example output after bundling WITHOUT the option (default)
    * const url = new URL('./styles.css', import.meta.url);
    * console.log(url);
    *
    * // Example output after bundling WITH `experimental.resolveNewUrlToAsset` set to `true`
    * const url = new URL('assets/styles-CjdrdY7X.css', import.meta.url);
    * console.log(url);
    * ```
    * @default false
    */
    resolveNewUrlToAsset?: boolean;
    /**
    * Dev mode related options.
    * @hidden not ready for public usage yet
    */
    devMode?: DevModeOptions;
    /**
    * Control which order should be used when rendering modules in a chunk.
    *
    * Available options:
    * - `exec-order`: Almost equivalent to the topological order of the module graph, but specially handling when module graph has cycle.
    * - `module-id`: This is more friendly for gzip compression, especially for some javascript static asset lib (e.g. icon library)
    *
    * > [!NOTE]
    * > Try to sort the modules by their module id if possible (Since rolldown scope hoist all modules in the chunk, we only try to sort those modules by module id if we could ensure runtime behavior is correct after sorting).
    *
    * @default 'exec-order'
    */
    chunkModulesOrder?: ChunkModulesOrder;
    /**
    * Attach debug information to the output bundle.
    *
    * Available modes:
    * - `none`: No debug information is attached.
    * - `simple`: Attach comments indicating which files the bundled code comes from. These comments could be removed by the minifier.
    * - `full`: Attach detailed debug information to the output bundle. These comments are using legal comment syntax, so they won't be removed by the minifier.
    *
    * @default 'simple'
    *
    *
    */
    attachDebugInfo?: AttachDebugOptions;
    /**
    * Enables automatic generation of a chunk import map asset during build.
    *
    * This map only includes chunks with hashed filenames, where keys are derived from the facade module
    * name or primary chunk name. It produces stable and unique hash-based filenames, effectively preventing
    * cascading cache invalidation caused by content hashes and maximizing browser cache reuse.
    *
    * The output defaults to `importmap.json` unless overridden via `fileName`. A base URL prefix
    * (default `"/"`) can be applied to all paths. The resulting JSON is a valid import map and can be
    * directly injected into HTML via `<script type="importmap">`.
    *
    * @example
    * ```js
    * {
    *   experimental: {
    *     chunkImportMap: {
    *       baseUrl: '/',
    *       fileName: 'importmap.json'
    *     }
    *   },
    *   plugins: [
    *     {
    *       name: 'inject-import-map',
    *       generateBundle(_, bundle) {
    *         const chunkImportMap = bundle['importmap.json'];
    *         if (chunkImportMap?.type === 'asset') {
    *           const htmlPath = path.resolve('index.html');
    *           let html = fs.readFileSync(htmlPath, 'utf-8');
    *
    *           html = html.replace(
    *             /<script\s+type="importmap"[^>]*>[\s\S]*?<\/script>/i,
    *             `<script type="importmap">${chunkImportMap.source}<\/script>`
    *           );
    *
    *           fs.writeFileSync(htmlPath, html);
    *           delete bundle['importmap.json'];
    *         }
    *       }
    *     }
    *   ]
    * }
    * ```
    *
    * > [!TIP]
    * > If you want to learn more, you can check out the example here: [examples/chunk-import-map](https://github.com/rolldown/rolldown/tree/main/examples/chunk-import-map)
    *
    * @default false
    */
    chunkImportMap?: boolean | {
      baseUrl?: string;
      fileName?: string;
    };
    /**
    * Enable on-demand wrapping of modules.
    * @default false
    * @hidden not ready for public usage yet
    */
    onDemandWrapping?: boolean;
    /**
    * Enable incremental build support. Required to be used with `watch` mode.
    * @default false
    */
    incrementalBuild?: boolean;
    /**
    * Use native Rust implementation of MagicString for source map generation.
    *
    * [MagicString](https://github.com/rich-harris/magic-string) is a JavaScript library commonly used by bundlers
    * for string manipulation and source map generation. When enabled, rolldown will use a native Rust
    * implementation of MagicString instead of the JavaScript version, providing significantly better performance
    * during source map generation and code transformation.
    *
    * **Benefits**
    *
    * - **Improved Performance**: The native Rust implementation is typically faster than the JavaScript version,
    *   especially for large codebases with extensive source maps.
    * - **Background Processing**: Source map generation is performed asynchronously in a background thread,
    *   allowing the main bundling process to continue without blocking. This parallel processing can significantly
    *   reduce overall build times when working with JavaScript transform hooks.
    * - **Better Integration**: Seamless integration with rolldown's native Rust architecture.
    *
    * @example
    * ```js
    * export default {
    *   experimental: {
    *     nativeMagicString: true
    *   },
    *   output: {
    *     sourcemap: true
    *   }
    * }
    * ```
    *
    * > [!NOTE]
    * > This is an experimental feature. While it aims to provide identical behavior to the JavaScript
    * > implementation, there may be edge cases. Please report any discrepancies you encounter.
    * > For a complete working example, see [examples/native-magic-string](https://github.com/rolldown/rolldown/tree/main/examples/native-magic-string)
    * @default false
    */
    nativeMagicString?: boolean;
    /**
    * Control chunk optimizations.
    *
    * `true` enables both common-chunk merging and redundant dynamic chunk-load avoidance.
    * `false` disables all chunk optimizations. Use the object form to control
    * `mergeCommonChunks` and `avoidRedundantChunkLoads` separately.
    *
    * These optimizations are automatically disabled when any module uses top-level await (TLA) or contains TLA dependencies,
    * as they could affect execution order guarantees.
    *
    * @default true
    */
    chunkOptimization?: boolean | ChunkOptimizationOptions;
    /**
    * Control whether to enable lazy barrel optimization.
    *
    * Lazy barrel optimization avoids compiling unused re-export modules in side-effect-free barrel modules,
    * significantly improving build performance for large codebases with many barrel modules.
    *
    * This option is planned to be removed in the future. If you need to opt out, please open an issue
    * describing your use case so we can address it before the option is gone.
    *
    * @see {@link https://rolldown.rs/in-depth/lazy-barrel-optimization | Lazy Barrel Documentation}
    * @default true
    */
    lazyBarrel?: boolean;
  };
  /**
  * Configure how the code is transformed. This process happens after the `transform` hook.
  *
  * @example
  * **Enable legacy decorators**
  * ```js
  * export default defineConfig({
  *   transform: {
  *     decorator: {
  *       legacy: true,
  *     },
  *   },
  * })
  * ```
  * Note that if you have correct `tsconfig.json` file, Rolldown will automatically detect and enable legacy decorators support.
  *
  *
  */
  transform?: TransformOptions;
  /**
  * Watch mode related options.
  *
  * These options only take effect when running with the [`--watch`](/apis/cli#w-watch) flag, or using {@linkcode watch | watch()} API.
  *
  *
  *
  * @experimental
  */
  watch?: WatcherOptions | false;
  /**
  * Controls which warnings are emitted during the build process. Each option can be set to `true` (emit warning) or `false` (suppress warning).
  */
  checks?: ChecksOptions;
  /**
  * Determines if absolute external paths should be converted to relative paths in the output.
  *
  * This does not only apply to paths that are absolute in the source but also to paths that are resolved to an absolute path by either a plugin or Rolldown core.
  *
  *
  */
  makeAbsoluteExternalsRelative?: MakeAbsoluteExternalsRelative;
  /**
  * Devtools integration options.
  *
  * When enabled, Rolldown writes JSON-lines devtools output under
  * `node_modules/.rolldown/{session_id}/`. Consumers can parse the output with
  * `@rolldown/debug` after `await bundle.close()` resolves.
  *
  * @experimental
  */
  devtools?: {
    sessionId?: string;
  };
  /**
  * Controls how entry chunk exports are preserved.
  *
  * This determines whether Rolldown needs to create facade chunks (additional wrapper chunks) to maintain the exact export signatures of entry modules, or whether it can combine entry modules with other chunks for optimization.
  *
  * @default `'exports-only'`
  *
  */
  preserveEntrySignatures?: false | "strict" | "allow-extension" | "exports-only";
  /**
  * Configure optimization features for the bundler.
  */
  optimization?: OptimizationOptions;
  /**
  * The value of `this` at the top level of each module. **Normally, you don't need to set this option.**
  * @default undefined
  * @example
  * **Set custom context**
  * ```js
  * export default {
  *   context: 'globalThis',
  *   output: {
  *     format: 'iife',
  *   },
  * };
  * ```
  *
  */
  context?: string;
  /**
  * Configures TypeScript configuration file resolution and usage.
  *
  * @default true
  */
  tsconfig?: boolean | string;
} //#endregion
//#region src/types/rolldown-options.d.ts
//#endregion
//#region src/index.d.ts
/**
 * [Vite.js](https://vitejs.dev/) & [Rollup](https://rollupjs.org/) plugin for generating critical CSS
 * that uses the [critical](https://github.com/addyosmani/critical) generator under the hood.
 *
 * @param {CriticalPluginConfig} pluginConfig - the plugin configuration object
 * @param {Function} callback - callback upon completion of the critical CSS generation
 * @constructor
 */
declare function PluginCritical(pluginConfig: CriticalPluginConfig, callback?: CriticalPluginCallback): Plugin;
//#endregion
export { PluginCritical as default };
//# sourceMappingURL=index.d.ts.map