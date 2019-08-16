Blockly.Blocks['rule_group'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["AND all of these rules","and"], ["OR all of these rules","or"]]), "operator")
        .appendField(new Blockly.FieldDropdown([["Succeed","1"], ["Fail","0"]]), "NAME");
    this.appendStatementInput("NAME")
        .setCheck(["rule_group", "rule"]);
    this.setPreviousStatement(true, ["rule_group", "rule"]);
    this.setNextStatement(true, ["rule_group", "rule"]);
    this.setColour(120);
 this.setTooltip("Rule Group");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['is_contained_in'] = {
  init: function() {
    this.appendValueInput("property")
        .setCheck(null)
        .appendField("Property")
        .appendField(new Blockly.FieldTextInput("BranchId"), "property");
    this.appendDummyInput()
        .appendField("is contained in:");
    this.appendValueInput("array")
        .setCheck("Array")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};