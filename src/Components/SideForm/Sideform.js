import React from 'react';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate,
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
 
        >
          <span className="ant-form-text"><h1>Title</h1></span>
        </FormItem>

           <FormItem
          {...formItemLayout}
 
        >
          <span className="ant-form-text"><h2><strong>$price</strong></h2></span>
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="Select"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: 'Please select a color!' },
            ],
          })(
            <Select placeholder="Please select a color">
              <Option value="Gold">Gold</Option>
              <Option value="Pink">Pink</Option>
            </Select>
          )}
        </FormItem>

       

        <FormItem
          {...formItemLayout}
          label="Square footage"
        >
          {getFieldDecorator('input-number', { initialValue: 0 })(
            <InputNumber min={1} max={100} />
          )}
          <span className="ant-form-text"> Sq ft.</span>
        </FormItem>

      


        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedDemo = Form.create()(Demo);

export default WrappedDemo;