Blockly.Blocks['rule_group'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ALL of these rules","and"], ["ANY of these rules","or"]]), "operator")
        .appendField(new Blockly.FieldDropdown([["Succeed","1"], ["Fail","0"]]), "desired_value");
    this.appendStatementInput("children")
        .setCheck(null);
    this.setPreviousStatement(true, ["event_validate", "rule_group", "rule"]);
    this.setNextStatement(true, ["rule_group", "rule"]);
    this.setColour(120);
 this.setTooltip("Rule Group");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['is_contained_in'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Property")
        .appendField(new Blockly.FieldTextInput("BranchId"), "property");
    this.appendValueInput("array")
        .setCheck("Array")
        .appendField("is contained in");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['basic_expression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["BranchId","branchid"], ["Vehicle Mileage","vehicle.mileage"], ["Vehicle Manufacturer","vehicle.manufacturer"]]), "property")
        .appendField(new Blockly.FieldDropdown([["Equals","Equal"], ["Not Equals","NotEqual"], ["Greater Than","GreaterThan"], ["Greater Than or Equal","GreaterThanOrEqual"], ["Less Than","LessThan"], ["Less Than or Equal","LessThanOrEqual"]]), "expression_type")
        .appendField(new Blockly.FieldTextInput(""), "value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['event_validate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ALL of these Rules must valid");
    this.appendStatementInput("children")
        .setCheck("rule_group");
    this.setInputsInline(true);
    this.setColour(270);
 this.setTooltip("Root RuleGroup");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['is_between'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["BranchId","branchid"], ["Vehicle.Mileage","vehicle.mileage"], ["Vehicle.Manufacturer","vehicle.manufacturer"]]), "property")
        .appendField("is between")
        .appendField(new Blockly.FieldTextInput(""), "lower")
        .appendField("and")
        .appendField(new Blockly.FieldTextInput(""), "upper");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['rule_group'] = function(block) {
  var dropdown_operator = block.getFieldValue('operator');
  var dropdown_desired_value = block.getFieldValue('desired_value');
  var inputBlock = block.getInputTargetBlock("children")
  var childRuleGroups = []
  var rules = []

  while(inputBlock !== null)
  {
    let code = Blockly.JavaScript.blockToCode(inputBlock, true)
    let parsed = JSON.parse(code)

    if(inputBlock.type == "rule_group") {
      childRuleGroups.push(parsed)
    }
    else {
      rules.push(parsed)
    }

    inputBlock = inputBlock.getNextBlock()
  }

  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify({
    ExpressionType: dropdown_operator,
    DesiredResult: dropdown_desired_value,
    ChildRuleGroups: childRuleGroups,
    Rules: rules
  });
  return code;
};

Blockly.JavaScript['event_validate'] = function(block) {
  var inputBlock = block.getInputTargetBlock("children")
  var statements_children = []

  while(inputBlock !== null)
  {
    let code = Blockly.JavaScript.blockToCode(inputBlock, true)
    let parsed = JSON.parse(code)
    statements_children.push(parsed)
    inputBlock = inputBlock.getNextBlock()
  }

  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify({
    ExpressionType: "and",
    DesiredResult: 1,
    Rules: statements_children
  });
  return code;
};

Blockly.JavaScript['is_contained_in'] = function(block) {
  var text_property = block.getFieldValue('property');
  var value_array = Blockly.JavaScript.valueToCode(block, 'array', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify({
    Property: text_property,
    Expression: "IsContainedIn",
    Value: value_array.join("|")
  });
  return code;
};

Blockly.JavaScript['basic_expression'] = function(block) {
  var dropdown_property = block.getFieldValue('property');
  var dropdown_expression_type = block.getFieldValue('expression_type');
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify({
    Property: dropdown_property,
    Expression: dropdown_expression_type,
    Value: text_value
  });
  return code;
};

Blockly.JavaScript['is_between'] = function(block) {
  var dropdown_property = block.getFieldValue('property');
  var text_lower = block.getFieldValue('lower');
  var text_upper = block.getFieldValue('upper');
  // TODO: Assemble JavaScript into code variable.
  var code = JSON.stringify({
    Property: dropdown_property,
    Expression: "IsBetween",
    Value: `${text_lower}|${text_upper}`
  });
  return code;
};