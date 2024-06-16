import { Form, Upload } from 'antd'
import React from 'react'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

function FileUploadForm({fileList,handleFileChange,fileFormateDownloader}) {

  
    return (
        <div className='flex items-center justify-between'>

            <Form.Item>
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={(e) => e.fileList} noStyle>
                    <Upload.Dragger  beforeUpload={() => false} fileList={fileList} onChange={handleFileChange} accept='.xls,.xlsx' name="files" >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>

            <p onClick={fileFormateDownloader} className='text-base font-bold text-[#1677ff] cursor-pointer'>Download File to Upload</p>

        </div>
    )
}

export default FileUploadForm
