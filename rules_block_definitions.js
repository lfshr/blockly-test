goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Blocks['rule_group'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["AND all of these rules","and"], ["OR all of these rules","or"]]), "operator")
        .appendField(new Blockly.FieldDropdown([["Succeed","1"], ["Fail","0"]]), "NAME");
    this.appendStatementInput("NAME")
        .setCheck(["rule_group", "rule"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Rule Group");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rule'] = {
  init: function() {
    this.appendValueInput("property")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("Vehicle.Mileage"), "NAME");
    this.appendValueInput("expression")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['basic_expression'] = {
  init: function() {
    this.appendValueInput("property")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("branchid"), "property");
    this.appendValueInput("expression_type")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["Equals","Equal"], ["Not Equals","NotEqual"], ["Greater Than","GreaterThan"], ["Greater Than or Equal","GreaterThanOrEqual"], ["Less Than","LessThan"], ["Less Than or Equal","LessThanOrEqual"], ["Is Contained In","IsContainedIn"]]), "expression_type");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput(""), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['rule_group'] = function(block) {
  var dropdown_operator = block.getFieldValue('operator');
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['is_contained_in'] = function(block) {
  var text_property = block.getFieldValue('property');
  var value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rule'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_ATOMIC);
  var value_expression = Blockly.JavaScript.valueToCode(block, 'expression', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['basic_expression'] = function(block) {
  var text_property = block.getFieldValue('property');
  var value_property = Blockly.JavaScript.valueToCode(block, 'property', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_expression_type = block.getFieldValue('expression_type');
  var value_expression_type = Blockly.JavaScript.valueToCode(block, 'expression_type', Blockly.JavaScript.ORDER_ATOMIC);
  var text_value = block.getFieldValue('value');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};