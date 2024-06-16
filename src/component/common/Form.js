import React from 'react';
import { Button, Form, Input } from 'antd';


const FormComponent = ({ formFields, formik }) => {

    return (
        <Form name="form_item_path" layout='vertical' onReset={formik.handleReset} onFinish={formik.handleSubmit}>
            <>
                {formFields.map((field) => (
                    (field.type == "text" || "number") && 
                    <Form.Item key={field.name} name={field.name} label={field.label}>
                        <>
                            <Input id={field.name} name={field.name} type={field.type} value={formik.values[field.name]} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched[field.name] && formik.errors[field.name] ? (
                                <div className=' text-sm text-red-600'>{formik.errors[field.name]}</div>
                            ) : null}
                        </>
                    </Form.Item>
                ))}
            </>
            <div className='space-x-2'>
                <Button type="dashed" htmlType="reset">
                    Clear
                </Button>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
};
export default FormComponent;