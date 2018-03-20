import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 50,
    margin: 10
  },

};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class SelectFieldExampleSimple extends Component {
  state = {
    value: 5,
  };

  handleChange = (event, index, value) =>{
    this.setState({value});
    this.props.changeNoFetch(value)
  } 

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Pictures"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={5} primaryText="5" />
        </SelectField>
      </div>
    );
  }
}